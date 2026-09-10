const fs = require('fs')
const path = require('path')

module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  const url = req.url || '/'

  if (url === '/' || url.startsWith('/api') || url === '/api/') {
    res.setHeader('Content-Type', 'application/json')
    return res.end(JSON.stringify({
      name: "KRONOS 28 ITZA 289 PLATINUM API",
      version: "289.0.0",
      docs: "/docs",
      openapi: "/openapi.yaml",
      status: "PLATINUM LIVE",
      contact: "marco.a.rojas.v@hotmail.com | 7225862335",
      safeCreative: "2607086319439",
      compliance: ["NOM-024","ISO 27001","Data Residency MX"]
    }))
  }

  if (url.includes('openapi.yaml')) {
    try {
      const yamlPath = path.join(__dirname, '../apps/api/openapi.yaml')
      const file = fs.readFileSync(yamlPath, 'utf8')
      res.setHeader('Content-Type', 'text/yaml')
      return res.end(file)
    } catch(e){
      res.setHeader('Content-Type', 'text/yaml')
      return res.end('openapi: 3.0.0\ninfo:\n  title: KRONOS 28 ITZA 289 PLATINUM API\n  version: 289.0.0\npaths:\n  /docs:\n    get:\n      summary: docs')
    }
  }

  if (url.includes('openapi.json')) {
    res.setHeader('Content-Type', 'application/json')
    return res.end(JSON.stringify({openapi:"3.0.0", info:{title:"KRONOS 289", version:"289.0.0"}}))
  }

  if (url.includes('docs')) {
    res.setHeader('Content-Type', 'text/html')
    return res.end(`<!doctype html><html><head><title>KRONOS 289 Docs</title><link rel="stylesheet" href="https://unpkg.com/swagger-ui-dist@5/swagger-ui.css"/></head><body><div id="swagger-ui"></div><script src="https://unpkg.com/swagger-ui-dist@5/swagger-ui-bundle.js"></script><script>window.onload=()=>{SwaggerUIBundle({url:"/openapi.yaml",dom_id:"#swagger-ui"})}</script><div style="padding:20px;font-family:sans-serif">KRONOS 28 ITZA 289 PLATINUM API v289.0.0 | marco.a.rojas.v@hotmail.com | 7225862335 | SafeCreative 2607086319439</div></body></html>`)
  }

  res.statusCode = 404
  res.end(JSON.stringify({error:"not found", url}))
}
