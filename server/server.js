const express = require('express')
const path = require('path')

const server = express()
const gameRoutes = require('./routes/games')
server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))
server.use('/v1/games', gameRoutes)

server.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'))
  })

module.exports = server
