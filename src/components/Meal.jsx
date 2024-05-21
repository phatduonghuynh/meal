import React from 'react'
import { useMealContext } from '../context'
import { FaThumbsUp } from "react-icons/fa"

const Meal = () => {
  const { meals, isLoading, selectMeal, addMealToFavorites } = useMealContext()
  if (isLoading){
    return (
    <h1>Loading...</h1>
    )
  }

  if (meals.length < 1) {
    return (
      <h1>No meals...</h1>
    )
  }

  return (
    <div className='meal'>
      {
        meals.map((meal) => {
          const { idMeal: id, strMeal: name, strMealThumb: img} = meal
          return (
            <div className='meal-item' key={id}>
              <img style={{
                width: '100%',
                height: 300,
                cursor: 'pointer'
              }} src={img} alt="" onClick={() => selectMeal(id, false)} />
              <div className='meal-item-footer'>
                 <p>{name}</p>
                 <button style={{cursor: 'pointer'}} type='button' onClick={() => addMealToFavorites(id)}><FaThumbsUp /></button>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Meal