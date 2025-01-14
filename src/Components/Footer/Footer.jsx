import { SiGooglemaps } from "react-icons/si";
import { MdOutlinePhonelinkRing } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import google from '../../assets/images/googlr.jpg'
import app from '../../assets/images/app.jpg'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
    <div className="w-full bg-black">
        <div className="container">
            <div className="footer_row pt-6 pb-9 pr-0 md:pr-6 rounded-t-[20px] w-full flex flex-wrap  justify-around lg:justify-between text-white">
                <div className="l_text pl-0 md:pl-14 flex justify-center items-center flex-col md:inline-block text-white ">
                    <h2 className=' text-[32px] font-Poppins text-[#FFB200]  font-semibold'>Bike Rental</h2>
                    <p className='mt-2 text-[20px] md:text-start text-center md:text-md font-[600] w-full md:w-[400px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit cum omnis nemo quae.</p>
                    <div className="mt-4 mb-2 flex gap-2 items-center">
                    <Link><SiGooglemaps className='w-5 h-5'/></Link>
                    <h3 className='text-lg'>Mirpur-10.Dhaka</h3>
                    </div>
                    <div className="flex gap-2 items-center">
                    <Link><MdOutlinePhonelinkRing className='w-5 h-5'/></Link>
                    <Link to={''} className='text-lg'>01963405564</Link>
                    </div>
                    <div className="ml-7 mt-8 social flex gap-3 h-">
                    <Link><BsInstagram className='w-[40px] hover:scale-[1.1] hover:text-[#FFB200] h-[40px]'/></Link>
                    <Link><FaSquareFacebook className='w-[40px] hover:scale-[1.1] hover:text-[#FFB200] h-[40px]'/></Link>
                    <Link><FaLinkedin className='w-[40px] hover:scale-[1.1] hover:text-[#FFB200] h-[40px]'/></Link>
                    </div>
                </div>
                <div className="M_text flex flex-col md:justify-start justify-center  md:w-0 w-full  items-center  pt-9">
                    <h2 className='mb-8 text-2xl font-semibold border-b-2'>Feature</h2>
                    <div className="text-lg flex flex-col cursor-pointer gap-3">
                        <p className="hover:text-[#FFB200]">Ride</p>
                        <p className="hover:text-[#FFB200]">Rent</p>
                        <p className="hover:text-[#FFB200]">Drive</p>
                        <p className="hover:text-[#FFB200]">Delivery</p>
                        <p className="hover:text-[#FFB200]">Persel</p>
                    </div>
                </div>
                <div className="M-Txt pt-9 ">
                    <h2 className='mb-8 text-2xl font-semibold text-center border-b-2'>Contract</h2>
                    <div className="text-lg text-center flex flex-col cursor-pointer gap-4">
                        <p className="hover:text-[#FFB200]">HelpLine</p>
                        <p className="hover:text-[#FFB200]">Contract NearPoint</p>
                        <p className="hover:text-[#FFB200]">Terms Of Use</p>
                    </div>
                </div>
            </div>
            <h2 className="text-[#FFB200] text-[24px] font-Poppins font-semibold text-center pb-[40px]">© 2025 Bike Rental Technologies Inc.</h2>  
        </div>    
    </div> 
    </>
  )
}

export default Footer