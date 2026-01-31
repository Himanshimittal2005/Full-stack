import { BrowserRouter,Routes,Route} from 'react-router-dom';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Home() {
  return (
    <>
    <h1>Hi, I’m Anna </h1>
    <h2>A passionate Full-Stack Developer in the making</h2>
    <h2>I build clean, user-friendly web experiences with purpose.</h2>
    </>
  ) 
  
}
function Contact() {
  return (
    <>
    <h1>Let’s Connect </h1>
    <h2>Email: anna.dev@gmail.com</h2>
    <h2>LinkedIn: linkedin.com/in/anna</h2>
    <h2>Open to internships, projects & collaborations</h2>
    </>
  )
}
function Profile() {
  return  ( 
    <>
      <h1>Anna</h1>
      <h2>Full-Stack Developer | AI-ML Enthusiast</h2>
      <h2>
Third-year Computer Science student with a strong interest in
building meaningful, scalable, and user-centric applications.
      </h2>
    </>
  )
}
function Dashboard() {
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
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path="/Contact" element = {<Contact/>}/>
          <Route path="/Profile" element = {<Profile/>}/>
          <Route path="/Dashboard" element = {<Dashboard/>}/>
          
        </Routes>
    </BrowserRouter>
  )
}

export default App;
