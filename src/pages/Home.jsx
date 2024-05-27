import React, { useEffect, useState } from 'react'
import HomeIntro from '../components/home/HomeIntro'
import HowItWorks from '../components/home/HowItWorks'
import UpcomingEvents from '../components/home/UpcomingEvents'
import Testimonials from '../components/home/Testimonials'
import FaqSection from '../components/home/FaqSection'
import Footer from '../components/general/Footer'
import Navbar from '../components/general/Navbar'
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { homeEvents } from '../features/EventActions'
import EventsCategory from '../components/home/EventsCategory'
import HostEvent from '../components/home/HostEvent'



const Home = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  return (
    <div className='flex-col items-center justify-start w-full max-w-screen-2xl mx-auto font-outfit bg-[#FAFAFA]'>
        <Navbar button1='Login' button2='Sign Up' link1='/login' link2='/signup1' />
        <HomeIntro />
        <HowItWorks />
        <EventsCategory />
        <UpcomingEvents  />
        <Testimonials />
        <FaqSection />
        <HostEvent />
        <Footer />
    </div>
  )
}

export default Home