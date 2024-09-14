import React from 'react';
import './css/Hero.css'
import logo from '../assets/images/1.png'


function Hero() {
  return (
    <section className="hero" id='hero'>
      <div className="hero-content">
        <img src={logo} alt="logo" className='hero-logo'/>
        <h1>Welcome to MADHack 2024</h1>
        <p>Organized by IEEE Student Branch of UCSC.</p>
        <a href="#intro" className="hero-btn">Learn More</a>
      </div>
    </section>
  );
}

export default Hero;
