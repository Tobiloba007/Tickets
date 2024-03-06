import React, { useState } from 'react';
import carousel1 from '../../assets/carousel1.jpg'

const UpcomingEvents: React.FC = () => {
  return (
    <div className='flex-col items-center justify-center w-full px-6 py-10 bg-[#ffffff] md:px-8 md:py-10 lg:py-10 lg:px-10 xl:px-16 xl:py-14'>
        <div className='flex flex-row items-center justify-start w-full'>
           <p className='text-[28px] font-semibold text-[#571845] leading-9 md:text-[32px] md:leading-10 lg:text-[37px] 
           lg:leading-[45px] xl:text-[45px] xl:leading-[55px]'>
                Upcoming events  
           </p>
        </div>

        <div className='flex flex-row items-center justify-start w-full overflow-x-auto mt-8 md:mt-10 lg:mt-10 xl:mt-10'>
            <div className='relative w-[270px] h-[380px] mr-3 xl:h-[430px] xl:w-[303px]'>
                <img className='h-full w-full rounded-[14px] object-cover'
                src={carousel1} alt="category concert" />

                <div className='absolute top-0 flex flex-col items-center justify-end pb-11 bg-gradient-to-b from-transparent to-[#000000] h-full w-full rounded-[14px] opacity-95'>
                    <p className='text-[12px] font-bold text-[#ffffff] text-center'>
                       Thurs Dec 21st, 2023
                    </p>
                    <p className='text-[18px] font-bold text-[#ffffff] text-center leading-6 mt-2'>
                        Soundland <br /> Concert 
                    </p>
                </div>
            </div>

        </div>

        <div className='flex flex-row items-center justify-center mt-10'>
                <div className='h-[10px] w-[10px] rounded-full bg-[#571845] mx-[3.5px] xl:mx-1 xl:w-[10px] xl:h-[10px]'></div>
                <div className='h-[10px] w-[10px] rounded-full bg-[#EEE8EC] mx-[3.5px] xl:mx-1 xl:w-[10px] xl:h-[10px]'></div>
                <div className='h-[10px] w-[10px] rounded-full bg-[#EEE8EC] mx-[3.5px] xl:mx-1 xl:w-[10px] xl:h-[10px]'></div>
        </div>

    </div>
  );
};


export default UpcomingEvents