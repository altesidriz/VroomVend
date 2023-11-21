import { Routes, Route } from "react-router-dom"
import './assets/styles/styles.css'
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Footer from "./components/footer/Footer"
import Search from "./components/search-page/Search"
import SellCar from "./components/sell-car/SellCar"
import Login from "./components/login-modal/Login"
import Signup from "./components/register/Signup"
import Details from "./components/details/Details"


function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/sell" element={<SellCar />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/cars/:carId" element={<Details />}/>
      </Routes>
      <Footer />
      
    </>
  )
}

export default App
