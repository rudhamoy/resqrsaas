import CheckIcon from "./icons/CheckIcon"
import GrowthIcon from "./icons/GrowthIcon"
import Link from "next/link"

const HeroSection = () => {
  return (
    <div className="flex justify-center items-center flex-col h-[85vh] bg-gray-900">
      <div className="flex justify-center items-center">
        <div className="text-6xl font-bold font-serif text-gray-50">That one missing <span className="text-yellow-600">sauce</span> <br /> for your restaurant <span className="text-cyan-500 font-bold text-6xl uppercase">growth</span></div>
        <GrowthIcon />
      </div>
      <div>
        <div className="text-gray-300 mb-10 mx-32">
          <ul className="flex flex-wrap gap-5">
            <li className="flex items-center gap-x-2"><CheckIcon />Build your own customer database</li>
            <li className="flex items-center gap-x-2"><CheckIcon />Waiter Calling System</li>
            <li className="flex items-center gap-x-2"><CheckIcon />E-bill receipt</li>
            <li className="flex items-center gap-x-2"><CheckIcon />Satisfy your customer experience with our QR solution</li>
            <li className="flex items-center gap-x-2"> <CheckIcon />Get more reviews flowing for your google business and social media</li>
            <li className="flex items-center gap-x-2 text-cyan-600"><CheckIcon />and more</li>
          </ul>
        </div>
        {/* <p className="text-gray-400 mb-10 px-40 text-center">Build reputation with our reputation management system, bring repeat customer, promote best selling, seasonal menus, upsell, cross sell,  offers and discount, capture customer's phone number, encourage reviews with our QR system, <span className="text-blue-500">check more</span> </p> */}
      </div>
      <div className="flex gap-x-8 items-center">
        <button className="bg-blue-400 p-4 px-5 rounded-full text-blue-50">Sign up for an early discount</button>
        <button className="border p-4 px-8 rounded-full text-blue-50">Demo</button>
      </div>
    </div>
  )
}

export default HeroSection