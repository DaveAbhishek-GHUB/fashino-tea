/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import ExclusiveBenefits from "../utils/ExclusiveBenefits";
import Yourbenefits from "../utils/Yourbenefits";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/slices/userSlice";
import { useNavigate } from "react-router-dom";

function ProfilePage() {
  const [loggedinuser, setLoggedinuser] = useState(null);
  console.log(loggedinuser);

  const user = useSelector((state) => state.user.Loggedin);
  console.log(user);

  useEffect(() => {
    setLoggedinuser(user);
  }, [user]);

  const dispactch = useDispatch();
  const navigate = useNavigate();

  const Logout = () => {
    dispactch(logout());
  };

  return (
    <>
      <Header />
      <SubHeader />
      <div className="main-wrapper w-full min-h-screen">
        <div className="mydearclub-wrapper w-full min-h-[20vw]">
          <div className="heading-wrapper w-full flex justify-center items-center">
            <h1 className="text-[4vw] font-serif">My Dear Club</h1>
          </div>
          <div className="image-wrapper w-full flex justify-center mt-10">
            <img
              src="https://www.paperandtea.com/cdn/shop/files/Leaves_150x70_100x_1a18d8e9-157a-4670-b3c8-d87bb5e0f9f5.png?v=1614334192&width=100"
              alt="..."
            />
          </div>

          {!loggedinuser ? (
            <div className="Isnotloggedin w-full mt-10 mb-10">
              <div className="button-wrapper w-full flex items-center justify-center">
                <button
                  onClick={() => navigate("/login")}
                  className="py-2 px-10 rounded-sm text-white bg-black"
                >
                  Login First
                </button>
              </div>
            </div>
          ) : (
            <div className="Login-info-wrapper w-full flex flex-col mb-10">
              <span className="text-[1.3vw] text-black m-auto max-sm:text-[4vw]">
                Welcome back {loggedinuser}!
              </span>
              <span className="text-[1vw] text-[#6B6B6B] m-auto max-sm:text-[3vw] text-center">
                You have already collected 25 tea leaves. Learn below how you
                can redeem your tea leaves.
              </span>
              <div className="logout-button-wrapper w-full flex justify-center items-center mt-10">
                <button
                  onClick={Logout}
                  className="text-white bg-black text-[1.3vw] py-1 px-5 rounded-sm max-sm:text-[2vw]"
                >
                  Logout
                </button>
              </div>
            </div>
          )}

          <div className="info-wrapper w-full flex justify-center items-center mb-10">
            <div className="inner-wrapper w-[70%] max-sm:w-[90%]">
              <span className="text-[1vw] max-sm:text-[4vw]  max-lg:text-[2vw]">
                With a <b>free membership</b> in MY DEAR CLUB, you become part
                of our wonderful community and enjoy various{" "}
                <b>exclusive benefits: Limited gifts</b> with your orders, bonus
                points for every purchase that you can redeem for vouchers,
                invitations to exclusive events, early access to new products,
                and other offers await you. You also receive{" "}
                <b>10% off your next order</b> when subscribing to our
                newsletter. Become a member for free!
              </span>
            </div>
          </div>
        </div>
        <ExclusiveBenefits />
        <Yourbenefits />
        <Footer />
      </div>
    </>
  );
}

export default ProfilePage;
