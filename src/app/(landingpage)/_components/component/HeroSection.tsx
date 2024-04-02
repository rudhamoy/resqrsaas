"use client"
import { useRouter } from "next/navigation"; 
import { VscGraph } from "react-icons/vsc";

const HeroSection = () => {

  const router = useRouter()

  return (
    <div className="flex justify-center items-center flex-col h-[60vh] sm:h-[85vh] bg-gray-900 relative">
      <div className="flex justify-center flex-col items-center gap-y-10 text-center">
        <h1 className="text-gray-100 text-4xl sm:text-7xl font-semibold">Turn Reviews into Revenue</h1>
        <h2 className="text-gray-200 mx-5">&quot;And get more customers with Local SEO&quot;</h2>
      </div>

      <div className="flex gap-x-8 items-center my-10">
        <button onClick={() => router.push("/demo")} className="bg-blue-400 p-2 sm:p-3 px-6 rounded-full text-blue-100 text-base"> Book a free demo</button>
      </div>
      <div className="bg-gray-200 p-3 rounded-lg shadow-md shadow-green-200 border absolute left-10 sm:left-1/4 bottom-28 sm:bottom-1/3">
        <div className="relative">
          <VscGraph className="text-3xl" />
          <span className="p-1 px-4 text-xs rounded-full bg-green-500 text-white absolute -top-6 -right-14">+18%</span>
        </div>
      </div>
      <div className="bg-gray-200  text-xs flex items-center p-2 px-4 rounded-full shadow-md shadow-orange-200 border absolute right-14 sm:right-44 bottom-20 sm:bottom-3/4">
        <div className=" w-10 h-10 border-b-2 border-r-2  border-green-500 rounded-full flex justify-center items-center">
          <span className="text-xs font-semibold">+22%</span>
        </div>
          <p className="font-semibold w-[120px] text-center">Get more customers</p>
      </div>
    </div>
  )
}

export default HeroSection