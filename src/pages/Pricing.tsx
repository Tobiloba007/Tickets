import React from 'react'
import PricingIntro from '../components/pricing/PricingIntro'
import HostEvent from '../components/home/HostEvent'
import Footer from '../components/general/Footer'

const Pricing = () => {
  return (
    <div className='max-w-screen-2xl mx-auto font-outfit'>
        <PricingIntro />
        <HostEvent />
        <Footer />
    </div>
  )
}

export default Pricing
