const http = require('http')
module.exports = {
  httpHealth: () => {
    const requestListener = function (req, res) {
      res.writeHead(200)
      res.end('healthy')
    }

    const server = http.createServer(requestListener)
    server.listen(process.env.PORT || 3478)
    console.log(`http listening on port: ${process.env.PORT || 3478}`)
  },
}
