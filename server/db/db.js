const knex = require('knex')
const config = require('./knexfile')
const env = process.env.NODE_ENV || 'development'
const con = knex(config[env])

function getGame(db = con) {
    return db('collection').select()
}

module.exports = {
    getGame
}