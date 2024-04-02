"use client"
import { useRouter } from "next/navigation";

const Action = () => {
  const router = useRouter()
  return (

    <div className='bg-gray-900 p-4 py-20'>
        <h1 className='text-center text-2xl sm:text-3xl text-gray-300 mb-5'>Expand your local presence today!</h1>
        <p className='text-gray-400 text-center'>Join us today and sit tight while we help your business on growing reach, revenues and sales</p>
        <div className='flex justify-center gap-7 my-5'>
        <button className='bg-gray-200 text-gray-600 p-2 px-5 rounded-2xl text-sm'>Contact us</button>
        <button onClick={() => router.push("/demo")} className='bg-blue-400 p-2 sm:p-3 px-5 rounded-2xl text-blue-100 text-sm'>Try Demo</button>
        </div>
    </div>
  )
}

export default Action