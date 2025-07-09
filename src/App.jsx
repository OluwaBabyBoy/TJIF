/** @format */

import React, { useEffect, useRef } from "react";
import NavBar from "./components/Navbar/NavBar";
import "./style.css";
import Home from "./components/Home/Home";
import Reach from "./components/Reach/Reach";
import About from "./components/About/About";
import Programs from "./components/Programs/Programs";
import Involve from "./components/Involved/Involve";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Blog from "./components/Blog/Blog";

export default function App() {
  const home = useRef(null);
  const about = useRef(null);
  const program = useRef(null);

  const involve = useRef(null);
  const blog = useRef(null);
  const contact = useRef(null);

  const scrollTo = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop - 40,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const scrollDonate = (elementDonate) => {
    window.scrollTo({
      top: elementDonate.current.offsetTop + 150,
      behavior: "smooth",
    });
  };
  return (
    <>
      <NavBar
        scrollTo={scrollTo}
        home={home}
        about={about}
        program={program}
        blog={blog}
        contact={contact}
        involve={involve}
        scrollDonate={scrollDonate}
      />
      <Home home={home} />
      <Reach />
      <About about={about} />
      <Programs program={program} />
      <Involve involve={involve} />
      <Blog blog={blog} />
      <Contact contact={contact} />
      {/* <Footer /> */}
    </>
  );
}
