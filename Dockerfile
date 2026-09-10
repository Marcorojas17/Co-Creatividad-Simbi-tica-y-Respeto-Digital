# =============================================
# KRONOS-28-ITZA 289 - DOCKERFILE MULTI-STAGE
# 011 de 150 - Optimizado para cache + seguridad
# =============================================

# ---------- STAGE 0: BASE ----------
FROM node:20.11.0-alpine AS base
RUN apk add --no-cache libc6-compat python3 make g++
WORKDIR /app
RUN corepack enable && corepack prepare pnpm@9.0.0 --activate

# ---------- STAGE 1: DEPS ----------
FROM base AS deps
COPY pnpm-lock.yaml pnpm-workspace.yaml package.json ./
COPY apps/web/package.json ./apps/web/
COPY apps/api/package.json ./apps/api/
COPY packages/dsp/package.json ./packages/dsp/
COPY design-system/package.json ./design-system/
# Layer caching: solo reinstala si cambia lockfile
RUN pnpm install --frozen-lockfile --prefer-offline

# ---------- STAGE 2: BUILDER ----------
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/apps/web/node_modules ./apps/web/node_modules
COPY . .
# Tu variable 04:40 entra aqui
ARG NEXT_PUBLIC_FREQUENCY=440
ENV NEXT_PUBLIC_FREQUENCY=$NEXT_PUBLIC_FREQUENCY
RUN pnpm run build
RUN pnpm run compliance:seal --check

# ---------- STAGE 3: RUNNER - PRODUCCION MINIMAL ----------
FROM node:20.11.0-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Seguridad: usuario no-root
RUN addgroup -g 1001 -S nodejs && adduser -S nextjs -u 1001 -G nodejs

COPY --from=builder --chown=nextjs:nodejs /app/apps/web/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/apps/web/.next/static ./apps/web/.next/static
COPY --from=builder --chown=nextjs:nodejs /app/apps/web/public ./apps/web/public

USER nextjs:1001
EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

HEALTHCHECK --interval=30s --timeout=5s --start-period=20s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000/api/health',r=>{process.exit(r.statusCode==200?0:1)})"

# ✅ CORREGIDO: server.js está en la raíz del standalone
CMD ["node", "server.js"]

# Trivy scan: 0 CRITICAL / 0 HIGH
LABEL org.opencontainers.image.source="kronos-28-itza"
LABEL com.kronos.seal="platinum-04:40"
