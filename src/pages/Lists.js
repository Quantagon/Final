import React, { useState, useEffect } from "react";
import { Route, useNavigate } from "react-router-dom";
import { FaLock } from "react-icons/fa";
import "../assets/glassmorphism.css";
import Explore from "../components/Explore";

import axios from "axios";
import { PopularCurr } from "../api-config/api";

const Lists = () => {
    


  return (
    <>
      <div className="m-10">
        <h1 className="font-bold text-3xl text-blue-600 mt-16 ml-6">
          List Baskets
        </h1>
        <div className="grid grid-cols-2 gap-4">
        </div>
      </div>
      <h1 className="text-3xl font-bold ml-14 mt-16 text-blue-600">Search</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 grid-flow-row gap-3 m-10 ">

      </div>

      <div className="following">
        <h1 className="text-3xl font-bold ml-14 mt-16 text-blue-600">
          View
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-4 grid-flow-row gap-3 p-10">

        </div>
      </div>
    </>
  );
};

export default Lists;
