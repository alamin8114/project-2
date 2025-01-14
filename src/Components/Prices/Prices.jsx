import { Link } from 'react-router-dom'
import card1 from '../../assets/images/card-bike-1.png'
import card2 from '../../assets/images/card-img (2).png'
import card3 from '../../assets/images/card.png'
import card4 from '../../assets/images/card-img (3).png'
import card5 from '../../assets/images/card-img (4).png'
import card6 from '../../assets/images/card-img (5).png'
import card7 from '../../assets/images/card-img (6).png'
const Prices = () => {
  return (
    <>
    <div className="alamin-prices pb-[40px] bg-[#444343]">
        <div className="container">
            <div className="prices-head">
                <h1 className="text-[64px] font-Poppins font-bold text-white text-center">Prices</h1>
                <hr />
            </div>
            <div className="prices-card cursor-pointer flex flex-wrap gap-4 justify-center w-full mt-[60px]">
                {/* card-1 */}
                <div className="single-prices-card relative overflow-hidden group opacity-[.50] hover:opacity-[100] rounded flex justify-center flex-col items-center w-[300px] h-[300px] hover:border-red-500 border-2 bg-[#FFB200]">
                    <img className=' w-[200px] h-[200px]' src={card1} alt="card-img" />
                    <h1 className='text-black text-[18px] font-Poppins'>Black Color R15 Bike</h1>
                    <div className="hover w-full h-[85px] bg-[#ffffffcc] absolute transition-all duration-[1s] group-hover:bottom-[85px] bottom-[-90px] left-0 round backdrop-blur">
                        <h3 className='text-[24px] font-Poppins font-bold text-center'>Prices:$100/day</h3>
                        <div className="button flex justify-center items-center">
                            <Link className='px-4 py-2 bg-white rounded-lg text-[18px] font-Poppins font-semibold hover:bg-[#FFB200] hover:text-white' to={''}>Pay Now</Link>
                        </div>
                    </div>
                </div>
                {/* card-2 */}
                <div className="single-prices-card relative overflow-hidden group opacity-[.50] hover:opacity-[100] rounded flex justify-center flex-col items-center w-[300px] h-[300px] hover:border-red-500 border-2 bg-[#FFB200]">
                    <img className=' w-[200px] h-[200px]' src={card2} alt="card-img" />
                    <h1 className='text-black text-[18px] font-Poppins'>Sport Bike v24 Bike</h1>
                    <div className="hover w-full h-[85px] bg-[#ffffffcc] absolute transition-all duration-[1s] group-hover:bottom-[85px] bottom-[-90px] left-0 round backdrop-blur">
                        <h3 className='text-[24px] font-Poppins font-bold text-center'>Prices:$120/day</h3>
                        <div className="button flex justify-center items-center">
                            <Link className='px-4 py-2 bg-white rounded-lg text-[18px] font-Poppins font-semibold hover:bg-[#FFB200] hover:text-white' to={''}>Pay Now</Link>
                        </div>
                    </div>
                </div>
                {/* card-3 */}
                <div className="single-prices-card relative overflow-hidden group opacity-[.50] hover:opacity-[100] rounded flex justify-center flex-col items-center w-[300px] h-[300px] hover:border-red-500 border-2 bg-[#FFB200]">
                    <img className=' w-[200px] h-[200px]' src={card3} alt="card-img" />
                    <h1 className='text-black text-[18px] font-Poppins'>Royal Enfield Classic 350</h1>
                    <div className="hover w-full h-[85px] bg-[#ffffffcc] absolute transition-all duration-[1s] group-hover:bottom-[85px] bottom-[-90px] left-0 round backdrop-blur">
                        <h3 className='text-[24px] font-Poppins font-bold text-center'>Prices:$70/day</h3>
                        <div className="button flex justify-center items-center">
                            <Link className='px-4 py-2 bg-white rounded-lg text-[18px] font-Poppins font-semibold hover:bg-[#FFB200] hover:text-white' to={''}>Pay Now</Link>
                        </div>
                    </div>
                </div>
                {/* card-4 */}
                <div className="single-prices-card relative overflow-hidden group opacity-[.50] hover:opacity-[100] rounded flex justify-center flex-col items-center w-[300px] h-[300px] hover:border-red-500 border-2 bg-[#FFB200]">
                    <img className=' w-[200px] h-[200px]' src={card4} alt="card-img" />
                    <h1 className='text-black text-[18px] font-Poppins'>TVS Motor</h1>
                    <div className="hover w-full h-[85px] bg-[#ffffffcc] absolute transition-all duration-[1s] group-hover:bottom-[85px] bottom-[-90px] left-0 round backdrop-blur">
                        <h3 className='text-[24px] font-Poppins font-bold text-center'>Prices:$90/day</h3>
                        <div className="button flex justify-center items-center">
                            <Link className='px-4 py-2 bg-white rounded-lg text-[18px] font-Poppins font-semibold hover:bg-[#FFB200] hover:text-white' to={''}>Pay Now</Link>
                        </div>
                    </div>
                </div>
                {/* card-5 */}
                <div className="single-prices-card relative overflow-hidden group opacity-[.50] hover:opacity-[100] rounded flex justify-center flex-col items-center w-[300px] h-[300px] hover:border-red-500 border-2 bg-[#FFB200]">
                    <img className=' w-[200px] h-[200px]' src={card5} alt="card-img" />
                    <h1 className='text-black text-[18px] font-Poppins'>Ktm Bike</h1>
                    <div className="hover w-full h-[85px] bg-[#ffffffcc] absolute transition-all duration-[1s] group-hover:bottom-[85px] bottom-[-90px] left-0 round backdrop-blur">
                        <h3 className='text-[24px] font-Poppins font-bold text-center'>Prices:$110/day</h3>
                        <div className="button flex justify-center items-center">
                            <Link className='px-4 py-2 bg-white rounded-lg text-[18px] font-Poppins font-semibold hover:bg-[#FFB200] hover:text-white' to={''}>Pay Now</Link>
                        </div>
                    </div>
                </div>
                {/* card-6 */}
                <div className="single-prices-card relative overflow-hidden group opacity-[.50] hover:opacity-[100] rounded flex justify-center flex-col items-center w-[300px] h-[300px] hover:border-red-500 border-2 bg-[#FFB200]">
                    <img className=' w-[200px] h-[200px]' src={card6} alt="card-img" />
                    <h1 className='text-black text-[18px] font-Poppins'>Suzuki Bike</h1>
                    <div className="hover w-full h-[85px] bg-[#ffffffcc] absolute transition-all duration-[1s] group-hover:bottom-[85px] bottom-[-90px] left-0 round backdrop-blur">
                        <h3 className='text-[24px] font-Poppins font-bold text-center'>Prices:$100/day</h3>
                        <div className="button flex justify-center items-center">
                            <Link className='px-4 py-2 bg-white rounded-lg text-[18px] font-Poppins font-semibold hover:bg-[#FFB200] hover:text-white' to={''}>Pay Now</Link>
                        </div>
                    </div>
                </div>
                {/* card 7 */}
                <div className="single-prices-card relative overflow-hidden group opacity-[.50] hover:opacity-[100] rounded flex justify-center flex-col items-center w-[300px] h-[300px] hover:border-red-500 border-2 bg-[#FFB200]">
                    <img className=' w-[200px] h-[200px]' src={card7} alt="card-img" />
                    <h1 className='text-black text-[18px] font-Poppins'> sports bike</h1>
                    <div className="hover w-full h-[85px] bg-[#ffffffcc] absolute transition-all duration-[1s] group-hover:bottom-[85px] bottom-[-90px] left-0 round backdrop-blur">
                        <h3 className='text-[24px] font-Poppins font-bold text-center'>Prices:$80/day</h3>
                        <div className="button flex justify-center items-center">
                            <Link className='px-4 py-2 bg-white rounded-lg text-[18px] font-Poppins font-semibold hover:bg-[#FFB200] hover:text-white' to={''}>Pay Now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Prices