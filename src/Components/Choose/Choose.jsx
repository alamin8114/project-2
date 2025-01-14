import { Link } from "react-router-dom"
import { MdPriceChange } from "react-icons/md";
import { RiSafe3Fill } from "react-icons/ri";
import { HiMiniWrenchScrewdriver } from "react-icons/hi2";
const Choose = () => {
  return (
    <>
        <div className="alamin-chooses p-0 lg:p-[100px] pb-[100px] bg-black">
            <div className="container">
                <div className="choose-head">
                    <h1 className="text-[36px] font-Poppins w-full font-semibold text-center py-[10px] text-white">Why You Choose Us</h1>
                    <hr />
                </div>
                <div className="choose-main-card cursor-pointer flex flex-col items-center gap-2 lg:gap-2 md:flex-wrap  md:flex-row justify-between mt-[50px]">
                    {/* 1st single card  */}
                <div className="choose-single-card transition-all duration-[.6s] w-[300px] rounded-lg border-4 py-[10px] border-[#FFB200]  flex flex-col justify-center items-center">
                        <div className="img">
                            <MdPriceChange className="text-[#FFB200] text-[60px]"/>
                        </div>
                        <h3 className="text-[28px] font-Poppins font-bold text-white">Best Price</h3>
                        <p className=" text-[18px] text-gray-300 font-Poppins text-center font-medium mt-[20px] mb-[30px]  ">We offer bike riding in Bangladesh at very low prices</p>
                        <Link className="text-[20px] mb-[30px] font-medium transition-all duration-[.4s] text-white hover:text-[#FFB200]">Learn More</Link>
                    </div>

                    {/* 2nd single card  */}

                    <div className="choose-single-card transition-all duration-[.6s] w-[300px] rounded-lg border-4 py-[10px] border-[#FFB200]  flex flex-col justify-center items-center">
                        <div className="img">
                            <RiSafe3Fill className="text-[#FFB200] text-[60px]"/>
                        </div>
                        <h3 className="text-[28px] font-Poppins font-bold text-white">Fast And Safe</h3>
                        <p className=" text-[18px] text-gray-300 font-Poppins text-center font-medium mt-[20px] mb-[30px]  ">
                        We always try to reach the destination quickly and safely</p>
                        <Link className="text-[20px] mb-[30px] font-medium transition-all duration-[.4s] text-white hover:text-[#FFB200]">Learn More</Link>
                    </div>

                    {/* 3th single card  */}
                    
                    <div className="choose-single-card transition-all duration-[.6s] w-[300px] rounded-lg border-4 py-[10px] border-[#FFB200]  flex flex-col justify-center items-center">
                        <div className="img">
                            <HiMiniWrenchScrewdriver className="text-[#FFB200] text-[60px]"/>
                        </div>
                        <h3 className="text-[28px] font-Poppins font-bold text-white">Experience Drivers</h3>
                        <p className=" text-[18px] text-gray-300 font-Poppins text-center font-medium mt-[20px] mb-[30px]  ">We offer bike riding in Bangladesh at very low prices</p>
                        <Link className="text-[20px] mb-[30px] font-medium transition-all duration-[.4s] text-white hover:text-[#FFB200]">Learn More</Link>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Choose