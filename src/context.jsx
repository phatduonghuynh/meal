import React, { useContext, useEffect, useState } from 'react'
import { ALL_MEAL_URL } from './constant'
import axios from 'axios'

const AppContext = React.createContext()

const useMealContext = () => {
    return useContext(AppContext)
}

const AppProvider = ({children}) => {
  const [meals, setMeals] = useState([])
  const [ isLoading, setIsLoading ] = useState(false)
  const [ mealSearch, setMealSearch] = useState('')
  const [ showModal, setShowModal] = useState(false)
  const [ selectedMeal, setSelectedMeal] = useState(null)
  const [ favorites, setFavorites] = useState([])
  
  const addMealToFavorites = (id) => {
    const meal = meals.find(meal => meal.idMeal === id)
    const alreadyFavorite = favorites.find(meal => meal.idMeal === id)
    if (alreadyFavorite) return;
    const updateFavorite = [...favorites, meal]
    setFavorites(updateFavorite)
  }

  const removeMealFormFavorites = (id) => {
    const updateFavorite =favorites.filter(meal => meal.idMeal !== id)
    setFavorites(updateFavorite)
  }

  const selectMeal = (id, isSelectFromFavorite) => {
    let meal
    if (isSelectFromFavorite) {
      meal = favorites.find(meal => meal.idMeal === id)
    } else {
      meal = meals.find(meal => meal.idMeal === id)
    }
    setSelectedMeal(meal)
    setShowModal(true)
  }

  const fetchMeals = async (url) => {
    setIsLoading(true)
    try {
      const { data } = await axios.get(url)
      if (data.meals) {
        setMeals(data.meals)
      } else {
        setMeals([])
      }
    } catch (error) {
      console.log(error)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    fetchMeals(ALL_MEAL_URL)
  }, [])

  useEffect(() => {
    fetchMeals(`${ALL_MEAL_URL}${mealSearch}`)
  }, [mealSearch])

  return (
    <AppContext.Provider value={{
        meals,
        isLoading,
        setMealSearch,
        fetchMeals,
        selectedMeal,
        setShowModal,
        selectMeal,
        showModal,
        favorites,
        addMealToFavorites,
        removeMealFormFavorites,
    }}>
        {children}
    </AppContext.Provider>
  )
}

export { AppProvider, AppContext, useMealContext }