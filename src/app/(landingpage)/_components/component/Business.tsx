import React from 'react'

const Business = () => {
  return (
    <div className='bg-gray-900 text-gray-300 p-4 py-10 pb-20'>
        <h1 className="text-green-500 uppercase text-center p-2">Who</h1>
        <h1 className='text-center text-2xl sm:text-3xl text-gray-300 mb-5'>We support all sector of activity</h1>
        {/* <h1 className="text-center text-4xl text-gray-400 mb-6">We support all sector of activity</h1> */}
        <div className='flex justify-center items-center gap-x-8 my-20'>
            <div className='border border-gray-400 rounded-md p-4'>
                <p>Restaurant</p>
            </div>
            <div className='border border-gray-400 rounded-md p-4'>
                <p>Physician</p>
            </div>
            <div className='border border-gray-400 rounded-md p-4'>
                <p>Vetirinary</p>
            </div>
            <div className='border border-gray-400 rounded-md p-4'>
                <p>Clinics</p>
            </div>
            <div className='border border-gray-400 rounded-md p-4'>
                <p>Parlor</p>
            </div>
        </div>
    </div>
  )
}

export default Business