import { Link } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import React from "react";
import Slider from "react-slick";
import slider1 from '../../assets/images/panegale.png'
import slider2 from '../../assets/images/CBR.png'
import slider3 from '../../assets/images/HOn.png'
import slider4 from '../../assets/images/Harley.png'
import slider5 from '../../assets/images/Ducati.png'
import video from '../../assets/images/backgroun-ing.mp4'
import './Banner.css'
const Banner = () => {
    // slick slider 
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
        cssEase: "linear"
      };
  return (
    <>
    <div className="alamin-banner">
        <div className="video">
            <video src={video} autoPlay loop muted></video>
        </div>
        <div className="container ">
            <div className="banner-row flex-col md:flex-row absolute top-[100px] md:top-0 md:left-0 flex justify-between overflow-hidden items-center h-screen w-full">
                <div className="banner-text pl-[30px]">
                    <h1 className=' text-[38px] md:text-[46px] font-Poppins font-bold text-white'>Effortless</h1>
                    <h2 className=' text-[32px] font-Poppins font-bold text-[#FFB200] mt-[20px]'>Bike Rental</h2>
                    <p className=' text-[18px] font-Poppins font-bold w-full lg:w-[500px] mt-[20px] mb-[40px] text-gray-300'>
                    Here you are getting very nice beautiful bike for very less money
                    </p>
                    <div className="banner-button hover:scale-[1.1] inline-block">
                        <Link className='px-[20px] py-[8px] bg-[#FFB200] rounded text-[18px] font-Poppins font-semibold text-black hover:text-gray-400' to={'https://bbike.com.bd/'}>Contact Us</Link>
                    </div>
                </div>
                <div className="bike-slider hidden md:block">
                <div className="slider-container">
      <Slider {...settings}>
        <div className='w-[320px] md:w-[500px]'>
          <div className="slider-1 w-[320px] md:w-[500px]">
            <img className='w-[340px] md:w-[500px] h-[250px] md:h-[400px]' src={slider1}alt="" />
          </div>
        </div>
        <div className='w-[320px] md:w-[500px]'>
        <div className="slider-2 w-[320px] md:w-[500px]">
            <img className='w-[340px] md:w-[500px] h-[250px] md:h-[400px]' src={slider2}alt="" />
        </div>
        </div>
        <div className='w-[320px] md:w-[500px]'>
        <div className="slider-3 w-[320px] md:w-[500px]">
            <img className='w-[340px] md:w-[500px] h-[250px] md:h-[400px]' src={slider3}alt="" />
        </div>
        </div>
        <div className='w-[320px] md:w-[500px]'>
        <div className="slider-3 w-[320px] md:w-[500px]">
            <img className='w-[340px] md:w-[500px] h-[250px] md:h-[400px]' src={slider4}alt="" />
        </div>
        </div>
        <div className='w-[320px] md:w-[500px]'>
        <div className="slider-3 w-[320px] md:w-[500px]">
            <img className='w-[340px] md:w-[500px] h-[250px] md:h-[400px]' src={slider5}alt="" />
        </div>
        </div>
      </Slider>
    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Banner