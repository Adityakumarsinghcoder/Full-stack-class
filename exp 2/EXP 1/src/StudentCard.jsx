import React from 'react'

function StudentCard({ studentdata }) {
  console.log(studentdata);
  return (
    <div>
      <h3>StudentCard</h3>
      {studentdata.map((std, index) => (
        <div key={index}>
          <h4>{std.name}</h4>
          <p>Age: {std.age}</p>
          <p>Grade: {std.grade}</p>
          <p>Course: {std.course}</p>
        </div>
      ))}
    </div>
  )
}

export default StudentCard