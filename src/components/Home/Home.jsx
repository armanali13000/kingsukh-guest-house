import React, {useEffect} from 'react'
import './home.css'

//importing AOS(Animate on Scroll)
import Aos from 'aos'
import 'aos/dist/aos.css'


const Home = () => {
  useEffect(()=>{

    Aos.init({duration: 2000})

  }, [])


  return (

    <section className='home' id='home'>
      <div className='secContainer container'>
        <div className='homeText'>
          <h1 data-aos='fade-up' className='title'>
          Make Yourself At Home In Our Guest House.
          </h1>
          <p data-aos='fade-up' data-aos-duration='2500' className='subTitle'>
          Book a Room with Us This Month and Get Complimentary City Tours!
          </p>    

          <button className='btn' data-aos='fade-up' data-aos-duration='3000'>
            <a href='#popular' id='home'>Explore Now</a>
          </button>

        </div>  

        {/* <div className='homeCard grid'>

          <div data-aos='fade-right' data-aos-duration='2000' className='locationDiv'>
            <label htmlFor='location'>Location</label>
            <input type='text' placeholder='Dream Destination'></input>
          </div>

          <div data-aos='fade-right' data-aos-duration='2500' className='distDiv'>
            <label htmlFor='distance'>Distance</label>
            <input type='text' placeholder='11/Meters'></input>
          </div>

          <div data-aos='fade-right' data-aos-duration='3000' className='priceDiv'>
            <label htmlFor='price'>Price Range</label>
            <input type='text' placeholder='$140-$500'></input>
          </div>
          <button data-aos='fade-left' data-aos-duration='2000' className='btn'>Search</button>

        </div>   */}
      </div>
    </section>

  )
}

export default Home
