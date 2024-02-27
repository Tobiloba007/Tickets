import React from 'react'
import Navbar from '../general/Navbar'
import image1 from '../../assets/image2.jpg'

const AboutIntro = () => {
  return (
    <div className='flex flex-col items-center justify-start w-full'>
        <Navbar />
        <div className='flex flex-col items-center justify-start w-full px-5 lg:px-10 xl:px-16'>
            <div className='relative flex items-center justify-center w-full h-[30rem] md:h-full'>
                <img className='w-full h-full object-cover'
                src={image1} alt="intro_image" />
                <div className='absolute h-full w-full bg-black opacity-30'></div>
                <div className='absolute bottom-16 flex items-center justify-start w-full px-5 md:px-8 lg:px-14 xl:px-20'>
                   <p className='text-start text-lg font-medium text-white w-[90%] md:text-2xl lg:text-3xl xl:text-[40px] xl:leading-[55px]'>
                         We're on a mission to ensure that event creators deliver the best event experiences.
                   </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutIntro
