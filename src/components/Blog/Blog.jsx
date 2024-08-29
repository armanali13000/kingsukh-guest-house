import React, {useEffect} from 'react'
import './blog.css'

import { FaArrowRight } from "react-icons/fa";


//importing Images
import img from '../../Assets/header.jpg'
import img1 from '../../Assets/palash.webp'
import img2 from '../../Assets/ayodhya.webp'
import img3 from '../../Assets/baranti.webp'


//importing AOS(Animate on Scroll)
import Aos from 'aos'
import 'aos/dist/aos.css'

const Posts = [
  {
    id:2,
    postImage: img,
    title: '150+ Customers Milestone',
    desc: 'We’ve proudly crossed the threshold of 150+ satisfied customers! This achievement highlights the growing trust in our brand and the effectiveness of our. We’re committed to continuing to deliver excellence as we expand our customer base.',
    },
  
    {
      id:2,
      postImage: img1,
      title: 'Expansion into New Markets',
      desc: ' We’re excited to announce our expansion into new markets, broadening our reach and bringing our to a wider audience. This strategic move represents our commitment to growth and innovation, as we continue to adapt to meet the needs of our customers globally.',
    },
  
    {
      id:3,
      postImage: img2,
      title: 'Achievement of 5-Star Customer Ratings',
      desc: 'We’re thrilled to maintain an average rating of 5 stars across [platforms/reviews]. This reflects our dedication to customer satisfaction and our commitment to quality. We’ll keep striving to deliver top-notch experiences for all our customers.',
    },
  
    {
      id:4,
      postImage: img3,
      title: 'Completion of 100+ Bookings',
      desc: 'We have successfully completed over 100 bookings, marking a significant milestone in our growth journey. Each booking represents a trusted relationship with our clients, and we’re excited to build on this momentum to serve even more customers in the future.',
    }
]


const Blog = () => {

  useEffect(()=>{

    Aos.init({duration: 2000})

  }, [])


  return (
    <section className='blog container section' id='blog'>
      <div className='secContainer'>

        <div className='secIntro'>
          <h2 data-aos='fade-up' data-aos-duration='2000' className='secTitle'>
            Our Best Blog?
          </h2>
          <p data-aos='fade-up' data-aos-duration='2500'>
          Single room with balcony
          </p>
        </div>

        <div className='mainContainer grid'>
          
        {
          Posts.map(({id, postImage, title, desc})=>{
            return(

              <div data-aos='fade-up' data-aos-duration='2000' className='singlePost grid'>
                <div className='imgDiv'> 
                  <img src={postImage} alt={title} />  
                </div>

                <div className='postDetails'>
                  <h3 data-aos='fade-up' data-aos-duration='3000'>
                    {title}
                  </h3>
                  <p data-aos='fade-up' data-aos-duration='4000'>
                  {desc}
                  </p>
                </div>

                <a data-aos='fade-up' data-aos-duration='4500' href='#' className='flex'>
                Read More
                <FaArrowRight className='icon' />
                </a>
              </div>

            )
          })
        }
        </div>
      </div>  
    </section>
  )
}

export default Blog
