import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import BannerImage from "../imgs/pizza.jpeg"
import "../styles/Home.css"

function Home() {
  return (
    <div className="home" style={{backgroundImage:`url(${BannerImage})`}}>
      <div className="headerContainer" >
        <h1> Pizza kadai </h1>
        <p> PIZZA FOR KAARAM LOVERS </p>
        <Link to="/menu"><button> ORDER NOW </button></Link>
        
      </div>
    </div>
  )
}

export default Home
