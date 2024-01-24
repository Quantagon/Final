import React, { useEffect } from "react";
import { Route, useNavigate } from "react-router-dom";
import { FaLock } from "react-icons/fa";
import "../assets/glassmorphism.css";
import Explore from "../components/Explore";
import FriendsFollow from "../components/FriendsFollow";
import Kart from "../components/Kart";

import { useSelector, useDispatch } from "react-redux";
import { storeinfo } from "../features/friends/friends";
import { storeview } from "../features/viewprofile/view";
import axios from "axios";
import { useState } from "react";
const Friends = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const redirect = () => {
    window.location.replace("https://paytm.me/6-FJJsF")
  }
  const [follow, setFollow] = useState()
  const [following, setFollowing] = useState()
  const [followingData, setFollowingData] = useState()
  const [expert, setExpert] = useState()
  const [ldata, setLdata] = useState()



  const fetch = async () => {
    const res = await axios.post(
      "https://buidl11-backend.salmanpary.repl.co/auth/show_not_friends",
      {
        email: "adamrubiks@gmail.com",
      }
    );

    setFollow(res.data);
  };
  const fetchFollowing = async () => {
    const res = await axios.post(
      "https://fineazy-backend.herokuapp.com/auth/show_people",
      {
        email: "adamrubiks@gmail.com",
      }
    );

    setFollowing(res.data);
  };
  const getdetails = async () => {
    if (following) {
      var temp = [];
      for (var i = 0; i < following.length; i++) {
        const res = await axios.post(
          "https://buidl11-backend.salmanpary.repl.co/auth/specific_user2",
          {
            name: following[i],
          }
        );

        temp.push(res.data);
      }
      setFollowingData(temp);
      console.log(temp);
    }
    console.log(temp, 'temp')
  }
  const experts = async () => {
    const res = await axios.get('https://buidl11-backend.salmanpary.repl.co/getprice/user1')
    console.log(res.data, 'hereiam')
    setExpert(res.data)
  }
  const lisadata = async () => {
    const res = await axios.get('https://buidl11-backend.salmanpary.repl.co/auth/lisa')
    console.log(res.data, 'hereiaml')
    res.data.name = 'Lisa'
    res.data.followers = 5
    setLdata(res.data)
  }
  useEffect(() => {
    fetch()
    fetchFollowing()
    experts()
    lisadata()
  }, [window.location.reload])
  useEffect(() => {
    getdetails();

  }, [following])



  return (
    <>
      <div className="m-10">
        <h1 className="font-bold text-3xl text-blue-600 mt-16 ml-6">
          Explore Communities
        </h1>
        {/* <div className="ml-6 text-white">Investment details</div> */}
        <div className="grid grid-cols-2 gap-4">
          {expert?.map((data) => (
            <Portfolio data={data} />
          ))}
        </div>
      </div>
      <h1 className="text-3xl font-bold ml-14 mt-16 text-blue-600">Follow</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 grid-flow-row gap-3 m-10 ">
        {follow?.map((data) => (
          <FriendsFollow data={data} f={true} />
        ))}
      </div>

      <div className="following">
        <h1 className="text-3xl font-bold ml-14 mt-16 text-blue-600">
          Following
        </h1>
        

        <div className="grid grid-cols-2 md:grid-cols-4 grid-flow-row gap-3 p-10">
        <Kart />
          {followingData?.map((data) => (
            <div onClick={() => {
              dispatch(storeview(data))
              // console.log(data,'njanm')
              navigate('/viewprofile')
            }} className=""><FriendsFollow data={data} f={false} /></div>
          ))}
          {ldata &&
            <div onClick={() => navigate('/prol')} className="">

              {/* <FriendsFollow data={ldata} f={false} /> */}
            </div>
          }

        </div>
      </div>
    </>
  );
};

export default Friends;

function Portfolio({ data }) {
  const redirect = () => {

    window.location.replace("https://rzp.io/l/i6vbzGnC")

  }
  return (
    <a href="https://rzp.io/l/i6vbzGnC">
      <div className="salman white-glassmorphism portfolio_cards p-8  rounded-lg box_3d mt-12 h-60  hover:cursor-pointer m-5">
        <div className="grid grid-cols-3 m-5">
          <img
            src="https://www.pngitem.com/pimgs/m/419-4196791_transparent-confused-man-png-default-profile-png-download.png"
            alt=""
            className="h-16 w-16 rounded-full"
          />

          <div className="name font-medium text-lg text-white">{data.name}'s Portfolio</div>

          <FaLock className="ml-32 fill-red-600" />
        </div>
        <div className="grid grid-cols-3 mt-10">
          <div className="value text-gray-300 text-sm">Invested Value</div>
          <div className="overallgain text-gray-300 text-sm">Overall Gain</div>
          <div className="1day text-gray-300 text-sm">1 day gain</div>
          <div></div>
        </div>
        <div className="grid grid-cols-3">
          <div className="no1 text-white font-medium">{data?.invested_amount}usdt</div>
          <div className="text-green-400 font-semibold">{data?.total_amount}%</div>
          <div className="text-blue-500 font-semibold">{Number(data.total_amount - 3)}%</div>
        </div>
      </div>
    </a>
  );
}
