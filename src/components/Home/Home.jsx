/** @format */

import React, { useEffect } from "react";
import styles from "./style.module.css";
import image from "../../assets/image2.png";
import Reach from "../Reach/Reach";
import About from "../About/About";
import Programs from "../Programs/Programs";
import Involve from "../Involved/Involve";
import Blog from "../Blog/Blog";
import Contact from "../Contact/Contact";

export default function Home() {
  useEffect(() => window.scroll(0, 0));
  return (
    <>
      <div className={styles.home}>
        <div>
          <h2>
            {" "}
            Transforming Lives, <span>Building Hope</span>
          </h2>

          <p>
            We're dedicated to creating lasting change in communities worldwide
            through education, healthcare, and sustainable development programs.
          </p>

          <div className={styles.buttons}>
            <button className={styles.impact}>Our Impact</button>
            <button className={styles.mission}>Join Our Mission</button>
          </div>
        </div>

        <img src={image} alt='' />
      </div>
      <Reach />
      {/* <About />
      <Programs />
      <Involve />
      <Blog />
      <Contact /> */}
    </>
  );
}
