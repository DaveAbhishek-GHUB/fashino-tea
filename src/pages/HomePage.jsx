/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import StandardBanner from "../utils/Standardbanner";
import Storeclosetoyou from "../utils/Storeclosetoyou";
import Welovewhatwedosection from "../utils/Welovewhatwedosection";
import Yourbenefits from "../utils/Yourbenefits";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function HomePage() {
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
      <div className="main-wrapper w-full min-h-screen">
        {/* Here section */}
        <div className="hero-wrapper h-[50vh] sm:h-[45vh] md:h-[50vh] relative max-sm:h-[30vh]">
          <video
            className="w-full h-full object-cover"
            src="https://videos.pexels.com/video-files/7592873/7592873-uhd_2732_1318_30fps.mp4"
            loop
            autoPlay
            muted
          ></video>
          <div className="hero-info-wrapper absolute sm:top-[6vw] md:top-[8vw] left-[3vw] max-sm:bottom-[10vw]">
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
        <div className="category-section-wrapper w-full h-[25vh] sm:h-[30vh] md:h-[35vh] flex gap-4 sm:gap-6 md:gap-10 items-center px-3 sm:px-4 md:px-5 overflow-x-auto whitespace-nowrap bg-[#EEEEEE]">
          {/* adventcalendars */}
          <Link to="/Adventcalendar">
            <div className="advent-calendars w-[20vw] h-[20vw] sm:w-[15vw] sm:h-[15vw] md:w-[10vw] md:h-[10vw] shrink-0">
              <img
                className="w-full h-full rounded-full"
                src="https://www.paperandtea.com/cdn/shop/files/UNICORN_collection_page_1.jpg?v=1725981579&width=200"
                alt="..."
              />
              <span className="w-full flex justify-center text-[2vw] sm:text-[1.5vw] md:text-[1.2vw]">
                Advent-calendars
              </span>
            </div>
          </Link>

          {/* teachocolate */}
          <Link to="/teachocolate">
            <div className="tea-chocolate w-[20vw] h-[20vw] sm:w-[15vw] sm:h-[15vw] md:w-[10vw] md:h-[10vw] shrink-0">
              <img
                className="w-full h-full rounded-full"
                src="https://www.paperandtea.com/cdn/shop/files/Collection_Circle.jpg?v=1727185858&width=200"
                alt="..."
              />
              <span className="w-full flex justify-center text-[2vw] sm:text-[1.5vw] md:text-[1.2vw]">
                Tea-chocolate
              </span>
            </div>
          </Link>

          {/* matcha */}
          <Link to="/matcha">
            <div className="tea-matcha w-[20vw] h-[20vw] sm:w-[15vw] sm:h-[15vw] md:w-[10vw] md:h-[10vw] shrink-0">
              <img
                className="w-full h-full rounded-full"
                src="https://www.paperandtea.com/cdn/shop/files/icon-matchatee.jpg?v=1721139547&width=200"
                alt="..."
              />
              <span className="w-full flex justify-center text-[2vw] sm:text-[1.5vw] md:text-[1.2vw]">
                Matcha
              </span>
            </div>
          </Link>

          {/* tea-blends */}
          <Link to="/teablends">
            <div className="tea-blends w-[20vw] h-[20vw] sm:w-[15vw] sm:h-[15vw] md:w-[10vw] md:h-[10vw] shrink-0">
              <img
                className="w-full h-full rounded-full"
                src="https://www.paperandtea.com/cdn/shop/files/icon-teemischungen.jpg?v=1721139547&width=200"
                alt="..."
              />
              <span className="w-full flex justify-center text-[2vw] sm:text-[1.5vw] md:text-[1.2vw]">
                Tea-blends
              </span>
            </div>
          </Link>

          {/* winter-teas */}
          <Link to="/wintertea">
            <div className="winter-teas w-[20vw] h-[20vw] sm:w-[15vw] sm:h-[15vw] md:w-[10vw] md:h-[10vw] shrink-0">
              <img
                className="w-full h-full rounded-full"
                src="https://www.paperandtea.com/cdn/shop/files/Bilder_Startseite_Winter_Teas.jpg?v=1729069408&width=200"
                alt="..."
              />
              <span className="w-full flex justify-center text-[2vw] sm:text-[1.5vw] md:text-[1.2vw]">
                Winter-teas
              </span>
            </div>
          </Link>

          {/* Green Tea */}
          <Link to="/greentea">
            <div className="green-tea w-[20vw] h-[20vw] sm:w-[15vw] sm:h-[15vw] md:w-[10vw] md:h-[10vw] shrink-0">
              <img
                className="w-full h-full rounded-full"
                src="https://www.paperandtea.com/cdn/shop/files/icon-gruenertee.jpg?v=1721139547&width=200"
                alt="..."
              />
              <span className="w-full flex justify-center text-[2vw] sm:text-[1.5vw] md:text-[1.2vw]">
                Green-tea
              </span>
            </div>
          </Link>

          {/* Black Tea */}
          <Link to="/blacktea">
            <div className="black-tea w-[20vw] h-[20vw] sm:w-[15vw] sm:h-[15vw] md:w-[10vw] md:h-[10vw] shrink-0">
              <img
                className="w-full h-full rounded-full"
                src="https://www.paperandtea.com/cdn/shop/files/icon-schwarzertee.jpg?v=1721139547&width=200"
                alt="..."
              />
              <span className="w-full flex justify-center text-[2vw] sm:text-[1.5vw] md:text-[1.2vw]">
                Black-tea
              </span>
            </div>
          </Link>

          {/* Herbal Tea */}
          <Link to="herbaltea">
            <div className="herbal-tea w-[20vw] h-[20vw] sm:w-[15vw] sm:h-[15vw] md:w-[10vw] md:h-[10vw] shrink-0">
              <img
                className="w-full h-full rounded-full"
                src="https://www.paperandtea.com/cdn/shop/files/icon-kraeutertee.jpg?v=1721139547&width=200"
                alt="..."
              />
              <span className="w-full flex justify-center text-[2vw] sm:text-[1.5vw] md:text-[1.2vw]">
                Herbal-tea
              </span>
            </div>
          </Link>

          {/* Oolong Tea */}
          <Link to="/oolongtea">
            <div className="oolong-tea w-[20vw] h-[20vw] sm:w-[15vw] sm:h-[15vw] md:w-[10vw] md:h-[10vw] shrink-0">
              <img
                className="w-full h-full rounded-full"
                src="https://www.paperandtea.com/cdn/shop/files/icon-oolong.jpg?v=1721139547&width=200"
                alt="..."
              />
              <span className="w-full flex justify-center text-[2vw] sm:text-[1.5vw] md:text-[1.2vw]">
                Oolong-tea
              </span>
            </div>
          </Link>
        </div>

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
                    className="product w-full sm:w-[48%] md:w-[48%] lg:w-[23%] xl:w-[23%] min-h-[35vw] sm:h-[50vw] md:h-[40vw]"
                  >
                    <Link to={`/wintertea/${TeaData.product_id}`}>
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
              ).map((TeaData, index) => (
                <div
                  key={index}
                  className="product w-full sm:w-[48%] md:w-[48%] lg:w-[23%] xl:w-[23%] min-h-[35vw] sm:h-[50vw] md:h-[40vw]"
                >
                  <Link to={`/adventcalendar/${TeaData.product_id}`}>
                    <div className="image-wrapper bg-[#F5F6F3] w-full h-[50%]">
                      <img
                        className="w-full h-full object-contain"
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
