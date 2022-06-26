import React from 'react'
import { Link } from 'react-router-dom'
import classes from './navbar.module.css'

const Navbar = () => {
  return (
   <nav className={classes.nav}>
       <h1><Link to="/quotes">I love Quotes</Link></h1>
       <ul>
           <li><Link to="/quotes">Quotes</Link> </li>
           <li><Link to="/new">New</Link> </li>
           <li><Link to="/auth/login">login </Link></li>
           <li><Link to="/auth/register">Signup</Link></li>
       </ul>
   </nav>
  )
}

export default Navbar