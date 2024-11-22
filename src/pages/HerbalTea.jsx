/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import Storenearyou from "../utils/Storeclosetoyou";
import Yourbenefits from "../utils/Yourbenefits";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/slices/userSlice";

function HerbalTea() {
  const [TeaCollection, setTeaCollection] = useState([]);
  const dispatch = useDispatch();

  const teaCollection = import.meta.env.VITE_TEACOLLECTION_API;

  useEffect(() => {
    fetch(teaCollection)
      .then((Response) => Response.json())
      .then((Data) => {
        console.log(Data);
        setTeaCollection(Data);
      });
  }, []);

  const user = useSelector((state) => state.user.Loggedin);

  const AddToCart = (Data) => {
    if (!user) {
      alert("Login First");
    }
    
    dispatch(
      addToCart({
        id: Data.product_id,
        image: Data.product_image,
        name: Data.product_name,
        category: Data.product_category,
        price: Data.product_price,
        quantity: 1,
      })
    );
    console.log(Data);
  };
  return (
    <>
      <Header />
      <SubHeader />
      <div className="main-wrapper w-full h-screen">
        <div className="page-header-wrapper w-full h-[30vw] relative max-sm:h-[60vw]">
          <img
            className="w-full h-full object-cover"
            src="https://www.paperandtea.com/cdn/shop/collections/header-kraeutertee.jpg?v=1724054451&width=2600"
            alt="..."
          />
          <div className="page-heading-info-wrapper absolute bottom-[8vw] left-[3vw] w-[40vw] max-sm:w-[70vw]">
            <h1 className="text-[5vw] text-white font-serif max-sm:text-[8vw]">
              Herbal Tea
            </h1>
            <span className="text-[1.5vw] text-white max-sm:text-[3vw]">
              Enjoy naturally caffeine-free herbal blends at any time of the
              day. Our infusions made of blossoms, tea leaves, and roots are a
              true delight.
            </span>
          </div>
        </div>

        <div className="product-wrapper w-full h-auto flex flex-wrap justify-between gap-y-4 mt-8 sm:mt-[4vw] md:mt-[3vw] px-4 sm:px-5">
          {TeaCollection.length > 0 ? (
            TeaCollection.filter(
              (Teafilter) => Teafilter.product_category === "Herbal"
            ).map((TeaData, index) => (
              <div
                key={index}
                className="product w-full sm:w-[48%] md:w-[48%] lg:w-[23%] xl:w-[23%] h-[65vw] sm:h-[50vw] md:h-[40vw] relative"
              >
                <button
                  onClick={() => AddToCart(TeaData)}
                  className="absolute bottom-[13.5vw] right-[2vw] bg-white p-2 rounded-full border-black border-[1px] max-sm:bottom-[22vw]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={24}
                    height={24}
                    color={"#000000"}
                    fill={"none"}
                  >
                    <path
                      d="M3.87289 17.0194L2.66933 9.83981C2.48735 8.75428 2.39637 8.21152 2.68773 7.85576C2.9791 7.5 3.51461 7.5 4.58564 7.5H19.4144C20.4854 7.5 21.0209 7.5 21.3123 7.85576C21.6036 8.21152 21.5126 8.75428 21.3307 9.83981L20.1271 17.0194C19.7282 19.3991 19.5287 20.5889 18.7143 21.2945C17.9 22 16.726 22 14.3782 22H9.62182C7.27396 22 6.10003 22 5.28565 21.2945C4.47127 20.5889 4.27181 19.3991 3.87289 17.0194Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M17.5 7.5C17.5 4.46243 15.0376 2 12 2C8.96243 2 6.5 4.46243 6.5 7.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                </button>
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
        <Storenearyou />
        <Yourbenefits />
        <Footer />
      </div>
    </>
  );
}

export default HerbalTea;
