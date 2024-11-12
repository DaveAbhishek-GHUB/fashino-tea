/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";

function SubHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      <div className="main-subheader-container mb-3">
        <div className="subheader w-full h-12 sm:h-[3vw] flex items-center">
          {/* Hamburger Menu Button - Only visible on small screens */}
          <button 
            className="sm:hidden ml-4 p-2"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="18" x2="20" y2="18" />
              </svg>
            )}
          </button>

          {/* Navigation Links - Hidden on small screens */}
          <div className="hidden sm:flex navlinks-wrapper w-[70%] h-full items-center gap-[5vw] px-10 text-[1.5vw]">
            <Link to="/teablends">Tea-blends</Link>
            <Link to="/herbaltea">Herbal-Tea</Link>
            <Link to="/greentea">Green-Tea</Link>
            <Link to="/matcha">Matcha</Link>
          </div>

          {/* User Icons */}
          <div className="user-icons-wrapper ml-auto sm:w-[30%] h-full flex justify-center items-center gap-4 sm:gap-[3vw] pr-4">
            <div className="profile-icon-wrapper">
              <Link to="/account">              
              <svg
                className="w-6 sm:w-[2vw]"
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
              </Link>
            </div>
            <div className="cart-icon-wrapper">
              <svg
                className="w-6 sm:w-[2vw]"
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

      {/* Mobile Menu - Positioned right after the subheader */}
      {isMenuOpen && (
        <div className="sm:hidden w-full bg-white shadow-lg border-t">
          <div className="flex flex-col py-2">
            <Link to="/teablends" className="px-6 py-3 hover:bg-gray-100 text-gray-800">
              Tea-blends
            </Link>
            <Link to="/herbaltea" className="px-6 py-3 hover:bg-gray-100 text-gray-800">
              Herbal-Tea
            </Link>
            <Link to="/greentea" className="px-6 py-3 hover:bg-gray-100 text-gray-800">
              Green-Tea
            </Link>
            <Link to="/matcha" className="px-6 py-3 hover:bg-gray-100 text-gray-800">
              Matcha
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default SubHeader;