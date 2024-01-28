import KnowledgeIcon from "./icons/KnowledgeIcon"
import PhoneIcon from "./icons/PhoneIcon"
import RatingIcon from "./icons/RatingIcon"
import CrossIcon from "./icons/CrossIcon"
import OfferIcon from "./icons/OfferIcon"
import BestIcon from "./icons/BestIcon"

const FeaturesIntro = () => {
    return (
        <div className='bg-gray-900 text-gray-300'>
            <div className="px-24 p-4 ">
            <h1 className="text-cyan-600 uppercase text-center">Features</h1>
                <h1 className="text-center text-4xl text-gray-300 font-serif mb-10">Our Solution</h1>
                <h2 className="text-xl font-semibold mb-20 text-center font-serif">Simple yet powerful Saas solution<br /> to boost your restaurant sales</h2>
                <div className="flex flex-wrap justify-center  font-serif text-gray-300">
                    {/* review */}
                    <div className="p-5 w-[20rem] flex justify-center items-center flex-col border border-gray-700 hover:bg-gray-800">
                        <RatingIcon />
                        <p className="text-center my-5">Encourage reviews</p>
                    </div>
                    {/* Phone */}
                    <div className="p-5 shadow-md shadow-cyan-600 w-[20rem] flex justify-center items-center flex-col border border-gray-700 bg-gray-800 hover:bg-gray-800 -mt-10 mb-6 rounded-md">
                        <PhoneIcon />
                        <p className="text-center my-5">Capture customer phone number</p>
                    </div>
                    {/* Menu */}
                    <div className="p-5 w-[20rem] flex justify-center items-center flex-col border border-gray-700 hover:bg-gray-800">
                        <KnowledgeIcon />
                        <p className="text-center my-5">Help your customer better informed about your menu</p>
                    </div>
                    {/* best selling */}
                    <div className="p-5 w-[20rem] shadow-md shadow-orange-600 flex justify-center items-center flex-col border border-gray-700 bg-gray-800 -mb-10 mt-4 rounded-md">
                        <BestIcon />
                        <p className="text-center my-5">Promote your best selling menu, combination menu and seasonal menus</p>
                    </div>
                    {/* Upsell and cross sell */}
                    <div className="p-5 w-[20rem] flex justify-center items-center flex-col border border-gray-700 hover:bg-gray-800">
                        <CrossIcon />
                        <p className="text-center my-5">Upsell and cross sell</p>
                    </div>
                    {/* Discount and offers */}
                    <div className="p-5 w-[20rem] shadow-md shadow-teal-600 flex justify-center items-center flex-col border border-gray-700 bg-gray-800 -mb-10 mt-4 rounded-md">
                        <OfferIcon />
                        <p className="text-center my-5">Promote your discounts and offers</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturesIntro