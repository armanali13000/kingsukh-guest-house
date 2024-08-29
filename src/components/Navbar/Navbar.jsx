import React, {useState} from 'react';
import './navbar.css'
import { GiSpookyHouse } from "react-icons/gi";
import { IoCloseCircle } from "react-icons/io5";
import { TbGridDots } from "react-icons/tb";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link"; 


const Navbar = () => {

  const [active, setActive] = useState('navBar') 
  const showNav =()=>{
    setActive('navBar activeNavbar')
  }

  //for remove navbar
  const removeNav =()=>{
    setActive('navBar')
  }



  //for add background color to the navbar
  const [transparent, setTransparent] = useState('header')
  const addBg = ()=>{
    if(window.scrollY >= 10)
    {
      setTransparent('header activeHeader')
    }
    else
    {
      setTransparent('header')
    }
  }
  window.addEventListener('scroll', addBg)



  return (

    <BrowserRouter>
    
    <section className='navBarSection'>
      <div className={transparent}>
        <div className='logoDiv'>
          <a href='#home' className='logo'>
            <h1 className='flex'><GiSpookyHouse className='icon' />Kingsukh Guest House</h1>
          </a>
        </div>
        
        <div className={active}>
          <ul className='navLists flex'>


            <li className='navItem active'>
              <a href='#home'  className='navLink'>Home</a>
            </li>
            <li className='navItem'>
              <a href='#about'  className='navLink'>About</a>
            </li>
            <li className='navItem'>
              <a href='#offer' className='navLink'>Rooms</a>
            </li>
            <li className='navItem'>
              <a href='#blog' className='navLink'>Blog</a>
            </li>
            <li className='navItem'>
              <a href='#contact' className='navLink'>Contact</a>
            </li>
          </ul>

          <div onClick={removeNav} className='closeNavbar'>
          <IoCloseCircle className='icon'/>
          </div>
        </div>


        <div onClick={showNav} className='toggleNavbar'>
        <TbGridDots className='icon'/>
        </div>

      </div>
    </section>

    </BrowserRouter>

  )
}

export default Navbar
