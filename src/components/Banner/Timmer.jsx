import React from 'react'
import Countdown from 'react-countdown';

const Timmer = () => {
  return (
    <div className='container   md:mx-auto mx-0 mt-10 text-center bg-oranges text-white p-2'>
      
      <h1 className='text-lg font-semibold'>
        Sales End on <Countdown date={Date.now() + 100000000} /> 
      </h1>

    </div>
  )
}

export default Timmer