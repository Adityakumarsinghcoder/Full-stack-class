import React from 'react'
import { useParams } from "react-router";
function StudentProfile() {
  const { id } = useParams()
  console.log(id)
  return (
    <div>
      StudentProfile
    </div>
  )
}

export default StudentProfile
