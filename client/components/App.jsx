import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { fetchGames } from '../actions/gamesAct'
import Header from './Header'
import Games from './Games'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchGames())
  })
  
  
  return (
    <>
      <Header />
      <section className="main">
        {/* add your code here */}
        <Games />
        </section>
    </>
  )
}

export default App
