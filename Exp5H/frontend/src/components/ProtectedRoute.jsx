import React from 'react'

function ProtectedRoutes({ children }) {
  const isLoggedIn = localStorage.getItem("isLoggedIn")
  if (!isLoggedIn) {
    window.location.href = "/login"
  }
  else {
    return children
  }
}

export default ProtectedRoutes