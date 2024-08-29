import React, {useEffect} from 'react'
import './footer.css'

//importing icons
import { GiSpookyHouse } from "react-icons/gi";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

//importing AOS(Animate on Scroll)
import Aos from 'aos'
import 'aos/dist/aos.css'





const Footer = () => {

  useEffect(()=>{

    Aos.init({duration: 2000})

  }, [])


  return (
    <div className='footer'>
      <div className='secContainer container grid'>
        <div data-aos='zoom-in' data-aos-duration='2000' className='logoDiv'>
          <div data-aos='zoom-in' data-aos-duration='2000' className='footerLogo'>
              <a href='#home' className='logo flex'>
                <h1 className='flex'>
                  <GiSpookyHouse className='icon' />
                  Kingsukh Guest House 
                </h1>
              </a>
          </div>

          <div className='socials flex'>
          <a href='#home'><FaFacebookF className='icon'/></a>
          <a href='#home'><FaTwitter className='icon'/></a>
          <a href='#home'><FaInstagram className='icon'/></a>
          </div>
           
        </div>

        <div data-aos='zoom-in' data-aos-duration='3000' className='footerLinks'>
          <span className='linkTitle'>
            Information
          </span>
          <li>
            <a href='#home'>Home</a>
          </li>
          <li>
            <a href='#popular'>Browse Destinations</a>
          </li>
          <li>
            <a href='#offer'>Special Offers & Packages</a>
          </li>
          <li>
            <a href='#contact'>Customer Reviews & Ratings</a>
          </li>
        </div>

        <div data-aos='zoom-in' data-aos-duration='4000' className='footerLinks'>
          <span className='linkTitle'>
            Our Services
          </span>
          <li>
            <a href='#popular'>Concierge Assistance</a>
          </li>
          <li>
            <a href='#contact'>Flexible Booking Options</a>
          </li>
          <li>
            <a href='#about'>Airport Transfers</a>
          </li>
          <li>
            <a href='#home'>Wellness & Recreation</a>
          </li>
        </div>

        <div data-aos='zoom-in' data-aos-duration='5000' className='footerLinks'>
          <span className='linkTitle'>Contact Us</span>
          <span className='phone'>+913487569851</span>
          <span className='email'>kingkush@gmail.com</span>
        </div>
      </div> 
      <div className='copyright' data-aos='zoom-in' data-aos-duration='5500'>
          <h3>Copyright © 2024 Kingsukh Guest House. All rights reserved.</h3>
        </div>
    </div>
  )
}

export default Footer
