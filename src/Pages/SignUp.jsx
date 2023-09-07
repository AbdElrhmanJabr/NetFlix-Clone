import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import Introduction from "../components/Introduction";
import { TV, downLoad, allDevices, kids } from "../data";
import { DefaultAccordion } from "../components/Accordion";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="w-full h-[650px] relative flex items-center justify-center">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/3ad4e24f-1469-409d-a5a2-7dfaf5b5bf21/PS-en-20230828-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="/"
          className=" absolute w-full h-full object-cover"
        />
        <div className=" fixed bg-black/50 w-full h-full"></div>

        <div className="absolute bg-black/70 w-[350px] md:w-[500px] px-16 py-4 flex gap-3  flex-col h-[400px] lg:h-[500px] z-50 text-white md:p-16">
          <h1 className="text-xl font-bold">Sign Up</h1>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-7  w-full text-center "
          >
            <input
              required
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email..."
              className=" bg-gray-700 px-1 py-5 text-white outline-none border-none rounded"
            ></input>
            <input
              required
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password More Than 6 Characters..."
              className=" bg-gray-700 px-1 py-4 text-white outline-none border-none rounded"
            ></input>
            <button className="bg-red-600 py-4 text-lg font-bold active:scale-110 transition-all duration-300 rounded">
              Sign Up
            </button>
          </form>
          <p className="text-write  text-gray-400">
            Already Signed Up ?!
            <Link to={"/login"} className="text-gray-200 font-bold ms-1">
              Log In
            </Link>
          </p>
        </div>
      </div>
      <div className="relative text-white  flex flex-col items-center justify-center  px-10">
        <Introduction endPoint={TV} ifExist videoAliment={true} />
        <Introduction endPoint={downLoad} />
        <Introduction endPoint={allDevices} ifExist videoAliment={false} />
        <Introduction endPoint={kids} />
      </div>
      <DefaultAccordion />
    </>
  );
};

export default SignUp;
