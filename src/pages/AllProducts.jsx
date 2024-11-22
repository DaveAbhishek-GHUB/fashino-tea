/* eslint-disable no-unused-vars */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Component imports
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import StandardBanner from "../utils/Standardbanner";
import Storeclosetoyou from "../utils/Storeclosetoyou";
import Welovewhatwedosection from "../utils/Welovewhatwedosection";
import Footer from "../components/Footer";
import Yourbenefits from "../utils/Yourbenefits";

// Redux actions
import { addToCart } from "../store/slices/userSlice";

function AllProducts() {
  // State management
  const [TeaCollection, setTeaCollection] = useState([]);
  const [category, setCategory] = useState("Tea blend");
  const [minimumPrice, setMinimumPrice] = useState(null);
  const [maximumPrice, setMaximumPrice] = useState(null);

  const dispatch = useDispatch();
  const teaCollection = import.meta.env.VITE_TEACOLLECTION_API;

  // Fetch tea collection data
  useEffect(() => {
    fetch(teaCollection)
      .then((Response) => Response.json())
      .then((Data) => {
        console.log(Data);
        setTeaCollection(Data);
      });
  }, []);

  const user = useSelector((state) => state.user.Loggedin);

  // Cart handling
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

  // Filter handling
  const setFilter = (minimum, maximum) => {
    setMinimumPrice(minimum);
    setMaximumPrice(maximum);
  };

  const SETCategory = (CATEGORY) => {
    setCategory(CATEGORY);
    setMinimumPrice(null);
    setMaximumPrice(null);
  };

  console.log(minimumPrice);
  console.log(maximumPrice);

  return (
    <>
      <Header />
      <SubHeader />
      <div className="main-wrapper w-full min-h-[100dvh]">
        <div className="inner-wrapper w-full h-full flex">
          <div className="sidebar w-[30vw] h-full">
            <div className="category-wrapper w-full p-2">
              <div className="heading">
                <span className="text-[1.3vw] font-bold">Category</span>
              </div>
              <div className="category-links-wrapper w-full flex flex-col items-start gap-1">
                <button
                  onClick={() => SETCategory("Advent Calendar")}
                  className="w-full p-2 border-black border-b-[1px] text-start flex justify-between"
                >
                  <span>advent-calendar</span>
                  <div className="arrow-icon-wrapper">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width={24}
                      height={24}
                      color={"#000000"}
                      fill={"none"}
                    >
                      <path
                        d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </button>

                <button
                  onClick={() => SETCategory("Chocolate")}
                  className="w-full p-2 border-black border-b-[1px] text-start flex justify-between"
                >
                  <span>tea-chocolate</span>
                  <div className="arrow-icon-wrapper">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width={24}
                      height={24}
                      color={"#000000"}
                      fill={"none"}
                    >
                      <path
                        d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </button>

                <button
                  onClick={() => SETCategory("Matcha")}
                  className="w-full p-2 border-black border-b-[1px] text-start flex justify-between"
                >
                  <span>matcha</span>
                  <div className="arrow-icon-wrapper">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width={24}
                      height={24}
                      color={"#000000"}
                      fill={"none"}
                    >
                      <path
                        d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </button>

                <button
                  onClick={() => SETCategory("Tea blend")}
                  className="w-full p-2 border-black border-b-[1px] text-start flex justify-between"
                >
                  <span>tea-blends</span>
                  <div className="arrow-icon-wrapper">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width={24}
                      height={24}
                      color={"#000000"}
                      fill={"none"}
                    >
                      <path
                        d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </button>

                <button
                  onClick={() => SETCategory("Gift Set")}
                  className="w-full p-2 border-black border-b-[1px] text-start flex justify-between"
                >
                  <span>winter-teas</span>
                  <div className="arrow-icon-wrapper">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width={24}
                      height={24}
                      color={"#000000"}
                      fill={"none"}
                    >
                      <path
                        d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </button>
                <button
                  onClick={() => SETCategory("Green tea")}
                  className="w-full p-2 border-black border-b-[1px] text-start flex justify-between"
                >
                  <span>green-tea</span>
                  <div className="arrow-icon-wrapper">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width={24}
                      height={24}
                      color={"#000000"}
                      fill={"none"}
                    >
                      <path
                        d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </button>

                <button
                  onClick={() => SETCategory("Black Tea")}
                  className="w-full p-2 border-black border-b-[1px] text-start flex justify-between"
                >
                  <span>black-tea</span>
                  <div className="arrow-icon-wrapper">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width={24}
                      height={24}
                      color={"#000000"}
                      fill={"none"}
                    >
                      <path
                        d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </button>

                <button
                  onClick={() => SETCategory("Herbal")}
                  className="w-full p-2 border-black border-b-[1px] text-start flex justify-between"
                >
                  <span>herbal-tea</span>
                  <div className="arrow-icon-wrapper">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width={24}
                      height={24}
                      color={"#000000"}
                      fill={"none"}
                    >
                      <path
                        d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </button>

                <button
                  onClick={() => SETCategory("Oolong Tea")}
                  className="w-full p-2 border-black border-b-[1px] text-start flex justify-between"
                >
                  <span>oolong-tea</span>
                  <div className="arrow-icon-wrapper">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width={24}
                      height={24}
                      color={"#000000"}
                      fill={"none"}
                    >
                      <path
                        d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
            <div className="sort-by-price my-3">
              <div className="heading">
                <span className="text-[1.3vw] font-bold p-2">
                  Sort by price
                </span>
              </div>
              <div className="sort-by-price-wrapper px-10">
                <button
                  onClick={() => setFilter(0, 2000)}
                  className="w-full p-2 text-start flex items-center"
                >
                  <div className="price-wrapper">₹ 0 - ₹ 2000</div>
                </button>

                <button
                  onClick={() => setFilter(2001, 5000)}
                  className="w-full p-2 text-start flex items-center"
                >
                  <div className="price-wrapper">₹ 2001- ₹ 5000</div>
                </button>

                <button
                  onClick={() => setFilter(5001, 10000)}
                  className="w-full p-2 text-start flex items-center"
                >
                  <div className="price-wrapper">₹ 5001- ₹ 10000</div>
                </button>

                <button
                  onClick={() => setFilter(10001, 20000)}
                  className="w-full p-2 text-start flex items-center"
                >
                  <div className="price-wrapper">₹ 10001- ₹ 20000</div>
                </button>

                <button
                  onClick={() => setFilter(20001, 100000)}
                  className="w-full p-2 text-start flex items-center"
                >
                  <div className="price-wrapper">₹ 20001 - Above</div>
                </button>
              </div>
            </div>
          </div>
          <div className="sidebar w-[70vw] h-full">
            <div className="heading-wrapper w-full">
              <span className="text-[2vw] px-10 py-5 font-bold">{`${category}`}</span>
            </div>
            <div className="product-wrapper w-full h-auto flex flex-wrap justify-between gap-y-4 mt-8 sm:mt-[4vw] md:mt-[3vw] px-4 sm:px-5">
              {TeaCollection.length > 0 ? (
                TeaCollection.filter(
                  (Teafilter) =>
                    Teafilter.product_category === category &&
                    (minimumPrice === null ||
                      Teafilter.product_price >= minimumPrice) &&
                    (maximumPrice === null ||
                      Teafilter.product_price <= maximumPrice)
                ).length > 0 ? (
                  TeaCollection.filter(
                    (Teafilter) =>
                      Teafilter.product_category === category &&
                      (minimumPrice === null ||
                        Teafilter.product_price >= minimumPrice) &&
                      (maximumPrice === null ||
                        Teafilter.product_price <= maximumPrice)
                  ).map((TeaData, index) => (
                    <div
                      key={index}
                      className="product w-full sm:w-[48%] md:w-[48%] lg:w-[23%] xl:w-[23%] h-[65vw] sm:h-[50vw] md:h-[30vw] relative"
                    >
                      <button
                        onClick={() => AddToCart(TeaData)}
                        className="absolute bottom-[16vw] right-[1vw] bg-white p-2 rounded-full border-black border-[1px] max-sm:bottom-[22vw]"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width={20}
                          height={20}
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
                        <div className="image-wrapper bg-[#F5F6F3] w-full h-[50%]">
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
                    No product is available!
                  </span>
                )
              ) : (
                <span className="text-[2vw] sm:text-[1.5vw] md:text-[1vw] text-red-500">
                  Fetch Issue!
                </span>
              )}
            </div>
          </div>
        </div>
        <StandardBanner />
        <Storeclosetoyou />
        <Welovewhatwedosection />
        <Yourbenefits />
        <Footer />
      </div>
    </>
  );
}

export default AllProducts;