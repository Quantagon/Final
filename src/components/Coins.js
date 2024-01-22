import React, { useState, useEffect } from "react";
import Coin from "./Coin";
import axios from "axios";

const Coins = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState({});
  useEffect(() => {
    let priceInterval = setInterval(() => {
      axios
        .get("https://buidl11-backend.salmanpary.repl.co/coindcx/prices")
        .then((res) => {
          setIsLoaded(true);
          setItems(res.data);
          console.log(res.data)
        })
        .catch((err) => {
          console.log(err);
          setIsLoaded(true);
          setError(err);
        });
    }, 3000);
    return () => {
      clearInterval(priceInterval);
    };
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <div className="ml-20 mr-20">
          <div className="text-3xl mb-4 text-gradient font-medium">Popular coins</div>
          <div className="grid grid-cols-4">
            <div className="name text-gray-300 text-sm ml-3">Name</div>
            <div className="text-gray-300 text-sm ml-1">Last Price</div>
            <div className="text-gray-300 text-sm ">24h Change</div>
            <div className="text-gray-300 text-sm -ml-2">Volume</div>
          </div>


          <Coin
            image="https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@bea1a9722a8c63169dcc06e86182bf2c55a76bbc/32/color/bnb.png"
            name={items?.["4"]?.name}
            lastprice={parseFloat(items?.["4"]?.price)?.toFixed(2)}
            hrchange={items?.["4"]?.change}
            volume={parseFloat(items?.["4"]?.volume)?.toFixed(2)}
            ticker="BNB"

          />
          <Coin
            image={`https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@bea1a9722a8c63169dcc06e86182bf2c55a76bbc/32/color/btc.png`}
            name={items?.["0"]?.name}
            lastprice={parseFloat(items?.["0"]?.price)?.toFixed(2)}
            hrchange={items?.["0"]?.change}
            volume={parseFloat(items?.["0"]?.volume)?.toFixed(2)}
            ticker="BTC"
          />
          <Coin
            image="https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@bea1a9722a8c63169dcc06e86182bf2c55a76bbc/32/color/eth.png"
            name={items?.["3"]?.name}
            lastprice={parseFloat(items?.["3"]?.price)?.toFixed(2)}
            hrchange={items?.["3"]?.change}
            volume={parseFloat(items?.["3"]?.volume)?.toFixed(2)}
         
            ticker="ETH"
          />
          <Coin
            image="https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@bea1a9722a8c63169dcc06e86182bf2c55a76bbc/32/color/sol.png"
            name={items?.["2"]?.name}
            lastprice={parseFloat(items?.["2"]?.price)?.toFixed(2)}
            hrchange={items?.["2"]?.change}
            volume={parseFloat(items?.["2"]?.volume)?.toFixed(2)}
            
            ticker="SOL"
          />
          <Coin
            image="https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@bea1a9722a8c63169dcc06e86182bf2c55a76bbc/32/color/doge.png"
            name={items?.["1"]?.name}
            lastprice={parseFloat(items?.["1"]?.price)?.toFixed(2)}
            hrchange={items?.["1"]?.change}
            volume={parseFloat(items?.["1"]?.volume)?.toFixed(2)}
           
            ticker="DOGE"
          />
          <br></br>
        </div>
      </>
    );
  }
};

export default Coins;
