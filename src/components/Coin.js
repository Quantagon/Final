import React from 'react'

const Coin = ({ image, name, lastprice, hrchange, volume, ticker }) => {
  return (
    <div className="grid grid-cols-4 p-3 mt-3 mb-3 coins rounded-3xl">
      <div className='flex '>
        <img src={image} alt="" />
        <div className="name ml-2 mt-1">{name}</div>
        <div className="ticker text-gray-300 mt-1 ml-2">{ticker}</div>

      </div>

      <div>{lastprice}</div>
      <div>{hrchange}</div>
      <div>{volume}</div>

    </div>
  )
}

export default Coin