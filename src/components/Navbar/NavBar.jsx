/** @format */

import React from "react";
import styles from "./style.module.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      TJIF
      <ul>
        <li>
          <Link to='/TJIF'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About Us</Link>
        </li>
        <li>
          <Link to='/programs'> Programs</Link>
        </li>
        <li>
          <Link to='/involve'>Get Involved</Link>
        </li>
        <li>
          <Link to='/blog'>Blog</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
      <button>
        <Link to='/involve'>Donate Now</Link>
      </button>
    </nav>
  );
}
