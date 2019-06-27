
const http = require('http')
const express = require('express')
const request = require('request');
const path = require('path')

const app = express()
// app.use(express.static(process.env.SERVE_DIRECTORY || 'dist'))
let status = {}
app.set('view engine', 'ejs');
app.get('/', function(req, res) {
  res.render(__dirname + '/dist/index.ejs', {...status.iss_position, timestamp: new Date().getTime()});
});

const server = http.createServer(app)

server.listen(process.env.PORT || 8443)





setInterval(() => {
  request('http://api.open-notify.org/iss-now.json', { json: true }, (err, res, body) => {
    status = body
  })
}, 1000)
