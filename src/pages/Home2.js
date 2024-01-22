import React, { useEffect, useState } from "react";
import logo2 from "../images/logo2.png";
import vector from "../images/vector.png";
import "./Home2.css";
import { Link } from "react-router-dom";
import Coins from "../components/Coins";

import { FcGoogle } from "react-icons/fc";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
const Home2 = () => {
  return (
    <>
      <div className="home">
        <div className="">
          {/* <img src={vector}></img> */}
          <p className="mt-36 text-gradient text-3xl md:text-6xl text-white">
            Invest and Grow
          </p>
          <p className="text-gradient text-lg md:text-2xl text-white mt-4 mb-4">
            Build your diversified portfolio with us
          </p>
          <br></br>
          <Link to="/signin">
            <button onClick={""} className="btn">
              SignUp with Coindcx
            </button>
          </Link>
          <Link to="/login">
            <button onClick={""} className="btn2 btn mb-10 white-glassmorphism">
              Login with Coindcx
            </button>
          </Link>
          {/* <img className='ill' src={logo2}></img> */}
          <div className="icons flex ml-72">
            <FcGoogle className="ease-in duration-300 mr-7 h-8 w-8 cursor-pointer hover:scale-75 " />
            <AiFillTwitterCircle className="ease-in duration-300 fill-sky-500 cursor-pointer mr-7 h-8 w-8 hover:scale-75" />
            <FaDiscord className="ease-in duration-300 fill-violet-600 mr-4 h-8 w-8 cursor-pointer hover:scale-75" />
          </div>
        </div>
        <div className="text-white mt-24">
          <Coins />
        </div>
      </div>
    </>
  );
};

export default Home2;
