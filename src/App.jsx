import React from 'react'
import './App.css'
import Search from './components/Search'
import Favorite from './components/Favorite'
import Meal from './components/Meal'
import Modal from './components/Modal'
import { useMealContext } from './context'


function App() {
  const { favorites, showModal } = useMealContext()
  return (
    <div className='app'>
      <Search /> 
      {favorites.length > 0 && <Favorite />}
      <Meal />
      {showModal && <Modal />}
    </div>
  )
}

export default App