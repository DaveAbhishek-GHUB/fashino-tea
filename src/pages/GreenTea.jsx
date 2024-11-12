/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import Storenearyou from "../utils/Storeclosetoyou"
import Yourbenefits from "../utils/Yourbenefits";
import Footer from "../components/Footer"
import { Link } from "react-router-dom";

function GreenTea() {
  const [TeaCollection, setTeaCollection] = useState([]);

  const teaCollection = import.meta.env.VITE_TEACOLLECTION_API;

  useEffect(() => {
    fetch(teaCollection)
      .then((Response) => Response.json())
      .then((Data) => {
        console.log(Data);
        setTeaCollection(Data);
      });
  }, []);
  return (
    <>
      <Header />
      <SubHeader />
      <div className="main-wrapper w-full h-screen">
        <div className="page-header-wrapper w-full h-[30vw] relative max-sm:h-[60vw]">
          <img
            className="w-full h-full object-cover"
            src="https://www.paperandtea.com/cdn/shop/collections/header-gruener_tee.jpg?v=1699436754&width=2000"
            alt="..."
          />
          <div className="page-heading-info-wrapper absolute bottom-[8vw] left-[3vw] w-[70vw]">
            <h1 className="text-[5vw] text-white font-serif max-sm:text-[8vw]">Green Tea</h1>
            <span className="text-[1.5vw] text-white max-sm:text-[3vw]">
            Green teas charm lies in its ability to surprise. From the vibrant, grassy Sencha to the rich umami of Gyokuro, each cup embodies a different story.
            </span>
          </div>
        </div>

        <div className="product-wrapper w-full h-auto flex flex-wrap justify-between gap-y-4 mt-8 sm:mt-[4vw] md:mt-[3vw] px-4 sm:px-5">
          {TeaCollection.length > 0 ? (
            TeaCollection.filter(
              (Teafilter) => Teafilter.product_category === "Green tea"
            ).map((TeaData, index) => (
              <div
                key={index}
                className="product w-full sm:w-[48%] md:w-[48%] lg:w-[23%] xl:w-[23%] h-[65vw] sm:h-[50vw] md:h-[40vw]"
              >
                <Link to={`/adventcalendar/${TeaData.product_id}`}>
                <div className="image-wrapper bg-[#F5F6F3] w-full h-[70%]">
                  <img
                    className="w-full h-full object-contain sm:object-cover"
                    src={TeaData.product_image}
                    alt={TeaData.product_name}
                  />
                </div>
                <div className="info-wrapper w-full flex flex-col gap-1 mt-2">
                  <span className="text-[2vw] sm:text-[1.5vw] md:text-[1vw] text-[#868686] max-sm:text-[3vw]">
                    {TeaData.product_category}
                  </span>
                  <span className="text-[2.3vw] sm:text-[1.8vw] md:text-[1.3vw] font-sans max-sm:text-[3vw]">
                    {TeaData.product_name}
                  </span>
                  <span className="text-[1.2vw] text-[#484848] max-sm:text-[2vw]">
                    {TeaData.product}
                  </span>
                  <span className="text-[2.3vw] sm:text-[1.8vw] md:text-[1.3vw] font-bold max-sm:text-[3vw]">
                    ₹ {TeaData.product_price}
                  </span>
                </div>
                </Link>
              </div>
            ))
          ) : (
            <span className="text-[2vw] sm:text-[1.5vw] md:text-[1vw] text-red-500">
              Fetch Issue!
            </span>
          )}
        </div>
        <div className="main-teainfo-wrapper w-full h-auto flex flex-col md:flex-row">
        {/* Image container */}
        <div className="image-container w-full md:w-[50vw] h-[50vw] md:h-full p-5 md:p-10">
          <img
            className="w-full h-full object-cover rounded-md"
            src="https://www.paperandtea.com/cdn/shop/files/Category_USP_origins.jpg?v=1723564775&width=1200"
            alt="..."
          />
        </div>

        {/* Text and Features container */}
        <div className="ourblends w-full md:w-[50vw] h-auto md:h-full px-4 sm:px-[2vw] py-8 sm:py-[8vw] text-center md:text-left">
          {/* Header and subheader */}
          <h1 className="text-[6vw] sm:text-[4vw] md:text-[3vw] font-serif">
          Origins Collection
          </h1>
          <h4 className="text-[3vw] sm:text-[2vw] md:text-[1.5vw] font-sans mt-2">
          Premium whole leaf and herbal teas
          </h4>
          <span className="text-[3vw] sm:text-[1.5vw] md:text-[1.2vw] font-sans text-[#9F9F9F] block mt-2">
          Our Origins bring the variety of our handcrafted premium whole-leaf teas and herbs. A flavorful journey through the world’s best tea-growing regions.
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
        <Storenearyou/>
        <Yourbenefits/>
        <Footer/>
      </div>
    </>
  );
}

export default GreenTea;
