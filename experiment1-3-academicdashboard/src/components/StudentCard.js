function StudentCard({student}){

return(

<div className="student">

<h3>{student.name}</h3>

<p>Course : {student.course}</p>

<p>Grade : {student.grade}</p>

{
student.grade==="A+"?

<p style={{color:"lime"}}>Top Performer</p>

:

<p style={{color:"orange"}}>Regular Student</p>

}

</div>

);

}

export default StudentCard;