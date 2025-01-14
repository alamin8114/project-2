import './About.css'
import aboutimg from '../../assets/images/about-img.jpg'
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <>
    <div className="alamin-about pt-[30px] bg-[#2e2d2d]">
        <div className="container">
            <div className="about-text">
                <h1 className='text-[46px] font-Poppins font-bold py-[10px] text-white text-center'>About</h1>
                <hr/>
            </div>
            <div className="about-row mt-[40px] pb-[40px] flex flex-col md:flex-row gap-4 lg:gap-0 justify-between items-center">
                <div className="about-img ">
                    <img className=' md:w-[400px] w-full lg:w-[600px] rounded-lg' src={aboutimg} alt="about img" />
                </div>
                <div className="about-text text-white text-center lg:text-start">
                    <h4 className=' text-[24px] font-Poppins font-semibold w-full md:w-[300px] lg:w-[500px] text-[#FFB200] mb-[20px]'>We have agencies in all parts of Bangladesh and we rent motorcycles.
                    After renting the motorcycle, we went out to visit various places in the country.</h4>
                    <h2 className=' text-[20px] font-Poppins font-semibold w-full md:w-[300px] lg:w-[500px] text-[#63615c] mb-[20px]'>
                    If you want to visit different places of the country then you can take our bike</h2>
                    <div className="about-button flex justify-center items-center] ">
                        <Link className='px-[20px] py-[8px] bg-[#FFB200] rounded text-[18px] font-Poppins font-semibold text-black hover:scale-[1.1] hover:text-gray-400' to={''}>Laren more</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default About