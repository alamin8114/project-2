import About from "../Components/About/About"
import Banner from "../Components/Bannner/Banner"
import Choose from "../Components/Choose/Choose"
import Footer from "../Components/Footer/Footer"
import Network from "../Components/Network/Network"
import Payment from "../Components/Payment/Payment"
import Prices from "../Components/Prices/Prices"


const Home = () => {
  return (
    <>
    <Banner/>
    <About/>
    <Network/>
    <Choose/>
    <Prices/>
    <Payment/>
    <Footer/>
    </>
  )
}

export default Home