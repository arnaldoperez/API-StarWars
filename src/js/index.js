//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Index from "./component/index.jsx";

//render your react application
ReactDOM.render(<Index />, document.querySelector("#app"));
