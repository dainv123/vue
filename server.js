const path = require('path')
const express = require('express')
const serveStatic = require('serve-static')
const port = process.env.PORT || 8888

const app = express()

app.use('/', serveStatic(path.join(__dirname, '/dist')))

app.get(/.*/, function (req, res) {
	res.sendFile(path.join(__dirname, '/dist/index.html'))
})

app.listen(port)

console.log(`app is listening on port: ${port}`)