/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Cart() {
    const user = useSelector((state) => state.user.user);
    console.log(user);
    const loggedinuser = useSelector((state) => state.user.Loggedin);
    console.log(loggedinuser);

    const cartitemsofloggeduser = user.find((user) => user.email === loggedinuser);
    console.log(cartitemsofloggeduser);
  return (
    <>
      <Header />
      <SubHeader />
      <div className="main-wrapper w-full min-h-screen">
        <div className="shipping-unit w-full flex justify-center items-center gap-5 p-5 bg-[#d0e2b2]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={24}
            height={24}
            color={"#000000"}
            fill={"none"}
          >
            <path
              d="M19.5 17.5C19.5 18.8807 18.3807 20 17 20C15.6193 20 14.5 18.8807 14.5 17.5C14.5 16.1193 15.6193 15 17 15C18.3807 15 19.5 16.1193 19.5 17.5Z"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M9.5 17.5C9.5 18.8807 8.38071 20 7 20C5.61929 20 4.5 18.8807 4.5 17.5C4.5 16.1193 5.61929 15 7 15C8.38071 15 9.5 16.1193 9.5 17.5Z"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M14.5 17.5H9.5M15 15.5V7C15 5.58579 15 4.87868 14.5607 4.43934C14.1213 4 13.4142 4 12 4H5C3.58579 4 2.87868 4 2.43934 4.43934C2 4.87868 2 5.58579 2 7V15C2 15.9346 2 16.4019 2.20096 16.75C2.33261 16.978 2.52197 17.1674 2.75 17.299C3.09808 17.5 3.56538 17.5 4.5 17.5M15.5 6.5H17.3014C18.1311 6.5 18.5459 6.5 18.8898 6.6947C19.2336 6.8894 19.4471 7.2451 19.8739 7.95651L21.5725 10.7875C21.7849 11.1415 21.8911 11.3186 21.9456 11.5151C22 11.7116 22 11.918 22 12.331V15C22 15.9346 22 16.4019 21.799 16.75C21.6674 16.978 21.478 17.1674 21.25 17.299C20.9019 17.5 20.4346 17.5 19.5 17.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-[1.3vw]">Only 84,00 € until free shipping</span>
        </div>

        <div className="cart-wrapper w-full flex flex-col items-center">
          <div className="cart w-full h-[15vw] border-2 flex items-center justify-evenly">
            <div className="image-wrapper w-[30vw] h-full">
              <img
                className="w-[30] h-full object-contain"
                src="https://www.paperandtea.com/cdn/shop/files/Freisteller_20WINTER_20SNOW_10.webp?v=1729134153&width=600"
                alt="..."
              />
            </div>
            <div className="product-info-wrapper flex flex-col">
              <span className="text-[2vw]">Winter Snow</span>
              <span className="text-[1vw]">Advent Calendar</span>
              <span className="text-[1.3vw] font-bold">₹ 2200</span>
            </div>
            <div className="quantity-button-wrapper flex items-center gap-5">
              <button className="p-3 text-[2vw]"> - </button>
              <span className="text-[2vw]">1</span>
              <button className="p-3 text-[2vw]"> + </button>
            </div>
            <div className="remove-product-container">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                  color={"#000000"}
                  fill={"none"}
                >
                  <path
                    d="M19.5 5.5L18.8803 15.5251C18.7219 18.0864 18.6428 19.3671 18.0008 20.2879C17.6833 20.7431 17.2747 21.1273 16.8007 21.416C15.8421 22 14.559 22 11.9927 22C9.42312 22 8.1383 22 7.17905 21.4149C6.7048 21.1257 6.296 20.7408 5.97868 20.2848C5.33688 19.3626 5.25945 18.0801 5.10461 15.5152L4.5 5.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M3 5.5H21M16.0557 5.5L15.3731 4.09173C14.9196 3.15626 14.6928 2.68852 14.3017 2.39681C14.215 2.3321 14.1231 2.27454 14.027 2.2247C13.5939 2 13.0741 2 12.0345 2C10.9688 2 10.436 2 9.99568 2.23412C9.8981 2.28601 9.80498 2.3459 9.71729 2.41317C9.32164 2.7167 9.10063 3.20155 8.65861 4.17126L8.05292 5.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M9.5 16.5L9.5 10.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M14.5 16.5L14.5 10.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
