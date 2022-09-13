const knex = require('knex')
const config = require('./knexfile')
const env = process.env.NODE_ENV || 'development'
const con = knex(config[env])

function getGame(db = con) {
    return db('collection')
    // .select()
}

function newGame(data, db=con) {
    return db('collection')
    .insert(data)
}

function getOneGame(id, db=con) {
    return db('collection')
    .select()
    .where('id',id)
    .first()
}

module.exports = {
    getGame,
    newGame,
    getOneGame
}