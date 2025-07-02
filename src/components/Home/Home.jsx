/** @format */

import React from "react";
import styles from "./style.module.css";
import image from "../../assets/image2.png";

export default function Home() {
  return (
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
  );
}
