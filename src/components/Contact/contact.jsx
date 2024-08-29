import React, {useEffect} from 'react'
import './contact.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

//importing icon
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";




const inputs = document.querySelectorAll(".input");


function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
  }

  
  function blurFunc() {
      let parent = this.parentNode;
        if(this.value == "")
        {

            parent.classList.remove("focus");
        }
    }
    
    inputs.forEach((input) => {
        input.addEventListener("focus", focusFunc);
        input.addEventListener("blur", blurFunc);
      });
  



const Contact = () => {

    useEffect(()=>{

        Aos.init({duration: 2000})
    
      }, [])
    

    
    return (
        
        <section className='contactContainer section' data-aos='zoom-in' data-aos-duration='2000' id='contact'>
            <div className='container' >
                <div className='form'>
                    <div className='contact-info'>
                        <h3 className='title'>
                            Let's get in touch
                        </h3>
                        <p className='text'>
                        Discover a world of comfort, luxury, and adventure as you explore our curated selection of hotels
                        </p>
                    


                        <div className='info'>
                            <div className='information'>
                            
                                <FaMapMarkerAlt className='icon'/>
                                <p>
                                    Beside Barshal Water Tank,
                                    Manpur, Barhanti,
                                    West Bengal 723156 
                                </p>
                            </div>

                            <div className='information'>
                                <MdEmail className='icon'/>
                                <p>
                                    kkghosh0099@gmail.com
                                </p>
                            </div>

                            <div className='information'>
                                <FaPhoneVolume className='icon'/>
                                <p>
                                +91 9007062180
                                </p>
                            </div>
                        </div>


                        <div className='social-media'>
                            <p>Connect with us :</p>
                            <div className='social-icons'>
                                <a href=''>
                                <FaFacebookF className='icon'/>
                                </a>

                                <a href=''>
                                <FaTwitter className='icon'/>
                                </a>

                                <a href=''>
                                <FaInstagram className='icon'/>
                                </a>
                            </div> 
                        </div>
                    </div>



                    <div class="contact-form">
                        <form action="#" autocomplete="off">
                            <h3 class="title">Contact us</h3>
                            <div class="input-container">
                            <input type="text" name="name" class="input" />
                            <label for="">Username</label>
                            <span>Username</span>
                            </div>
                            <div class="input-container">
                            <input type="email" name="email" class="input" />
                            <label for="">Email</label>
                            <span>Email</span>
                            </div>
                            <div class="input-container">
                            <input type="tel" name="phone" class="input" />
                            <label for="">Phone</label>
                            <span>Phone</span>
                            </div>
                            <div class="input-container textarea">
                            <textarea name="message" class="input"></textarea>
                            <label for="">Message</label>
                            <span>Message</span>
                            </div>
                            <input type="submit" value="Send" class="btn" />
                        </form>
                    </div>
                </div>
            </div>

            
        </section>
    




    );
}

export default Contact;

