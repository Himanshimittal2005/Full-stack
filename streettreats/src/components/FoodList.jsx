import React from 'react'
import FoodCard from './FoodCard'

function FoodList({ foods }) {
  return (
    <div className="row">
      {foods.map(food => (
        <div key={food.id} className="col-md-4 mb-4">
          <FoodCard food={food} />
        </div>
      ))}
    </div>
  )
}

export default FoodList
