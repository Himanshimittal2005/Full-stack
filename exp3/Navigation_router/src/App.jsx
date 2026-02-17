import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function Profile(){
  return (
    <div>
      <marquee loops="5">
        <h1>Welcome to my Profile</h1>
      </marquee>
      <h1>Himanshi</h1>
      <h2>Full-Stack Developer | AI-ML Enthusiast</h2>
      <h2>
Third-year Computer Science student with a strong interest in
building meaningful, scalable, and user-centric applications.
      </h2>
      
    </div>
  )
}
function Dashboard(){
  return (
    <>
    <h1>My Skill Set </h1>
    <h2>Frontend: HTML, CSS, JavaScript, React</h2>
    <h2>Backend: Node.js, Express</h2>
    <h2>Databases: MySQL, MongoDB</h2>
    <h2>Currently Exploring: AI / Machine Learning</h2>
    </>
  )
}
function App() {
  return  (
    <>
   <BrowserRouter>
    <Routes>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
   </BrowserRouter>
   <a href="/Profile"><button>Go to Profile</button></a>
   <a href="/Dashboard"><button>Go to Dashboard</button></a>
     </>
  )
}

export default App