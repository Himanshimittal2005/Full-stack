import React from 'react'
import { Button } from '@mui/material'

function CityTabs({ selectedCity, setSelectedCity }) {
  const cities = ['Delhi', 'Mumbai', 'Amritsar']

  return (
    <div className="mb-4">
      {cities.map(city => (
        <Button
          key={city}
          variant={selectedCity === city ? 'contained' : 'outlined'}
          className="me-2"
          onClick={() => setSelectedCity(city)}
        >
          {city}
        </Button>
      ))}
    </div>
  )
}

export default CityTabs
