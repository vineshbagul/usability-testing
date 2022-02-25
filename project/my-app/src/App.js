import { Component } from "react";
import React from 'react';
import './App.css';
import Logs from "./log";

class App extends React.Component{
constructor(){
super();
//  console.log("component initialized"); 

this.state={
counter:0,
incValue:0,
decValue:0,
logs:[],
ShowLogs:false,

};
}

// Componentdidmount(){
//  console.log("component mounted"); 
// }

// Componentdidumnount(){
//  console.log("component unmounted"); 

// }

handlecounter =(sign) => {

let {counter,incValue,decValue ,logs} = this.state;
let oldValue = counter;
let newValue = null;
if(sign==="+")
{
    newValue = counter + incValue;
    this.setState({counter:newValue,incValue:0});
// this.setState({counter:counter + incValue, incValue: 0})
// this.setState({counter: this.state.counter +1});
}
else if(sign === "-" && counter > 0){

    newValue = counter - decValue;
    this.setState({counter:newValue,decValue:0});

// this.setState({counter:counter - decValue, decValue: 0})
// this.setState({counter :this.state.counter -1});
}

let newLog = {
    id:Math.random(),
    value:`previous value = ${oldValue} value ${ sign ==='+' ? "added" : "subtracted"} =  ${ sign =="+" ? incValue : decValue } New value = ${newValue}` 
}
this.setState({ logs:[...logs,newLog]})

};

handleOperation = (e) =>{
console.log(e.target.value);
if(e.target.id=== "value_inc"){
this.setState({incValue: +e.target.value})
}

if(e.target.id=== "value_dec"){
this.setState({decValue: +e.target.value})
}

// console.log(e.target.id)
// used to fetch data from the form

};

deletelogs(id) {
    this.setState({logs: this.state.logs.filter((log) => log.id !== id)});
}

render(){
let { counter, incValue ,decValue,logs ,ShowLogs} = this.state;

return(
<div className="main">
<div>
<h1>counter</h1>
</div>
<div>
<h3> Value of counter : {counter}</h3>
</div>
<div className="buttons">
<div className="action_section">
<form>
<input type="number" id="value_inc" placeholder="0" onChange={(e)=>this.handleOperation(e)}></input>
</form>
<button className="button_increament" 
onClick={() => this.handlecounter("+")}>Increment</button>
</div>
</div>
<div className="buttons">
<div className="action_section">
<form>
<input type="number" id="value_dec" placeholder="0" onChange={(e)=>this.handleOperation(e)}></input>
</form>
<button className="button_decreament" 
onClick={() =>this.handlecounter("-")}>Decrement</button>
</div>
</div>

{ logs.length>=1 && (
<div className="logs">
    <button className="button butn_info"
        onClick={()=> this.setState({ShowLogs: !ShowLogs})}
        style ={{ backgroundColor: ShowLogs ? "black" : "white" ,
                  color : ShowLogs ? "white" : "black",
        }}
        >

         
    {ShowLogs ?  "Hide" : "Show" } Logs
    </button>
    { ShowLogs && (
        <div className="log_container">
            <Logs
            logsValue={logs}
                deletelog = {(id)=>this.deletelogs(id)}
            />
        </div>
    )
    }
</div>
)}
</div>

);
}

}

export default App;
