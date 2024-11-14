/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import Storenearyou from "../utils/Storeclosetoyou";
import Yourbenefits from "../utils/Yourbenefits";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function TeaBlends() {
  const [TeaCollection, setTeaCollection] = useState([]);

  // API key which contains all the products
  const teaCollection = import.meta.env.VITE_TEACOLLECTION_API;

  // Fetch tea collection data from API
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
        {/* Page header with background image and title */}
        <div className="page-header-wrapper w-full h-[30vw] relative max-sm:h-[60vw]">
          <img
            className="w-full h-full object-cover"
            src="https://www.paperandtea.com/cdn/shop/collections/Collection_Header.jpg?v=1724072203&width=2400"
            alt="Tea Blends"
          />
          <div className="page-heading-info-wrapper absolute bottom-[8vw] left-[3vw] w-[70vw]">
            <h1 className="text-[5vw] text-white font-serif max-sm:text-[8vw]">
              Tea Blends
            </h1>
            <span className="text-[1.5vw] text-white max-sm:text-[3vw]">
              Blending high-quality organic ingredients like tea leaves, herbs,
              blossoms, and fruits, we create exceptional recipes that you can
              only find at FASCINO.
            </span>
          </div>
        </div>

        {/* Section heading */}
        <div className="heading-wrapper w-full p-10">
          <h1 className="text-[3.5vw] font-serif">Teas</h1>
          <span className="text-[1.6vw] font-extralight">
            Discover a carefully chosen collection of classics such as white,
            green, and black tea, as well as selections of yellow, Oolong, and
            Pu-Erh tea.
          </span>
        </div>

        {/* Product display section */}
        <div className="product-wrapper w-full h-auto flex flex-wrap justify-between gap-y-4 mt-8 sm:mt-[4vw] md:mt-[3vw] px-4 sm:px-5">
          {TeaCollection.length > 0 ? (
            TeaCollection.filter(
              (Teafilter) => Teafilter.product_category === "Tea blend"
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

        {/* Additional information and features section */}
        <div className="main-teainfo-wrapper w-full h-auto flex flex-col md:flex-row">
          {/* Image container */}
          <div className="image-container w-full md:w-[50vw] h-[50vw] md:h-full p-5 md:p-10">
            <img
              className="w-full h-full object-cover rounded-md"
              src="https://www.paperandtea.com/cdn/shop/files/Category_USP_teablends.jpg?v=1724335414&width=1200"
              alt="Our Blends"
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
                  alt="Premium Quality"
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
                  alt="Certified Organic"
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
                  alt="Exclusive from Fascino"
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

        {/* Additional components */}
        <Storenearyou />
        <Yourbenefits />
        <Footer />
      </div>
    </>
  );
}

export default TeaBlends;