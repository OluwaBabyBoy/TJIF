/** @format */

import React from "react";
import NavBar from "./components/Navbar/NavBar";
import "./style.css";
import Home from "./components/Home/Home";
import Reach from "./components/Reach/Reach";
import About from "./components/About/About";
import Programs from "./components/Programs/Programs";
import Involve from "./components/Involved/Involve";
import Contact from "./components/Contact/Contact";

export default function App() {
  return (
    <>
      <NavBar />
      <Home />
      <Reach />
      <About />
      <Programs />
      <Involve />
      <Contact />
    </>
  );
}
