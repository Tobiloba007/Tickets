import React from 'react'
import image1 from '../../assets/image8.jpg'
import image2 from '../../assets/image11.jpg'
import image3 from '../../assets/image12.jpg'

const GeneralEvent = () => {
  const eventCategories = [
    {
        id: 1,
        image: image1,
    },
    {
        id: 2,
        image: image2,
    },
    {
        id: 3,
        image: image3,
    },
    {
        id: 4,
        image: image1,
    },
    {
        id: 5,
        image: image2,
    },
    {
        id: 6,
        image: image3,
    },
    {
        id: 7,
        image: image1,
    },
    {
        id: 8,
        image: image2,
    },
    {
        id: 9,
        image: image3,
    },
    {
        id: 10,
        image: image1,
    },
    {
        id: 11,
        image: image2,
    },
    {
        id: 12,
        image: image3,
    }
]

  return (
    <div className='flex flex-col items-start justify-start mt-20 md:mt-24 xl:mt-32'>
        <div className='w-full px-5 md:px-8 lg:px-10 xl:px-16'>
         <p className='text-2xl font-semibold text-start text-[#571845] md:text-[25px] leading-[45px] lg:text-[30px] 
                lg:leading-[50px] xl:text-[37px] xl:leading-[60px]'>
                  Popular events 
          </p>
        </div>

          <div className='flex flex-row flex-wrap items-center justify-center w-full px-5 md:px-8 md:justify-between lg:px-10 xl:px-16 xl:mt-8'>
          {eventCategories.map((item) => {
                return(
            <div key={item.id} className='relative w-[300px] h-[380px] mt-7 md:w-[210px] md:h-[280px] md:mr-0 md:mt-10 lg:w-[300px] lg:h-[370px] lg:mb-6 xl:h-[525px] xl:w-[32.5%]'>
                <img className='h-full w-full rounded-[14px] object-cover'
                src={item.image} alt="trending_events" />

                 <div className='absolute top-0 flex flex-col items-center justify-end pb-11 bg-gradient-to-b from-transparent to-[#000000] h-full w-full rounded-[14px] opacity-85'></div>
                  <div className='absolute bottom-0 flex flex-col items-center justify-end w-full pb-10'>
                    <p className='text-xs text-center text-white font-medium opacity-100 lg:text-sm xl:text-lg'>
                        Sat Dec 23, 2023
                    </p>
                    <p className='text-base text-center text-white font-semibold w-[50%] lg:text-xl xl:text-2xl'>
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

export default GeneralEvent
