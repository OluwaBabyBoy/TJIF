/** @format */

import React, { useEffect, useState } from "react";
import styles from "./style.module.css";

export default function Blog() {
  useEffect(() => window.scroll(0, 0));

  const [active, setActive] = useState("program");

  const Information = [
    {
      svg: "<svg width='18px' height='18px' viewBox='0 0 24 24'fill='none' xmlns='http://www.w3.org/2000/svg'><g id='SVGRepo_bgCarrier' stroke-width='0'></g><g id='SVGRepo_tracerCarrier'stroke-linecap='round'stroke-linejoin='round'></g><g id='SVGRepo_iconCarrier'><path fill-rule='evenodd'clip-rule='evenodd'd='M3 6.1519V19.3095C3.99197 18.8639 5.40415 18.4 7 18.4C8.58915 18.4 9.9999 18.8602 11 19.3094V6.1519C10.7827 6.02653 10.4894 5.8706 10.1366 5.71427C9.31147 5.34869 8.20352 5 7 5C5.26385 5 3.74016 5.72499 3 6.1519ZM13 6.1519V19.3578C13.9977 18.9353 15.41 18.5 17 18.5C18.596 18.5 20.0095 18.9383 21 19.3578V6.1519C20.2598 5.72499 18.7362 5 17 5C15.7965 5 14.6885 5.34869 13.8634 5.71427C13.5106 5.8706 13.2173 6.02653 13 6.1519ZM12 4.41985C11.7302 4.26422 11.3734 4.07477 10.9468 3.88572C9.96631 3.45131 8.57426 3 7 3C4.69187 3 2.76233 3.97065 1.92377 4.46427C1.30779 4.82687 1 5.47706 1 6.11223V20.0239C1 20.6482 1.36945 21.1206 1.79531 21.3588C2.21653 21.5943 2.78587 21.6568 3.30241 21.3855C4.12462 20.9535 5.48348 20.4 7 20.4C8.90549 20.4 10.5523 21.273 11.1848 21.6619C11.6757 21.9637 12.2968 21.9725 12.7959 21.6853C13.4311 21.32 15.0831 20.5 17 20.5C18.5413 20.5 19.9168 21.0305 20.7371 21.4366C21.6885 21.9075 23 21.2807 23 20.0593V6.11223C23 5.47706 22.6922 4.82687 22.0762 4.46427C21.2377 3.97065 19.3081 3 17 3C15.4257 3 14.0337 3.45131 13.0532 3.88572C12.6266 4.07477 12.2698 4.26422 12 4.41985Z'fill='#ffc400'></path></g></svg>",
      text: "Education Update",
      date: "December 15, 2024",
      text2: "New School Opens in Rural Bangladesh",
      span: " We're excited to announce the opening of our 46th school, providing education access to 500 more children in rural Bangladesh.",
      p: "Read full story",
    },

    {
      svg: `<svg width='64px'height='64px' fill="#4a2358" viewBox="0 0 32 32" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:serif="http://www.serif.com/" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M4.234,6.266c-1.409,1.45 -2.202,3.415 -2.202,5.464c-0,2.05 0.793,4.015 2.202,5.464l9.625,9.899c0.568,0.584 1.339,0.91 2.143,0.91c0.803,0 1.575,-0.326 2.143,-0.91c1.743,-1.793 9.617,-9.907 9.617,-9.907c1.409,-1.449 2.202,-3.414 2.202,-5.464c0,-2.05 -0.793,-4.014 -2.202,-5.464c-0,0 -0,0 -0,0c-1.419,-1.459 -3.345,-2.277 -5.352,-2.277c-2.007,-0 -3.932,0.818 -5.351,2.277c-0,0 -1.065,1.095 -1.065,1.095c0,0 -1.057,-1.087 -1.057,-1.087c-1.419,-1.459 -3.344,-2.277 -5.351,-2.277c-2.007,0 -3.933,0.818 -5.352,2.277m1.434,1.395c1.039,-1.069 2.448,-1.672 3.918,-1.672c1.47,0 2.878,0.603 3.917,1.672c0,-0 1.774,1.824 1.774,1.824c0.188,0.193 0.447,0.303 0.717,0.303c0.27,-0 0.529,-0.11 0.717,-0.303l1.782,-1.833c1.039,-1.068 2.447,-1.671 3.917,-1.671c1.47,-0 2.878,0.603 3.918,1.671c0.003,0.004 0.006,0.007 0.01,0.011c1.039,1.069 1.626,2.533 1.626,4.059c0,1.526 -0.587,2.991 -1.636,4.07c-0,-0 -7.874,8.114 -9.617,9.907c-0.188,0.193 -0.443,0.304 -0.709,0.304c-0.266,0 -0.521,-0.111 -0.709,-0.304l-9.625,-9.899c-1.049,-1.079 -1.636,-2.544 -1.636,-4.07c-0,-1.526 0.587,-2.99 1.636,-4.069"></path><path d="M14.998,15.003l-1.997,-0c-0.552,-0 -1,0.448 -1,1c0,0.552 0.448,1 1,1l1.997,-0l-0,1.997c-0,0.552 0.448,1 1,1c0.552,-0 1,-0.448 1,-1l-0,-1.997l1.997,-0c0.552,-0 1,-0.448 1,-1c-0,-0.552 -0.448,-1 -1,-1l-1.997,-0l-0,-1.997c-0,-0.552 -0.448,-1 -1,-1c-0.552,0 -1,0.448 -1,1l-0,1.997Z"></path></g></svg>`,
      text: "Healthcare Impact",
      date: "December 25, 2024",
      text2: "Mobile Clinics Reach 10,000 Patients",
      span: "Our mobile health clinics have successfully provided healthcare services to over 10,000 patients in remote areas this year.",
      p: "Read full story",
    },

    {
      svg: `  <svg
            width='30px'
            height='30px'
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
              <circle
                cx='12'
                cy='8'
                r='2.5'
                stroke=' #ffc400
'
                stroke-linecap='round'
              ></circle>{" "}
              <path
                d='M13.7679 6.5C13.9657 6.15743 14.2607 5.88121 14.6154 5.70625C14.9702 5.5313 15.3689 5.46548 15.7611 5.51711C16.1532 5.56874 16.5213 5.73551 16.8187 5.99632C17.1161 6.25713 17.3295 6.60028 17.4319 6.98236C17.5342 7.36445 17.521 7.76831 17.3939 8.14288C17.2667 8.51745 17.0313 8.8459 16.7175 9.08671C16.4037 9.32751 16.0255 9.46985 15.6308 9.49572C15.2361 9.52159 14.8426 9.42983 14.5 9.23205'
                stroke=' #ffc400
'
              ></path>{" "}
              <path
                d='M10.2321 6.5C10.0343 6.15743 9.73935 5.88121 9.38458 5.70625C9.02981 5.5313 8.63113 5.46548 8.23895 5.51711C7.84677 5.56874 7.47871 5.73551 7.18131 5.99632C6.88391 6.25713 6.67053 6.60028 6.56815 6.98236C6.46577 7.36445 6.47899 7.76831 6.60614 8.14288C6.73329 8.51745 6.96866 8.8459 7.28248 9.08671C7.5963 9.32751 7.97448 9.46985 8.36919 9.49572C8.76391 9.52159 9.15743 9.42983 9.5 9.23205'
                stroke=' #ffc400
'
              ></path>{" "}
              <path
                d='M12 12.5C16.0802 12.5 17.1335 15.8022 17.4054 17.507C17.4924 18.0524 17.0523 18.5 16.5 18.5H7.5C6.94771 18.5 6.50763 18.0524 6.59461 17.507C6.86649 15.8022 7.91976 12.5 12 12.5Z'
                stroke=' #ffc400
'
                stroke-linecap='round'
              ></path>{" "}
              <path
                d='M19.2965 15.4162L18.8115 15.5377L19.2965 15.4162ZM13.0871 12.5859L12.7179 12.2488L12.0974 12.9283L13.0051 13.0791L13.0871 12.5859ZM17.1813 16.5L16.701 16.639L16.8055 17H17.1813V16.5ZM15.5 12C16.5277 12 17.2495 12.5027 17.7783 13.2069C18.3177 13.9253 18.6344 14.8306 18.8115 15.5377L19.7816 15.2948C19.5904 14.5315 19.2329 13.4787 18.578 12.6065C17.9126 11.7203 16.9202 11 15.5 11V12ZM13.4563 12.923C13.9567 12.375 14.6107 12 15.5 12V11C14.2828 11 13.3736 11.5306 12.7179 12.2488L13.4563 12.923ZM13.0051 13.0791C15.3056 13.4614 16.279 15.1801 16.701 16.639L17.6616 16.361C17.1905 14.7326 16.019 12.5663 13.1691 12.0927L13.0051 13.0791ZM18.395 16H17.1813V17H18.395V16ZM18.8115 15.5377C18.8653 15.7526 18.7075 16 18.395 16V17C19.2657 17 20.0152 16.2277 19.7816 15.2948L18.8115 15.5377Z'
                fill=' #ffc400
'
              ></path>{" "}
              <path
                d='M10.9129 12.5859L10.9949 13.0791L11.9026 12.9283L11.2821 12.2488L10.9129 12.5859ZM4.70343 15.4162L5.18845 15.5377L4.70343 15.4162ZM6.81868 16.5V17H7.19453L7.29898 16.639L6.81868 16.5ZM8.49999 12C9.38931 12 10.0433 12.375 10.5436 12.923L11.2821 12.2488C10.6264 11.5306 9.71723 11 8.49999 11V12ZM5.18845 15.5377C5.36554 14.8306 5.68228 13.9253 6.22167 13.2069C6.75048 12.5027 7.47226 12 8.49999 12V11C7.0798 11 6.08743 11.7203 5.42199 12.6065C4.76713 13.4787 4.40955 14.5315 4.21841 15.2948L5.18845 15.5377ZM5.60498 16C5.29247 16 5.13465 15.7526 5.18845 15.5377L4.21841 15.2948C3.98477 16.2277 4.73424 17 5.60498 17V16ZM6.81868 16H5.60498V17H6.81868V16ZM7.29898 16.639C7.72104 15.1801 8.69435 13.4614 10.9949 13.0791L10.8309 12.0927C7.98101 12.5663 6.8095 14.7326 6.33838 16.361L7.29898 16.639Z'
                fill=' #ffc400
'
              ></path>{" "}
            </g>
          </svg>`,
      text: "Volunteer Story",
      date: "December 31, 2024",
      text2: "Volunteer Spotlight: Sarah's Journey",
      span: "Meet Sarah, a dedicated volunteer who has been working with our education programs for over three years, making a real difference.",
      p: "Read full story",
    },
  ];
  return (
    <div className={styles.program}>
      <div className={styles.container}>
        <h2>Latest News & Stories</h2>
        <p>
          Stay updated with our latest projects, impact stories, and insights
          from the field.
        </p>
      </div>
      <div className={styles.container2}>
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
                </div>
              </div>
              <div className={styles.span2}>
                <span>{data.date}</span>
                <h2>{data.text2}</h2>
                <span>{data.span}</span>

                <p>{data.p}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
