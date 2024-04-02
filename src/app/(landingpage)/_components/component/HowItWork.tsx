import React from 'react'

const HowItWork = () => {
  return (
    <div className='bg-gray-900 text-gray-300 p-4 py-10 pb-20'>
        <h1 className="text-green-500 uppercase text-center p-2">Framework</h1>
        <h1 className='text-center text-2xl sm:text-3xl text-gray-300 mb-5'>How it work for your business</h1>
        {/* <h1 className="text-center text-4xl text-gray-400 mb-6">We support all sector of activity</h1> */}
        <div className='flex justify-center items-center gap-x-8 my-20'>
           <p className='text-center w-[600px]'>A guided journey framework that navigates customers through a series of touchpoints designed to enhance their overall experience with the business. Each touchpoint should be strategically crafted to add value and foster a deeper connection with the brand.</p>
        </div>
    </div>
  )
}

export default HowItWork