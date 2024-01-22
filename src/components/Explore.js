import React from 'react'

const Explore = ({children}) => {
  return (
    <div>
      <h1 className='text-3xl font-bold ml-14 mt-16 text-blue-800'>Friends</h1>
      <div className="ml-14">To Follow</div>
      <div class="grid grid-cols-2 md:grid-cols-4 grid-flow-row gap-3 m-10">
        {children}
      </div>

    </div>

  )
}

export default Explore