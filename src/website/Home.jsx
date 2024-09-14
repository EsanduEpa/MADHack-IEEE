import React from 'react'
import Hero from '../components/Hero'
import Intro from '../components/Intro'
import Timeline from '../components/Timeline'
import Prizes from '../components/Prizes'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'
import NavBar from '../components/Navbar'

export default function Home() {
  return (
    <div>
        <NavBar/>
        <Hero/>
        <Intro/>
        <Timeline/>
        <Prizes/>
        <FAQ/>
        <Footer/>
    </div>
  )
}
