import React, { useEffect } from 'react'
import AboutIntro from '../components/about/AboutIntro'
import WhatWeDo from '../components/about/WhatWeDo'
import CoreValues from '../components/about/CoreValues'
import Footer from '../components/general/Footer'
import { useLocation } from 'react-router-dom'
import HostEvent from '../components/home/HostEvent'

const About = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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
