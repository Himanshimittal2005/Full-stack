import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [task, setTAsk] = useState("");
  const [tasks, setTAsks] = useState([]);

  const addTask = () => {
    if(task.trim() === "") return;     

    setTAsks([...tasks, task]);        
    setTAsk("");
  };

  return (
    <div id="todo">
      <h1>Todo List</h1>

      <input
        value={task}
        onChange={(e) => setTAsk(e.target.value)}
      />

      <button onClick={addTask}>Add Item</button>

      <ul>
        {tasks.map((t, index) => (
          <li key={index}>{t}</li>     
        ))}
      </ul>
    </div>
  );
}

export default App