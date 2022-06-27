const http = require('http')
module.exports = {
  httpHealth: () => {
    const requestListener = function (req, res) {
      res.writeHead(200)
      res.end('healthy')
    }

    const server = http.createServer(requestListener)
    server.listen(5000)
    console.log('http listening on port 5000')
  },
}
