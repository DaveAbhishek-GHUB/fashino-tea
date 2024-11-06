/* eslint-disable no-unused-vars */
import React from "react";

function Footer() {
  return (
    <>
      <div className="w-full lg:h-[40vw] md:h-auto flex flex-col lg:flex-row">
        <div className="footer-links w-full lg:w-[65%] bg-zinc-900 flex flex-col md:flex-row">
          <div className="aboutus w-full md:w-1/2 p-4 lg:p-10">
            <span className="font-bold text-white text-lg">About Us</span>
            <div className="aboutus-navlink-wrapper flex flex-col text-white text-sm lg:text-[1.2vw] gap-1 mt-5 mb-5">
              <a href="#" className="hover:underline">
                About Fascino
              </a>
              <a href="#" className="hover:underline">
                Storefinder
              </a>
              <a href="#" className="hover:underline">
                Career at Fascino
              </a>
              <a href="#" className="hover:underline">
                Job Offers
              </a>
              <a href="#" className="hover:underline">
                Fascino for companies
              </a>
              <a href="#" className="hover:underline">
                Press inquiries
              </a>
            </div>
            <div className="contact-us flex flex-col gap-3">
              <span className="font-bold text-white text-lg">Social Media</span>
              <div className="icons flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                  color={"#ffffff"}
                  fill={"none"}
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.18182 10.3333C5.20406 10.3333 5 10.5252 5 11.4444V13.1111C5 14.0304 5.20406 14.2222 6.18182 14.2222H8.54545V20.8889C8.54545 21.8081 8.74951 22 9.72727 22H12.0909C13.0687 22 13.2727 21.8081 13.2727 20.8889V14.2222H15.9267C16.6683 14.2222 16.8594 14.0867 17.0631 13.4164L17.5696 11.7497C17.9185 10.6014 17.7035 10.3333 16.4332 10.3333H13.2727V7.55556C13.2727 6.94191 13.8018 6.44444 14.4545 6.44444H17.8182C18.7959 6.44444 19 6.25259 19 5.33333V3.11111C19 2.19185 18.7959 2 17.8182 2H14.4545C11.191 2 8.54545 4.48731 8.54545 7.55556V10.3333H6.18182Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                  color={"#ffffff"}
                  fill={"none"}
                >
                  <path
                    d="M12 11L8 21"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.97368 16.5724C10.5931 16.8473 11.2787 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 12.9108 7.24367 13.7646 7.66921 14.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                  color={"#ffffff"}
                  fill={"none"}
                >
                  <path
                    d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M17.5078 6.5L17.4988 6.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                  color={"#ffffff"}
                  fill={"none"}
                >
                  <path
                    d="M12 20.5C13.8097 20.5 15.5451 20.3212 17.1534 19.9934C19.1623 19.5839 20.1668 19.3791 21.0834 18.2006C22 17.0221 22 15.6693 22 12.9635V11.0365C22 8.33073 22 6.97787 21.0834 5.79937C20.1668 4.62088 19.1623 4.41613 17.1534 4.00662C15.5451 3.67877 13.8097 3.5 12 3.5C10.1903 3.5 8.45489 3.67877 6.84656 4.00662C4.83766 4.41613 3.83321 4.62088 2.9166 5.79937C2 6.97787 2 8.33073 2 11.0365V12.9635C2 15.6693 2 17.0221 2.9166 18.2006C3.83321 19.3791 4.83766 19.5839 6.84656 19.9934C8.45489 20.3212 10.1903 20.5 12 20.5Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M15.9621 12.3129C15.8137 12.9187 15.0241 13.3538 13.4449 14.2241C11.7272 15.1705 10.8684 15.6438 10.1728 15.4615C9.9372 15.3997 9.7202 15.2911 9.53799 15.1438C9 14.7089 9 13.8059 9 12C9 10.1941 9 9.29112 9.53799 8.85618C9.7202 8.70886 9.9372 8.60029 10.1728 8.53854C10.8684 8.35621 11.7272 8.82945 13.4449 9.77593C15.0241 10.6462 15.8137 11.0813 15.9621 11.6871C16.0126 11.8933 16.0126 12.1067 15.9621 12.3129Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                  color={"#ffffff"}
                  fill={"none"}
                >
                  <path
                    d="M4.5 9.5H4C3.05719 9.5 2.58579 9.5 2.29289 9.79289C2 10.0858 2 10.5572 2 11.5V20C2 20.9428 2 21.4142 2.29289 21.7071C2.58579 22 3.05719 22 4 22H4.5C5.44281 22 5.91421 22 6.20711 21.7071C6.5 21.4142 6.5 20.9428 6.5 20V11.5C6.5 10.5572 6.5 10.0858 6.20711 9.79289C5.91421 9.5 5.44281 9.5 4.5 9.5Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M6.5 4.25C6.5 5.49264 5.49264 6.5 4.25 6.5C3.00736 6.5 2 5.49264 2 4.25C2 3.00736 3.00736 2 4.25 2C5.49264 2 6.5 3.00736 6.5 4.25Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M12.326 9.5H11.5C10.5572 9.5 10.0858 9.5 9.79289 9.79289C9.5 10.0858 9.5 10.5572 9.5 11.5V20C9.5 20.9428 9.5 21.4142 9.79289 21.7071C10.0858 22 10.5572 22 11.5 22H12C12.9428 22 13.4142 22 13.7071 21.7071C14 21.4142 14 20.9428 14 20L14.0001 16.5001C14.0001 14.8433 14.5281 13.5001 16.0879 13.5001C16.8677 13.5001 17.5 14.1717 17.5 15.0001V19.5001C17.5 20.4429 17.5 20.9143 17.7929 21.2072C18.0857 21.5001 18.5572 21.5001 19.5 21.5001H19.9987C20.9413 21.5001 21.4126 21.5001 21.7055 21.2073C21.9984 20.9145 21.9985 20.4432 21.9987 19.5006L22.0001 14.0002C22.0001 11.515 19.6364 9.50024 17.2968 9.50024C15.9649 9.50024 14.7767 10.1531 14.0001 11.174C14 10.5439 14 10.2289 13.8632 9.995C13.7765 9.84686 13.6531 9.72353 13.505 9.63687C13.2711 9.5 12.9561 9.5 12.326 9.5Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="aboutus w-full md:w-1/2 p-4 lg:p-10">
            <span className="font-bold text-white text-lg">Services</span>
            <div className="aboutus-navlink-wrapper flex flex-col text-white text-sm lg:text-[1.2vw] gap-1 mt-5 mb-5">
              <a href="#" className="hover:underline">
                Contact
              </a>
              <a href="#" className="hover:underline">
                Track and Trace
              </a>
              <a href="#" className="hover:underline">
                Shipping & Payment
              </a>
            </div>
            <div className="contact-us flex flex-col gap-3">
              <span className="font-bold text-white text-lg">
                Customer Service
              </span>
              <button className="p-2 text-white border-white border-2 hover:bg-white hover:text-zinc-900 transition-colors">
                Contact us
              </button>
              <span className="text-white text-xs lg:text-[1vw]">
                Monday to Friday from 10am to 6pm
              </span>
            </div>
          </div>
        </div>
        <div className="offer w-full lg:w-[35%] p-4 lg:p-10 bg-gray-100">
          <div className="offer-info">
            <h2 className="text-xl lg:text-[2vw] font-serif">
              Save 10% off your next order
            </h2>
            <span className="text-sm lg:text-[1vw] block mt-2">
              Sign up for our newsletter and embark on your personal tea journey
              with a welcome gift from us.
            </span>
          </div>
          <div className="offer-email-wrapper w-full flex flex-col gap-3 mt-4">
            <input
              className="bg-white py-2 px-4 lg:px-10 border-2 text-sm lg:text-[1.3vw] w-full"
              placeholder="Your e-mail"
              type="text"
            />
            <button className="bg-black p-2 text-white hover:bg-zinc-800 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
