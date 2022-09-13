import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchAddGame } from '../actions/gamesAct'


function AddGames() {
const dispatch = useDispatch()

const [game, setGame] = useState([])

const formSubmit = () => {
    console.log('form submit', game)
    dispatch(fetchAddGame(game))
}

const submitChange = (e) => {
    setGame({
        ...game, 
        [e.target.name]: e.target.value,
    })
}

return (

    <div className='form'>
        <p className='add'>Add a Game</p>
    <form onSubmit={formSubmit}>
        <label> Title:
            <input type='text' name='title' onChange={submitChange} />
        </label>
        <label> Genre:
            <input type='text' name='genre' onChange={submitChange} />
        </label>
        <label> Release Date:
            <input type='text' name='released' onChange={submitChange} />
        </label>
        <label> Image:
            <input type='text' name='image' onChange={submitChange} />
        </label>
        <button>Save Game</button>
    </form>
 </div>

)
}

export default AddGames