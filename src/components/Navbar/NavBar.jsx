/** @format */

import React from "react";
import styles from "./style.module.css";

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      TJIF
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Programs</li>
        <li>Get Involved</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
      <button>Donate Now</button>
    </nav>
  );
}
