/** @format */

import React, { useEffect } from "react";
import styles from "./style.module.css";
import Transform from "./Transform";

export default function Involve() {
  useEffect(() => window.scroll(0, 0));

  const Involve = [
    {
      h4: "Volunteer",
      span: "Share your skills and passion with communities around the world. We offer both remote and field-based opportunities.",
      p1: "Field Programs",
      p2: "Virtual Support",
      p3: "Skills-based Volunteering",
      svg: "<svg width='30px' height='30px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'> <g id='SVGRepo_bgCarrier' stroke-width='0'></g><g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g><g id='SVGRepo_iconCarrier'><circle cx='12'cy='8'r='2.5' stroke=' #ffc400'stroke-linecap='round'></circle><path d='M13.7679 6.5C13.9657 6.15743 14.2607 5.88121 14.6154 5.70625C14.9702 5.5313 15.3689 5.46548 15.7611 5.51711C16.1532 5.56874 16.5213 5.73551 16.8187 5.99632C17.1161 6.25713 17.3295 6.60028 17.4319 6.98236C17.5342 7.36445 17.521 7.76831 17.3939 8.14288C17.2667 8.51745 17.0313 8.8459 16.7175 9.08671C16.4037 9.32751 16.0255 9.46985 15.6308 9.49572C15.2361 9.52159 14.8426 9.42983 14.5 9.23205'stroke=' #ffc400'></path> <path d='M10.2321 6.5C10.0343 6.15743 9.73935 5.88121 9.38458 5.70625C9.02981 5.5313 8.63113 5.46548 8.23895 5.51711C7.84677 5.56874 7.47871 5.73551 7.18131 5.99632C6.88391 6.25713 6.67053 6.60028 6.56815 6.98236C6.46577 7.36445 6.47899 7.76831 6.60614 8.14288C6.73329 8.51745 6.96866 8.8459 7.28248 9.08671C7.5963 9.32751 7.97448 9.46985 8.36919 9.49572C8.76391 9.52159 9.15743 9.42983 9.5 9.23205'stroke=' #ffc400'></path> <path d='M12 12.5C16.0802 12.5 17.1335 15.8022 17.4054 17.507C17.4924 18.0524 17.0523 18.5 16.5 18.5H7.5C6.94771 18.5 6.50763 18.0524 6.59461 17.507C6.86649 15.8022 7.91976 12.5 12 12.5Z'stroke=' #ffc400'stroke-linecap='round'></path><path d='M19.2965 15.4162L18.8115 15.5377L19.2965 15.4162ZM13.0871 12.5859L12.7179 12.2488L12.0974 12.9283L13.0051 13.0791L13.0871 12.5859ZM17.1813 16.5L16.701 16.639L16.8055 17H17.1813V16.5ZM15.5 12C16.5277 12 17.2495 12.5027 17.7783 13.2069C18.3177 13.9253 18.6344 14.8306 18.8115 15.5377L19.7816 15.2948C19.5904 14.5315 19.2329 13.4787 18.578 12.6065C17.9126 11.7203 16.9202 11 15.5 11V12ZM13.4563 12.923C13.9567 12.375 14.6107 12 15.5 12V11C14.2828 11 13.3736 11.5306 12.7179 12.2488L13.4563 12.923ZM13.0051 13.0791C15.3056 13.4614 16.279 15.1801 16.701 16.639L17.6616 16.361C17.1905 14.7326 16.019 12.5663 13.1691 12.0927L13.0051 13.0791ZM18.395 16H17.1813V17H18.395V16ZM18.8115 15.5377C18.8653 15.7526 18.7075 16 18.395 16V17C19.2657 17 20.0152 16.2277 19.7816 15.2948L18.8115 15.5377Z'fill=' #ffc400'></path><path d='M10.9129 12.5859L10.9949 13.0791L11.9026 12.9283L11.2821 12.2488L10.9129 12.5859ZM4.70343 15.4162L5.18845 15.5377L4.70343 15.4162ZM6.81868 16.5V17H7.19453L7.29898 16.639L6.81868 16.5ZM8.49999 12C9.38931 12 10.0433 12.375 10.5436 12.923L11.2821 12.2488C10.6264 11.5306 9.71723 11 8.49999 11V12ZM5.18845 15.5377C5.36554 14.8306 5.68228 13.9253 6.22167 13.2069C6.75048 12.5027 7.47226 12 8.49999 12V11C7.0798 11 6.08743 11.7203 5.42199 12.6065C4.76713 13.4787 4.40955 14.5315 4.21841 15.2948L5.18845 15.5377ZM5.60498 16C5.29247 16 5.13465 15.7526 5.18845 15.5377L4.21841 15.2948C3.98477 16.2277 4.73424 17 5.60498 17V16ZM6.81868 16H5.60498V17H6.81868V16ZM7.29898 16.639C7.72104 15.1801 8.69435 13.4614 10.9949 13.0791L10.8309 12.0927C7.98101 12.5663 6.8095 14.7326 6.33838 16.361L7.29898 16.639Z'fill=' #ffc400'></path></g></svg>",
      button: "Become a Volunteer",
    },

    {
      h4: "Donate",
      span: "Your financial support enables us to expand our programs and create lasting impact in communities worldwide.",
      donate1: "5,000",
      svg: "<svg fill='#4a2358'height='18px'width='18px'version='1.1'xmlns='http://www.w3.org/2000/svg'xmlns:xlink='http://www.w3.org/1999/xlink'viewBox='0 0 32 32'xml:space='preserve'stroke='#4a2358'stroke-width='1.1199999999999999'><g id='SVGRepo_bgCarrier' stroke-width='0'></g> <g id='SVGRepo_tracerCarrier'stroke-linecap='round'stroke-linejoin='round'></g><g id='SVGRepo_iconCarrier'><g id='love'><path id='love_1_'d='M16.032,29.247c-0.092,0-0.185-0.035-0.255-0.105L3.008,16.373c-1.507-1.507-2.337-3.506-2.337-5.629 c0-2.139,0.83-4.147,2.337-5.655c1.506-1.506,3.508-2.335,5.639-2.337c0,0,0.001,0,0.002,0c2.132,0,4.136,0.83,5.643,2.337 l1.74,1.74l1.74-1.74c1.507-1.507,3.511-2.337,5.642-2.337c0.003,0,0.005,0,0.008,0c2.128,0.002,4.129,0.832,5.635,2.337 c1.507,1.508,2.337,3.511,2.337,5.642s-0.83,4.134-2.337,5.642L16.287,29.142C16.216,29.212,16.124,29.247,16.032,29.247z M8.649,3.473c0,0-0.001,0-0.002,0C6.709,3.474,4.888,4.229,3.518,5.599C2.147,6.97,1.392,8.797,1.392,10.744 c0,1.931,0.755,3.749,2.126,5.119l0,0l12.514,12.514l12.514-12.514c1.371-1.371,2.126-3.193,2.126-5.132s-0.755-3.761-2.126-5.132 c-1.37-1.369-3.19-2.124-5.125-2.126c-0.003,0-0.006,0-0.008,0c-1.938,0-3.761,0.754-5.132,2.126l-1.995,1.995 c-0.141,0.141-0.369,0.141-0.51,0l-1.995-1.995C12.412,4.228,10.588,3.473,8.649,3.473z'></path></g><g id='Layer_1'> </g></g></svg>",
      donate2: "10,000",
      donate3: "15,000",
      donate4: "20,000",
      donate5: "25,000",
      donate6: "30,000",
      button: "Donate Now",
    },

    {
      h4: "Partner With Us",
      span: "We collaborate with organizations that share our vision for a better world. Explore partnership opportunities.",
      p1: "Corporate Partnerships",
      p2: "NGO Collaborations",
      p3: "Government Agencies",
      svg: `<svg width="100px" height="100px" viewBox="-0.5 0 25 25" fill="none" xmlns=" http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 22.3201C17.5228 22.3201 22 17.8429 22 12.3201C22 6.79722 17.5228 2.32007 12 2.32007C6.47715 2.32007 2 6.79722 2 12.3201C2 17.8429 6.47715 22.3201 12 22.3201Z" stroke="#ffc400" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M2 12.3201H22" stroke="#ffc400" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 22.3201C13.933 22.3201 15.5 17.8429 15.5 12.3201C15.5 6.79722 13.933 2.32007 12 2.32007C10.067 2.32007 8.5 6.79722 8.5 12.3201C8.5 17.8429 10.067 22.3201 12 22.3201Z" stroke="#ffc400" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`,
      button: "Explore Partnerships",
    },
  ];
  return (
    <div className={styles.involve}>
      <div className={styles.container}>
        <h2>Get Involved</h2>
        <p>
          Join our mission to transform lives and build hope. There are many
          meaningful ways to contribute to our cause.
        </p>
      </div>

      <div className={styles.div}>
        {Involve.map((data, index) => (
          <div className={styles.container2} key={index}>
            <div
              dangerouslySetInnerHTML={{ __html: data.svg }}
              className={styles.svg}
            />
            <div className={styles.text}>
              <h4>{data.h4}</h4>
              <span>{data.span}</span>

              {data.h4 === "Donate" ? (
                <div className={styles.donate}>
                  <div>
                    <span>{data.donate1}</span>
                  </div>
                  <div>
                    <span>{data.donate2}</span>
                  </div>
                  <div>
                    <span>{data.donate3}</span>
                  </div>
                  <div>
                    <span>{data.donate4}</span>
                  </div>
                  <div>
                    <span>{data.donate5}</span>
                  </div>
                  <div>
                    <span>{data.donate6}</span>
                  </div>
                </div>
              ) : (
                <div className={styles.data}>
                  <div>
                    <svg
                      width='18px'
                      height='18px'
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
                          fill-rule='evenodd'
                          clip-rule='evenodd'
                          d='M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L12.7348 11.2045L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z'
                          fill='#ffc400'
                        ></path>{" "}
                      </g>
                    </svg>{" "}
                    <span>{data.p1}</span>
                  </div>
                  <div>
                    <svg
                      width='18px'
                      height='18px'
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
                          fill-rule='evenodd'
                          clip-rule='evenodd'
                          d='M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L12.7348 11.2045L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z'
                          fill='#ffc400'
                        ></path>{" "}
                      </g>
                    </svg>{" "}
                    <span>{data.p2}</span>
                  </div>
                  <div>
                    <svg
                      width='18px'
                      height='18px'
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
                          fill-rule='evenodd'
                          clip-rule='evenodd'
                          d='M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L12.7348 11.2045L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z'
                          fill='#ffc400'
                        ></path>{" "}
                      </g>
                    </svg>{" "}
                    <span>{data.p3}</span>
                  </div>
                </div>
              )}

              <button>{data.button}</button>
            </div>
          </div>
        ))}
      </div>

      <Transform />
    </div>
  );
}
