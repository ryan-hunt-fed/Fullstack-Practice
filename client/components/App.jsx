import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

import Header from './Header'
import Nav from './Nav'
import Games from './Games'
import AddGames from './AddGame'
import GameDetails from './GameDetails'


function App() {
 
  return (
    <>
      <Header />
      <Nav />
      <section className="main">
        {/* add your code here */}
        <Games />
        <AddGames />
        {/* WIP */}
        {/* <Routes>
          <Route path='/' element={</>}/>
          <Route path='/game/:id' element={<GameDetails/>}/>         
        </Routes> */}
        </section>
    </>
  )
}

export default App
