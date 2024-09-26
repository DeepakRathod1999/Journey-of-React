import React from "react";
import  ReactDOM  from "react-dom";
// const heading = React.createElement("h1",{id:"child1"},"i am the heading");
 
const App=()=>{
    const title =(
<div>
    <h1>Hello Demo </h1>
    <h2>This is Amazing</h2>

</div>    );
    return (
        <div>
        <h1>This is Arrow Way</h1>
        {title}    
        </div>
        )
}

const bridge=document.getElementById("root");
const root= ReactDOM.createRoot(bridge);
root.render(<App/>);
