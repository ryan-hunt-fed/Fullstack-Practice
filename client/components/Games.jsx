import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { Link } from 'react-router-dom'
import { fetchDelGame, fetchGames } from '../actions/gamesAct'

function Games() {
    const gameData = useSelector((state) => state.gamesRedu)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchGames())
    }, [])

    useEffect(() => {
        // dispatch(fetchGames())
    }, [gameData])

    return (
        <>
            <div className='items-container'>
                {gameData.map((game, idx) => {
                    return (
                        <>
                            {/* <Link to='game/:id'> */}
                            <div className='child-items' key={idx}>
                                <img className='images' src={`${game.image}`} />
                                <h3>{game.title}</h3>
                                <p>Genre: {game.genre}</p>
                                <p>Release Date: {game.released}</p>
                                <button onClick={(evt) => {
                                    evt.preventDefault()
                                    dispatch(fetchDelGame(game.id))
                                }}>Delete Game</button>
                            </div>
                            {/* </Link> */}
                          
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default Games