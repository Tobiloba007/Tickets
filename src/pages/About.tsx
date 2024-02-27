import React from 'react'
import AboutIntro from '../components/about/AboutIntro'
import WhatWeDo from '../components/about/WhatWeDo'
import CoreValues from '../components/about/CoreValues'
import HostEvent from '../components/home/HostEvent'
import Footer from '../components/general/Footer'

const About = () => {
  return (
    <div className='max-w-screen-2xl mx-auto font-outfit'>
        <AboutIntro />
        <WhatWeDo />
        <CoreValues />
        <HostEvent />
        <Footer />
    </div>
  )
}

export default About
