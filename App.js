import React from "react";
import  ReactDOM  from "react-dom";
const heading = React.createElement("h1",{id:"child1"},"i am the heading");
const bridge=document.getElementById("root");
const root= ReactDOM.createRoot(bridge);
root.render(heading);