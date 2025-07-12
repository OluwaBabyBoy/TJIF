/** @format */

import React, { useState } from "react";
import styles from "./style.module.css";
import { Link } from "react-router-dom";
import MobileNavBar from "./MobileNavBar";
import logo from "../../assets/logo.png";

export default function NavBar() {
  const [isSidebar, setIsSidebar] = useState(false);

  function handleSidebar() {
    setIsSidebar(true);
  }

  function onClose() {
    setIsSidebar(false);
  }
  return (
    <nav className={styles.nav}>
      <img src={logo} alt='' />
      <ul>
        <li>
          <Link to='/'>Home</Link>
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
      <svg
        className={styles.svg}
        onClick={handleSidebar}
        width='24px'
        height='24px'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
        <g
          id='SVGRepo_tracerCarrier'
          stroke-linecap='round'
          stroke-linejoin='round'
        ></g>
        <g id='SVGRepo_iconCarrier'>
          {" "}
          <path
            d='M4 6H20M4 12H20M4 18H20'
            stroke='#000000'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
          ></path>{" "}
        </g>
      </svg>
      <MobileNavBar onClose={onClose} isSidebar={isSidebar} />
    </nav>
  );
}
