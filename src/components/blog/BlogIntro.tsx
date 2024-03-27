import React from 'react'
import Navbar from '../general/Navbar'
import image1 from '../../assets/image6.svg'
import profile from '../../assets/image7.jpg'
import { GoArrowRight } from "react-icons/go";



const BlogIntro = () => {
  return (
    <div className='flex flex-col items-center justify-start w-full xl:mb-10'>
        <Navbar button1='Login' button2='Sign Up' link1='/login' link2='/signup2' />

        <div className='flex flex-col items-start justify-start w-full px-5 mt-14 md:mt-20 lg:px-10 lg:mt-24 xl:px-16 xl:mt-28'>
            <p className='text-[27px] font-semibold text-[#571845] text-3xl md:pl-5 lg:text-[32px] lg:leading-10 xl:text-[40px] xl:leading-[50px]'>
                Insights and blog to <br /> inform and inspire
            </p>

            <div className='flex flex-col items-start justify-start w-full bg-white py-14 px-5 rounded-md mt-8 md:mt-14 md:flex-row lg:items-center xl:mt-16 xl:px-10 xl:py-20'>
                <div className='w-full h-full'>
                   <img className='w-full h-full' 
                   src={image1} alt="intro_image" />
                </div>

                <div className='flex flex-col items-start justify-start w-full mt-10 md:ml-8 md:mt-0 xl:ml-12'>
                    <p className='text-lg font-medium text-[#571845] lg:text-xl xl:text-[23px]'>
                        General
                    </p>
                    <p className='text-[22px] font-semibold text-[#331F2D] mt-1 leading-7 lg:text-3xl lg:my-3 xl:text-[35px] xl:leading-[45px] xl:my-4'>
                        How to create your own <br /> event on Umscope 
                    </p>
                    <div className='flex flex-row items-start justify-start w-full mt-4 lg:mb-2'>
                        <img className='w-[34px] h-[34px] object-cover rounded-full lg:w-[40px] lg:h-[40px] xl:w-[60px] xl:h-[60px]'
                        src={profile} alt="profile" />
                        <div className='flex flex-col items-start justify-start ml-3 xl:ml-5'>
                            <p className='text-[13px] font-medium text-[#571845] lg:text-sm xl:text-base'>
                                   Oluwatobi Joseph 
                            </p>
                            <p className='text-[11px] font-normal text-[#766871] lg:text-xs xl:text-base xl:mt-2'>
                                   3rd Jan, 2023 
                            </p>
                        </div>
                    </div>
                    <p className='text-[11px] font-normal text-[#766871] mt-5 w-[85%] lg:w-[55%] lg:text-xs xl:text-base xl:mt-7'>
                          Worry less about your event ticket, payment and fees. All you need is Umscope. 
                    </p>
                    <div className='flex flex-row items-center justify-start mt-2 lg:mt-5 xl:mt-8'>
                         <p className='text-xs font-semibold text-[#571845] lg:text-sm xl:text-base'>
                                   Read more 
                         </p>
                         <GoArrowRight className='text-xs ml-2 text-[#571845] lg:text-sm lg:ml-3 xl:text-lg' />
                    </div>
                </div>

            </div>

        </div>
    </div>
  )
}

export default BlogIntro
