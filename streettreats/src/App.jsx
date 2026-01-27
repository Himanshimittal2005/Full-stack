import React, { useState } from 'react'
import Navbar from './components/Navbar'
import CityTabs from './components/CityTabs'
import FoodList from './components/FoodList'
import Footer from './components/Footer'
import './index.css'

function App() {
  const foodItems = [
    {
      id: 1,
      city: 'Delhi',
      name: 'Chole Bhature',
      cost: 120,
      price: '₹₹',
      rating: 4.6
    },
    {
      id: 2,
      city: 'Delhi',
      name: 'Gol Gappe',
      cost: 40,
      price: '₹',
      rating: 4.8
    },
    {
      id: 3,
      city: 'Mumbai',
      name: 'Vada Pav',
      cost: 30,
      price: '₹',
      rating: 4.7
    },
    {
      id: 4,
      city: 'Mumbai',
      name: 'Pav Bhaji',
      cost: 150,
      price: '₹₹',
      rating: 4.5
    },
    {
      id: 5,
      city: 'Amritsar',
      name: 'Amritsari Kulcha',
      cost: 220,
      price: '₹₹₹',
      rating: 4.9
    },
    {
      id: 6,
      city: 'Mumbai',
      name: 'Pani-Puri',
      cost: 80,
      price: '₹',
      rating: 4.6
    }
  ]

  const [selectedCity, setSelectedCity] = useState('Delhi')

  const filteredFood = foodItems.filter(
    item => item.city === selectedCity
  )

  return (
    <div className="app-container">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="content container mt-4">
        <CityTabs
          selectedCity={selectedCity}
          setSelectedCity={setSelectedCity}
        />

        <FoodList foods={filteredFood} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
