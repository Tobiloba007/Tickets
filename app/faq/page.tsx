"use client"
import Footer from '../components/general/Footer'
import FaqIntro from '../components/faq/FaqIntro'

import { useEffect } from 'react';
import HostEvent from '../components/home/HostEvent';
import { usePathname } from 'next/navigation';

const page = () => {
  const  pathname  = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className='max-w-screen-2xl mx-auto font-outfit bg-[#FFFFFF]'>
         <FaqIntro />
         <HostEvent />
         <Footer />
    </div>
  )
}

export default page