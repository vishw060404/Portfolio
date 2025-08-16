import React from 'react'
import {useState} from 'react'
import { FaSquareWhatsapp,FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import './Mobile.css'

function Hero() {
   const [popUp, setPopUp] = useState(false)


  return (
    <div>
      <section id='hero'>
        <div className='heroText'>
            <h1>VISHWA K</h1>
            <h1>Mern Stack Developer</h1>
            <button className='btn' onClick={()=>setPopUp(true)}>Contact Me</button>

        </div>
        <div>
            <img src='Image/Vishwa.jpeg' alt='Vishwa K' className='heroImage' />
        </div>
      </section>
        
      {popUp && (
        <div className='popUp'>
          <h2>Contact Me</h2>
          <div className='socialIcons'>
            <a href='mailto:vishwa0604@gmail.com'><MdEmail size={30} 
            className='email'
            /></a>
            <a href="https://wa.me/919042666072"><FaSquareWhatsapp size={30} 
            className='whatsapp'
            /></a>
            <a href='https://www.linkedin.com/in/vishwa-k-6747b3274/'><FaLinkedin size={30} 
            className='linkdin'
            /></a>
            
          </div>
          <button className='btn' onClick={() => setPopUp(false)}>Close</button>
        </div>
      )}
    </div>
  )
}

export default Hero
