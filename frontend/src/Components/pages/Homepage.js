import React from 'react'
import Navbar from "../layout/Navbar"
import {BsFillHeartPulseFill} from 'react-icons/bs'
import { Routes,Route,Link} from 'react-router-dom'
import classes from './homePage.module.css'
const Homepage = () => {
  return (
    <div className={classes.container}>
      <div className={classes.buttons}>
        <h1 style={{color:'purple'}}>Welcome to I <BsFillHeartPulseFill style={{color:'red'}}/ >  Blogging! </h1>
        <Link to="/quotes"><button>Read Blogs</button></Link>
        <Link to="/new"><button>Create Blogs</button></Link>
      </div>
    </div>
  )
}

export default Homepage