import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";

function App(){

return(

<div>

<Header/>

<div className="main">

<Sidebar/>

<Dashboard/>

</div>

</div>

);

}

export default App;