/* eslint-disable no-unused-vars */
import React from "react";
import Logo from "../assets/Final_logo_02.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      {/* Header-start */}
      <div className="main-header-wrapper">
        <div className="header w-full h-[5vw] flex justify-between py-5 px-2">
          <div className="Policy h-full w-[20%] flex justify-center items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={24}
              height={24}
              color={"#000000"}
              fill={"none"}
            >
              <path
                d="M11 6H15.5C17.9853 6 20 8.01472 20 10.5C20 12.9853 17.9853 15 15.5 15H4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.99998 12C6.99998 12 4.00001 14.2095 4 15C3.99999 15.7906 7 18 7 18"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-[1.5vw] max-sm:text-[2vw]">30 days return Policy</span>
          </div>
          <div className="Logo h-full w-[60%] flex justify-center items-center">
            <h1 className="text-[2vw] monsterrat">
            <Link to="/">
              <img className="w-[10vw] max-sm:w-[25vw]" src={Logo} alt="" />
            </Link>
            </h1>
          </div>
          <div className="LocalStores h-full w-[20%] flex justify-center items-center gap-1">
            <span className="text-[1.5vw] max-sm:text-[2.3vw]">our store</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={24}
              height={24}
              color={"#000000"}
              fill={"none"}
            >
              <path
                d="M13.6177 21.367C13.1841 21.773 12.6044 22 12.0011 22C11.3978 22 10.8182 21.773 10.3845 21.367C6.41302 17.626 1.09076 13.4469 3.68627 7.37966C5.08963 4.09916 8.45834 2 12.0011 2C15.5439 2 18.9126 4.09916 20.316 7.37966C22.9082 13.4393 17.599 17.6389 13.6177 21.367Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M15.5 11C15.5 12.933 13.933 14.5 12 14.5C10.067 14.5 8.5 12.933 8.5 11C8.5 9.067 10.067 7.5 12 7.5C13.933 7.5 15.5 9.067 15.5 11Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
