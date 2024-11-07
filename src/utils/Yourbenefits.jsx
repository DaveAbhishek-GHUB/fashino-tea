/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";

function Yourbenefits() {
  return (
    <>
      <div className="standardbanner-wrapper w-full h-auto sm:h-[25vw] md:h-[20vw] bg-[#D0E2B2] p-4 sm:p-5 md:p-4x mt-10">
        <div className="heading w-full mb-3 sm:mb-4 md:mb-3">
          <h1 className="text-[6vw] sm:text-[5vw] md:text-[4vw] font-extralight text-zinc-800">
            Your benefits at <b>Fascino</b>
          </h1>
        </div>
        <div className="info-section-wrapper w-full flex flex-col sm:flex-row gap-6 sm:gap-4 md:gap-5">
          <div className="info-wrapper w-full sm:w-[30vw] md:w-[25vw] flex gap-2">
            <div className="image-wrapper">
              <img
                className="w-[4vw] sm:w-[3vw] md:w-[2vw]"
                src="https://www.paperandtea.com/cdn/shop/files/delivery-icon.svg?v=1723792199&width=64"
                alt="Free Shipping"
              />
            </div>
            <div className="info-wrapper-without-image">
              <h4 className="text-[3vw] sm:text-[2vw] md:text-[1.5vw] mb-1">
                Free Shipping
              </h4>
              <span className="text-[2.5vw] sm:text-[1.5vw] md:text-[1vw] block">
                For all orders from €99
              </span>
            </div>
          </div>

          <div className="info-wrapper w-full sm:w-[30vw] md:w-[25vw] flex gap-2">
            <div className="image-wrapper">
              <img
                className="w-[4vw] sm:w-[3vw] md:w-[2vw]"
                src="https://www.paperandtea.com/cdn/shop/files/back-icon.svg?v=1723792308&width=64"
                alt="Return Policy"
              />
            </div>
            <div className="info-wrapper-without-image">
              <h4 className="text-[3vw] sm:text-[2vw] md:text-[1.5vw] mb-1">
                30-Day Return Policy
              </h4>
              <span className="text-[2.5vw] sm:text-[1.5vw] md:text-[1vw] block">
                Simply return it if you don't like it
              </span>
            </div>
          </div>

          <div className="info-wrapper w-full sm:w-[30vw] md:w-[25vw] flex gap-2">
            <div className="image-wrapper">
              <img
                className="w-[4vw] sm:w-[3vw] md:w-[2vw]"
                src="https://www.paperandtea.com/cdn/shop/files/gift-icon.svg?v=1723791881&width=64"
                alt="Exclusive Gifts"
              />
            </div>
            <div className="info-wrapper-without-image">
              <h4 className="text-[3vw] sm:text-[2vw] md:text-[1.5vw] mb-1">
                Exclusive Gifts
              </h4>
              <span className="text-[2.5vw] sm:text-[1.5vw] md:text-[1vw] block">
                Become a member and receive exclusive gifts
              </span>
            </div>
          </div>

          <div className="info-wrapper w-full sm:w-[30vw] md:w-[25vw] flex gap-2">
            <div className="image-wrapper">
              <img
                className="w-[4vw] sm:w-[3vw] md:w-[2vw]"
                src="https://www.paperandtea.com/cdn/shop/files/map-icon.svg?v=1723791911&width=64"
                alt="Nearby"
              />
            </div>
            <div className="info-wrapper-without-image">
              <h4 className="text-[3vw] sm:text-[2vw] md:text-[1.5vw] mb-1">
                Nearby
              </h4>
              <span className="text-[2.5vw] sm:text-[1.5vw] md:text-[1vw] block">
                Inspiration in over 35 stores across Europe
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Yourbenefits;