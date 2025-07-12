/** @format */

import React from "react";
import styles from "./style.module.css";
import { Link } from "react-router-dom";

export default function MobileNavBar({ isSidebar, onClose }) {
  return (
    <div
      className={`${styles.sidebar} ${
        isSidebar ? styles.active : styles["fade-out"]
      }`}
    >
      <div className={styles.close}>
        <span>TJIF</span>
        <svg
          className={`${isSidebar ? styles.active : styles["fade-out"]}`}
          onClick={onClose}
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M6.758 17.243L12.001 12M17.244 6.757L12 12M12 12L6.758 6.757M12.001 12L17.244 17.243'
            stroke='#2B2B2B'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </div>

      <ul className={styles.ul}>
        <li>
          <Link to='/' onClick={onClose}>
            Home
          </Link>
        </li>
        <li>
          <Link to='/about' onClick={onClose}>
            About Us
          </Link>
        </li>
        <li>
          <Link to='/programs' onClick={onClose}>
            {" "}
            Programs
          </Link>
        </li>
        <li>
          <Link to='/involve' onClick={onClose}>
            Get Involved
          </Link>
        </li>
        <li>
          <Link to='/blog' onClick={onClose}>
            Blog
          </Link>
        </li>
        <li>
          <Link to='/contact' onClick={onClose}>
            Contact
          </Link>
        </li>
      </ul>
      <button>
        <Link to='/involve' onClick={onClose}>
          Donate Now
        </Link>
      </button>
    </div>
  );
}
