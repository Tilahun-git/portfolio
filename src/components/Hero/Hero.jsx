import React, { Profiler } from 'react'
import profile from '../../assets/profile.jpg'

import './Hero.css'

const Hero = () => {
  return (
    <div className='hero'>
        <img src={profile} alt="" />
        <h1><span>I'm Tilahun</span>,frontend developer</h1>
        <p>I am frontend developer from Addiss Ababa,Ethiopia with two years of experience.</p>
        <div className="hero-action">
            <div className="hero-connect">Connect with Me</div>
            <div className="hero-resume">My resume</div>
        </div>
      
    </div>
  )
}

export default Hero
