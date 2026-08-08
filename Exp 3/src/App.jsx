import React from 'react'
import NavBar from './compontents/NavBar'
import {Routes,Route} from 'react-router'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import StudentList from './pages/StudentList'
import StudentProfile from './pages/StudentProFile'
function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} >
        <Route path='studentlist' element={<StudentList />} >
        <Route path="profile/:id" element={<StudentProfile />} />
        </Route>
      </Route>
        <Route path='/login' element={<Login />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
  )
}

export default App
