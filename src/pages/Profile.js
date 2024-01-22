import React from "react";
import { useEffect } from "react";
import "../assets/3d.css";
import { HiSpeakerphone } from "react-icons/hi";
import axios from "axios";
import { useState } from "react";
import "../assets/glassmorphism.css";
import bnbimg from "../images/bnbicon.png";
import { useSelector, useDispatch } from "react-redux";
import { storeemail } from "../features/userinfo/user";
import Profilecomp from "../components/Profilecomp";
import { AiOutlineCheckCircle } from "react-icons/ai";
import Balances from "../components/Balances";

const Profile = () => {
  const email = useSelector((state) => {
    return state.user.email;
  });

  const [invested, setInvested] = useState();
  const [coinPrice, setCoinPrice] = useState([]);

  const fetchData = async () => {
    const resp = await axios.post(
      "https://buidl11-backend.salmanpary.repl.co/getprice/users_portfolio",
      {
        email: "adamrubiks@gmail.com",
      }
    );
    console.log(resp.data);
    setInvested(resp.data);
    var temp = [];
    temp.push(resp.data.coin_prices_json);
    setCoinPrice(temp);
  };

  const cardfetch = () => {
    for (var i = 0; i < coinPrice.length; i++) {
      return <Card data={coinPrice[i]} i={i} />;
    }
  };

  useEffect(() => {
    fetchData();
    cardfetch();
    console.log(email);
  }, []);

  return (
    <div className="">
      <div className="bg-white blue-glassmorphism mx-12 mt-10 rounded-xl py-12 mb-8 px-12 grid grid-cols-2">
        <div className="flex items-center col-span-1 border-r-2	">
          <img
            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80"
            alt=""
            className="h-32 w-32 rounded-full"
          />
          <div className="text-5xl font-bold ml-20 text-white">
            Adam<br></br>
            {/* <div className="text-lg mt-8 rounded-2xl border-2"> Following</div> */}
            <button className="blue_3d mt-4 flex text-xs text-white px-5 cursor-default text-center">
              <span className="mt-0.5">FOLLOWING</span>
              <AiOutlineCheckCircle className="m-1"></AiOutlineCheckCircle>
            </button>
          </div>
        </div>
        <div className="text-white text-2xl font-medium ml-14 mt-8 flex flex-row justify-evenly">
          <div>
            <h3 className="mb-1 text-sm"> FOLLOWERS</h3>
            <h3 className="text-blue-500 font-semibold">10</h3>
          </div>
          <div>
            <h3 className="mb-1 text-sm"> FOLLOWING</h3>
            <h3 className="text-blue-500 font-semibold">4</h3>
          </div>
        </div>
      </div>
<div className="flex justify-evenly">

      <div className="grid grid-cols-3 mt-16 ml-12">
 
          <div>
            <Profilecomp invested={invested} />
            <div className=" flex justify-evenly">
              <button
                type="submit"
                className="mt-4 w-[10rem] py-2 green_3d text-white hover:bg-green-500 font-semibold text-lg"
              >
                {" "}
                BUY{" "}
              </button>
              <button
                type="submit"
                className="mt-4 w-[10rem] py-2 red_3d text-white hover:bg-red-500  font-semibold text-lg"
              >
                {" "}
                SELL{" "}
              </button>
            </div>
            <Invite />
          </div>
         
     
        <div className="col-span-2">
          <div className="mx-12 max-w-[40rem]">{cardfetch()}</div>
        </div>
      </div>
      <div className="mr-10">
            <Balances invested={invested} />
          </div>
</div>
    </div>
  );
};

function Card({ data, i }) {
  const icon = data[i]?.name.slice(0, 3).toLowerCase();
  const imgLink = `https://cryptoicons.org/api/color/${icon}/200`;
  console.log(imgLink);

  return (
    <div className="flex Home_overview bg-slate-50 p-8 rounded-lg box_3d items-center justify-between mt-8 ">
      <div className="flex items-center">
        <img
          src={imgLink}
          className="w-12 h-12 flex items-center mr-2"
          alt=""
        />
        <h2 className="text-xl font-bold">{data[i]?.name}</h2>
      </div>
      <div className="">
        <h3 className="font-semibold mb-2">
          <span className="text-gray-600 font-normal">Tot amt. : </span>{" "}
          {data[i]?.price}
        </h3>
        <h3 className="font-semibold">
          <span className="text-gray-600 font-normal">% change : </span>
          {data[i]?.percentage_change}
        </h3>
        <h3 className="font-semibold mt-2">
          {" "}
          <span className="text-gray-600 font-normal">Allocation : </span>
          {data[i]?.allocation}
        </h3>
      </div>
    </div>
  );
}

function Invite() {
  return (
    <div className="flex flex-col mt-12 bg-slate-50 px-8 py-4 rounded-lg box_3d mb-10">
      <h3 className="text-xl flex ml-0">
        Invite and Earn{" "}
        <HiSpeakerphone className="ml-2  h-7 w-7 fill-blue-900" />{" "}
      </h3>
      <h4 className="my-2 text-gray-600">
        Earn upto 2% from your friend's first investment.*
      </h4>
      <div className="blue_3d py-2 w-[8rem] text-xs text-white font-semibold text-center ml-56 cursor-pointer">
        INVITE NOW
      </div>
    </div>
  );
}

export default Profile;
