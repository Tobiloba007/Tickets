import React, { useState } from 'react';
import carousel1 from '../../assets/carousel1.jpg'

const UpcomingEvents: React.FC = () => {
    const eventCategories = [
        {
            id: 1,
            image: carousel1,
        },
        {
            id: 2,
            image: carousel1,
        },
        {
            id: 3,
            image: carousel1,
        },
        {
            id: 4,
            image: carousel1,
        }
    ]

  return (
    <div className='flex-col items-center justify-center w-full py-10 bg-[#ffffff] md:py-10 lg:py-10 xl:py-14 xl:pt-20'>
        <div className='flex flex-row items-center justify-start w-full px-6 md:px-8 lg:px-10 xl:px-16'>
           <p className='text-[28px] font-semibold text-[#571845] leading-9 md:text-[32px] md:leading-10 lg:text-[37px] 
           lg:leading-[45px] xl:text-[45px] xl:leading-[55px]'>
                Upcoming events  
           </p>
        </div>

        <div className='w-full flex overflow-x-auto'>
        <div className='flex flex-row items-center justify-start w-full overflow-x-auto [&>div]:flex-shrink-0 hide-scrollbar mt-7 md:mt-12 lg:mt-16 xl:mt-20'>
            {eventCategories.map((item) => {
                return(
            <div key={item.id} className='relative w-[300px] h-[380px] mr-3 first:ml-6 last:mr-6 md:first:ml-8 md:last:mr-8 lg:first:ml-10 lg:last:mr-10 
            lg:w-[325px] lg:h-[450px] lg:mr-4 xl:first:ml-16 xl:last:mr-16 xl:h-[525px] xl:w-[375px] xl:mr-5'>
                <img className='h-full w-full rounded-[14px] object-cover'
                src={item.image} alt="category concert" />

                <div className='absolute top-0 flex flex-col items-center justify-end pb-11 bg-gradient-to-b from-transparent to-[#000000] h-full w-full rounded-[14px] opacity-95'>
                    <p className='text-[13px] font-semibold text-[#ffffff] text-center lg:text-sm xl:text-lg'>
                       Thurs Dec 21st, 2023
                    </p>
                    <p className='text-[20px] font-semibold text-[#ffffff] text-center leading-6 mt-2 lg:text-xl xl:text-3xl'>
                        Soundland <br /> Concert 
                    </p>
                </div>
            </div>
                )
            })}

        </div>
        </div>

        {/* <div className='flex flex-row items-center justify-center mt-10'>
                <div className='h-[10px] w-[10px] rounded-full bg-[#571845] mx-[3.5px] xl:mx-1 xl:w-[10px] xl:h-[10px]'></div>
                <div className='h-[10px] w-[10px] rounded-full bg-[#EEE8EC] mx-[3.5px] xl:mx-1 xl:w-[10px] xl:h-[10px]'></div>
                <div className='h-[10px] w-[10px] rounded-full bg-[#EEE8EC] mx-[3.5px] xl:mx-1 xl:w-[10px] xl:h-[10px]'></div>
        </div> */}

    </div>
  );
};


export default UpcomingEvents