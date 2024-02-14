import React from 'react'
import Navbar from '../components/general/Navbar'
import HomeIntro from '../components/home/HomeIntro'
import HowItWorks from '../components/home/HowItWorks'
import EventsCategory from '../components/home/EventsCategory'
import UpcomingEvents from '../components/home/UpcomingEvents'
import Testimonials from '../components/home/Testimonials'
import FaqSection from '../components/home/FaqSection'
import HostEvent from '../components/home/HostEvent'
import Footer from '../components/general/Footer'

type Props = {}

const Home = (props: Props) => {
  return (
    <div className='flex-col items-center w-full bg-[#FAFAFA]'>
        <Navbar />
        <HomeIntro />
        <HowItWorks />
        <EventsCategory />
        <UpcomingEvents />
        <Testimonials />
        <FaqSection />
        <HostEvent />
        <Footer />
    </div>
  )
}

export default Home