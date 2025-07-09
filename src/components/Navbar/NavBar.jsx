/** @format */

import React from "react";
import styles from "./style.module.css";

export default function NavBar({
  scrollTo,
  home,
  about,
  involve,
  program,
  blog,
  contact,
  scrollDonate,
}) {
  return (
    <nav className={styles.nav}>
      TJIF
      <ul>
        <li onClick={() => scrollTo(home)}>Home</li>
        <li onClick={() => scrollTo(about)}>About Us</li>
        <li onClick={() => scrollTo(program)}>Programs</li>
        <li onClick={() => scrollTo(involve)}>Get Involved</li>
        <li onClick={() => scrollTo(blog)}>Blog</li>
        <li onClick={() => scrollTo(contact)}>Contact</li>
      </ul>
      <button onClick={() => scrollDonate(involve)}>Donate Now</button>
    </nav>
  );
}
