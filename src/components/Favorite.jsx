import React from 'react'
import { useMealContext } from '../context'

const Favorite = () => {
  const { favorites, selectMeal, removeMealFormFavorites } = useMealContext()

  return (
    <div className='favorite'>
      <h2 style={{
        color: 'blue',
        marginBottom: 10 }}>Favorites</h2>
      <div className='favorite-list'>
        {
          favorites.map(favorite => {
            const {idMeal: id, strMealThumb: img} = favorite

            return(
              <div key={id} className='favorite-item'>
                <img src={img} alt="" className='item-img' onClick={() => selectMeal(id, true)}/>
                <button style={{
                  cursor: 'pointer',
                  padding: 5,
                }} onClick={() => removeMealFormFavorites(id)}>Remove</button>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Favorite