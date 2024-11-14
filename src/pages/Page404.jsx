/* eslint-disable no-unused-vars */
import React from 'react'
import Header from '../components/Header'
import SubHeader from '../components/SubHeader'

function Page404() {
  return (
    <>
    <Header/>
    <SubHeader/>
        <div className="w-full h-screen flex justify-center items-center">
            <h1 className='text-[5vw] font-sans'>404 Not Found</h1>
        </div>
    </>
  )
}

export default Page404