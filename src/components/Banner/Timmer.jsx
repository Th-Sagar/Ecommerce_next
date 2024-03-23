import React from 'react'
import Countdown from 'react-countdown';

const Timmer = () => {
  return (
    <div className='container   md:mx-auto mx-0 my-10    p-2'>
      <h1 className='text-gray-400 text-3xl'>
      Flash Sale
      </h1>
      <h4 className='text-lg font-semibold text-center'>
       <span className='text-oranges mr-2'>
       On Sale Now</span> Ending in <Countdown date={Date.now() + 100000000} /> 
      </h4>

    </div>
  )
}

export default Timmer