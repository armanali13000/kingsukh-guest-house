import React, {useEffect} from 'react'
import './popular.css'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { GiSpookyHouse } from "react-icons/gi";


//importing Images
import img2 from '../../Assets/baranti.webp'
import img5 from '../../Assets/mithonDam.webp'
import img7 from '../../Assets/ayodhya.webp'
import img9 from '../../Assets/palash.webp'

//importing AOS(Animate on Scroll)
import Aos from 'aos'
import 'aos/dist/aos.css'



const Data = [
  {
  id:1,
  imgSrc: img2,
  destTitle: 'baranti Image',
  location: 'Baranti',
  grade: 'CULTRUAL RELAX',
  },

  {
    id:2,
    imgSrc: img5,
    destTitle: 'Mithon Dam Image',
    location: 'Mithon Dam',
    grade: 'CULTRUAL RELAX',
  },

  {
    id:3,
    imgSrc: img7,
    destTitle: 'Ayodhya Image',
    location: 'Ayodhya',
    grade: 'CULTRUAL RELAX',
  },

  {
    id:4,
    imgSrc: img9,
    destTitle: 'Palash Image',
    location: 'Palash',
    grade: 'CULTRUAL RELAX',
  }
] 


const Popular = () => {

  useEffect(()=>{

    Aos.init({duration: 200})

  }, [])



  return (
    
    <section className='popular section container' id='popular'> 

      <div className='secContainer'>
        <div className='secHeader flex'>
          <div className='textDiv'>
            <h2 className='secTitle'>
              Popular Destination
            </h2>
            <p>
            Get a promotional discount as high as 25% OFF!
            </p>
          </div>

          <div className='iconsDiv flex'>
          <FaArrowLeft className='icon leftIcon'/>
          <FaArrowRight className='icon'/>
          </div>

        </div>

        <div className='mainContent grid'>
          

          {
            Data.map(({id, imgSrc, destTitle, location, grade})=>{
              return(

            <div data-aos='fade-up' className='singleDestination'>
            <div className='destImage'>
             <img src={imgSrc} alt='Image Title' />

              <div className='overLayInfo'>
               <h3>{destTitle}</h3>
               <p>
               {location}
                </p>
                <a href='https://api.whatsapp.com/send?phone=919007062180'>
                <FaArrowRight className='icon' />
                </a>

              </div>
           </div>


            <div className='destFooter'>
              <div className='number'>
                0{id}
              </div>

              <div className='destText flex'>
                <h6>
                  {location}
                </h6>
                <span className='flex'>
                  <span className='dot'>
                  <GiSpookyHouse className='icon' />
                  </span>
                  Kingsukh G.H
                </span>
              </div>

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

export default Popular
