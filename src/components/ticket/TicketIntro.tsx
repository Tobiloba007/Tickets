import React from 'react'
import Navbar from '../general/Navbar'
import { IoCalendarOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import bg from '../../assets/image13.jpg'



const TicketIntro = () => {
  return (
    <div className='flex flex-col items-center justify-start w-full'>
        <Navbar />

        <div className='flex flex-col items-center justify-start w-full px-5 mt-5 md:px-8 lg:px-10 xl:px-16'>
            <div className='relative w-full h-[300px] flex flex-col items-center lg:mt-2 md:h-[350px] lg:h-[450px] xl:mt-5 xl:h-[600px]'
            style={{backgroundImage: `url(${bg})`, backgroundRepeat:'no-repeat', backgroundSize: 'cover'}}>
                <div className='flex flex-col items-center justify-center h-full w-full bg-[#000000] opacity-30'></div>
                <div className='absolute top-[45%] flex flex-col items-center justify-center w-full z-50 xl:top-[50%]'>
                    <button className='text-center text-xs h-6 rounded-md text-[#2F2623] bg-[#FFDE9C] px-4 lg:h-8 lg:px-6 lg:font-medium 
                                       xl:rounded-lg xl:h-9 xl:px-8 xl:text-base'>
                        in 3 days
                    </button>
                    <p className='text-2xl font-medium text-white mt-3 w-[60%] text-center md:text-3xl lg:text-[35px] lg:mt-6 xl:text-[50px] xl:mt-8'>
                          Flytime Fest, Asake
                    </p>
                </div>

            </div>

       </div>

    </div>
  )
}

export default TicketIntro
