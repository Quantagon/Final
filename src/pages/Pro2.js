import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import ViewProfile from './ViewProfile'
import Profilecomp from '../components/Profilecomp'

const Pro2 = () => {
    const [expert, setExpert] = useState()
    const [loading,setLoading] = useState(true)
    const experts = async () => {
        const res = await axios.get('https://fineazy-backend.herokuapp.com/getprice/user1')
        console.log(res.data, 'hereiam2')
        setExpert(res.data)
        setLoading(false)   
    }
    useEffect(() => {
        experts()
    }, [])
    return (
       
        <div>
            {loading? <h3> Loading</h3> : <div className='mt-12 ml-4'>

<div className="bg-white mx-12 rounded-xl py-12 mb-8 px-12 grid grid-cols-2">
    <div className="flex items-center col-span-1 border-r-2	">
        <img 
            src="https://www.pngitem.com/pimgs/m/419-4196791_transparent-confused-man-png-default-profile-png-download.png"
            alt=""
            className="h-32 w-32 rounded-full"
        />
        <div className="text-5xl font-bold ml-20">
            {expert[0]?.name}
            {/* <div className="text-2xl mt-8">Following.</div> */}
        </div>
    </div>
    <div className="col-span-1 text-2xl font-semibold ml-20 flex flex-col justify-evenly  ">
        <h3 className='mb-4'> Followers : 0</h3>
        <h3> Following : 0 </h3>
    </div>
</div>

<div className="grid grid-cols-3">
    <div className="col-span-1">
        
        <Profilecomp invested={expert[0]} />
        <div className=" flex justify-evenly">
                        <button type="submit" className='mt-4 w-[10rem] py-2 green_3d text-white hover:bg-green-500 font-semibold text-lg' > BUY </button>
                        <button type="submit" className='mt-4 w-[10rem] py-2 red_3d text-white hover:bg-red-500  font-semibold text-lg' > SELL </button>

                    </div>

    </div>
    <div className="col-span-2 mx-12">
        <Card data={expert[0]} i={0}/>
    </div>
</div>
</div>}
        </div>
    )
}



function Card({ data, i }) {
console.log(data, 'hereiamnot')

    const icon = data[i]?.name.slice(0, 3).toLowerCase()
    const imgLink = `https://cryptoicons.org/api/icon/${icon}/200`
    console.log(imgLink)

    return (
        <div className="flex Home_overview bg-slate-50 p-8 rounded-lg box_3d items-center justify-between mt-8 ">
            <div className="flex items-center">

                <img src={imgLink} className="w-12 h-12 flex items-center mr-2" alt="" />
                <h2 className='text-xl font-bold'>{data[i]?.name}</h2>
            </div>
            <div className="">
                <h3 className='font-semibold mb-2'><span className='text-gray-600 font-normal'>Tot amt. : </span> {data[i]?.price}</h3>
                <h3 className='font-semibold'><span className='text-gray-600 font-normal'>% change : </span>{data[i]?.percentage_change}</h3>
                <h3 className='font-semibold mt-2'> <span className='text-gray-600 font-normal'>Allocation : </span>{data[i]?.allocation}</h3>
            </div>

        </div>
    )
}

export default Pro2