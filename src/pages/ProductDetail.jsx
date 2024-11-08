/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import Welovewhatwedosection from "../utils/Welovewhatwedosection";
import Yourbenefits from "../utils/Yourbenefits";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";

function ProductDetail() {
    const [selectedProduct, setselectedProduct] = useState([]);

    const { productId }  = useParams();
    const teaCollection = import.meta.env.VITE_TEACOLLECTION_API;

    useEffect(() => {
        fetch(teaCollection)
            .then((response) => response.json())
            .then((data) => {
                const product = data.find(item => item.product_id == productId);
                setselectedProduct(product);
                console.log("Product found:", product);  
            });
    }, [teaCollection, productId]);  
    
  return (
    <>
      <Header />
      <SubHeader />
      <div className="main-product-detail-wrapper w-full min-h-screen">
        <div className="imageanddetailwrapper w-full min-h-screen flex flex-col md:flex-row">
          {/* Product Image */}
          <div className="product-image w-full md:w-1/2 h-64 md:h-auto">
            <img
              className="w-full h-full object-contain"
              src={selectedProduct.product_image}
              alt="Product Image"
            />
          </div>

          <div className="product-info-wrapper w-full md:w-1/2 p-6 md:p-10">
            <div className="heading-wrapper space-y-4 mb-6">
              <h1 className="text-3xl md:text-2xl lg:text-4xl font-serif">
              {selectedProduct.product_name}
              </h1>
              <span className="text-sm md:text-base w-fit border border-black px-3 py-1 rounded">
              {selectedProduct.product_category}
              </span>
              <p className="text-base md:text-lg mt-3">
              {selectedProduct.product}
              </p>
            </div>

            <div className="add_to_cart_section bg-gray-100 rounded-md p-5">
              <div className="price mb-4">
                <h1 className="text-2xl font-bold">₹ {selectedProduct.product_price}</h1>
                <span className="text-sm">incl. VAT, plus shipping</span>
              </div>

              <button className="w-full md:w-auto py-3 px-6 bg-black text-white text-base md:text-lg">
                Add to cart
              </button>

              <div className="payment-options-wrapper flex gap-2 my-3">
                <div className="payment-options-wrapper flex gap-3 my-3">
                  {/* apple pay svg */}
                  <svg
                    className="icon icon--full-color"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    x={0}
                    y={0}
                    width={38}
                    height={24}
                    viewBox="0 0 165.521 105.965"
                    xmlSpace="preserve"
                    aria-labelledby="pi-apple_pay"
                  >
                    <title id="pi-apple_pay">Apple Pay</title>
                    <path
                      fill="#000"
                      d="M150.698 0H14.823c-.566 0-1.133 0-1.698.003-.477.004-.953.009-1.43.022-1.039.028-2.087.09-3.113.274a10.51 10.51 0 0 0-2.958.975 9.932 9.932 0 0 0-4.35 4.35 10.463 10.463 0 0 0-.975 2.96C.113 9.611.052 10.658.024 11.696a70.22 70.22 0 0 0-.022 1.43C0 13.69 0 14.256 0 14.823v76.318c0 .567 0 1.132.002 1.699.003.476.009.953.022 1.43.028 1.036.09 2.084.275 3.11a10.46 10.46 0 0 0 .974 2.96 9.897 9.897 0 0 0 1.83 2.52 9.874 9.874 0 0 0 2.52 1.83c.947.483 1.917.79 2.96.977 1.025.183 2.073.245 3.112.273.477.011.953.017 1.43.02.565.004 1.132.004 1.698.004h135.875c.565 0 1.132 0 1.697-.004.476-.002.952-.009 1.431-.02 1.037-.028 2.085-.09 3.113-.273a10.478 10.478 0 0 0 2.958-.977 9.955 9.955 0 0 0 4.35-4.35c.483-.947.789-1.917.974-2.96.186-1.026.246-2.074.274-3.11.013-.477.02-.954.022-1.43.004-.567.004-1.132.004-1.699V14.824c0-.567 0-1.133-.004-1.699a63.067 63.067 0 0 0-.022-1.429c-.028-1.038-.088-2.085-.274-3.112a10.4 10.4 0 0 0-.974-2.96 9.94 9.94 0 0 0-4.35-4.35A10.52 10.52 0 0 0 156.939.3c-1.028-.185-2.076-.246-3.113-.274a71.417 71.417 0 0 0-1.431-.022C151.83 0 151.263 0 150.698 0z"
                    />
                    <path
                      fill="#FFF"
                      d="M150.698 3.532l1.672.003c.452.003.905.008 1.36.02.793.022 1.719.065 2.583.22.75.135 1.38.34 1.984.648a6.392 6.392 0 0 1 2.804 2.807c.306.6.51 1.226.645 1.983.154.854.197 1.783.218 2.58.013.45.019.9.02 1.36.005.557.005 1.113.005 1.671v76.318c0 .558 0 1.114-.004 1.682-.002.45-.008.9-.02 1.35-.022.796-.065 1.725-.221 2.589a6.855 6.855 0 0 1-.645 1.975 6.397 6.397 0 0 1-2.808 2.807c-.6.306-1.228.511-1.971.645-.881.157-1.847.2-2.574.22-.457.01-.912.017-1.379.019-.555.004-1.113.004-1.669.004H14.801c-.55 0-1.1 0-1.66-.004a74.993 74.993 0 0 1-1.35-.018c-.744-.02-1.71-.064-2.584-.22a6.938 6.938 0 0 1-1.986-.65 6.337 6.337 0 0 1-1.622-1.18 6.355 6.355 0 0 1-1.178-1.623 6.935 6.935 0 0 1-.646-1.985c-.156-.863-.2-1.788-.22-2.578a66.088 66.088 0 0 1-.02-1.355l-.003-1.327V14.474l.002-1.325a66.7 66.7 0 0 1 .02-1.357c.022-.792.065-1.717.222-2.587a6.924 6.924 0 0 1 .646-1.981c.304-.598.7-1.144 1.18-1.623a6.386 6.386 0 0 1 1.624-1.18 6.96 6.96 0 0 1 1.98-.646c.865-.155 1.792-.198 2.586-.22.452-.012.905-.017 1.354-.02l1.677-.003h135.875"
                    />
                    <g>
                      <g>
                        <path
                          fill="#000"
                          d="M43.508 35.77c1.404-1.755 2.356-4.112 2.105-6.52-2.054.102-4.56 1.355-6.012 3.112-1.303 1.504-2.456 3.959-2.156 6.266 2.306.2 4.61-1.152 6.063-2.858"
                        />
                        <path
                          fill="#000"
                          d="M45.587 39.079c-3.35-.2-6.196 1.9-7.795 1.9-1.6 0-4.049-1.8-6.698-1.751-3.447.05-6.645 2-8.395 5.1-3.598 6.2-.95 15.4 2.55 20.45 1.699 2.5 3.747 5.25 6.445 5.151 2.55-.1 3.549-1.65 6.647-1.65 3.097 0 3.997 1.65 6.696 1.6 2.798-.05 4.548-2.5 6.247-5 1.95-2.85 2.747-5.6 2.797-5.75-.05-.05-5.396-2.101-5.446-8.251-.05-5.15 4.198-7.6 4.398-7.751-2.399-3.548-6.147-3.948-7.447-4.048"
                        />
                      </g>
                      <g>
                        <path
                          fill="#000"
                          d="M78.973 32.11c7.278 0 12.347 5.017 12.347 12.321 0 7.33-5.173 12.373-12.529 12.373h-8.058V69.62h-5.822V32.11h14.062zm-8.24 19.807h6.68c5.07 0 7.954-2.729 7.954-7.46 0-4.73-2.885-7.434-7.928-7.434h-6.706v14.894z"
                        />
                        <path
                          fill="#000"
                          d="M92.764 61.847c0-4.809 3.665-7.564 10.423-7.98l7.252-.442v-2.08c0-3.04-2.001-4.704-5.562-4.704-2.938 0-5.07 1.507-5.51 3.82h-5.252c.157-4.86 4.731-8.395 10.918-8.395 6.654 0 10.995 3.483 10.995 8.89v18.663h-5.38v-4.497h-.13c-1.534 2.937-4.914 4.782-8.579 4.782-5.406 0-9.175-3.222-9.175-8.057zm17.675-2.417v-2.106l-6.472.416c-3.64.234-5.536 1.585-5.536 3.95 0 2.288 1.975 3.77 5.068 3.77 3.95 0 6.94-2.522 6.94-6.03z"
                        />
                        <path
                          fill="#000"
                          d="M120.975 79.652v-4.496c.364.051 1.247.103 1.715.103 2.573 0 4.029-1.09 4.913-3.899l.52-1.663-9.852-27.293h6.082l6.863 22.146h.13l6.862-22.146h5.927l-10.216 28.67c-2.34 6.577-5.017 8.735-10.683 8.735-.442 0-1.872-.052-2.261-.157z"
                        />
                      </g>
                    </g>
                  </svg>
                  {/* gpay svg */}
                  <svg
                    className="icon icon--full-color"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 38 24"
                    width={38}
                    height={24}
                    aria-labelledby="pi-google_pay"
                  >
                    <title id="pi-google_pay">Google Pay</title>
                    <path
                      d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
                      fill="#000"
                      opacity=".07"
                    />
                    <path
                      d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"
                      fill="#FFF"
                    />
                    <path
                      d="M18.093 11.976v3.2h-1.018v-7.9h2.691a2.447 2.447 0 0 1 1.747.692 2.28 2.28 0 0 1 .11 3.224l-.11.116c-.47.447-1.098.69-1.747.674l-1.673-.006zm0-3.732v2.788h1.698c.377.012.741-.135 1.005-.404a1.391 1.391 0 0 0-1.005-2.354l-1.698-.03zm6.484 1.348c.65-.03 1.286.188 1.778.613.445.43.682 1.03.65 1.649v3.334h-.969v-.766h-.049a1.93 1.93 0 0 1-1.673.931 2.17 2.17 0 0 1-1.496-.533 1.667 1.667 0 0 1-.613-1.324 1.606 1.606 0 0 1 .613-1.336 2.746 2.746 0 0 1 1.698-.515c.517-.02 1.03.093 1.49.331v-.208a1.134 1.134 0 0 0-.417-.901 1.416 1.416 0 0 0-.98-.368 1.545 1.545 0 0 0-1.319.717l-.895-.564a2.488 2.488 0 0 1 2.182-1.06zM23.29 13.52a.79.79 0 0 0 .337.662c.223.176.5.269.785.263.429-.001.84-.17 1.146-.472.305-.286.478-.685.478-1.103a2.047 2.047 0 0 0-1.324-.374 1.716 1.716 0 0 0-1.03.294.883.883 0 0 0-.392.73zm9.286-3.75l-3.39 7.79h-1.048l1.281-2.728-2.224-5.062h1.103l1.612 3.885 1.569-3.885h1.097z"
                      fill="#5F6368"
                    />
                    <path
                      d="M13.986 11.284c0-.308-.024-.616-.073-.92h-4.29v1.747h2.451a2.096 2.096 0 0 1-.9 1.373v1.134h1.464a4.433 4.433 0 0 0 1.348-3.334z"
                      fill="#4285F4"
                    />
                    <path
                      d="M9.629 15.721a4.352 4.352 0 0 0 3.01-1.097l-1.466-1.14a2.752 2.752 0 0 1-4.094-1.44H5.577v1.17a4.53 4.53 0 0 0 4.052 2.507z"
                      fill="#34A853"
                    />
                    <path
                      d="M7.079 12.05a2.709 2.709 0 0 1 0-1.735v-1.17H5.577a4.505 4.505 0 0 0 0 4.075l1.502-1.17z"
                      fill="#FBBC04"
                    />
                    <path
                      d="M9.629 8.44a2.452 2.452 0 0 1 1.74.68l1.3-1.293a4.37 4.37 0 0 0-3.065-1.183 4.53 4.53 0 0 0-4.027 2.5l1.502 1.171a2.715 2.715 0 0 1 2.55-1.875z"
                      fill="#EA4335"
                    />
                  </svg>
                  {/* mastercard svg */}
                  <svg
                    className="icon icon--full-color"
                    viewBox="0 0 38 24"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    width={38}
                    height={24}
                    aria-labelledby="pi-master"
                  >
                    <title id="pi-master">Mastercard</title>
                    <path
                      opacity=".07"
                      d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
                    />
                    <path
                      fill="#fff"
                      d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"
                    />
                    <circle fill="#EB001B" cx={15} cy={12} r={7} />
                    <circle fill="#F79E1B" cx={23} cy={12} r={7} />
                    <path
                      fill="#FF5F00"
                      d="M22 12c0-2.4-1.2-4.5-3-5.7-1.8 1.3-3 3.4-3 5.7s1.2 4.5 3 5.7c1.8-1.2 3-3.3 3-5.7z"
                    />
                  </svg>
                  {/* Paypal svg */}
                  <svg
                    className="icon icon--full-color"
                    viewBox="0 0 38 24"
                    xmlns="http://www.w3.org/2000/svg"
                    width={38}
                    height={24}
                    role="img"
                    aria-labelledby="pi-paypal"
                  >
                    <title id="pi-paypal">PayPal</title>
                    <path
                      opacity=".07"
                      d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
                    />
                    <path
                      fill="#fff"
                      d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"
                    />
                    <path
                      fill="#003087"
                      d="M23.9 8.3c.2-1 0-1.7-.6-2.3-.6-.7-1.7-1-3.1-1h-4.1c-.3 0-.5.2-.6.5L14 15.6c0 .2.1.4.3.4H17l.4-3.4 1.8-2.2 4.7-2.1z"
                    />
                    <path
                      fill="#3086C8"
                      d="M23.9 8.3l-.2.2c-.5 2.8-2.2 3.8-4.6 3.8H18c-.3 0-.5.2-.6.5l-.6 3.9-.2 1c0 .2.1.4.3.4H19c.3 0 .5-.2.5-.4v-.1l.4-2.4v-.1c0-.2.3-.4.5-.4h.3c2.1 0 3.7-.8 4.1-3.2.2-1 .1-1.8-.4-2.4-.1-.5-.3-.7-.5-.8z"
                    />
                    <path
                      fill="#012169"
                      d="M23.3 8.1c-.1-.1-.2-.1-.3-.1-.1 0-.2 0-.3-.1-.3-.1-.7-.1-1.1-.1h-3c-.1 0-.2 0-.2.1-.2.1-.3.2-.3.4l-.7 4.4v.1c0-.3.3-.5.6-.5h1.3c2.5 0 4.1-1 4.6-3.8v-.2c-.1-.1-.3-.2-.5-.2h-.1z"
                    />
                  </svg>
                  {/* Visa svg */}
                  <svg
                    className="icon icon--full-color"
                    viewBox="0 0 38 24"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    width={38}
                    height={24}
                    aria-labelledby="pi-visa"
                  >
                    <title id="pi-visa">Visa</title>
                    <path
                      opacity=".07"
                      d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
                    />
                    <path
                      fill="#fff"
                      d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"
                    />
                    <path
                      d="M28.3 10.1H28c-.4 1-.7 1.5-1 3h1.9c-.3-1.5-.3-2.2-.6-3zm2.9 5.9h-1.7c-.1 0-.1 0-.2-.1l-.2-.9-.1-.2h-2.4c-.1 0-.2 0-.2.2l-.3.9c0 .1-.1.1-.1.1h-2.1l.2-.5L27 8.7c0-.5.3-.7.8-.7h1.5c.1 0 .2 0 .2.2l1.4 6.5c.1.4.2.7.2 1.1.1.1.1.1.1.2zm-13.4-.3l.4-1.8c.1 0 .2.1.2.1.7.3 1.4.5 2.1.4.2 0 .5-.1.7-.2.5-.2.5-.7.1-1.1-.2-.2-.5-.3-.8-.5-.4-.2-.8-.4-1.1-.7-1.2-1-.8-2.4-.1-3.1.6-.4.9-.8 1.7-.8 1.2 0 2.5 0 3.1.2h.1c-.1.6-.2 1.1-.4 1.7-.5-.2-1-.4-1.5-.4-.3 0-.6 0-.9.1-.2 0-.3.1-.4.2-.2.2-.2.5 0 .7l.5.4c.4.2.8.4 1.1.6.5.3 1 .8 1.1 1.4.2.9-.1 1.7-.9 2.3-.5.4-.7.6-1.4.6-1.4 0-2.5.1-3.4-.2-.1.2-.1.2-.2.1zm-3.5.3c.1-.7.1-.7.2-1 .5-2.2 1-4.5 1.4-6.7.1-.2.1-.3.3-.3H18c-.2 1.2-.4 2.1-.7 3.2-.3 1.5-.6 3-1 4.5 0 .2-.1.2-.3.2M5 8.2c0-.1.2-.2.3-.2h3.4c.5 0 .9.3 1 .8l.9 4.4c0 .1 0 .1.1.2 0-.1.1-.1.1-.1l2.1-5.1c-.1-.1 0-.2.1-.2h2.1c0 .1 0 .1-.1.2l-3.1 7.3c-.1.2-.1.3-.2.4-.1.1-.3 0-.5 0H9.7c-.1 0-.2 0-.2-.2L7.9 9.5c-.2-.2-.5-.5-.9-.6-.6-.3-1.7-.5-1.9-.5L5 8.2z"
                      fill="#142688"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="main-teainfo-wrapper w-full h-auto flex flex-col md:flex-row mb-10">
          {/* Text and Features container */}
          <div className="ourblends w-full md:w-[50vw] h-auto md:h-full px-4 sm:px-[2vw] py-8 sm:py-[8vw] text-center md:text-left">
            <div className="additional-info-wrapper flex gap-[1.7vw]">
              <svg
                width={32}
                height={14}
                className="icon icon--check mt-[1.1vw]"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M20 6L9 17L4 12"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-[3vw] sm:text-[1.5vw] md:text-[1.2vw] font-sans text-[#9F9F9F] block mt-2">
                Our Blends are a highlight in your cup – carefully crafted tea
                blends you must try. Let each cup guide you to a new world of
                flavors!
              </span>
            </div>

            <div className="additional-info-wrapper flex gap-[0.8vw]">
              <svg
                width={32}
                height={14}
                className="icon icon--check mt-[1.1vw]"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M20 6L9 17L4 12"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-[3vw] sm:text-[1.5vw] md:text-[1.2vw] font-sans text-[#9F9F9F] block mt-2">
                16 exclusive new teas from farms around the world
              </span>
            </div>

            <div className="additional-info-wrapper flex gap-[0.8vw]">
              <svg
                width={32}
                height={14}
                className="icon icon--check mt-[1.1vw]"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M20 6L9 17L4 12"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-[3vw] sm:text-[1.5vw] md:text-[1.2vw] font-sans text-[#9F9F9F] block mt-2">
                8 exquisite tea chocolates crafted in collaboration with
                Original Beans
              </span>
            </div>

            <div className="additional-info-wrapper flex gap-[1.7vw]">
              <svg
                width={32}
                height={14}
                className="icon icon--check mt-[1.1vw]"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M20 6L9 17L4 12"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-[3vw] sm:text-[1.5vw] md:text-[1.2vw] font-sans text-[#9F9F9F] block mt-2">
                Each day, you learn more about our partners social or ecological
                projects as well as the tea and the corresponding tea farm
              </span>
            </div>

            <div className="additional-info-wrapper flex gap-[0.8vw]">
              <svg
                width={32}
                height={14}
                className="icon icon--check mt-[1.1vw]"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M20 6L9 17L4 12"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-[3vw] sm:text-[1.5vw] md:text-[1.2vw] font-sans text-[#9F9F9F] block mt-2">
                100% recyclable packaging made from innovative tea paper
              </span>
            </div>
          </div>
          {/* Image container */}
          <div className="image-container w-full md:w-[50vw] h-[50vw] md:h-full p-5 md:p-10">
            <img
              className="w-full h-full object-cover rounded-md"
              src={selectedProduct.product_hover_image}
              alt="..."
            />
          </div>
        </div>
        <Welovewhatwedosection />
        <Yourbenefits />
        <Footer />
      </div>
    </>
  );
}

export default ProductDetail;
