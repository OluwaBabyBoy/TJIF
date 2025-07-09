/** @format */

import React from "react";
import styles from "./style.module.css";
import Svg from "./Svg";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.text}>
        <div>Location</div>
        <div>phone number</div>
        <div>email</div>
      </div>
      <div className={styles.quicks}>
        <div>Quick Links</div>
        <div className={styles.svg}>
          <Svg />
        </div>
      </div>
    </div>
  );
}
