/* eslint-disable no-unused-vars */
import React from "react";
import SubHeader from "../components/SubHeader";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Register } from "../store/slices/userSlice";
import Yourbenefits from "../utils/Yourbenefits";
import Footer from "../components/Footer";

function Signuppage() {
  // Initialize dispatch and navigate hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Set up form handling with react-hook-form
  const {
    register,  
    handleSubmit, 
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    },
  });

  // Function to handle form submission
  const onSubmit = (RegisterData) => {
    // Dispatch the Register action with form data
    dispatch(Register(RegisterData));
    // Navigate to the home page after successful registration
    navigate("/");
  };


  return (
    <div className="main-register-wrapper w-full mt-12">
      {/* SubHeader component for additional navigation or branding */}
      <SubHeader />

      {/* Wrapper for the registration form */}
      <div className="register-form-wrapper w-full h-auto flex flex-col p-4 sm:p-8">

        {/* Heading section for the registration form */}
        <div className="register-form-heading mt-4 sm:mt-[1vw] flex flex-col text-center">
          <h1 className="font-sans text-2xl sm:text-[3vw] m-auto">Register</h1>
          <span className="font-sans text-sm sm:text-[1.2vw] m-auto">
            Please fill in the fields below:
          </span>
        </div>

        {/* Registration form with input fields */}
        <form
          className="mt-8 sm:mt-[5vw] w-full flex flex-col gap-3"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* Firstname input field */}
          <div className="Forfirstname m-auto w-full max-w-md">
            <input
              className="bg-[#EEEEEE] w-full py-2 sm:py-3 px-4 sm:px-5 text-sm sm:text-[1vw]"
              placeholder="Firstname"
              type="text"
              {...register("firstname", {
                required: "Firstname Required...",
              })}
            />
            <p className="text-sm sm:text-[1vw] text-red-500">
              {errors.firstname?.message}
            </p>
          </div>

          {/* Lastname input field */}
          <div className="Forlastname m-auto w-full max-w-md">
            <input
              className="bg-[#EEEEEE] w-full py-2 sm:py-3 px-4 sm:px-5 text-sm sm:text-[1vw]"
              placeholder="Lastname"
              type="text"
              {...register("lastname", {
                required: "Lastname Required...",
              })}
            />
            <p className="text-sm sm:text-[1vw] text-red-500">
              {errors.lastname?.message}
            </p>
          </div>

          {/* Email input field */}
          <div className="Foremail m-auto w-full max-w-md">
            <input
              className="bg-[#EEEEEE] w-full py-2 sm:py-3 px-4 sm:px-5 text-sm sm:text-[1vw]"
              placeholder="Email"
              type="text"
              {...register("email", {
                required: "Email Required...",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            <p className="text-sm sm:text-[1vw] text-red-500">
              {errors.email?.message}
            </p>
          </div>

          {/* Password input field */}
          <div className="ForPassword m-auto w-full max-w-md">
            <input
              className="bg-[#EEEEEE] w-full py-2 sm:py-3 px-4 sm:px-5 text-sm sm:text-[1vw]"
              placeholder="Password"
              type="password"
              {...register("password", {
                required: "Password Required...",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
            <p className="text-sm sm:text-[1vw] text-red-500">
              {errors.password?.message}
            </p>
          </div>

          {/* Submit button for the form */}
          <button
            className="w-full max-w-md m-auto bg-black text-white py-2 sm:py-3 mt-4 sm:mt-5 text-sm sm:text-base"
            type="submit"
          >
            Create Account
          </button>

          {/* Navigation link to login page */}
          <div className="login-navigator m-auto text-sm sm:text-[1.3vw] mt-2">
            <span>
              Already have an account?{" "}
              <Link to="/login" className="text-blue-500">
                Login
              </Link>
            </span>
          </div>
        </form>
      </div>
      {/* Your Benefits Component */}
      <Yourbenefits />

      {/* Footer Component */}
      <Footer />
    </div>
  );
}

export default Signuppage;