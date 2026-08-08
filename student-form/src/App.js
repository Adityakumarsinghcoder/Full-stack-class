import React, { useState } from "react";
import "./App.css";

function App() {

  const [student, setStudent] = useState({
    name: "",
    email: "",
    course: ""
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (event) => {

    const { name, value } = event.target;

    setStudent({
      ...student,
      [name]: value
    });

  };

  const handleSubmit = (event) => {

    event.preventDefault();

    setSubmittedData(student);

    setStudent({
      name: "",
      email: "",
      course: ""
    });

  };

  return (

    <div className="container">

      <h1>Student Registration</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={student.name}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={student.email}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="text"
          name="course"
          placeholder="Enter Course"
          value={student.course}
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">
          Register
        </button>

      </form>

      {submittedData && (

        <div>

          <h2>Submitted Data</h2>

          <p>Name : {submittedData.name}</p>

          <p>Email : {submittedData.email}</p>

          <p>Course : {submittedData.course}</p>

        </div>

      )}

    </div>

  );
}

export default App;