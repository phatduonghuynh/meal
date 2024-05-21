import React from 'react'
import { useMealContext } from '../context'

const Modal = () => {
  const { selectedMeal, setShowModal } = useMealContext()
  const { strMealThumb: img, strMeal: name, strInstructions: desc, strSource: foodLink } = selectedMeal
  
  return (
    <div className='modal'>
      <div className='modal-item'>
        <img src={img} alt="" />
        <h2>{name}</h2>
        <h3>Cooking Instruction</h3>
        <p>{desc}</p>
        <a href={foodLink} target='_blank'>Original Source</a>
        <button onClick={() => setShowModal(false)} type='btn'>Close</button>
      </div>
    </div>
  )
}

export default Modal