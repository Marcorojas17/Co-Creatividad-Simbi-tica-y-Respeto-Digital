const appPromise = require('../apps/api/src/index.js')
module.exports = async (req, res) => {
  const app = await appPromise
  await app.ready()
  app.server.emit('request', req, res)
}
