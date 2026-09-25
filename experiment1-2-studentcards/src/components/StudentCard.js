function StudentCard(props){

return(

<div className="card">

<h2>{props.name}</h2>

<p>Age : {props.age}</p>

<p>Course : {props.course}</p>

<p>Grade : {props.grade}</p>

</div>

);

}

export default StudentCard;