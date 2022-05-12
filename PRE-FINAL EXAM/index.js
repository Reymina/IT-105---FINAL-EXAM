import React from "react";
import ReactDOM from "react-dom";
import Header from "./header";
import Footer from "./footer";
import Note from "./note";

ReactDOM.render(
  <div>
    <Header />
    <Note />
    <Footer />
  </div>,
  document.getElementById("app")
);
