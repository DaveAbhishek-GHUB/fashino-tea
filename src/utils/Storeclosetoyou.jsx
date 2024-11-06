/* eslint-disable no-unused-vars */
import React from 'react'

function Storeclosetoyou() {
  return (
    <>
        <div className="main-wrapper w-full h-auto sm:h-[60vw] md:h-[40vw]">
            <div className="inner-wrapper w-full h-full flex flex-col sm:flex-row">
                <div className="information-section h-full w-full sm:w-[50vw] p-4 sm:p-5 flex flex-col justify-center">
                    <h1 className='text-[7vw] sm:text-[5vw] md:text-[3.5vw] font-extralight'>
                        <b>Fascino </b> stores<br />close to you
                    </h1>
                    <span className='text-[3vw] sm:text-[2vw] md:text-[1.3vw] mt-2 sm:mt-0'>
                        Explore a new world of flavor, get inspired, and savor the moment.
                    </span>
                    <button className='py-2 px-6 sm:px-8 md:px-10 border-black border-[1px] font-serif mt-6 sm:mt-[4vw] md:mt-[3vw] text-[3vw] sm:text-[2vw] md:text-[1.3vw] w-full sm:w-auto'>
                        Find a store close to me
                    </button>
                </div>
                <div className="Storeimage w-full sm:w-[50vw] h-[60vw] sm:h-full flex justify-center items-center">
                    <div className="inner-image-wrapper w-[90%] sm:w-[85%] md:w-[80%] h-[90%] sm:h-[85%] md:h-[80%]">
                        <img 
                            className='w-full h-full object-cover sm:object-contain' 
                            src="https://images.unsplash.com/photo-1531058240690-006c446962d8?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                            alt="Store interior" 
                        />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Storeclosetoyou