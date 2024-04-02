import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-800 grid grid-cols-2 sm:flex justify-around p-6 text-gray-400'>
        {/* logo */}
        <div>
            <h1 className='font-semibold text-gray-300'>RepuVista</h1>
        </div>
        {/* Solution */}
        <div>
            <p className='font-semibold text-gray-300'>Solution</p>
            <ul className='my-4 flex flex-col gap-y-4'>
                <li>Review Management</li>
                <li>Google My Business Optimization</li>
                <li>Analytics</li>
                <li>Local SEO</li>
            </ul>
        </div>
        {/* Social Media */}
        <div>
            <p className='font-semibold text-gray-300'>Social Media</p>
            <ul className='my-4 flex flex-col gap-y-4'>
                <li>Instagram</li>
                <li>Facebook</li>
                <li>LinkedIn</li>
                <li>Twitter</li>
            </ul>
        </div>
        {/* Contact */}
        <div>
            <p className='font-semibold text-gray-300'>Contact</p>
            <p className='my-4'>
                Old Sangvi, Pune, Maharastra, 411024
            </p>
        </div>
    </div>
  )
}

export default Footer