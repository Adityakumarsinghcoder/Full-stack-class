import "./App.css";
import StudentCard from "./components/StudentCard";

function App(){

const students=[

{name:"Aditya Kumar Singh",age:20,course:"CSE-AIML",grade:"A"},

{name:"Jeson",age:21,course:"CSE",grade:"B+"},

{name:"John",age:19,course:"IT",grade:"A+"},

{name:"Amit",age:22,course:"ECE",grade:"B"},

{name:"Smith",age:20,course:"AI-DS",grade:"A"}

];

return(

<div>

<h1>Experiment 1.2 - Student Cards using Props</h1>

<div className="grid">

{

students.map((student,index)=>

<StudentCard

key={index}

name={student.name}

age={student.age}

course={student.course}

grade={student.grade}

/>

)

}

</div>

</div>

);

}

export default App;