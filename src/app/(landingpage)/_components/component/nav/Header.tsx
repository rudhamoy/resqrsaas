import Link from "next/link"
import { HiOutlineMenu } from "react-icons/hi";

const Header = () => {
  return (
    <div className="bg-gray-900 w-[100%]">
      <div className="flex justify-between items-center p-6 px-2 sm:px-28">
        <Link href="/" className="text-2xl font-bold text-white">RepuVista</Link>
        <ul className="hidden sm:flex justify-around gap-x-8 text-gray-300">
          <li className="cursor-pointer">Solution</li>
          <li className="cursor-pointer">Business</li>
          <li className="cursor-pointer">Pricing</li>
          {/* <li className="cursor-pointer">FAQ</li> */}
          <li className="cursor-pointer">Contact us</li>
        </ul>

        {/* <ul className="flex justify-around gap-x-4 text-white">
          <Link href="/sign-in" className="p-2 px-4 rounded-md ">Signin</Link>
          <button>Dashboard</button>
        </ul> */}

        <div className="sm:hidden">
          <HiOutlineMenu className="text-gray-200 text-xl cursor-pointer" />
        </div>
      </div>
    </div>
  )
}

export default Header