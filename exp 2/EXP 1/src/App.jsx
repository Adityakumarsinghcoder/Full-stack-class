import { useState } from "react";
import StudentCard from "./StudentCard";

function App() {
  const [showStudentCard, setShowStudentCard] = useState(true);

  const toggleStudentCard = () => {
    setShowStudentCard(prev => !prev);
  };

  const studentdata = [
    {
      name: "John Doe",
      age: 20,
      grade: "A",
      course: "Computer Science"
    },
    {
      name: "Jane Smith",
      age: 22,
      grade: "B",
      course: "Mathematics"
    },
    {
      name: "Bob Johnson",
      age: 21,
      grade: "C",
      course: "Physics"
    }
  ];

  return (
    <>
      <button
  onClick={toggleStudentCard}
  style={{
    padding: "10px 10px",
    fontSize: "10px",
    borderRadius: "8px",
    cursor: "pointer",
    background: "rgb(246, 249, 240)",
    color: "black",
    width: "200px",
  }}
>
  Show/Hide
</button>

      {showStudentCard && (
        <StudentCard studentdata={studentdata} />
      )}

      <footer />
    </>
  );
}

export default App;