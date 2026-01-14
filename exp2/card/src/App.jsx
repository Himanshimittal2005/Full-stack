import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzzAVASpNXuHvWPwvvsIM3qfWNpQ-XPEn-aQ&s" className="card-img-top" width="200" height="350" alt="my image"/>
        <div className="card-body">
          <h5 className="card-title">Birthday Invitation</h5>
          <p className="card-text">You are invited to Himanshi Mittal's 21st birthday party at Mital's Resort.</p>
          <a href="#" className="btn btn-primary">Address</a>
        </div>
      </div>
      <div class="row">
  <div class="col-sm-6 mb-3 mb-sm-0">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Images</h5>
        <p class="card-text">With regards you all can collect pictures after the event from here.</p>
        <a href="#" class="btn btn-primary">click me</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Gifts and wishes</h5>
        <p class="card-text">Thankyou for amazing wishes and gifts by you.</p>
        <a href="#" class="btn btn-primary">Here they are.</a>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default App
