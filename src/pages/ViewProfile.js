import React from 'react'
import Profilecomp from '../components/Profilecomp'
import Profile from './Profile'
import { useSelector, useDispatch } from 'react-redux'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { storeview } from "../features/viewprofile/view";
const ViewProfile = ({ data }) => {
    const friend = useSelector(state => state.friends)
    const view = useSelector(state => state.view)
    //    console.log(view,'kle')


    // var link = "https://fineazy-backend.herokuapp.com/auth/specific_user"
    return (

        <div className='mt-12 ml-4'>

            <div className="bg-white blue-glassmorphism mx-12 rounded-xl py-12 mb-8 px-12 grid grid-cols-2">
                <div className="flex items-center col-span-1 border-r-2	">
                    <img
                        src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80"
                        alt=""
                        className="h-32 w-32 rounded-full"
                    />
                    <div className="text-5xl font-bold ml-20 text-white">
                        {view.name}<br></br>
                        {/* <div className="text-lg mt-8 rounded-2xl border-2"> Following</div> */}
                        <button className='blue_3d mt-4 flex text-xs text-white px-5 cursor-default text-center'><span className='mt-0.5'>FOLLOWING</span><AiOutlineCheckCircle className='m-1'></AiOutlineCheckCircle></button>
                    </div>
                </div>
                <div className="text-white text-2xl font-medium ml-14 mt-8 flex flex-row justify-evenly">
                    <div>
                        <h3 className='mb-1 text-sm'> FOLLOWERS</h3>
                        <h3 className='text-blue-500 font-semibold'>{view.followers}</h3>
                    </div>
                    <div>
                        <h3 className='mb-1 text-sm'> FOLLOWING</h3>
                        <h3 className='text-blue-500 font-semibold'>{view.following}</h3>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-3">
                <div className="col-span-1 ml-12 mb-12">
                    <Profilecomp invested={view} />
                    <div className=" flex justify-evenly">
                        <button type="submit" className='mt-4 w-[10rem] py-2 green_3d text-white hover:bg-green-500 font-semibold text-lg' > BUY </button>
                        <button type="submit" className='mt-4 w-[10rem] py-2 red_3d text-white hover:bg-red-500  font-semibold text-lg' > SELL </button>

                    </div>

                </div>

                <div className="col-span-2 mx-12">
                    <Card url={"https://cryptoicons.org/api/icon/bnb/200"} name="BNBUSDT" totalamount="426.3" pchange={"21%"} allocation="30" />
                    <Card url={"https://cryptoicons.org/api/icon/ltc/200"} name="LTCUSDT" totalamount={"994.7"} pchange={"12%"} allocation="70" />

                </div>
            </div>
        </div>
    )
}

export default ViewProfile

function Card({ url, name, totalamount, allocation, pchange }) {

    // const icon = data[i]?.name.slice(0, 3).toLowerCase()
    const imgLink = `${url}`
    // console.log(imgLink)

    return (
        <div className="flex Home_overview bg-slate-50 p-8 rounded-lg box_3d items-center justify-between mt-8 ">
            <div className="flex items-center">

                <img src={imgLink} className="w-12 h-12 flex items-center mr-2" alt="" />
                <h2 className='text-xl font-bold'>{name}</h2>
            </div>
            <div className="">
                <h3 className='font-semibold mb-2'><span className='text-gray-600 font-normal'>Tot amt. : </span>{totalamount} USD</h3>
                <h3 className='font-semibold'><span className='text-gray-600 font-normal'>% change : </span>{pchange}</h3>
                <h3 className='font-semibold mt-2'> <span className='text-gray-600 font-normal'>Allocation : </span>{allocation}</h3>
            </div>

        </div>
    )
}