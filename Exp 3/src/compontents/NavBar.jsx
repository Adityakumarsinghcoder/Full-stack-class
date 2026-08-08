import React from 'react'
import { Link } from 'react-router' 
function NavBar() {
  return (
    <nav>
        <h4>STUDENT MANAGEMENT SYSTEM</h4>
        <Link to ="/">Home |</Link>
        <Link to ="/Dashboard">Dashboard |</Link>
        <Link to ="/Login">Login</Link>

          
    </nav>
  )
}

export default NavBar
