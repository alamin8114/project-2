import './Navbar.css'
import { FaBars } from "react-icons/fa";
import logo from '../../assets/images/black-motorcycle.png'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
      <div className="alamin-nav absolute w-full z-50 bg-[#FFB200]">
        <div className="container">
            <div className="nav-row p-2 md:p-0 flex justify-between items-center">
                <div className="nav-logo flex gap-2 w-[80px] md:w-[100px]">
                    <img src={logo} alt="bike-logo" />
                    <h2 className=" text-[24px] md:text-[28px] font-semibold md:font-bold font-Grotesque">Bike Rental</h2>
                </div>
                <div className="bar relative group">
                        <FaBars className="block md:hidden text-[35px]  text-black hover:text-white"/>
                    <div className="menu-res ">
                    <ul className="flex md:hidden cursor-pointer w-[120px] pb-[10px] rounded top-[-250px] group-hover:top-[40px] transition-all duration-[1s] right-[0px] px-1 py-1 gap-[3px] bg-gray-300 text-center flex-col  absolute">
                        <li><Link>Home</Link></li>
                        <li><Link>About</Link></li>
                        <li><Link>Network</Link></li>
                        <li><Link>Choose us</Link></li>
                        <li><Link>Prices</Link></li>
                        <li><Link>Payment</Link></li>
                        <li><Link>Contact Us</Link></li>
                    </ul>
                    </div>
                    </div>
                <div className="menu-nav hidden md:block">
                    <ul className="flex cursor-pointer gap-[40px]">
                        <li><Link>Home</Link></li>
                        <li><Link>About</Link></li>
                        <li><Link>Network</Link></li>
                        <li><Link>Choose us</Link></li>
                        <li><Link>Prices</Link></li>
                        <li><Link>Payment</Link></li>
                        <li><Link>Contact Us</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Navbar