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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Redux actions
import { addToCart } from "../store/slices/userSlice";

function AllProducts() {


  // State management
  const [TeaCollection, setTeaCollection] = useState([]);
  const [category, setCategory] = useState("Tea blend");
  const [minimumPrice, setMinimumPrice] = useState(null);
  const [maximumPrice, setMaximumPrice] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMenuOpen, setisMenuOpen] = useState();

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
  const toggleDropdown = (category) => {
    setOpenDropdown(openDropdown === category ? null : category);
  };

  const user = useSelector((state) => state.user.Loggedin);

  // Cart handling
  const AddToCart = (Data) => {
    if (!user) {
      toast.warn("Login First!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
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
      toast.success("Successfully added to cart", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
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
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="main-wrapper w-full min-h-screen bg-gray-50">
        <div className="inner-wrapper w-full h-full flex relative">
          {/* Sidebar */}
          <div
            className="sidebar w-[20vw] max-lg:w-[30vw] min-h-screen hidden lg:flex flex-col p-4"
          >
            <div className="category-wrapper">
              <div className="heading mb-4">
                <span className="text-lg font-bold">Category</span>
              </div>

              {/* Tea Dropdown */}
              <div className="category-links-wrapper flex flex-col gap-2">
                <button
                  onClick={() => toggleDropdown('tea')}
                  className="w-full p-2 border-b border-gray-300 text-start flex justify-between hover:bg-gray-100"
                >
                  <span className="capitalize text-sm">Tea</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={18}
                    height={18}
                    className="text-gray-600"
                  >
                    <path
                      d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                {openDropdown === 'tea' && (
                  <div className="pl-4">
                    {['Green tea', 'Black Tea', 'Herbal', 'Oolong Tea', 'Matcha', 'Tea blend'].map((item) => (
                      <button
                        key={item}
                        onClick={() => setCategory(item)}
                        className="w-full p-2 border-b border-gray-300 text-start hover:bg-gray-100"
                      >
                        <span className="capitalize text-sm">
                          {item.toLowerCase().replaceAll(' ', '-')}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Products Dropdown */}
              <div className="category-links-wrapper flex flex-col gap-2">
                <button
                  onClick={() => toggleDropdown('products')}
                  className="w-full p-2 border-b border-gray-300 text-start flex justify-between hover:bg-gray-100"
                >
                  <span className="capitalize text-sm">Products</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={18}
                    height={18}
                    className="text-gray-600"
                  >
                    <path
                      d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                {openDropdown === 'products' && (
                  <div className="pl-4">
                    {['Advent Calendar', 'Gift Set'].map((item) => (
                      <button
                        key={item}
                        onClick={() => setCategory(item)}
                        className="w-full p-2 border-b border-gray-300 text-start hover:bg-gray-100"
                      >
                        <span className="capitalize text-sm">
                          {item.toLowerCase().replaceAll(' ', '-')}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Food Dropdown */}
              <div className="category-links-wrapper flex flex-col gap-2">
                <button
                  onClick={() => toggleDropdown('food')}
                  className="w-full p-2 border-b border-gray-300 text-start flex justify-between hover:bg-gray-100"
                >
                  <span className="capitalize text-sm">Food</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={18}
                    height={18}
                    className="text-gray-600"
                  >
                    <path
                      d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                {openDropdown === 'food' && (
                  <div className="pl-4">
                    {['Chocolate'].map((item) => (
                      <button
                        key={item}
                        onClick={() => setCategory(item)}
                        className="w-full p-2 border-b border-gray-300 text-start hover:bg-gray-100"
                      >
                        <span className="capitalize text-sm">
                          {item.toLowerCase().replaceAll(' ', '-')}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>


            <div className="sort-by-price my-3 w-full">
              <div className="heading">
                <span className="text-[1.3vw] font-bold p-2">
                  Sort by price
                </span>
              </div>
              <div className="sort-by-price-wrapper w-full ml-5">
                <button
                  onClick={() => setFilter(0, 2000)}
                  className="w-full p-2 text-start flex"
                >
                  <div className="price-wrapper text-[1.3vw] w-full">₹ 0 - ₹ 2000</div>
                </button>

                <button
                  onClick={() => setFilter(2001, 5000)}
                  className="w-full p-2 text-start flex items-center"
                >
                  <div className="price-wrapper text-[1.3vw] w-full">₹ 2001- ₹ 5000</div>
                </button>

                <button
                  onClick={() => setFilter(5001, 10000)}
                  className="w-full p-2 text-start flex items-center"
                >
                  <div className="price-wrapper text-[1.3vw] w-full">₹ 5001- ₹ 10000</div>
                </button>

                <button
                  onClick={() => setFilter(10001, 20000)}
                  className="w-full p-2 text-start flex items-center"
                >
                  <div className="price-wrapper text-[1.3vw] w-full">₹ 10001- ₹ 20000</div>
                </button>

                <button
                  onClick={() => setFilter(20001, 100000)}
                  className="w-full p-2 text-start flex items-center"
                >
                  <div className="price-wrapper text-[1.3vw] w-full">₹ 20001 - Above</div>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Sidebar */}
          {isMenuOpen && (
            <div className="sidebar w-[70vw] max-md:w-[80vw] max-sm:w-full max-sm:absolute z-20  shadow-lg h-full max-sm:min-h-screen p-4 lg:hidden bg-white">
              <div className="category-wrapper">
                <div className="heading mb-4">
                  <span className="text-lg font-bold">Category</span>
                </div>
                <div className="category-links-wrapper flex flex-col gap-2">
                  {[
                    "Advent Calendar",
                    "Chocolate",
                    "Matcha",
                    "Tea blend",
                    "Gift Set",
                    "Green tea",
                    "Black Tea",
                    "Herbal",
                    "Oolong Tea",
                  ].map((item) => (
                    <button
                      key={item}
                      onClick={() => SETCategory(item)}
                      className="w-full p-2 border-b border-gray-300 text-start flex justify-between hover:bg-gray-100"
                    >
                      <span className="capitalize text-sm">
                        {item.toLowerCase().replaceAll(" ", "-")}
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width={18}
                        height={18}
                        className="text-gray-600"
                      >
                        <path
                          d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  ))}
                </div>
              </div>
              <div className="sort-by-price my-6">
                <div className="heading mb-2">
                  <span className="text-lg font-bold">Sort by price</span>
                </div>
                <div className="sort-by-price-wrapper flex flex-col gap-2">
                  {[
                    { range: "₹ 0 - ₹ 2000" },
                    { range: "₹ 2001 - ₹ 5000" },
                    { range: "₹ 5001 - ₹ 10000" },
                    { range: "₹ 10001 - ₹ 20000" },
                    { range: "₹ 20001 - Above" },
                  ].map(({ range }) => (
                    <button
                      key={range}
                      onClick={() => setFilter(...range.match(/\d+/g))}
                      className="w-full p-2 text-start hover:bg-gray-100"
                    >
                      <span className="text-sm">{range}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Main Content */}
          <div className="main-content w-full lg:w-[80vw] h-full">
            <div className="header flex justify-between items-center p-4 border-b">
              <span className="text-2xl max-sm:text-lg font-bold">
                {category}
              </span>
              <button
                className="filter-btn lg:hidden"
                onClick={() => setisMenuOpen(true)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                  className="text-gray-600"
                >
                  <path
                    d="M8.85746 12.5061C6.36901 10.6456 4.59564 8.59915 3.62734 7.44867C3.3276 7.09253 3.22938 6.8319 3.17033 6.3728C2.96811 4.8008 2.86701 4.0148 3.32795 3.5074C3.7889 3 4.60404 3 6.23433 3H17.7657C19.396 3 20.2111 3 20.672 3.5074C21.133 4.0148 21.0319 4.8008 20.8297 6.37281C20.7706 6.83191 20.6724 7.09254 20.3726 7.44867C19.403 8.60062 17.6261 10.6507 15.1326 12.5135C14.907 12.6821 14.7583 12.9561 14.6827 13.2635C14.6071 13.5709 14.6071 13.8934 14.6827 14.2008C14.7583 14.5083 14.907 14.7824 15.1326 14.9511C17.6261 16.8139 19.403 18.8639 20.3726 20.0158C20.6724 20.3719 20.7706 20.6325 20.8297 21.0916C21.0319 22.6636 21.133 23.4496 20.672 23.957C20.2111 24.4644 19.396 24.4644 17.7657 24.4644H6.23433C4.60404 24.4644 3.7889 24.4644 3.32795 23.957C2.86701 23.4496 2.96811 22.6636 3.17033 21.0916C3.22938 20.6325 3.3276 20.3719 3.62734 20.0158C4.59564 18.8649 6.36901 16.8184 8.85746 14.9579"
                    fill="currentColor"
                  />
                </svg>
              </button>
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
                        className="absolute bottom-[16vw] right-[1vw]  p-2 rounded-full border-black border-[1px] max-sm:bottom-[22vw] bg-white"
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
      </div>
    </>
  );
}

export default AllProducts;