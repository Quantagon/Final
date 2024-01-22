import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Modal({ setShowModal, modal }) {
  const [balance, setbalance] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://buidl11-backend.salmanpary.repl.co/getprice/balance")
      .then((res) => {
        console.log(res.data);
        setbalance(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const investHandler = () => {
    console.log("hello");
    axios
      .post(`https://buidl11-backend.salmanpary.repl.co/getprice/buy`)
      .then((res) => {
        console.log(res.data);
        if (res.data.status == "success") {
          alert("Order Placed Successfylly");
          navigate("/home2");
        } else {
          alert("Insuffient balance");
          navigate("/details");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="text-center p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">Invest Now</h3>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <p className="my-4 text-slate-500 text-lg leading-relaxed w-[70rem]">
                <h3 className="text-black">Available Balance :</h3>
                <div className="flex">
                  BTC : {balance && balance.BTC} <br />
                  USDT : {balance && balance.BTC}
                </div>
                <div className="mt-12">
                  <label htmlFor="" className="text-black">
                    {" "}
                    Enter Amount :{" "}
                  </label>
                  <input type="text" className="border-2 pl-2 " />
                </div>
                <div className="mt-8 ">
                  <button
                    type="submit"
                    className="mt-4 w-[10rem] py-2 border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-white rounded font-semibold text-xl"
                    onClick={investHandler}
                  >
                    {" "}
                    Invest{" "}
                  </button>
                </div>
              </p>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}

export default Modal;
