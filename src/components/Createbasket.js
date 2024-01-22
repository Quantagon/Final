import React, { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Createbasket = () => {
  const navigate = useNavigate()
  const [options,setoptions]=useState([])
  useEffect(()=>{
    axios.get('https://buidl11-backend.salmanpary.repl.co/getprice').then(res=>{
      setoptions(Object.keys(res.data))
      
    }).catch(err=>{
      console.log(err)
    }).finally(()=>{
      console.log(options)
    }
    )

  },[])
  const data = ["ETHBTC",
    "BTC",
    "ETH",
    "LTCBTC",
    "BNBBTC",
    "NEOBTC",
    "QTUMETH",
    "EOSETH",
    "SNTETH",
    "BNTETH",
    "BCCBTC",
    "GASBTC",
    "BNBETH",
    "BTCUSDT",
    "ETHUSDT",
    "HSRBTC",
    "OAXETH",
    "DNTETH",
    "MCOETH",
    "ICNETH"]
  const [obj, setobj] = useState({
    title: "",
    description: "",
    email: "salmanpary@gmail.com",
    min_amount: 0,
    coins: [],
    allocation: [],
    commision: 0,
    marketing_tagline: ""
  });
  const settitle = (event) => {
    obj['title'] = event.target.value
    setobj(obj)
    console.log(obj)
  }
  const setdescription = (event) => {
    obj['description'] = event.target.value
    setobj(obj)
    console.log(obj)
  }

  const changecrypto1 = (event) => {
    obj["coins"][0] = event.target.value;
    setobj(obj);
    console.log(obj)
  };
  const changecrypto2 = (event) => {
    obj["coins"][1] = event.target.value
    setobj(obj)
    console.log(obj)
  }
  const changecrypto3 = (event) => {
    obj["coins"][2] = event.target.value
    setobj(obj)
    console.log(obj)
  }
  const allocation1 = (event) => {
    obj["allocation"][0] = event.target.value
    setobj(obj)
    console.log(obj)
  }
  const allocation2 = (event) => {
    obj["allocation"][1] = event.target.value
    setobj(obj)
    console.log(obj)
  }
  const allocation3 = (event) => {
    obj["allocation"][2] = event.target.value
    setobj(obj)
    console.log(obj)
  }
  const setminimumamount = (event) => {
    obj["min_amount"] = parseInt(event.target.value)
    setobj(obj)
    console.log(obj)
  }
  const setpercentage = (event) => {
    obj["commision"] = parseInt(event.target.value)
    setobj(obj)
    console.log(obj)
  }
  const setmarketingtagline = (event) => {
    obj["marketing_tagline"] = event.target.value
    setobj(obj)
  }
  const formonsubmit = (event) => {
    event.preventDefault()
    axios.post("https://fineazy-backend.herokuapp.com/getprice/create_basket", obj).then((res) => {
      console.log(res.data)
      alert('Basket created successfully')
      navigate('/home2')
    }).catch((e) => {
      console.log(e)
    })
  }

  return (
    <>
      <form action="post" onSubmit={formonsubmit}>
        <div className="text-white mt-10 text-center text-4xl font-medium mb-6">
          Create your basket
        </div>
        <div className="bg-gray-100 rounded-xl white-glassmorphism px-16 py-10  mx-7 ">
          <div className="flex justify-center">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2 whitespace-nowrap"
                for="grid-first-name"
              >
                Title
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-2 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="enter your portfolio title"
                onChange={settitle}
              />
            </div>

          </div>
          <div className="flex justify-center">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2 whitespace-nowrap"
                for="grid-first-name"
              >
                Description
              </label>
              <input
                class="appearance-none px-2 block w-full bg-gray-200 text-gray-700 border rounded py-3  mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="enter your description here"
                onChange={setdescription}
              />
            </div>
          </div>
          <div className="flex justify-center">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2 whitespace-nowrap"
                for="grid-first-name"
              >
                Marketing tagline
              </label>
              <input
                class="appearance-none px-2 block w-full bg-gray-200 text-gray-700 border rounded py-3  mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="enter your detailed description here"
                onChange={setmarketingtagline}
              />
            </div>
          </div>
          <div className="flex justify-center items-center mb-7">
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2"
                for="grid-state"
              >
                Crypto name
              </label>
              <div class="relative">
                <select
                  class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                  onChange={changecrypto1}
                >
                  {/* <option value="BTCUSDT">BTC</option>
                  <option value="ETHUSDT">ETH</option>
                  <option value="DOGEUSDT">DOGECOIN</option>
                  <option value="SOLUSDT">SOLANA</option> */}
                  {options &&options.map((datas) => (
                    <option >{datas}</option>
                  ))}
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2"
                for="grid-zip"
              >
                Allocation(%)
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-zip"
                type="text"
                placeholder="in percentage"
                onChange={allocation1}
              />
            </div>
          </div>
          <div className="flex  justify-center items-center mb-7">
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2"
                for="grid-state"
              >
                Crypto name
              </label>
              <div class="relative">
                <select
                  class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                  onChange={changecrypto2}
                >
                  {/* <option>BTC</option>
                  <option>ETH</option>
                  <option>DOGECOIN</option>
                  <option>SOLANA</option> */}
                  {options&&options.map((datas) => (
                    <option >{datas}</option>
                  ))}
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2"
                for="grid-zip"
              >
                Allocation(%)
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-zip"
                type="text"
                placeholder="in percentage"
                onChange={allocation2}
              />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2"
                for="grid-state"
              >
                Crypto name
              </label>
              <div class="relative">
                <select
                  class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                  onChange={changecrypto3}
                >
                  {/* <option value="BTC">BTC</option>
                  <option value="ETH">ETH</option>
                  <option value="DOGECOIN">DOGECOIN</option>
                  <option value="DOGECOIN">SOLANA</option> */}
                  {options &&options.map((datas) => (
                    <option >{datas}</option>
                  ))}
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2"
                for="grid-zip"
              >
                Allocation(%)
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-zip"
                type="text"
                placeholder="in percentage"
                onChange={allocation3}
              />
            </div>
          </div>

          <div className="flex justify-center">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0 mt-6">
              <label
                class="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2 whitespace-nowrap"
                for="grid-first-name"
              >
                Minimum investment amount(in USD)
              </label>
              <input
                class="appearance-none px-2 block w-full bg-gray-200 text-gray-700 border rounded py-3  mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Eg:20"
                onChange={setminimumamount}
              />
            </div>
          </div>
          <div className="flex justify-center">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2 whitespace-nowrap"
                for="grid-first-name"
              >
                Your commision fee in percentage
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-2 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="0-8%"
                onChange={setpercentage}

              />
            </div>
          </div>
          <div className=" flex justify-center">
            <button class="blue_3d  text-white font-bold py-2 px-6 mt-4 rounded text-sm">
              SUBMIT
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
export default Createbasket;
