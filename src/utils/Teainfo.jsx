/* eslint-disable no-unused-vars */
import React from "react";

function Teainfo() {
  return (
    <>
      <div className="main-teainfo-wrapper w-full h-auto flex flex-col md:flex-row">
        {/* Image container */}
        <div className="image-container w-full md:w-[50vw] h-[50vw] md:h-full p-5 md:p-10">
          <img
            className="w-full h-full object-cover rounded-md"
            src="https://www.paperandtea.com/cdn/shop/files/Category_USP_teablends.jpg?v=1724335414&width=1200"
            alt="..."
          />
        </div>

        {/* Text and Features container */}
        <div className="ourblends w-full md:w-[50vw] h-auto md:h-full px-4 sm:px-[2vw] py-8 sm:py-[8vw] text-center md:text-left">
          {/* Header and subheader */}
          <h1 className="text-[6vw] sm:text-[4vw] md:text-[3vw] font-serif">
            Our Blends
          </h1>
          <h4 className="text-[3vw] sm:text-[2vw] md:text-[1.5vw] font-sans mt-2">
            Extraordinary tea blends for you
          </h4>
          <span className="text-[3vw] sm:text-[1.5vw] md:text-[1.2vw] font-sans text-[#9F9F9F] block mt-2">
            Our Blends are a highlight in your cup – carefully crafted tea
            blends you must try. Let each cup guide you to a new world of
            flavors!
          </span>

          {/* Features Showcase */}
          <div className="features-showcase w-full flex flex-col sm:flex-row justify-evenly items-center mt-8 md:mt-10">
            {/* Feature 1 */}
            <div className="premiumQuality w-full sm:w-[30%] flex flex-col items-center mt-5">
              <img
                className="w-[10vw] sm:w-[6vw] md:w-[3vw]"
                src="https://www.paperandtea.com/cdn/shop/files/premium-icon.svg?v=1723792199&width=40"
                alt="..."
              />
              <span className="text-[3vw] sm:text-[1.8vw] md:text-[1.3vw]">
                Premium
              </span>
              <span className="text-[3vw] sm:text-[1.8vw] md:text-[1.3vw]">
                quality
              </span>
            </div>

            {/* Feature 2 */}
            <div className="premiumQuality w-full sm:w-[30%] flex flex-col items-center mt-5">
              <img
                className="w-[10vw] sm:w-[6vw] md:w-[3vw]"
                src="https://www.paperandtea.com/cdn/shop/files/organic-icon.svg?v=1723792785&width=40"
                alt="..."
              />
              <span className="text-[3vw] sm:text-[1.8vw] md:text-[1.3vw]">
                Certified
              </span>
              <span className="text-[3vw] sm:text-[1.8vw] md:text-[1.3vw]">
                organic ingredients
              </span>
            </div>

            {/* Feature 3 */}
            <div className="premiumQuality w-full sm:w-[30%] flex flex-col items-center mt-5">
              <img
                className="w-[10vw] sm:w-[6vw] md:w-[3vw]"
                src="https://www.paperandtea.com/cdn/shop/files/award-icon.svg?v=1723792785&width=40"
                alt="..."
              />
              <span className="text-[3vw] sm:text-[1.8vw] md:text-[1.3vw]">
                Exclusive from
              </span>
              <span className="text-[3vw] sm:text-[1.8vw] md:text-[1.3vw]">
                Fascino
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Teainfo;
