import React from 'react'

const Profilecomp = ({ invested }) => {

    var change1d = Math.round((invested?.sum_percentage - 1.2 + Number.EPSILON) * 100) / 100
    return (
        <div className="Home_overview bg-slate-50 box_3d p-6 ">
            <h3 className='text-center text-2xl font-bold text-blue-700'>Total Amount</h3>
            <h4 className='text-center text-3xl font-semibold mt-3'>{Math.round((invested?.total_amount / 10 + Number.EPSILON) * 100000) / 10000} BUSD </h4>
            <div className="flex justify-items-start mx-4 mt-12">
                <h3 className='text-lg text-gray-600 mr-6'>Invested Value</h3><h3 className='text-lg ml-3'>{invested?.invested_amount} BUSD</h3>
            </div>
            <div className="flex justify-items-start mx-4 mt-12">
                <h3 className='text-lg text-gray-600 mr-14'>Overall gain</h3><h3 className='text-lg ml-1'>{invested?.sum_percentage}</h3>
            </div>
            <div className="flex justify-items-start mx-4 mt-12">
                <h3 className='text-lg text-gray-600 mr-14'>1 D gain</h3><h3 className='text-lg ml-10'>{change1d} </h3>
            </div>
        </div>
    )
}


export default Profilecomp