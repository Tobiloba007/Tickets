import React, { useEffect, useState } from 'react'
import BlogIntro from '../components/blog/BlogIntro'
import Footer from '../components/general/Footer'
import Newsletter from '../components/general/Newsletter'
import { useLocation } from 'react-router-dom'
import HostEvent from '../components/home/HostEvent'
import BlogContents from '../components/blog/BlogContents'
import { useDispatch } from 'react-redux'
import { getBlogs } from '../features/BlogActions'

const Blog = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const [blogsData, setBlogData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBlogs(setBlogData, setLoading, setError))
  }, [dispatch])

  return (
    <div className='max-w-screen-2xl mx-auto font-outfit bg-[#FAFAFA]'>
        {loading
        ?<div className='absolute top-0 flex items-center justify-center h-screen w-screen bg-slate-[#cccccc]'>
             <div className="absolute w-7 h-7 border-t-4 border-[#571845] border-solid rounded-full z-100 animate-spin xl:h-9 xl:w-9"></div>
         </div>
        :<div className='w-full'>
          <BlogIntro blogsData={blogsData} loading={loading} />
          <BlogContents blogsData={blogsData} loading={loading} />
          <Newsletter />
          <HostEvent />
          <Footer />
        </div>
        }
    </div>
  )
}

export default Blog
