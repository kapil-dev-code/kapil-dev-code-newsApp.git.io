import React from "react";
import ReactDOM from "react-dom";
//import store from "./store/store";
import { BrowserRouter } from "react-router-dom";
//import { Provider } from "react";
//import './index.css';
import App from "./App";
//import { Provider } from "react-redux";

ReactDOM.render(

  <BrowserRouter>
  <App />
  </BrowserRouter>
 
 ,

  document.getElementById("root")
);
