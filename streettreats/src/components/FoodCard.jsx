import React from 'react'
import { Card, CardContent, Typography, Chip, Rating, Button } from '@mui/material'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'

function FoodCard({ food }) {
  return (
    <Card className="food-card">

      {/* Add to Cart Button */}
      <Button
        className="add-cart-btn"
        variant="contained"
        size="small"
        startIcon={<AddShoppingCartIcon />}
      >
        Add
      </Button>

      <CardContent>
        <Typography variant="h6" className="food-title">
          {food.name}
        </Typography>

        <Rating
          value={food.rating}
          precision={0.1}
          readOnly
          className="mt-1"
        />

        <div className="food-cost">
          Approx cost: ₹{food.cost} per plate
        </div>

        <div className="mt-3">
          <Chip
            label={food.price}
            className="price-chip"
          />
        </div>
      </CardContent>
    </Card>
  )
}

export default FoodCard
