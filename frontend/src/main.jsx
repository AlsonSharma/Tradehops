import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './LandingPage/Home/HomePage'
import AboutPage from './LandingPage/About/AboutPage'
import PricingPage from './LandingPage/Pricing/PricingPage'
import SupportPage from './LandingPage/Support/SupportPage'
import Signup from './LandingPage/Signup/Signup'
// import Login from './LandingPage/Signup/Login'
import ProductsPage from './LandingPage/Products/ProductsPage'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from './LandingPage/Navbar'
import Footer from './LandingPage/Footer'
import NotFound from './LandingPage/NotFound'
import Login from './LandingPage/Signup/Login'


createRoot(document.getElementById('root')).render(

  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/about' element={<AboutPage/>}/>
    <Route path='/product' element={<ProductsPage/>}/>
    <Route path='/pricing' element={<PricingPage/>}/>
    <Route path='/support' element={<SupportPage/>}/>
    <Route path='*' element={<NotFound/>}/>
  </Routes>
<Footer/>
  </BrowserRouter>
    

   
) 
  