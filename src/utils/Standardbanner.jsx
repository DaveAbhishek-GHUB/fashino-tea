/* eslint-disable no-unused-vars */
import React from "react";

function StandardBanner() {
  return (
    <>
      <div className="standardbanner-wrapper w-full h-auto sm:h-[25vw] md:h-[20vw] bg-[#D0E2B2] p-4 sm:p-5 md:p-4 mb-10">
        <div className="heading w-full mb-3 sm:mb-4 md:mb-3">
          <h1 className="text-[6vw] sm:text-[5vw] md:text-[4vw] font-extralight text-zinc-800">
            Highest standards, no compromises
          </h1>
        </div>
        <div className="info-section-wrapper w-full flex flex-col sm:flex-row gap-6 sm:gap-4 md:gap-5">
          <div className="info-wrapper w-full sm:w-[30vw] md:w-[25vw]">
            <img
              className="w-[4vw] sm:w-[3vw] md:w-[2vw] mb-2"
              src="https://www.paperandtea.com/cdn/shop/files/premium_quality-svg.svg?v=1722349195&width=24"
              alt="..."
            />
            <h4 className="text-[3vw] sm:text-[2vw] md:text-[1.5vw] mb-1">
              Origin & Quality
            </h4>
            <span className="text-[2.5vw] sm:text-[1.5vw] md:text-[1vw] block">
              The highest standards of quality. Uncompromising. From the best
              producers.
            </span>
          </div>

          <div className="info-wrapper w-full sm:w-[30vw] md:w-[25vw]">
            <img
              className="w-[4vw] sm:w-[3vw] md:w-[2vw] mb-2"
              src="https://www.paperandtea.com/cdn/shop/files/traditional_craftsmanship-svg.svg?v=1722427003&width=24"
              alt="..."
            />
            <h4 className="text-[3vw] sm:text-[2vw] md:text-[1.5vw] mb-1">
              Design & Artistry
            </h4>
            <span className="text-[2.5vw] sm:text-[1.5vw] md:text-[1vw] block">
              Innovative. Precise. Stimulating to your senses.
            </span>
          </div>

          <div className="info-wrapper w-full sm:w-[30vw] md:w-[25vw]">
            <img
              className="w-[4vw] sm:w-[3vw] md:w-[2vw] mb-2"
              src="https://www.paperandtea.com/cdn/shop/files/distinct_flavor-svg.svg?v=1726035126&width=26"
              alt="..."
            />
            <h4 className="text-[3vw] sm:text-[2vw] md:text-[1.5vw] mb-1">
              Taste & Experience
            </h4>
            <span className="text-[2.5vw] sm:text-[1.5vw] md:text-[1vw] block">
              Sensual enjoyment. Pure. Surprising. Mindful.
            </span>
          </div>

          <div className="info-wrapper w-full sm:w-[30vw] md:w-[25vw]">
            <img
              className="w-[4vw] sm:w-[3vw] md:w-[2vw] mb-2"
              src="https://www.paperandtea.com/cdn/shop/files/diversity_variety-svg.svg?v=1723557928&width=24"
              alt="..."
            />
            <h4 className="text-[3vw] sm:text-[2vw] md:text-[1.5vw] mb-1">
              Variety & Choice
            </h4>
            <span className="text-[2.5vw] sm:text-[1.5vw] md:text-[1vw] block">
              For you. To share. Tea, accessories, gifts, chocolate.
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default StandardBanner;