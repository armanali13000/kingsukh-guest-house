import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Popular from './components/Popular/Popular'
import Offer from './components/Offer/Offer'
import About from './components/About/About'
import Blog from './components/Blog/Blog'
import Contact from './components/Contact/contact'
import Location from './components/Location/location'
import Footer from './components/Footer/Footer'

const App = () => {
  return (

      
    <>
      <Navbar/>
      <Home/>
      <Popular/>
      <Offer/>
      <About/>
      <Blog/>
      <Contact />
      <Location />
      <Footer/>
    </>
    
  )
}

export default App
