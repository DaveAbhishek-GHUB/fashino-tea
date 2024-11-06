/* eslint-disable no-unused-vars */
import React from 'react'

function Welovewhatwedosection() {
  return (
    <>
        <div className="weLovewhatwedo w-full h-auto sm:h-[60vw] md:h-[40vw] flex flex-col sm:flex-row">
            <div className="welovewhatwedo-image-section w-full sm:w-1/2 h-[60vw] sm:h-full flex justify-center items-center">
                <img 
                    src="https://www.paperandtea.com/cdn/shop/files/brand-teaser.jpg?v=1723556978&width=1200" 
                    alt="We love what we do" 
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="welovewhatwedo-info-section w-full sm:w-1/2 flex flex-col p-4 sm:p-5 gap-4 sm:gap-5 justify-center">
                <h1 className='text-[7vw] sm:text-[5vw] md:text-[3.5vw] font-extralight'>
                    Because we love what we do
                </h1>
                <span className='text-[3vw] sm:text-[1.5vw] md:text-[1vw]'>
                    At Fascino, its all about mindful moments that truly matter. We invite you to discover new flavor worlds and find the peace youre seeking. Our products are crafted with care to bring joy. Our team is passionate about what we do – creating spaces and experiences that inspire and connect. Learn more about what drives us and join us on our journey.
                </span>
                <button className='w-full sm:w-auto py-2 px-6 sm:px-8 md:px-10 border-black border-2 text-[3vw] sm:text-[2vw] md:text-[1.5vw] font-serif mt-2 sm:mt-0'>
                    Find out more about us
                </button>
            </div>
        </div>
    </>
  )
}

export default Welovewhatwedosection