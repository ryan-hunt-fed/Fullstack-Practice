import React, { useState, useEffect } from 'react'


function AddGames() {

const [game, setGame] = useState([])

const formSubmit = async (e) => {
    e.preventDefualt()
    
    
}

const submitType = (e) => {
    setGame({
        ...game, 
        [e.target.value]: e.target.value
    })
}




return (

    <div className='form'>
        <p className='add'>Add a Game</p>
    <form onSubmit={formSubmit}>
        <label> Title
            <input type='text' name='title' onChange={submitType} />
        </label>
        <label> Type
            <input type='text' name='title' onChange={submitType} />
        </label>
        <label> Release Date
            <input type='text' name='title' onChange={submitType} />
        </label>
        <label> Image
            <input type='url' name='title' onChange={submitType} />
        </label>
        <button>Save</button>
    </form>
 </div>




)
}

export default AddGames