const Fastify = require('fastify')
const cors = require('@fastify/cors')
const helmet = require('@fastify/helmet')
const fs = require('fs')
const path = require('path')
const yaml = require('js-yaml')

async function build() {
  const app = Fastify({ logger: true })
  await app.register(cors, { origin: true })
  await app.register(helmet)

  const openapiPath = path.join(__dirname, '../openapi.yaml')
  let openapiDoc = {}
  try { 
    openapiDoc = yaml.load(fs.readFileSync(openapiPath, 'utf8')) 
  } catch(e){}

  app.get('/', async () => ({
    name: "KRONOS 28 ITZA 289 PLATINUM API",
    version: "289.0.0",
    docs: "/docs",
    openapi: "/openapi.yaml",
    status: "PLATINUM LIVE",
    contact: "marco.a.rojas.v@hotmail.com | 7225862335"
  }))

  app.get('/openapi.yaml', async (req, reply) => {
    try {
      const file = fs.readFileSync(openapiPath, 'utf8')
      return reply.type('text/yaml').send(file)
    } catch(e){ 
      return reply.code(404).send({error:"no yaml"}) 
    }
  })

  app.get('/openapi.json', async () => openapiDoc)

  app.get('/docs', async (req, reply) => {
    const html = '<!doctype html><html><head><title>KRONOS 289 Docs</title><link rel="stylesheet" href="https://unpkg.com/swagger-ui-dist@5/swagger-ui.css"/></head><body><div id="swagger-ui"></div><script src="https://unpkg.com/swagger-ui-dist@5/swagger-ui-bundle.js"></script><script>window.onload=()=>{SwaggerUIBundle({url:"/openapi.yaml",dom_id:"#swagger-ui"})}</script></body></html>'
    return reply.type('text/html').send(html)
  })

  try {
    const apiRoutes = require('./routes/api.routes.js')
    const security = require('./middleware/security.js')
    if (security.securityMiddleware) {
      app.addHook('onRequest', security.securityMiddleware)
    }
    app.register(apiRoutes, { prefix: '/v1' })
  } catch(e){ 
    console.log('routes load error', e.message) 
  }

  return app
}

const appPromise = build()
appPromise.then(a => {
  if (require.main === module) {
    a.listen({ port: process.env.PORT || 3000, host: '0.0.0.0' })
  }
})

module.exports = appPromise
