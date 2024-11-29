/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Component imports
import SubHeader from "../components/SubHeader";
import StandardBanner from "../utils/Standardbanner";
import Storeclosetoyou from "../utils/Storeclosetoyou";
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
  const [openDropdown, setOpenDropdown] = useState(null);
  const [hoveredProductId, setHoveredProductId] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [wishList, setWishList] = useState([]);

  const dispatch = useDispatch();
  const teaCollectionAPI = import.meta.env.VITE_TEACOLLECTION_API;

  // Fetch tea collection data
  useEffect(() => {
    fetch(teaCollectionAPI)
      .then((response) => response.json())
      .then((data) => {
        setTeaCollection(data);
      });
  }, [teaCollectionAPI]);

  // Toggle dropdown for categories
  const toggleDropdown = (category) => {
    setOpenDropdown(openDropdown === category ? null : category);
  };

  const user = useSelector((state) => state.user.Loggedin);

  // Add product to cart
  const AddToCart = (data) => {
    if (!user) {
      toast.dismiss();
      toast.warn("Login First!");
    } else {
      dispatch(
        addToCart({
          id: data.product_id,
          image: data.product_image,
          name: data.product_name,
          category: data.product_category,
          price: data.product_price,
          quantity: 1,
        })
      );
      toast.dismiss();
      toast.success("Successfully added to cart");
    }
  };

  // Set price filter
  const setFilter = (minimum, maximum) => {
    setMinimumPrice(minimum);
    setMaximumPrice(maximum);
  };

  // Set product category
  const SETCategory = (category) => {
    setCategory(category);
    setMinimumPrice(null);
    setMaximumPrice(null);
    setIsMenuOpen(false);
  };

  // Toggle wishlist for a product
  const toggleWishlist = (productId) => {
    setWishList((prevWishList) => {
      if (prevWishList.includes(productId)) {
        return prevWishList.filter((id) => id !== productId);
      } else {
        return [...prevWishList, productId];
      }
    });
  };

  return (
    <>
      <SubHeader />
      <div className="main-wrapper w-full min-h-screen mt-[6vw]  max-sm:mt-[22vw]">
        <div className="inner-wrapper w-full h-full flex relative">
          {/* Sidebar */}
          <div
            className="sidebar w-[20vw] hidden lg:flex flex-col p-4"
          >
            <div className="category-wrapper">
              <div className="heading mb-4 w-full flex items-center justify-between">
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
                        onClick={() => SETCategory(item)}
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
                        onClick={() => SETCategory(item)}
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

          {/* Main Content */}
          <div className="main-content w-full lg:w-[80vw] h-full">
            <div className="header flex justify-between items-center p-4 border-b">
              <span className="text-2xl max-sm:text-lg font-bold">
                {category}
              </span>
              <button
                className="filter-btn lg:hidden"
                onClick={() => setIsMenuOpen(true)}
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
            <div className="product-wrapper w-full h-auto flex flex-wrap justify-between max-sm:justify-center mt-8 sm:mt-[4vw] md:mt-[3vw] px-4 sm:px-5 max-sm:gap-3">
              {TeaCollection.length > 0 ? (
                TeaCollection.filter(
                  (Teafilter) =>
                    Teafilter.product_category === category &&
                    (minimumPrice === null || Teafilter.product_price >= minimumPrice) &&
                    (maximumPrice === null || Teafilter.product_price <= maximumPrice)
                ).length > 0 ? (
                  TeaCollection.filter(
                    (Teafilter) =>
                      Teafilter.product_category === category &&
                      (minimumPrice === null || Teafilter.product_price >= minimumPrice) &&
                      (maximumPrice === null || Teafilter.product_price <= maximumPrice)
                  ).map((TeaData, index) => (
                    <div
                      key={index}
                      className="product w-[23%] max-md:w-[48%] max-sm:w-[48%] h-[35vw] sm:h-[50vw] md:h-[30vw] relative max-sm:h-[100vw]"
                    >
                      <button
                        onClick={() => toggleWishlist(TeaData.product_id)}
                        className="wishlist absolute top-[1vw] right-[1vw] max-sm:top-[2vw] max-md:right-[2vw]"
                      >
                        {wishList.includes(TeaData.product_id) ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width={24}
                            height={24}
                            color={"#4b5563"}
                            fill={"black"}
                          >
                            <path d="M19.4626 3.99415C16.7809 2.34923 14.4404 3.01211 13.0344 4.06801C12.4578 4.50096 12.1696 4.71743 12 4.71743C11.8304 4.71743 11.5422 4.50096 10.9656 4.06801C9.55962 3.01211 7.21909 2.34923 4.53744 3.99415C1.01807 6.15294 0.221721 13.2749 8.33953 19.2834C9.88572 20.4278 10.6588 21 12 21C13.3412 21 14.1143 20.4278 15.6605 19.2834C23.7783 13.2749 22.9819 6.15294 19.4626 3.99415Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width={24}
                            height={24}
                            color={"#4b5563"}
                            fill={"none"}
                          >
                            <path d="M19.4626 3.99415C16.7809 2.34923 14.4404 3.01211 13.0344 4.06801C12.4578 4.50096 12.1696 4.71743 12 4.71743C11.8304 4.71743 11.5422 4.50096 10.9656 4.06801C9.55962 3.01211 7.21909 2.34923 4.53744 3.99415C1.01807 6.15294 0.221721 13.2749 8.33953 19.2834C9.88572 20.4278 10.6588 21 12 21C13.3412 21 14.1143 20.4278 15.6605 19.2834C23.7783 13.2749 22.9819 6.15294 19.4626 3.99415Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                          </svg>
                        )}
                      </button>

                      <button
                        onMouseEnter={() => setHoveredProductId(TeaData.product_id)}
                        onMouseLeave={() => setHoveredProductId(null)}
                        onClick={() => AddToCart(TeaData)}
                        className="absolute bottom-[16vw] right-[1vw] bg-white p-1 rounded-full border-zinc-700 border-[1px] max-sm:bottom-[54vw] max-sm:right-[3vw] max-md:bottom-[27vw]"
                      >
                        {hoveredProductId === TeaData.product_id ? (
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"}>
                            <path d="M8 16H15.2632C19.7508 16 20.4333 13.1808 21.261 9.06908C21.4998 7.88311 21.6192 7.29013 21.3321 6.89507C21.045 6.5 20.4947 6.5 19.3941 6.5H19M6 6.5H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            <path d="M11 8.5C11.4915 9.0057 12.7998 11 13.5 11M16 8.5C15.5085 9.0057 14.2002 11 13.5 11M13.5 11V3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M8 16L5.37873 3.51493C5.15615 2.62459 4.35618 2 3.43845 2H2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            <path d="M8.88 16H8.46857C7.10522 16 6 17.1513 6 18.5714C6 18.8081 6.1842 19 6.41143 19H17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <circle cx="10.5" cy="20.5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
                            <circle cx="17.5" cy="20.5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
                          </svg>
                        ) : (
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
                        )}
                      </button>
                      <Link to={`/${TeaData.product_category}/${TeaData.product_id}`}>
                        <div className="image-wrapper bg-[#F5F6F3] w-full h-[50%]">
                          <img
                            className="w-full h-full object-contain sm:object-contain"
                            src={TeaData.product_image}
                            alt={TeaData.product_name}
                          />
                        </div>
                        <div className="info-wrapper w-full flex flex-col gap-1 mt-2">
                          <span className="text-[2vw] sm:text-[1.5vw] md:text-[1vw] text-[#868686] max-sm:text-[4vw]">
                            {TeaData.product_category}
                          </span>
                          <span className="text-[2.3vw] sm:text-[1.8vw] md:text-[1.3vw] font-sans max-sm:text-[5vw]">
                            {TeaData.product_name}
                          </span>
                          <span className="text-[1.2vw] text-[#484848] max-sm:text-[4vw]">
                            {TeaData.product}
                          </span>
                          <span className="text-[2.3vw] sm:text-[1.8vw] md:text-[1.3vw] font-bold max-sm:text-[4vw]">
                            ₹ {TeaData.product_price}
                          </span>
                        </div>
                      </Link>
                    </div>
                  ))
                ) : (
                  <span className="text-[2vw] sm:text-[1.5vw] md:text-[1vw] text-red-500">
                    No products are available at this price point!
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
        <div className="other-components">
          <StandardBanner />
          <Storeclosetoyou />
          <Yourbenefits />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default AllProducts;