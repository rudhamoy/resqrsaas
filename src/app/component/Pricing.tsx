import CheckIcon from "./icons/CheckIcon"


const Pricing = () => {
    return (
        <div className="h-[700px] bg-gray-900 p-32">
            <h1 className="text-cyan-600 uppercase text-center">Pricing</h1>
            <h2 className="text-center text-4xl text-gray-300 font-serif">Subscription Plan</h2>
            <div className="flex justify-center gap-x-10 my-10">
                <div className="text-gray-300 border border-gray-700 p-6 rounded-md w-[20rem]">
                    <p className="uppercase">basic</p>
                    <p className="text-2xl text-green-600 my-3 font-semibold">Free</p>
                    <p className="text-gray-400">Monthly</p>
                    <ul className="text-sm my-3 text-gray-400">
                        <li className="flex items-center gap-x-3"><CheckIcon /> QR Menu</li>
                        <li className="flex items-center gap-x-3"><CheckIcon /> Create Unlimited Menu & Categories</li>
                        <li className="flex items-center gap-x-3"><CheckIcon /> Add or Showcase Discount</li>
                        <li className="flex items-center gap-x-3"><CheckIcon /> Menu recommendation</li>
                        <button className="border border-gray-700 rounded-md p-3 px-6 my-4 text-gray-300">Choose Plan</button>
                    </ul>
                </div>
                <div className="text-gray-300 border border-gray-700 p-6 rounded-md w-[20rem]">
                    <p className="uppercase">Standard</p>
                    <p className="text-2xl text-cyan-600 my-3 font-semibold">₹2000</p>
                    <p className="text-gray-400">Monthly</p>
                    <ul className="text-sm my-3 text-gray-400">
                        <li className="flex items-center gap-x-3"><CheckIcon /> All Basic Included</li>
                        <li className="flex items-center gap-x-3"><CheckIcon /> Feedback Management</li>
                        <li className="flex items-center gap-x-3"><CheckIcon /> Build your own database</li>
                        <li className="flex items-center gap-x-3"><CheckIcon /> User Behaviour Analysis</li>
                        <li className="flex items-center gap-x-3"><CheckIcon /> Waiter Calling System</li>
                        <li className="flex items-center gap-x-3"><CheckIcon /> Cross sell & Upsell</li>
                        <li className="flex items-center gap-x-3"><CheckIcon /> Payment Gateway</li>
                        <li className="flex items-center gap-x-3"><CheckIcon /> E-bill receipt</li>
                        <button className="bg-cyan-600 border border-gray-700 rounded-md p-3 px-6 my-4 text-cyan-100">Choose Plan</button>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Pricing