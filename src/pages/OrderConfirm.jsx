/* eslint-disable no-unused-vars */
import React from "react";
import SubHeader from "../components/SubHeader";
import ConfirmOrder from '../lottie/Confirm.json'
import Lottie from "react-lottie";

function OrderConfirm() {
  return (
    <>
      <SubHeader />
      <>
        <div className="main-wrapper w-full mt-12">
            <div className="animation-wrapper w-full h-[10vw] mt-[10vw]">
            <Lottie options={{
                animationData: ConfirmOrder,
                loop: false
            }}/>
            </div>
            <div className="order-confirmation-wrapper w-full flex justify-center items-center mt-5">
                <h1 className="text-[2vw]">Order confirmed</h1>
            </div>
        </div>
      </>
    </>
  );
}

export default OrderConfirm;
