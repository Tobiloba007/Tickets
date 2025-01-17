import React, { useEffect } from 'react'
import PricingIntro from '../components/pricing/PricingIntro'
import Footer from '../components/general/Footer'
import { useLocation } from 'react-router-dom'
import HostEvent from '../components/home/HostEvent'

const Pricing = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className='max-w-screen-2xl mx-auto font-outfit'>
        <PricingIntro />
        <HostEvent />
        <Footer />
    </div>
  )
}

export default Pricing
