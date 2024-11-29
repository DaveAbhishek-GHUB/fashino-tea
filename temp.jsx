<div className="simillar-product-wrapper w-full">
  <div className="heading-wrapper w-full px-[8vw]">
    <h1 className="text-[3vw] max-md:text-[5vw]">What you might also like</h1>
    <span className="text-[1.2vw] max-md:text-[2vw]">
      Maybe the next thing you won't want to miss
    </span>
  </div>
  <div className="products-wrapper">
    <div className="product-wrapper w-full h-auto flex justify-center gap-[8vw] gap-y-4 mt-8 sm:mt-[4vw] md:mt-[3vw] px-4 sm:px-5 max-md:flex-wrap">
      {TeaCollection.length > 0 ? (
        TeaCollection.filter(
          (Teafilter) =>
            Teafilter.product_category === selectedProduct.product_category &&
            Teafilter.product_id !== selectedProduct.product_id // Exclude the current product
        )
          .slice(0, 3) // Select the first three products
          .map((TeaData, index) => (
            <div
              key={index}
              className="product w-[25vw] relative max-md:w-[40vw] max-sm:w-[100vw]"
            >
              <button
                onMouseEnter={() => setHoveredProductId(TeaData.product_id)}
                onMouseLeave={() => setHoveredProductId(null)}
                onClick={() => AddToCart(TeaData)}
                className="absolute bottom-[18vw] right-[1vw] bg-white p-2 rounded-full border-zinc-700 border-[1px] max-md:bottom-[30vw] max-md:right-[1.5vw] max-sm:bottom-[63vw] max-sm:right-[2vw]"
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
                    <path
                      d="M8 16H15.2632C19.7508 16 20.4333 13.1808 21.261 9.06908C21.4998 7.88311 21.6192 7.29013 21.3321 6.89507C21.045 6.5 20.4947 6.5 19.3941 6.5H19M6 6.5H8"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M11 8.5C11.4915 9.0057 12.7998 11 13.5 11M16 8.5C15.5085 9.0057 14.2002 11 13.5 11M13.5 11V3"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 16L5.37873 3.51493C5.15615 2.62459 4.35618 2 3.43845 2H2.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M8.88 16H8.46857C7.10522 16 6 17.1513 6 18.5714C6 18.8081 6.1842 19 6.41143 19H17.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle
                      cx="10.5"
                      cy="20.5"
                      r="1.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <circle
                      cx="17.5"
                      cy="20.5"
                      r="1.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
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
              <Link
                target="_blank"
                to={`/${selectedProduct.product_category}/${TeaData.product_id}`}
              >
                <div className="image-wrapper bg-[#F5F6F3] w-full h-[50%] rounded-md">
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
                  <span className="text-[2.3vw] sm:text-[1.8vw] md:text-[1.3vw] font-bold max-sm:text-[4vw] w-full flex justify-between">
                    ₹ {TeaData.product_price}
                  </span>
                </div>
              </Link>
              <span className="w-full flex justify-between items-end">
                <div className="conpare-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#4b5563"} fill={"none"}>
                    <path d="M19 17L19 11C19 8.17157 19 6.75736 18.1213 5.87868C17.2426 5 15.8284 5 13 5H10M10 5C10 4.29977 11.9943 2.99153 12.5 2.5M10 5C10 5.70023 11.9943 7.00847 12.5 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M5 7.5L5 13.5C5 16.3284 5 17.7426 5.87868 18.6213C6.75736 19.5 8.17157 19.5 11 19.5H14M14 19.5C14 20.2002 12.0057 21.5085 11.5 22M14 19.5C14 18.7998 12.0057 17.4915 11.5 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="19" cy="19" r="2" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="5" cy="5" r="2" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </div>
                <button
                  onClick={() => forCompare(TeaData.product_id)} className="text-black">
                  Compare product
                </button>
              </span>
            </div>
          ))
      ) : (
        <span className="text-[2vw] sm:text-[1.5vw] md:text-[1vw] text-red-500">
          Fetch Issue!
        </span>
      )}
    </div>
  </div>
</div>
