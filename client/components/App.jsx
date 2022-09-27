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
       
        <Games />
        <AddGames />
        </section>
    </>
  )
}

export default App
