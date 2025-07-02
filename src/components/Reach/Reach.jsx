/** @format */

import React from "react";
import styles from "./style.module.css";

export default function Reach() {
  return (
    <div className={styles.reach}>
      <div className={`${styles.text} ${styles.one}`}>
        <h2>120+</h2>
        <span>Project Completed</span>
      </div>
      <div className={`${styles.text} ${styles.two}`}>
        {" "}
        <h2>35</h2>
        <span>Countries Reached</span>
      </div>
      <div className={`${styles.text} ${styles.three}`}>
        {" "}
        <h2>$2.5M</h2>
        <span>Funds Raised</span>
      </div>
      <div className={`${styles.text} ${styles.four}`}>
        {" "}
        <h2>5,000+</h2>
        <span> Active Volunteers</span>
      </div>
    </div>
  );
}
