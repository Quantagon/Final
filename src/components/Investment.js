import React from 'react'
import '../assets/investment.css'
import { FaCrown } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import axios from 'axios'
function Investment(props) {


    return (
        <div className='Investment_container flex justify-between items-center mx-auto bg-slate-100 mb-10 rounded-lg p-6 text-left box_3d'>
            <div className="flex flex-row">
                <div className=""></div>
                <div className="">
                    <h3 className='text-xl font-semibold '>{props.title}</h3>
                    <h5 className='text-md mt-2 text-gray-600 w-[30ch]'>{props.des}
                    </h5>
                </div>
            </div>
            <div className="Investment_container2 ">
                <h4 className='font-bold mb-2 flex items-center'><FaCrown className='text-amber-400' />&nbsp;{props.tag}</h4>
                <h5 className='text-xs'>{props.tagdes} </h5>
            </div>
            <div className="">
                <Link to="/details">
                    <button  className='Investment_viewbtn text-sm border-2 p-2 text-blue-800 border-blue-800 hover:bg-blue-800 hover:text-white rounded-xl' type="submit">View Basket</button>

                </Link>



            </div>
        </div>
    )
}

export default Investment