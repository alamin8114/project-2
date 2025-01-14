import { Link } from 'react-router-dom'
import ngot from '../../assets/images/Nagad-Logo.wine.png'
import bikas from '../../assets/images/vectorseek.com-bKash-Logo-Vector.png'
import roket from '../../assets/images/dutch-bangla-rocket-logo-png_seeklogo-317692.png'
import upay from '../../assets/images/Upay-colour-logo-.png'
import islami from '../../assets/images/islami-bank-bd-ltd-logo-F7304B1A93-seeklogo.com.png'
import sonali from '../../assets/images/সোনালী_ব্যাংকের_লোগো.svg.png'
import visa from '../../assets/images/1547549.webp'

const Payment = () => {
  return (
    <>
    <div className="alamin-payment pt-[80px] pb-[40px] bg-[#3a3737]">
        <div className="container">
            <div className="payment-head">
                <h1 className="text-[64px] font-Poppins font-bold text-white text-center">Payment Method</h1>
                <p className="text-[24px] font-Poppins font-semibold pt-4 text-gray-200 text-center">You can make payment through the following options</p>
            </div>
            <div className="payment-row cursor-pointer flex justify-around  items-center  mt-[40px] gap-8 flex-col">
            <div className="payment-method flex gap-[20px] justify-around flex-col md:flex-wrap md:flex-row items-center">
            <div className="hover:scale-[1.1] single-payment-method w-[200px] flex justify-center gap-1 items-center flex-col py-[10px] rounded-lg bg-white">
                    <img className="w-[150px] h-[120px]" src={ngot} alt="logo" />
                    <div className=" flex justify-center items-center">
                    <Link className='text-[18px]  text-[#FFB200]  font-Poppins font-bold'>Ngot app</Link>
                    </div>
                    
                </div>
                <div className="hover:scale-[1.1]  single-payment-method w-[200px] flex justify-center gap-1 items-center flex-col py-[10px] rounded-lg bg-white">
                    <img className="w-[150px] h-[120px]" src={bikas} alt="logo" />
                    <div className=" flex justify-center items-center">
                    <Link className='text-[18px]  text-[#FFB200]  font-Poppins font-bold'>Bikas app</Link>
                    </div>
                    
                </div>
                <div className="hover:scale-[1.1]  single-payment-method w-[200px] flex justify-center gap-1 items-center flex-col py-[10px] rounded-lg bg-white">
                    <img className="w-[150px] h-[120px]" src={roket} alt="logo" />
                    <div className=" flex justify-center items-center">
                    <Link className='text-[18px]  text-[#FFB200]  font-Poppins font-bold'>Roket app</Link>
                    </div>
                </div>
                </div>
                <div className="payment-method gap-[20px] flex-col md:flex-wrap md:flex-row flex justify-around items-center">
                <div className="hover:scale-[1.1]  single-payment-method w-[200px] flex justify-center gap-1 items-center flex-col py-[10px] rounded-lg bg-white">
                    <img className="w-[150px] h-[120px]" src={upay} alt="logo" />
                    <div className=" flex justify-center items-center">
                    <Link className='text-[18px]  text-[#FFB200]  font-Poppins font-bold'>Upay app</Link>
                    </div>
                </div>
                <div className="hover:scale-[1.1]  single-payment-method w-[200px] flex justify-center gap-1 items-center flex-col py-[10px] rounded-lg bg-white">
                    <img className="w-[150px] h-[120px]" src={islami} alt="logo" />
                    <div className=" flex justify-center items-center">
                    <Link className='text-[18px]  text-[#FFB200]  font-Poppins font-bold'>Islami bank</Link>
                    </div>
                </div>
                <div className="hover:scale-[1.1]  single-payment-method w-[200px] flex justify-center gap-1 items-center flex-col py-[10px] rounded-lg bg-white">
                    <img className="w-[150px] h-[120px]" src={sonali} alt="logo" />
                    <div className=" flex justify-center items-center">
                    <Link className='text-[18px]  text-[#FFB200]  font-Poppins font-bold'>Sonali app</Link>
                    </div>  
                </div>
                <div className="hover:scale-[1.1]  single-payment-method w-[200px] flex justify-center gap-1 items-center flex-col py-[10px] rounded-lg bg-white">
                    <img className="w-[150px] h-[120px]" src={visa} alt="logo" />
                    <div className=" flex justify-center items-center">
                    <Link className='text-[18px]  text-[#FFB200]  font-Poppins font-bold'>Visa Card</Link>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Payment