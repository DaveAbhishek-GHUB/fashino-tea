/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Login } from "../store/slices/userSlice";

function LoginPage() {
  const navigate = useNavigate()

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: ""
    },
  });

  const onSubmit = (LoginData) => {
    dispatch(Login(LoginData));
    navigate("/")
  };
  return (
    <>
      <div className="main-register-wrapper w-full min-h-screen">
        <Header />
        <SubHeader />
        <div className="register-form-wrapper w-full h-auto flex flex-col">
          <div className="register-form-heading mt-[1vw] flex flex-col">
            <h1 className="font-sans text-[3vw] m-auto">Login</h1>
            <span className="font-sans text-[1.2vw] m-auto">
              Please fill in the fields below:
            </span>
          </div>
          <form
            className="mt-[5vw] w-full flex flex-col gap-3"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="Foremail m-auto">
              <input
                className="bg-[#EEEEEE] w-[30vw] py-3 px-5 text-[1vw]"
                placeholder="Email"
                type="text"
                {...register("email", {
                  required: "Email Required...",
                })}
              />
              <p className="text-[1vw] text-red-500">
                {errors.email?.message}
              </p>
            </div>

            <div className="ForPassword m-auto">
              <input
                className="bg-[#EEEEEE] w-[30vw] py-3 px-5 text-[1vw]"
                placeholder="password"
                type="password"
                {...register("password", {
                  required: "Password Required...",
                })}
              />
              <p className="text-[1vw] text-red-500">
                {errors.password?.message}
              </p>
            </div>

            <button className="w-[30vw] m-auto bg-black text-white py-2 mt-5" type="submit">
              Login
            </button>
            <div className="login-navigator m-auto text-[1.3vw] text-center">
              <span>Not yet a member of the Fascino?Create an account ? <br /><Link to="/register">Create an account</Link></span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
