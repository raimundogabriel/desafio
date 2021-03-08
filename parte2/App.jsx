import React from "react";

import "./App.css";

import Header from "./componets/header.jsx";
import Lista from "./componets/lista.jsx"
import Footer from "./componets/footer.jsx";


// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => (
  <div className="App">
    <Header ></Header>        
    
    <Lista></Lista>
    
    <Footer></Footer>
  </div>
);
