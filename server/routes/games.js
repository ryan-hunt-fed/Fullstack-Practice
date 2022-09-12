const express = require('express')
const db = require('../db/db')
const router = express.Router()

router.get('/', (req,res) => {
    db.getGame()
    .then((game) => {
        // console.log('in routes', game)
        res.json(game)
    })
    .catch((err) => {
        console.log(err.message)
    })
})

router.post('/', (req, res) => {
    const {title, genre, released, image} = res.body
    db.newGame(data)
    .then(() => {

    })
    .catch((err) => {
        console.log(err.message) 
    })
})

module.exports = router