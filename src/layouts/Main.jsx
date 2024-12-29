import { Outlet } from "react-router-dom"
import Navbar from "../components/shared/navbar/Navbar"
import Footer from "../components/shared/footer/Footer"


const Main = () => {
  return (
    <div className="font-inter">
        <Navbar/>
      <div className="min-h-[calc(100vh-232px)]">
      <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}

export default Main
