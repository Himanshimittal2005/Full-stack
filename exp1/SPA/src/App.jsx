import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="counter">
          <h1 id="h1">Counter</h1>
          <p id="para">Count:{count}</p>
          <button onClick={()=> setCount(count+1)}>+</button>
          <button onClick={()=> setCount(count-1)}>-</button>
      </div>
    </>
  );
}

export default App;