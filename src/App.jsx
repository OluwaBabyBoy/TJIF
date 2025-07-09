/** @format */

import React, { useEffect, useRef } from "react";
import NavBar from "./components/Navbar/NavBar";
import "./style.css";

import Home from "./components/Home/Home";
import About from "./components/About/About";
import Programs from "./components/Programs/Programs";
import Involve from "./components/Involved/Involve";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Blog from "./components/Blog/Blog";
import { HashRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <HashRouter>
      <NavBar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />

        <Route path='/programs' element={<Programs />} />
        <Route path='/involve' element={<Involve />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </HashRouter>
  );
}
