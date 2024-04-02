
import RatingIcon from "./icons/RatingIcon"
import GrowthIcon from "./icons/GrowthIcon"
import ReviewPic from "./features/ReviewPic"
import Rankings from "./features/Rankings"
import Analysis from "./features/Analysis"

const FeaturesIntro = () => {
    return (
        <div className='bg-gray-900 text-gray-300'>
            <div className="px-8 sm:px-24 p-4 ">
                <h1 className="text-green-500 uppercase text-center p-2">Why us</h1>
                <h1 className="text-center text-4xl text-gray-400 mb-6">Our Solution</h1>
                <div className="flex justify-center">
                    <p className="text-center sm:w-[600px]">Becasue <span className="text-amber-400">your reputation is vital to your business!</span> Our platform empowers you to turn positive reviews into increased revenue, attracting more customers and driving sales growth.</p>
                </div>
                <div className="flex flex-col justify-center gap-8 text-gray-300 my-20">
                    {/* BUILD REPUTATION */}
                    <div className="p-4 mt-32 flex flex-col sm:flex-row justify-around relative">
                        <div className="sm:w-[40%]">
                            <span className="uppercase text-blue-400 text-xs">build reputation</span>
                            <p className="text-3xl my-6 text-gray-200">Get More Customer Reviews</p>
                            <p className=""> In today&apos;s crowded marketplace, differentiation is key. With our solution, you&apos;ll distinguish your business from competitors by showcasing your stellar reputation and glowing customer feedback.
                            </p>

                            <button className="bg-blue-400 p-2 sm:p-3 px-6 rounded-full text-sm text-blue-100 my-10">Read More</button>
                        </div>
                        <div className="z-50">
                            <ReviewPic />
                        </div>
                        <div className="bg-gray-700  h-[220px] sm:h-[300px] w-[300px] sm:w-[600px] absolute -right-1/4 bottom-1/4 rounded-3xl z-10"></div>
                    </div>

                    {/* GOOGLE RANKINGS */}
                    <div className="p-4 mt-20 flex flex-col-reverse sm:flex-row justify-around relative">
                        <div className="z-50">
                            <Rankings />
                        </div>
                        <div className="sm:w-[40%]">
                            <span className="uppercase text-blue-400 text-xs">Google rankings</span>
                            <p className="text-3xl my-6 text-gray-200">Boost Your Google Business Ranking</p>
                            <p className=""> Rise to the top of search results! With our system driving reviews directly to your Google Business profile, you&apos;ll enhance your visibility and climb the ranks in local search listings
                            </p>
                            <button className="bg-blue-400 p-2 sm:p-3 px-6 rounded-full text-sm text-blue-100 my-10">Read More</button>
                        </div>
                        {/* <div className="bg-gray-700  h-[220px] sm:h-[300px] w-[300px] sm:w-[600px] absolute -right-1/4 bottom-1/4 rounded-3xl z-10"></div> */}
                    </div>

                    {/* Analytics */}
                    <div className="p-4 mt-32 flex flex-col sm:flex-row justify-around relative">
                        <div className="sm:w-[40%]">
                            <span className="uppercase text-blue-400 text-xs">Analytics</span>
                            <p className="text-3xl my-6 text-gray-200">Harness Customer Insights for Strategic Growth</p>
                            <p className=""> Unlock the power of data! With our system, you&apos;ll build a comprehensive database of customer interactions and behaviors, enabling you to gain valuable insights into your audience&apos;s preferences, purchasing habits, and satisfaction levels.
                            </p>
                            <button className="bg-blue-400 p-2 sm:p-3 px-6 rounded-full text-sm text-blue-100 my-10">Read More</button>
                        </div>
                        <div className="z-50">
                            <Analysis />
                        </div>
                        {/* <div className="bg-gray-700  h-[220px] sm:h-[300px] w-[300px] sm:w-[600px] absolute -right-1/4 bottom-1/4 rounded-3xl z-10"></div> */}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default FeaturesIntro