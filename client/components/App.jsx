import React from 'react'
import Header from './Header'
import Games from './Games'
import AddGames from './AddGame'


function App() {
 
  return (
    <>
      <Header />
      <section className="main">
        {/* add your code here */}
        <Games />
        <AddGames />
        </section>
    </>
  )
}

export default App
