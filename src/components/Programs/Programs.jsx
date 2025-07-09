/** @format */

import React, { useEffect, useState } from "react";
import styles from "./style.module.css";

export default function Programs() {
  useEffect(() => window.scroll(0, 0));

  const [active, setActive] = useState("program");

  const Information = [
    {
      svg: " <svg width='64px'height='64px'viewBox='0 0 24 24'xmlns='http://www.w3.org/2000/svg'fill='#ffffff'><g id='SVGRepo_bgCarrier' stroke-width='0'></g><g id='SVGRepo_tracerCarrier'stroke-linecap='round'stroke-linejoin='round'></g><g id='SVGRepo_iconCarrier'><path d='M17.673 5.606a3326.02 3326.02 0 0 1-5.671-2.674L.138 8.524l2.03.98L2 9.531V20h1v-9.626l.72-.124.28.135v5.288c0 .914 5.206 3.533 6.249 4.049a3.89 3.89 0 0 0 3.48-.026C20 16.486 20 15.895 20 15.673v-5.288l3.854-1.857s-3.8-1.801-6.181-2.922zM19 15.504a51.526 51.526 0 0 1-5.726 3.302 2.884 2.884 0 0 1-2.582.02A40.184 40.184 0 0 1 5 15.521v-4.655l7 3.373 7-3.373zm-7-2.373L5.416 9.958l6.469-1.115-.17-.987-7.85 1.354-1.403-.676 9.537-4.495c.825.393 8.523 4.014 9.542 4.494z'></path><path fill='none' d='M0 0h24v24H0z'></path></g></svg>",
      text: "Education",
      text2: "School Building Initiative",
      span: "   Building and renovating schools in underserved communities, providing safe learning environments for thousands of children",
      progress: "85%",
      p: "45 schools, 15,000 students",
    },

    {
      svg: `<svg width='64px'height='64px' fill="#ffffff" viewBox="0 0 32 32" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:serif="http://www.serif.com/" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M4.234,6.266c-1.409,1.45 -2.202,3.415 -2.202,5.464c-0,2.05 0.793,4.015 2.202,5.464l9.625,9.899c0.568,0.584 1.339,0.91 2.143,0.91c0.803,0 1.575,-0.326 2.143,-0.91c1.743,-1.793 9.617,-9.907 9.617,-9.907c1.409,-1.449 2.202,-3.414 2.202,-5.464c0,-2.05 -0.793,-4.014 -2.202,-5.464c-0,0 -0,0 -0,0c-1.419,-1.459 -3.345,-2.277 -5.352,-2.277c-2.007,-0 -3.932,0.818 -5.351,2.277c-0,0 -1.065,1.095 -1.065,1.095c0,0 -1.057,-1.087 -1.057,-1.087c-1.419,-1.459 -3.344,-2.277 -5.351,-2.277c-2.007,0 -3.933,0.818 -5.352,2.277m1.434,1.395c1.039,-1.069 2.448,-1.672 3.918,-1.672c1.47,0 2.878,0.603 3.917,1.672c0,-0 1.774,1.824 1.774,1.824c0.188,0.193 0.447,0.303 0.717,0.303c0.27,-0 0.529,-0.11 0.717,-0.303l1.782,-1.833c1.039,-1.068 2.447,-1.671 3.917,-1.671c1.47,-0 2.878,0.603 3.918,1.671c0.003,0.004 0.006,0.007 0.01,0.011c1.039,1.069 1.626,2.533 1.626,4.059c0,1.526 -0.587,2.991 -1.636,4.07c-0,-0 -7.874,8.114 -9.617,9.907c-0.188,0.193 -0.443,0.304 -0.709,0.304c-0.266,0 -0.521,-0.111 -0.709,-0.304l-9.625,-9.899c-1.049,-1.079 -1.636,-2.544 -1.636,-4.07c-0,-1.526 0.587,-2.99 1.636,-4.069"></path><path d="M14.998,15.003l-1.997,-0c-0.552,-0 -1,0.448 -1,1c0,0.552 0.448,1 1,1l1.997,-0l-0,1.997c-0,0.552 0.448,1 1,1c0.552,-0 1,-0.448 1,-1l-0,-1.997l1.997,-0c0.552,-0 1,-0.448 1,-1c-0,-0.552 -0.448,-1 -1,-1l-1.997,-0l-0,-1.997c-0,-0.552 -0.448,-1 -1,-1c-0.552,0 -1,0.448 -1,1l-0,1.997Z"></path></g></svg>`,
      text: "Healthcare",
      text2: "Mobile Health Clinics",
      span: "Bringing essential healthcare services to remote communities through our fleet of mobile medical units.",
      progress: "72%",
      p: "25 clinics, 50,000 patients",
    },

    {
      svg: `<svg width='64px'height='64px' viewBox="0 0 24 24" fill="none" xmlns=" http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11.25 7.84748C10.3141 8.10339 9.75 8.82154 9.75 9.5C9.75 10.1785 10.3141 10.8966 11.25 11.1525V7.84748Z" fill="#ffffff"></path> <path d="M12.75 12.8475V16.1525C13.6859 15.8966 14.25 15.1785 14.25 14.5C14.25 13.8215 13.6859 13.1034 12.75 12.8475Z" fill="#ffffff"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V6.31673C14.3804 6.60867 15.75 7.83361 15.75 9.5C15.75 9.91421 15.4142 10.25 15 10.25C14.5858 10.25 14.25 9.91421 14.25 9.5C14.25 8.82154 13.6859 8.10339 12.75 7.84748V11.3167C14.3804 11.6087 15.75 12.8336 15.75 14.5C15.75 16.1664 14.3804 17.3913 12.75 17.6833V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V17.6833C9.61957 17.3913 8.25 16.1664 8.25 14.5C8.25 14.0858 8.58579 13.75 9 13.75C9.41421 13.75 9.75 14.0858 9.75 14.5C9.75 15.1785 10.3141 15.8966 11.25 16.1525V12.6833C9.61957 12.3913 8.25 11.1664 8.25 9.5C8.25 7.83361 9.61957 6.60867 11.25 6.31673V6C11.25 5.58579 11.5858 5.25 12 5.25Z" fill="#ffffff"></path> </g></svg>`,
      text: "Economic",
      text2: "Microfinance Program",
      span: "Providing small loans and financial literacy training to help families start businesses and achieve economic independence.",
      progress: "68%",
      p: "2,500 loans, 85% success rate",
    },
  ];
  return (
    <div className={styles.program}>
      <div className={styles.container}>
        <h2>Our Programs & Initiatives</h2>
        <p>
          Discover our comprehensive programs designed to create sustainable
          change and empower communities worldwide.
        </p>
      </div>
      <div className={styles.container2}>
        <div className={styles.button}>
          <span
            className={active === "program" ? styles.active : styles.span}
            onClick={() => setActive("program")}
          >
            All Programs
          </span>
          <span
            className={active === "education" ? styles.active : styles.span}
            onClick={() => setActive("education")}
          >
            Education
          </span>
          <span
            className={active === "healthcare" ? styles.active : styles.span}
            onClick={() => setActive("healthcare")}
          >
            Healthcare
          </span>
          <span
            className={active === "economic" ? styles.active : styles.span}
            onClick={() => setActive("economic")}
          >
            Economic
          </span>
        </div>
        <div className={styles.container3}>
          {Information.filter((item) => {
            if (!active || active === "program") return true;
            return item.text.toLowerCase() === active;
          }).map((data, index) => (
            <div className={styles.div} key={index}>
              <div className={styles.div2}>
                <div
                  dangerouslySetInnerHTML={{ __html: data.svg }}
                  className={styles.svg}
                />
                <div className={styles.text}>
                  <label htmlFor=''>{data.text}</label>
                  <span>{data.text2}</span>
                </div>
              </div>
              <div className={styles.span2}>
                <span>{data.span}</span>
                <div className={styles.progress}>
                  <span>Progress</span>
                  <p>{data.progress}</p>
                </div>
                <div className={styles.bar}>
                  <div
                    className={styles.fill}
                    style={{ width: data.progress }}
                  ></div>
                </div>
                <p>{data.p}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
