import React, { useState, useEffect } from "react";
import axios from "axios";
const Balances = ({ invested }) => {
  const [balances, setbalances] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(false);
  const fetchData = async () => {
    try {
      const res = await axios.get(
        "https://buidl11-backend.salmanpary.repl.co/coindcx/balances"
      );
      console.log(res.data);
      setbalances(res.data);
      setloading(false);
    } catch (err) {
      seterror(true);
      setloading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="Home_overview bg-slate-50 box_3d p-6 ">
      <h3 className="text-center text-2xl font-bold text-blue-700">
        Investments
      </h3>
      <div className="flex justify-items-start mx-4 mt-12">
        {error ? (
          "error"
        ) : loading ? (
          <h3 className="text-lg text-gray-600 mr-6">Loading...</h3>
        ) : (
            <div className="flex flex-col">

              {  balances?.map((item, i) => {
                  return (
                    <>
                    <div className="flex">

                      <h3 className="text-lg text-gray-600 mr-6">{item.currency}</h3>
                      <h3 className="text-lg ml-3">{item.balance}</h3>
                    </div>
                    </>
                  );
                })
            }
            </div>
        )}
      </div>
    </div>
  );
};

export default Balances;
