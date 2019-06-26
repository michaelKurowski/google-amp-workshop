const fs = require('fs')
const http = require('http')
const express = require('express')

const app = express()
app.use(express.static(process.env.SERVE_DIRECTORY || 'dist'))
app.get('/', function(req, res) {
  return res.end('<p>This server serves up static files.</p>')
})

const server = http.createServer(app)

server.listen(process.env.PORT || 8443)