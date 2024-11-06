/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

function SubHeader() {
  return (
    <>
      <div className="main-subheader-container mb-3">
        <div className="subheader w-full h-[3vw] flex">
          <div className="navlinks-wrapper w-[70%] h-full flex items-center gap-[5vw] px-10 text-[1.5vw]">
            <Link>Tea</Link>
            <Link>Matcha</Link>
            <Link>Tea Accessories</Link>
            <Link>Gifts</Link>
          </div>
          <div className="user-icons-wrapper w-[30%] h-full flex justify-center items-center gap-[3vw]">
            <div className="favourite-icon-wrapper">
              <svg
                className="w-[2vw]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={24}
                height={24}
                color={"#000000"}
                fill={"none"}
              >
                <path
                  d="M19.4626 3.99415C16.7809 2.34923 14.4404 3.01211 13.0344 4.06801C12.4578 4.50096 12.1696 4.71743 12 4.71743C11.8304 4.71743 11.5422 4.50096 10.9656 4.06801C9.55962 3.01211 7.21909 2.34923 4.53744 3.99415C1.01807 6.15294 0.221721 13.2749 8.33953 19.2834C9.88572 20.4278 10.6588 21 12 21C13.3412 21 14.1143 20.4278 15.6605 19.2834C23.7783 13.2749 22.9819 6.15294 19.4626 3.99415Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="profile-icon-wrapper">
              <svg
                className="w-[2vw]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={24}
                height={24}
                color={"#000000"}
                fill={"none"}
              >
                <path
                  d="M6.57757 15.4816C5.1628 16.324 1.45336 18.0441 3.71266 20.1966C4.81631 21.248 6.04549 22 7.59087 22H16.4091C17.9545 22 19.1837 21.248 20.2873 20.1966C22.5466 18.0441 18.8372 16.324 17.4224 15.4816C14.1048 13.5061 9.89519 13.5061 6.57757 15.4816Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
            <div className="cart-icon-wrapper">
              <svg
                className="w-[2vw]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={24}
                height={24}
                color={"#000000"}
                fill={"none"}
              >
                <path
                  d="M8 16H15.2632C19.7508 16 20.4333 13.1808 21.261 9.06908C21.4998 7.88311 21.6192 7.29013 21.3321 6.89507C21.045 6.5 20.4947 6.5 19.3941 6.5H6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M8 16L5.37873 3.51493C5.15615 2.62459 4.35618 2 3.43845 2H2.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M8.88 16H8.46857C7.10522 16 6 17.1513 6 18.5714C6 18.8081 6.1842 19 6.41143 19H17.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle
                  cx="10.5"
                  cy="20.5"
                  r="1.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <circle
                  cx="17.5"
                  cy="20.5"
                  r="1.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SubHeader;
