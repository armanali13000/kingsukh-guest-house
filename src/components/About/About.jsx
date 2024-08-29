import React, {useEffect} from 'react'
import './about.css'

//importing Images
import img1 from '../../Assets/customer.jpg'
import img2 from '../../Assets/booking.png'
import img3 from '../../Assets/mountain.jpg'


//importing video
import video from '../../Assets/Mountain video.mp4'


//importing AOS(Animate on Scroll)
import Aos from 'aos'
import 'aos/dist/aos.css'


const About = () => {

  useEffect(()=>{

    Aos.init({duration: 2000})

  }, [])


  return (
    
      <section className='about section' id='about'>
        <div className='secContainer'>
          <h2 className='title' data-aos='zoom-in' data-aos-duration='2000'>
            About Us!
          </h2>

          <div className='mainContent container grid'>
            <div data-aos='fade-up' data-aos-duration='2000' className='singleItem'>
              <img src={img3} alt='Image Name' />
              <h3>10+ Mountains</h3>
              <p>
              A wonderful weekend destination specially either during monsoon to enjoy the rain on the banks of Baranti lake or during Spring to soothe one's eyes with omnipresent Palash flowers.
              </p>
            </div>   

            <div data-aos='fade-up' data-aos-duration='3000' className='singleItem'>
              <img src={img2} alt='Image Name' />
              <h3>100+ Booking</h3>
              <p>
              We are thrilled to announce that we have successfully completed over 100+ bookings! 🎉
              This milestone is a testament to the trust and support of our incredible customers like you. We are deeply grateful for the opportunity to serve you and provide that meets your needs.
              </p>
            </div>  

            <div data-aos='fade-up' data-aos-duration='4000' className='singleItem'>
              <img src={img1} alt='Image Name' />
              <h3>150+ Customers</h3>
              <p>
              We’re excited to announce that we’ve reached an incredible milestone over 150+ customers!
              This achievement wouldn’t have been possible without the trust and support of amazing customers like you. Your confidence in us fuels our commitment to delivering the best and motivates us to continuously improve.
              </p>
            </div>          
          </div>

          <div className='videoCard container'>
            <div className='cardContent grid'>

              <div data-aos='fade-right' data-aos-duration='2000' className='cardText'>
                <h2>
                  Wonderful House experience 
                </h2>
                <p>
                Here, we always make sure that you will have any of your needs satisfied, 
                be it a comfortable Guest House with a strong WiFi signal and a diligent room service, 
                a dining and lounge zone or any additional Features a traveller might want…
                </p>
              </div>

              <div data-aos='fade-left' data-aos-duration='2000' className='cardVideo'>
                <video src={video} autoPlay loop muted type='video/mp4'></video>
              </div>
            </div>
          </div>
        </div>
      </section>

  )
}

export default About
