'use strict'
const stun = require('stun')
const { httpHealth } = require('./http-health')
const PORT = process.env.PORT || 3478
const server = stun.createServer({ type: 'udp4' })
const { STUN_BINDING_RESPONSE, STUN_EVENT_BINDING_REQUEST } = stun.constants
const userAgent = `node/${process.version} stun/v1.0.0`

// a health-check for http
httpHealth()

server.on(STUN_EVENT_BINDING_REQUEST, (req, rinfo) => {
  const message = stun.createMessage(STUN_BINDING_RESPONSE, req.transactionId)

  message.addXorAddress(rinfo.address, rinfo.port)

  message.addSoftware(userAgent)
  console.log(`STUN was hit by: ${rinfo}`)
  server.send(message, rinfo.port, rinfo.address)
})

server.listen(PORT, () => {
  console.log('Stun server started and listening on PORT', PORT)
})
