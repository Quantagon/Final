import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Profilecomp from '../components/Profilecomp'
const Prolisa = () => {
    const [ldata,setLdata] = useState()
    const [loading,setLoading] = useState(true)
    const lisadata= async ()=>{
        const res = await axios.get('https://fineazy-backend.herokuapp.com/auth/lisa')
        console.log(res.data.ar[0],'hereiaml')
        res.data.name = 'Lisa'
        res.data.followers = 5
        setLdata(res.data)
        setLoading(false)
       }
    useEffect(() => {
        lisadata()
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
            Lisa
            {/* <div className="text-2xl mt-8">Following.</div> */}
        </div>
    </div>
    <div className="col-span-1 text-2xl font-semibold ml-20 flex flex-col justify-evenly  ">
        <h3 className='mb-4'> Followers : 5</h3>
        <h3> Following : 7 </h3>
    </div>
</div>

<div className="grid grid-cols-3">
    <div className="col-span-1">
        
        <Profilecomp invested={ldata} />


    </div>
    <div className="col-span-2 mx-12">
        {/* <Card data={ldata} i={0}/> */}
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

export default Prolisa