import React from 'react'

import Navbar from '../general/Navbar'

const AboutIntro = () => {
  return (
    <div className='flex flex-col items-center justify-start w-full'>
      <Navbar button1='Login' button2='Sign Up' link1='/login' link2='/signup1' />

        <div className='flex flex-col items-center justify-start w-full px-5 lg:px-10 xl:px-16'>
            <div className='relative flex items-center justify-center w-full h-[30rem] md:h-full'>
                <img className='w-full h-full object-cover'
                src={"/img/image2.jpg"} alt="intro_image" />
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
