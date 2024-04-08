import React, { useState } from 'react'
import image1 from '../../../assets/image8.jpg'


export const UserRecommended: React.FC = () => {
    const [select, setSelect] = useState<boolean | string>('concert')

    const buttons = ['concert', 'Business', 'Festival', 'Conference ']

    const events = [image1, image1, image1, image1, image1, image1]

    const handleSelect = (item: string) => {
        setSelect(item)
    }

  return (
    <div className='flex flex-col items-center justify-start w-full bg-[#FAFAFA] mt-2 pb-10 lg:mt-8 xl:mt-11'>

        <div className='flex items-center justify-between w-full px-5 xl:px-8'>
            <p className='text-[#571845] font-bold text-lg md:text-xl lg:text-[18px] xl:text-[20px]'>
               Recommended Events
            </p>
            <p className='text-[#571845] font-medium text-xs lg:hidden'>
               See all
            </p>
            <p className='hidden text-[#571845] font-medium text-xs lg:flex items-center xl:text-sm'>
                All Events <span className='text-[#90788a] text-[10px] pl-2 xl:text-xs xl:pl-3'>+12</span>
            </p>
        </div>

        <div className='flex items-center justify-start w-full px-5 mt-4 overflow-x-auto [&>div]:flex-shrink-0 hide-scrollbar xl:px-8'>
            {buttons.map((item) => {
                return(
            <div key={item} onClick={()=>handleSelect(item)}
            className={`flex items-center justify-center mr-4 text-[#331F2D] text-sm h-[38px] w-[150px] rounded-3xl border-[1.5px] 
                      border-[#C6C0C4] ${select === item && 'border-none bg-[#571845] text-white'} md:h-9 md:w-0 md:px-14 xl:h-10 xl:text-base xl:px-[60px] xl:font-medium`}>
                  {item}
            </div>
                )
            })}
        </div>

        <div className='flex items-center justify-start w-full mt-7 px-5 overflow-x-auto [&>div]:flex-shrink-0 hide-scrollbar xl:px-8'>
           {events.map((item) => {
                return(
            <div key={item} className='relative w-[200px] h-[245px] mr-3 lg:w-[215px] lg:h-[290px] lg:mr-3 xl:h-[335px] xl:w-[250px]'>
                <img className='h-full w-full rounded-[14px] object-cover'
                src={item} alt="trending_events" />

                 <div className='absolute top-0 flex flex-col items-center justify-end pb-11 bg-gradient-to-b from-transparent to-[#000000] h-full w-full rounded-[14px] opacity-85'></div>
                  <div className='absolute bottom-0 flex flex-col items-center justify-end w-full pb-5 md:pb-4'>
                    <p className='text-xs text-center mb-1 text-white font-normal opacity-100 lg:text-sm xl:text-lg'>
                        Sat Dec 23, 2023
                    </p>
                    <p className='text-xl text-center text-white font-semibold w-[75%] lg:text-xl lg:w-[70%] xl:text-2xl'>
                        Flytime Fest, Kizz Daniel 
                    </p>
                  </div>

            </div>
                )
            })}
        </div>

    </div>
  )
}

