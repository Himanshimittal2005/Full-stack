import React from 'react'
import { AppBar, Toolbar, Typography, Button } from '@mui/material'

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar className="d-flex justify-content-between">
        
        {/* Brand */}
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          StreetTreats 🍽️
        </Typography>

        {/* Navigation Links */}
        <div>
          <Button className="nav-link">Location</Button>
          <Button className="nav-link">About</Button>
          <Button className="nav-link">Help</Button>
          <Button
            variant="contained"
            sx={{
              background: 'linear-gradient(90deg, #00e5ff, #00bcd4)',
              color: '#000',
              fontWeight: 700,
              ml: 2
            }}
          >
            Sign Up
          </Button>
        </div>

      </Toolbar>
    </AppBar>
  )
}

export default Navbar
