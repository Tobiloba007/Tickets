import React, { useEffect, useState } from 'react'
import image1 from '../../assets/image6.svg'
import profile from '../../assets/image7.jpg'
import { GoArrowRight } from "react-icons/go";


const BlogContents = ({loading, blogsData}) => {
    
    const baseUrl = process.env.REACT_APP_BASE_URL;
    
    const tabs = [
        {
            id: 1,
            name: 'All',
        },
        {
            id: 2,
            name: 'General',
        },
        {
            id: 3,
            name: 'Events',
        },
        {
            id: 4,
            name: 'Tickets',
        },
    ]

    const [selected, setSelected] = useState(1)

    const handleClick = (item) => {
        setSelected(item)
    }

  return (
    <div className='flex flex-col items-center justify-start bg-[#FAFAFA] px-5 mt-14 md:px-8 lg:px-10 xl:px-24'>
        {/* BLOG INTRO TABS */}
        <div className='flex items-center justify-start w-full overflow-x-auto [&>div]:flex-shrink-0 hide-scrollbar mb-10'>
            {tabs.map((item) => {
                return(
            <div key={item.id} onClick={()=>handleClick(item.id)}
            className={`h-8 w-28 flex items-center justify-center text-[#331F2D] rounded-2xl mr-6 ${selected === item.id && 'bg-[#571845] text-white'}
            lg:h-9 lg:rounded-3xl`}>
                  <p className='text-sm font-medium md:text-base xl:text-xl'>
                    {item.name}
                  </p>
            </div>
                )
            })}

        </div>

        <div className='flex flex-col items-center justify-start w-full'>
            {blogsData.map((item) => {
                return(
            <div key={item.id} className='flex flex-col items-start justify-start w-full py-5 rounded-md mt-4 md:flex-row md:items-center xl:mt-8 xl:py-10'>
                <div className='flex flex-col items-start justify-start w-full md:mt-0'>
                    <p className='text-lg font-medium text-[#571845] lg:text-xl xl:text-[23px]'>
                          General
                    </p>
                    <p className='text-[22px] font-semibold text-[#331F2D] mt-1 leading-7 md:w-[70%] lg:text-3xl lg:my-3 lg:w-[80%] xl:text-[35px] xl:leading-[45px] xl:my-4'>
                        {item.article_title} 
                    </p>
                    <div className='flex flex-row items-start justify-start w-full mt-4 lg:mb-2'>
                        <img className='w-[34px] h-[34px] object-cover rounded-full lg:w-[40px] lg:h-[40px] xl:w-[60px] xl:h-[60px]'
                        src={profile} alt="profile" />
                        <div className='flex flex-col items-start justify-start ml-3 xl:ml-5'>
                            <p className='text-[13px] font-medium text-[#571845] lg:text-sm xl:text-base'>
                                  Adeola Odeku
                            </p>
                            <p className='text-[11px] font-normal text-[#766871] lg:text-xs xl:text-base xl:mt-2'>
                                  {item.created_at.slice(0, 10)} 
                            </p>
                        </div>
                    </div>
                    <p className='text-[11px] font-normal text-[#766871] mt-5 w-[85%] lg:w-[55%] lg:text-xs xl:text-base xl:mt-7'>
                          {item.aricle_text} 
                    </p>
                    <div className='flex flex-row items-center justify-start mt-2 lg:mt-5 xl:mt-8'>
                         <p className='text-xs font-semibold text-[#571845] lg:text-sm xl:text-base'>
                                   Read more 
                         </p>
                         <GoArrowRight className='text-xs ml-2 text-[#571845] lg:text-sm lg:ml-3 xl:text-lg' />
                    </div>
                </div>

                <div className='w-full h-full mt-14 md:mt-0'>
                   <img className='w-full h-full lg:h-[434px] lg:w-[651px] xl:w-[80%] xl:h-[80%]' 
                   src={baseUrl + item.article_spotlight_image} alt="blog_spotlight_image" />
                </div>

            </div>
            )
        })}
        </div>


        <div className='flex items-center justify-start w-full my-8 md:mt-12'>
           <p className='text-xs font-semibold text-[#571845] lg:text-sm xl:text-lg'>
                Page 1 of 4 
           </p>
        </div>
      
    </div>
  )
}

export default BlogContents
