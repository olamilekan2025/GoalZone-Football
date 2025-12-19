import React from 'react'
import { FaVolleyball } from "react-icons/fa6";
import "./Styling/Home.css"

function Home() {
  return (
    <>
   <div className="home-wrapper">
  <img
    src="https://res.cloudinary.com/divio4grm/image/upload/v1766154070/bannerbg2_a2hamq.jpg"
    alt="Football banner"
  />
  <div className="home-overlay"></div>
  <div className="football-hit">
    <FaVolleyball style={{color:"#7ED958"}} />
  </div>

  <div className="home-content">
    <h1>FC LEGEND</h1>
    <p>Feel the power of football</p>
  </div>
</div>

    </>
  )
}

export default Home

