import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch  } from 'react-redux'
import { fetchDelGame, fetchGames } from '../actions/gamesAct'
// import {getGamesApi} from '../apis/gameAPI' 

function Games() {
    const gameData = useSelector((state) => state.gamesRedu)
    const dispatch = useDispatch()
  
    useEffect(() => {
      dispatch(fetchGames())
    },[])

    //   console.log(gameData)
    //   useEffect(async () => {
    //     const arr = await getGamesApi()
    //     setGame(arr)  
    //   },[])
    //   console.log('in games component',game)
    
    return (
        <>
            <div>
                {gameData.map((game, idx) => {

                    return (
                        <>
                            <div className='items-container'>
                               
                                <div className='child-items' key={idx}>
                                    <img className='images' src={`${game.image}`} />
                                    <h3>{game.title}</h3>
                                    <p>Genre: {game.genre}</p>
                                    <p>Release Date: {game.released}</p>
                                    <button>Update Game</button>
                                    <button onClick={(e) => {
                                        e.preventDefault()
                                        dispatch(fetchDelGame(game.id))
                                    }}>Delete Game</button>
                                    
                                </div>
                                
                            </div>
                        </>
                    )

                })}

            </div>

        </>
    )
}

export default Games