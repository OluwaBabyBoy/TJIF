/** @format */

import React from "react";
import styles from "./style.module.css";
import Vision from "./Vision";
import Leadership from "./Leadership";

export default function About({ about }) {
  return (
    <div className={styles.about} ref={about}>
      <h2>About TJIF Foundation</h2>
      <p>
        For over two decades, we've been committed to creating sustainable
        change and empowering communities worldwide.
      </p>

      <Vision />
      <Leadership />
    </div>
  );
}
