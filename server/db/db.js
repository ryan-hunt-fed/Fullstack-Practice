const knex = require('knex')
const config = require('./knexfile')
const env = process.env.NODE_ENV || 'development'
const con = knex(config[env])

function getGame(db = con) {
    return db('collection')
    
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

function delGame(id, db=con){
    return db('collection')
    .del()
    .where('id',id)

}

module.exports = {
    getGame,
    newGame,
    getOneGame,
    delGame
}