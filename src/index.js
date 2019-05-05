import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header.js";
import Body from "./Body.js";
import Footer from "./Footer.js";
import "./index.css";

let destination = document.getElementById("root");

ReactDOM.render(
    <div>
       <Header />
       <Body />
       <Footer />
    </div>,
    destination
);