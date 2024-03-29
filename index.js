
const http = require('http')
const express = require('express')
const request = require('request');
const fs = require('fs')

const app = express()
app.use(express.static(process.env.SERVE_DIRECTORY || 'dist'))
let status = {}
let whenWillISSPass = {}
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render(__dirname + '/dist/index.ejs', {...status.iss_position, ...whenWillISSPass , timestamp: new Date().getTime()});
});

const httpOptions = {
  key: fs.readFileSync('./security/cert.key'),
  cert: fs.readFileSync('./security/cert.pem')
}

const server = http.createServer(httpOptions, app)

server.listen(process.env.PORT || 8443)

setInterval(() => {
  request('http://api.open-notify.org/iss-now.json', { json: true }, (err, res, body) => {
    status = body
  })
  request('http://api.open-notify.org/iss-pass.json?lat=LAT&lon=LON', { json: true }, (err, res, body) => {
    whenWillISSPass = body
  })
}, 1000)
