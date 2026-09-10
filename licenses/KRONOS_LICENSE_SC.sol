
---

## 🧪 SIMULACIÓN EN CODESPACE – COMANDOS FINALES

```bash
# 1. Clonar
git clone https://github.com/tu-usuario/Co-Creatividad-Simbiotica-y-Respeto-Digital.git
cd Co-Creatividad-Simbiotica-y-Respeto-Digital

# 2. Abrir en Codespace (botón verde en GitHub)

# 3. Instalar dependencias (automático postCreate)
npm install --workspaces

# 4. Migrar base de datos
npm run migrate --workspace=@kronos/api

# 5. Ejecutar API (en una terminal)
npm run dev --workspace=@kronos/api

# 6. Servir frontend (en otra terminal)
npm run dev --workspace=@kronos/web
