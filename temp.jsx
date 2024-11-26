import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../store/slices/userSlice";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SubHeader from "../components/SubHeader";
import StandardBanner from "../utils/Standardbanner";
import Storeclosetoyou from "../utils/Storeclosetoyou";
import Welovewhatwedosection from "../utils/Welovewhatwedosection";
import Yourbenefits from "../utils/Yourbenefits";
import Footer from "../components/Footer";

function HomePage() {
  const [hoveredProductId, setHoveredProductId] = useState(null);
  const [wishList, setwishList] = useState([]); // Initialize as an array
  const [TeaCollection, setTeaCollection] = useState([]);
  const dispatch = useDispatch();

  const teaCollection = import.meta.env.VITE_TEACOLLECTION_API;
  const user = useSelector((state) => state.user.Loggedin);

  useEffect(() => {
    fetch(teaCollection)
      .then((Response) => Response.json())
      .then((Data) => {
        console.log(Data);
        setTeaCollection(Data);
      });
  }, []);

  const AddToCart = (Data) => {
    if (!user) {
      toast.warn("Login First!");
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
      toast.success("Successfully added to cart");
    }
  };

  const toggleWishlist = (productId) => {
    setwishList((prevWishList) => {
      if (prevWishList.includes(productId)) {
        // Remove product from wishlist
        return prevWishList.filter((id) => id !== productId);
      } else {
        // Add product to wishlist
        return [...prevWishList, productId];
      }
    });
  };

  return (
    <>
      <SubHeader />
      <div className="main-wrapper w-full min-h-screen mt-12">
        {/* Here section */}
        <div className="hero-wrapper h-[60vh] sm:h-55vh] md:h-[60vh] relative max-sm:h-[40vh]">
          <video
            className="w-full h-full object-cover"
            playsInline="true"
            autoPlay="autoplay"
            muted="muted"
            loop="loop"
            preload="metadata"
          >
            <source
              data-src="//www.paperandtea.com/cdn/shop/videos/c/vp/b7af3202049b4b70a612de1a7310ae64/b7af3202049b4b70a612de1a7310ae64.m3u8?v=0"
              type="application/x-mpegURL"
              src="//www.paperandtea.com/cdn/shop/videos/c/vp/b7af3202049b4b70a612de1a7310ae64/b7af3202049b4b70a612de1a7310ae64.m3u8?v=0"
            />
            <source
              data-src="//www.paperandtea.com/cdn/shop/videos/c/vp/b7af3202049b4b70a612de1a7310ae64/b7af3202049b4b70a612de1a7310ae64.HD-1080p-7.2Mbps-34324110.mp4?v=0"
              type="video/mp4"
              src="//www.paperandtea.com/cdn/shop/videos/c/vp/b7af3202049b4b70a612de1a7310ae64/b7af3202049b4b70a612de1a7310ae64.HD-1080p-7.2Mbps-34324110.mp4?v=0"
            />
          </video>

          <div className="hero-info-wrapper absolute sm:top-[40vw] md:top-[15vw] left-[3vw] max-sm:bottom-[3vw]">
            <span className="text-white sm:text-base md:text-lg max-sm:text-[10vw]">
              Small doors, big joy
            </span>
            <h1 className="text-white sm:text-[3.5vw] md:text-[4vw] font-serif max-sm:text-[5vw]">
              Advent calendars 2024
            </h1>
            <div className="hero-info-button">
              <Link to="/Adventcalendar">
                <button className="bg-black text-white p-2 sm:px-3 md:px-4 rounded-md text-sm sm:text-base max-sm:p-3 max-sm:mt-3">
                  Discover more
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Category Section */}
        <Carousel className="py-10 px-3" responsive={responsive}>
          {/* Your carousel items here */}
        </Carousel>

        {/* Cozy moments */}
        <div className="cozymoments-section-wrapper w-full min-h-screen">
          <div className="heading-wrapper w-full h-auto px-4 sm:px-8 md:px-10">
            <h1 className="font-serif text-[6vw] sm:text-[5vw] md:text-[4vw]">
              Cozy moments - the new winter teas
            </h1>
            <span className="block text-[2.5vw] sm:text-[2vw] md:text-[1.5vw] mt-2 max-sm:text-[3.5vw]">
              Enjoy the winter with aromatic blends that will warm you up.
            </span>
          </div>

          <div className="product-wrapper w-full h-auto flex flex-wrap justify-between gap-y-4 mt-8 sm:mt-[4vw] md:mt-[3vw] px-4 sm:px-5">
            {TeaCollection.length > 0 ? (
              TeaCollection.filter(
                (Teafilter) => Teafilter.product_category === "Gift Set"
              )
                .slice(0, 4)
                .map((TeaData, index) => (
                  <div
                    key={index}
                    className="product w-full sm:w-[48%] md:w-[48%] lg:w-[23%] xl:w-[23%] min-h-[35vw] sm:h-[50vw] md:h-[40vw] relative"
                  >
                    <button
                      onClick={() => toggleWishlist(TeaData.product_id)}
                      className="wishlist"
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
                      className="absolute bottom-[21vw] right-[2vw] bg-white p-2 rounded-full border-zinc-700 border-2 max-sm:bottom-[70vw] max-sm:right-[5vw] max-md:bottom-[27vw]"
                    >
                      {hoveredProductId === TeaData.product_id ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width={24}
                          height={24}
                          color={"#000000"}
                          fill={"none"}
                        >
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
                    <Link to={`/Gift Set/${TeaData.product_id}`}>
                      <div className="image-wrapper bg-[#F5F6F3] w-full h-[50%]">
                        <img
                          className="w-full h-full object-contain sm:object-cover"
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
                Fetch Issue!
              </span>
            )}
          </div>

          <div className="button-wrapper w-full flex justify-center items-center mt-8 mb-10">
            <Link to="/wintertea">
              <button className="py-2 sm:py-2.5 md:py-3 px-6 sm:px-8 md:px-10 border-black border-[1px] font-sans text-[4vw] sm:text-[1.5vw] md:text-[1.2vw]">
                Discover all
              </button>
            </Link>
          </div>
        </div>

        {/* Advent calendars 2024 */}
        <div className="Advent-calendars-section-wrapper w-full min-h-screen">
          <div className="heading-wrapper w-full h-auto px-4 sm:px-8 md:px-10">
            <h1 className="font-serif text-[6vw] sm:text-[5vw] md:text-[4vw]">
              Advent calendars 2024
            </h1>
            <span className="block text-[2.5vw] sm:text-[2vw] md:text-[1.5vw] mt-2 max-sm:text-[3.5vw]">
              Choose the perfect companion for the festive season
            </span>
          </div>

          <div className="product-wrapper w-full h-auto flex flex-wrap justify-between gap-y-4 mt-8 sm:mt-[4vw] md:mt-[3vw] px-4 sm:px-5">
            {TeaCollection.length > 0 ? (
              TeaCollection.filter(
                (Teafilter) => Teafilter.product_category === "Advent Calendar"
              )
                .slice(0, 4)
                .map((TeaData, index) => (
                  <div
                    key={index}
                    className="product w-full sm:w-[48%] md:w-[48%] lg:w-[23%] xl:w-[23%] min-h-[35vw] sm:h-[50vw] md:h-[40vw] relative"
                  >
                    <button
                      onMouseEnter={() => setHoveredProductId(TeaData.product_id)}
                      onMouseLeave={() => setHoveredProductId(null)}
                      onClick={() => AddToCart(TeaData)}
                      className="absolute bottom-[21vw] right-[2vw] bg-white p-2 rounded-full border-zinc-700 border-2 max-sm:bottom-[70vw] max-sm:right-[5vw] max-md:bottom-[27vw]"
                    >
                      {hoveredProductId === TeaData.product_id ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width={24}
                          height={24}
                          color={"#000000"}
                          fill={"none"}
                        >
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
                    <Link to={`/Advent Calendar/${TeaData.product_id}`}>
                      <div className="image-wrapper bg-[#F5F6F3] w-full h-[50%]">
                        <img
                          className="w-full h-full object-contain sm:object-cover"
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
                Fetch Issue!
              </span>
            )}
          </div>
          <div className="button-wrapper w-full flex justify-center items-center mt-8 mb-10">
            <Link to="/Adventcalendar">
              <button className="py-2 sm:py-2.5 md:py-3 px-6 sm:px-8 md:px-10 border-black border-[1px] font-sans text-[4vw] sm:text-[1.5vw] md:text-[1.2vw]">
                Discover all
              </button>
            </Link>
          </div>
        </div>

        {/* StandardBanner */}
        <StandardBanner />

        {/* Store Close to you section */}
        <Storeclosetoyou />

        {/* shop the look  */}
        <div className="shop_the_look_wrapper w-full h-[50vw] mb-10">
          <img
            className="w-full h-full object-cover"
            src="https://www.paperandtea.com/cdn/shop/files/PaperTea_10_202414122.png?v=1729782760&width=3000"
            alt="..."
          />
        </div>
        {/* We love what we do Section*/}
        <Welovewhatwedosection />

        {/* Your Benefits Section */}
        <Yourbenefits />

        {/* Footer start here */}
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
