import { useState } from "react";
import students from "../data/students";
import StudentCard from "./StudentCard";

function Dashboard() {

  // State to control show/hide
  const [showStudents, setShowStudents] = useState(true);

  return (
    <div className="dashboard">

      <h2>Student List</h2>

      {/* Show / Hide Button */}
      <button
        className="show-btn"
        onClick={() => setShowStudents(!showStudents)}
      >
        {showStudents ? "Hide Students" : "Show Students"}
      </button>

      {/* Conditional Rendering */}
      {showStudents && (
        <div className="student-list">

          {students.map((student, index) => (
            <StudentCard
              key={index}
              student={student}
            />
          ))}

        </div>
      )}

    </div>
  );
}

export default Dashboard;