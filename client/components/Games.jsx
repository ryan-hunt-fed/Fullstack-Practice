import React, { useState, useEffect } from 'react'
import {useSelector} from 'react-redux'
// import {getGamesApi} from '../apis/gameAPI' 

function Games() {
  const gameData = useSelector((state) => state.gamesRedu)
  
//   console.log(gameData)
  
//   const [game, setGame] = useState([])
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
                <div className='items' key={idx}>
                <img className='images' src={`/images/${game.image}`} />
                <h3>{game.title}</h3>
                <p>Type: {game.genre}</p>
                <p>Release Date: {game.released}</p>
                </div>
                </>
            )

        })}
       
    </div>
      
    </>
  )
}

export default Games