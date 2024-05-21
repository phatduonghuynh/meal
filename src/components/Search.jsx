import React, { useState } from 'react'
import { useMealContext } from '../context'
import { ALL_MEAL_URL, RANDOM_MEAL_URL } from '../constant'
import { GiMeal } from "react-icons/gi";

const Search = () => {
  const { setMealSearch, fetchMeals } = useMealContext()
  const [text, setText] = useState('')
    
  const handleInputChange = (event) => {
     setText(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (text)
    setMealSearch(text)
    setText('')
  }
  
  const handleRandomMeal = () => {
    fetchMeals(RANDOM_MEAL_URL)
  }
  
  const handleShowAllMeal = () => {
    fetchMeals(ALL_MEAL_URL)
  }
 
  return (
    <div className='search'>
      <h1 onClick={handleShowAllMeal}><GiMeal />Meal Cooking</h1>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder='Type your food...' value={text} 
        onChange={handleInputChange}/>
        <button className='btn btn-search' type='submit'>Search</button>
        <button onClick={handleRandomMeal} className='btn btn-random' type='button'>Random Meal</button>
        <button onClick={handleShowAllMeal} className='btn btn-all-meal' type='button'>Show All Meal</button>
      </form>
    </div>
  )
}

export default Search