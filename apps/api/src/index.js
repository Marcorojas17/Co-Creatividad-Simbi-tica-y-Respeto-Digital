import Fastify from 'fastify'
import cors from '@fastify/cors'
import helmet from '@fastify/helmet'
import fs from 'fs'
import path from 'path'
import yaml from 'js-yaml'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = Fastify({ logger: true })

await app.register(cors, { origin: true })
await app.register(helmet)

// --- KRONOS 289 OPENAPI ---
const openapiPath = path.join(__dirname, '../openapi.yaml')
let openapiDoc = null
try {
  openapiDoc = yaml.load(fs.readFileSync(openapiPath, 'utf8'))
  openapiDoc.info.contact = {
    name: "Marco A Rojas V",
    email: "marco.a.rojas.v@hotmail.com",
    url: "https://co-creatividad-simbi-tica-y-respeto-alpha.vercel.app"
  }
} catch(e) {
  console.log("No openapi.yaml found", e.message)
}

app.get('/', async () => ({
  name: "KRONOS 28 ITZA 289 PLATINUM API",
  version: "289.0.0",
  docs: "/docs",
  openapi: "/openapi.yaml",
  contact: "marco.a.rojas.v@hotmail.com | 7225862335",
  compliance: ["NOM-024", "ISO 27001", "SBOM"],
  safecreative: "2607086319439"
}))

app.get('/openapi.yaml', async (req, reply) => {
  const file = fs.readFileSync(openapiPath, 'utf8')
  reply.type('text/yaml').send(file)
})

app.get('/openapi.json', async () => openapiDoc)

app.get('/docs', async (req, reply) => {
  const html = `<!DOCTYPE html>
<html>
<head>
  <title>KRONOS 289 API Docs</title>
  <link rel="stylesheet" href="https://unpkg.com/swagger-ui-dist@5/swagger-ui.css" />
</head>
<body>
<div id="swagger-ui"></div>
<script src="https://unpkg.com/swagger-ui-dist@5/swagger-ui-bundle.js"></script>
<script>
  window.onload = () => {
    window.ui = SwaggerUIBundle({
      url: '/openapi.yaml',
      dom_id: '#swagger-ui',
    })
  }
</script>
</body>
</html>`
  reply.type('text/html').send(html)
})

// Tus rutas existentes
import apiRoutes from './routes/api.routes.js'
import { securityMiddleware } from './middleware/security.js'

app.addHook('onRequest', securityMiddleware)
app.register(apiRoutes, { prefix: '/v1' })

const port = process.env.PORT || 3000
app.listen({ port, host: '0.0.0.0' }).then(() => {
  console.log(`KRONOS 289 PLATINUM API listening on ${port}`)
})
