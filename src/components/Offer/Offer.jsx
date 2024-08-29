import React, {useEffect} from 'react'
import './offer.css'

import { IoBed } from "react-icons/io5";
import { MdBathtub } from "react-icons/md";
import { FaWifi } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";

//importing image
import img6 from '../../Assets/small.jpg'
import img7 from '../../Assets/room1.jpg'
import img8 from '../../Assets/large.jpg'

//importing AOS(Animate on Scroll)
import Aos from 'aos'
import 'aos/dist/aos.css'




const Offers = [

  {
    id:1,
    imgSrc: img8,
    bedRoom: 'Cozy Haven Room',
    price: '₹1000/night',
  },

  {
    id:2,
    imgSrc: img6,
    bedRoom: 'Spacious Serenity Suite',
    price: '₹1500/night',
  },

  {
    id:3,
    imgSrc: img7,
    bedRoom: 'luxury Haven Room',
    price: '₹2000/night',
  },

]


const Offer = () => {

  useEffect(()=>{

    Aos.init({duration: 2000})

  }, [])




  return (
    

      <section className='offer container section' id='offer'>
        <div className='secContainer'>

          <div data-aos='fade-up' data-aos-duration='2000' className='secIntro'>
            <h2 className='secTitle'>
              Special Offer!!
            </h2>
            <h2>OUR LIVING ROOM</h2>
            <p>
            The Most Memorable Rest Time Starts Here.
            </p>
          </div>        



      
          <div className='mainContent grid'>

          {
            Offers.map(({id, imgSrc, bedRoom, price})=>{
              return(

                <div data-aos='fade-up' data-aos-duration='3000' className='singleOffer'>
                    <div className='destImage'>
                      <img src={imgSrc} alt='{destTitle}' />

                      <span className='discount'>
                        30% Off
                      </span>
                    </div>

                  <div className='offerBody'>
                    <div className='price flex'>
                      <h4>{bedRoom}</h4>
                      <h4>
                        {price}
                      </h4>
                      <span className='status'>
                        For Rent
                      </span>
                    </div>

                    <div className='amenities flex'>
                      <div className='singleAmenity flex'>
                      <IoBed className='icon'/>
                      <small>2 Beds</small>
                      </div>
                      <div className='singleAmenity flex'>
                      <MdBathtub className='icon'/>
                      <small>1 Bathroom</small>
                      </div>
                      <div className='singleAmenity flex'>
                      <FaWifi className='icon'/>
                      <small>Wifi</small>
                      </div>
                      <div className='singleAmenity flex'>
                      <FaCar className='icon'/>
                      <small>PickUp - Drop</small>
                      </div>
                    </div>

                   
                    <a href='https://api.whatsapp.com/send?phone=919007062180'>
                    <button className='btn flex'>
                      View Details
                    <FaArrowRight className='icon'/>
                    </button>
                    </a>
                    
                  </div>
                </div>

              )
            })
          }
                  
          </div>
        </div>
      </section>


  )
}

export default Offer
