import React, { useState, useEffect } from "react";
import { Route, useNavigate } from "react-router-dom";
import { FaLock } from "react-icons/fa";
import "../assets/glassmorphism.css";
import Explore from "../components/Explore";
import Investment from "../components/Investment";

import axios from "axios";
import { PopularCurr } from "../api-config/api";

const Lists = ({ setBasket, basket }) => {

  const [data, setdata] = useState([
    {
        name: 'Storage Based',
        desc: 'This basket consists Storage based cryptos like ICP, Filecoin and BTT',
        desc2: 'This bucket Is handled by Pritham',
        title: 'Open for All'
        },
    {
        name: 'Bluechips',
        desc: 'This basket consists of 50% BTC and 50% ETH, These are higher marketcap coins',
        desc2: 'This Basket is Managed by Rahul',
        title: 'Popular'
    },
    {
        name: 'Flaming hot',
        desc: 'This contains GLMR,IMX,JOE',
        desc2: 'This scheme has crossed over 20k users',
        title: 'Premium'
    },
    {
        name: 'Metaverse',
        desc: 'This scheme consists of web3 metaverse project',
        desc2: 'Take premium sub to access this bucket',
        title: 'Premium'
    }
])
    


  return (
    <>
      <div className="m-10">
        <h1 className="font-bold text-3xl text-blue-600 mt-16 ml-6 text-centre">
          List Baskets
        </h1>
        {data.map((datas) => (
                        <>
                            {/* {datas.name === 'Bluechips' ? () => { setDisabled(false) } : () => setDisabled(true)} */}
                            <Investment  setBasket={setBasket} basket={basket} title={datas.name} des={datas.desc} tag={datas.title} tagdes={datas.desc2} />
                        </>
                    ))}
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
