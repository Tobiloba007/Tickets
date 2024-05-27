import React, { useEffect } from 'react'
import BlogIntro from '../components/blog/BlogIntro'
import BlogContents from '../components/blog/BlogContents'
import Footer from '../components/general/Footer'
import Newsletter from '../components/general/Newsletter'
import { useLocation } from 'react-router-dom'
import HostEvent from '../components/home/HostEvent'

const Blog = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className='max-w-screen-2xl mx-auto font-outfit bg-[#FAFAFA]'>
         <BlogIntro />
         <BlogContents />
         <Newsletter />
         <HostEvent />
         <Footer />
    </div>
  )
}

export default Blog
