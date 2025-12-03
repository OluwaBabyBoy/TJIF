/** @format */

import React from "react";
import styles from "./style.module.css";

export default function Leadership() {
  const Leaders = [
    {
      h4: "Dr. John Doe",
      span: "Executive Manager",
      p: "25+ years in international development and humanitarian work.",
    },

    {
      h4: "James Doe",
      span: "Programs Director",
      p: "Former UN program manager with expertise in sustainable development.",
    },
    {
      h4: "Mit Joe",
      span: "Education Lead",
      p: "Specialist in community-based education and literacy programs.",
    },
    {
      h4: "Joe Jane",
      span: "Partnerships Director",
      p: "Building strategic alliances for maximum global impact.",
    },
    // {
    //   h4: "Anna Smith",
    //   span: "Finance Manager",
    //   p: "Ensuring transparency and accountability in all financial matters.",
    // },
  ];
  return (
    <div className={styles.leader}>
      <h2>Our Leadership Team</h2>

      <div className={styles.flexContainer}>
        {Leaders.map((data, index) => (
          <div key={index} className={styles.flex}>
            <svg
              fill='none'
              viewBox='0 0 512 512'
              id='_x30_1'
              version='1.1'
              xml:space='preserve'
              xmlns='http://www.w3.org/2000/svg'
              xmlns:xlink='http://www.w3.org/1999/xlink'
            >
              <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
              <g
                id='SVGRepo_tracerCarrier'
                stroke-linecap='round'
                stroke-linejoin='round'
              ></g>
              <g id='SVGRepo_iconCarrier'>
                {" "}
                <g>
                  {" "}
                  <ellipse cx='256' cy='130' rx='110' ry='130'></ellipse>{" "}
                  <path d='M36,478.191C36,390.825,134.497,320,256,320s220,70.825,220,158.191v0C476,496.863,460.863,512,442.192,512H69.808 C51.137,512,36,496.863,36,478.191L36,478.191z'></path>{" "}
                </g>{" "}
              </g>
            </svg>{" "}
            <div>
              <h4>{data.h4}</h4>
              <span>{data.span}</span>
              <p>{data.p}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}