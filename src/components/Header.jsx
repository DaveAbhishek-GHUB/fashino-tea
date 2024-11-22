/* eslint-disable no-unused-vars */
import React from "react";
import Logo from "../assets/Final_logo_02.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      {/* Header-start */}
      <div className="main-header-wrapper">
        <div className="header w-full h-[5vw] flex justify-between py-5 px-2 my-2">
          <div className="Logo h-full w-full flex justify-center items-center">
            <h1 className="text-[2vw] monsterrat">
            <Link to="/">
              <img className="w-[10vw] max-sm:w-[35vw]" src={Logo} alt="" />
            </Link>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
