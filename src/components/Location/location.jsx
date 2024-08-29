import React, {useEffect} from 'react'
import './location.css'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Location = () => {

    useEffect(()=>{

        Aos.init({duration: 2000})
    
      }, [])


    return (
        <section className='locationSection'>

            <div className='locationContainer'>

                <div className='locationInfo'>
                <h2 data-aos='fade-down' data-aos-duration='2000'>
                        Driving Directions
                </h2>
                    <p data-aos='fade-up' data-aos-duration='2500'>
                        Please follow the signposted directions for Hotel Roy Bed & Breakfast from the city centre
                    </p>
                    
                    <div className='information'>
                            <div className='info'>
                                <h2 data-aos='fade-right' data-aos-duration='2000'>5.4 <span>km</span></h2>
                                <p data-aos='fade-up' data-aos-duration='3000'>Away from the Town hall</p>
                            </div>

                            <div className='info'>
                                <h2 data-aos='fade-left' data-aos-duration='2500'>18 <span>km</span></h2>
                                <p data-aos='fade-up' data-aos-duration='3500'>Away from the Airport</p>
                            </div>
                    </div>
                </div>

                <div className='map' data-aos='zoom-in' data-aos-duration='2000'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7313.003491353379!2d86.85979!3d23.586332!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6e3fdd3ff9ebb%3A0x517a57e3f93c1807!2sKingsukh%20Guest%20House!5e0!3m2!1sen!2sin!4v1722807802779!5m2!1sen!2sin"  width="800px" height="500px"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>

            </div>
        </section>
    );
}

export default Location;
