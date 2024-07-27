"use client"
import React, { useEffect } from 'react'
import PricingIntro from '../components/pricing/PricingIntro'
import Footer from '../components/general/Footer'

import HostEvent from '../components/home/HostEvent'
import { usePathname } from 'next/navigation'


const page = () => {
  const  pathname  = usePathname();

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

export default page
