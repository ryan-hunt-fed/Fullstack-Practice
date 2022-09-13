const express = require('express')
const db = require('../db/db')
const router = express.Router()

router.get('/', (req,res) => {
    db.getGame()
    .then((game) => {
        
        res.json(game)
    })
    .catch((err) => {
        console.log(err.message)
    })
})

router.post('/', (req, res) => {
    const {title, genre, released, image} = req.body
    // console.log(req.body)
    const data = {title, genre, released, image}
    db.newGame(data)
        .then((idArr) => {
            const id = idArr[0]
            db.getOneGame(id)
            .then ((oneGame) => {
              res.json(oneGame)
            })
        })
        .catch((err) => {
            console.log(err.message) 
        })
})

router.delete('/:id', (req,res) => {
    // const {id} = req.body 
    // console.log('in server side route', req.body)
    const id = req.params.id
    console.log(id)
    db.delGame(id)
    .then(() => {
        db.getGame()
        .then((game) => {
            res.json(game)
        })
    })
})

module.exports = router