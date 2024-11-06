/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Register } from "../store/slices/userSlice";

function Signuppage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const onSubmit = (RegisterData) => {
    dispatch(Register(RegisterData));
    navigate("/")
  };

  return (
    <div className="main-register-wrapper w-full min-h-screen">
      <Header />
      <SubHeader />
      <div className="register-form-wrapper w-full h-auto flex flex-col p-4 sm:p-8">
        <div className="register-form-heading mt-4 sm:mt-[1vw] flex flex-col text-center">
          <h1 className="font-sans text-2xl sm:text-[3vw] m-auto">Register</h1>
          <span className="font-sans text-sm sm:text-[1.2vw] m-auto">
            Please fill in the fields below:
          </span>
        </div>
        <form
          className="mt-8 sm:mt-[5vw] w-full flex flex-col gap-3"
          onSubmit={handleSubmit(onSubmit)}
        >
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

          <button
            className="w-full max-w-md m-auto bg-black text-white py-2 sm:py-3 mt-4 sm:mt-5 text-sm sm:text-base"
            type="submit"
          >
            Create Account
          </button>
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
    </div>
  );
}

export default Signuppage;