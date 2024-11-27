/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import SubHeader from "../components/SubHeader";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Login } from "../store/slices/userSlice";
import Yourbenefits from "../utils/Yourbenefits";
import Footer from "../components/Footer";

function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Retrieve all users from the Redux store
  const allUsers = useSelector((state) => state.user.user);

  // Initialize form handling with default values
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Handle form submission
  const onSubmit = (loginData) => {
    // Find user matching the provided email and password
    const user = allUsers.find(
      (user) =>
        user.email === loginData.email && user.password === loginData.password
    );

    // Dispatch login action
    dispatch(Login(loginData));

    // Navigate to home if user is found, otherwise alert error
    if (!user) {
      alert("Email or password incorrect");
    } else {
      navigate("/");
    }
  };

  return (
<>
  {/* SubHeader Component */}
  <SubHeader />

  {/* Main Register Wrapper */}
  <div className="main-register-wrapper w-full mt-[8vw] max-sm:mt-[20vw] h-[100vh]">
    <div className="register-form-wrapper w-full h-auto flex flex-col">

      {/* Register Form Heading */}
      <div className="register-form-heading mt-[1vw] flex flex-col">
        <h1 className="font-sans text-[3vw] m-auto max-md:text-[5vw] max-sm:text-[6vw]">
          Login
        </h1>
        <span className="font-sans text-[1.2vw] m-auto max-md:text-[2vw] max-sm:text-[3vw]">
          Please fill in the fields below:
        </span>
      </div>

      {/* Login Form */}
      <form
        className="mt-[5vw] w-full flex flex-col gap-3"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* Email Input Field */}
        <div className="Foremail m-auto">
          <input
            className="bg-[#EEEEEE] w-[30vw] py-3 px-5 text-[1vw] max-md:w-[50vw] max-sm:w-[70vw] max-md:text-[1.5vw] max-sm:text-[2vw]"
            placeholder="Email"
            type="text"
            {...register("email", {
              required: "Email Required...",
            })}
          />
          <p className="text-[1vw] text-red-500 max-md:text-[1.5vw] max-sm:text-[2vw]">
            {errors.email?.message}
          </p>
        </div>

        {/* Password Input Field */}
        <div className="ForPassword m-auto">
          <input
            className="bg-[#EEEEEE] w-[30vw] py-3 px-5 text-[1vw] max-md:w-[50vw] max-sm:w-[70vw] max-md:text-[1.5vw] max-sm:text-[2vw]"
            placeholder="Password"
            type="password"
            {...register("password", {
              required: "Password Required...",
            })}
          />
          <p className="text-[1vw] text-red-500 max-md:text-[1.5vw] max-sm:text-[2vw]">
            {errors.password?.message}
          </p>
        </div>

        {/* Login Button */}
        <button className="w-[30vw] m-auto bg-black text-white py-2 mt-5 max-md:w-[50vw] max-sm:w-[70vw]">
          Login
        </button>

        {/* Navigation to Register */}
        <div className="login-navigator m-auto text-[1.3vw] text-center max-md:text-[2vw] max-sm:text-[3vw]">
          <span>
            Not yet a member of the Fascino? Create an account? <br />
            <Link to="/register">
              <span className="text-blue-400">Create an account</span>
            </Link>
          </span>
        </div>
      </form>
    </div>
  </div>

  {/* Your Benefits Component */}
  <Yourbenefits />

  {/* Footer Component */}
  <Footer />
</>
  );
}

export default LoginPage;