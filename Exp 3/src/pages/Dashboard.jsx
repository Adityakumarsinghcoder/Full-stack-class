import React from 'react'
import {Link,Outlet} from 'react-router'
import students from '../data/students'
function Dashboard() {
  return (
    <div>
    <h4>Dashboard</h4>
     <h5>Total students:{students.length}</h5>

      <Link to="studentlist" >View Students</Link>
      <Outlet />
    </div>
  )
}

export default Dashboard
