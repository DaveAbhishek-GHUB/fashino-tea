/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Login } from "../store/slices/userSlice";

function LoginPage() {
  const [loggedinuser, setLoggedinuser] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.Loggedin);

  useEffect(() => {
    setLoggedinuser(user);
  }, [user]);

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
    if (loggedinuser === null) {
      alert("Email or password incorrect");
    } else {
      navigate("/");
    }
  };

  return (
    <>
      <div className="main-register-wrapper w-full min-h-screen">
        <Header />
        <SubHeader />
        <div className="register-form-wrapper w-full h-auto flex flex-col">
          <div className="register-form-heading mt-[1vw] flex flex-col">
            <h1 className="font-sans text-[3vw] m-auto max-md:text-[5vw] max-sm:text-[6vw]">Login</h1>
            <span className="font-sans text-[1.2vw] m-auto max-md:text-[2vw] max-sm:text-[3vw]">
              Please fill in the fields below:
            </span>
          </div>
          <form
            className="mt-[5vw] w-full flex flex-col gap-3"
            onSubmit={handleSubmit(onSubmit)}
          >
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

            <div className="ForPassword m-auto">
              <input
                className="bg-[#EEEEEE] w-[30vw] py-3 px-5 text-[1vw] max-md:w-[50vw] max-sm:w-[70vw] max-md:text-[1.5vw] max-sm:text-[2vw]"
                placeholder="password"
                type="password"
                {...register("password", {
                  required: "Password Required...",
                })}
              />
              <p className="text-[1vw] text-red-500 max-md:text-[1.5vw] max-sm:text-[2vw]">
                {errors.password?.message}
              </p>
            </div>

            <button className="w-[30vw] m-auto bg-black text-white py-2 mt-5 max-md:w-[50vw] max-sm:w-[70vw]">
              Login
            </button>
            <div className="login-navigator m-auto text-[1.3vw] text-center max-md:text-[2vw] max-sm:text-[3vw]">
              <span>Not yet a member of the Fascino? Create an account? <br /><Link to="/register">Create an account</Link></span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginPage;