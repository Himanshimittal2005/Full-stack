import { Button, TextField, Card, CardContent } from '@mui/material';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card style={{width:300, margin:"20px auto"}}>
        <CardContent>
          <h1>Material UI Components</h1>
          <TextField label="Name" fullWidth margin="normal" />
          <Button varient="contained" fullWidth>Submit</Button>
          </CardContent>
      </Card>
    </>
  );
}

export default App