/** @format */

import React, { useEffect } from "react";
import styles from "./style.module.css";

export default function Contact() {
  useEffect(() => window.scroll(0, 0));

  function Submit(e) {
    e.preventDefault();
  }
  return (
    <div className={styles.contact}>
      <div className={styles.container}>
        <h2>Contact Us</h2>
        <p>
          Get in touch with us to learn more about our work or to discuss
          partnership opportunities.
        </p>
      </div>

      <div className={styles.message}>
        <h2>Send us a message</h2>

        <form className={styles.form} onSubmit={Submit}>
          <div className={styles.div}>
            <div>
              <label htmlFor=''>First Name</label>
              <input type='text' name='' id='' placeholder='First name' />
            </div>
            <div>
              {" "}
              <label htmlFor=''>Last Name</label>
              <input type='text' name='' id='' placeholder='Last name' />
            </div>
          </div>
          <div className={styles.email}>
            <label htmlFor=''>Email Address</label>
            <input
              type='email'
              name=''
              id=''
              placeholder='your.email@example.com'
            />
          </div>
          <div className={styles.email}>
            <label htmlFor=''>Subject</label>
            <textarea name='' id='' placeholder=''></textarea>
          </div>

          <button type='submit'>Send a message</button>
        </form>
      </div>
    </div>
  );
}
