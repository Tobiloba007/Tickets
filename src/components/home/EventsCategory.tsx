import React, { useState } from 'react';
import carousel1 from '../../assets/carousel1.jpg'

const EventsCategory: React.FC = () => {
    const [tab, setTab] = useState<string>('concert');

    const handleTab = (item: string) => {
        setTab(item)
    }

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
    <div className='flex-col justify-center items-center w-full px-6 py-10 bg-[#ffffff] md:px-8 md:py-14 lg:py-12 lg:px-10 xl:px-16'>
        <div className='flex flex-row items-center justify-center w-full'>
           <p className='text-[28px] font-semibold text-[#571845] text-center w-[80%] leading-9 md:text-[32px] md:w-[50%] md:leading-10 lg:text-[37px] 
           lg:leading-[45px] lg:w-[43%] xl:text-[45px] xl:leading-[55px]'>
                Breathtaking events all in one  platform  
           </p>
        </div>

        <div className='flex flex-row flex-wrap items-center justify-center w-full mt-10 md:mt-12'>
            <div onClick={()=>handleTab('concert')}
            className={`flex items-center justify-center px-10 h-[35px] rounded-[24px] mr-4 mb-3 xl:h-[36px] xl:px-12 xl:mr-10 ${tab === 'concert' ? 'bg-[#571845]' : 'bg-[#ffffff]'}`}>
                <p className={`text-center text-[14px] font-semibold xl:text-[15px] ${tab === 'concert' ? 'text-[#ffffff]' : 'text-[#331F2D]'}`}>
                     Concert
                </p>
            </div>

            <div onClick={()=>handleTab('business')}
            className={`flex items-center justify-center px-10 h-[35px] rounded-[24px] mr-4 mb-3 xl:h-[36px] xl:px-12 xl:mr-10 ${tab === 'business' ? 'bg-[#571845]' : 'bg-[#ffffff]'}`}>
                <p className={`text-center text-[14px] font-semibold  xl:text-[15px] ${tab === 'business' ? 'text-[#ffffff]' : 'text-[#331F2D]'}`}>
                     Business
                </p>
            </div>

            <div onClick={()=>handleTab('festival')}
            className={`flex items-center justify-center px-10 h-[35px] rounded-[24px] mr-4 mb-3 xl:h-[36px] xl:px-12 xl:mr-10 ${tab === 'festival' ? 'bg-[#571845]' : 'bg-[#ffffff]'}`}>
                <p className={`text-center text-[14px] font-semibold xl:text-[15px] ${tab === 'festival' ? 'text-[#ffffff]' : 'text-[#331F2D]'}`}>
                     Festival
                </p>
            </div>

            <div onClick={()=>handleTab('conference')}
            className={`flex items-center justify-center px-10 h-[35px] rounded-[24px] mr-4 mb-3 xl:h-[36px] xl:px-12 xl:mr-10 ${tab === 'conference' ? 'bg-[#571845]' : 'bg-[#ffffff]'}`}>
                <p className={`text-center text-[14px] font-semibold xl:text-[15px] ${tab === 'conference' ? 'text-[#ffffff]' : 'text-[#331F2D]'}`}>
                     Conference 
                </p>
            </div>
        </div>

        <div className='w-full flex overflow-x-auto'>
        <div className='flex flex-row items-center w-full overflow-x-auto mt-7 md:mt-12 lg:mt-16 xl:mt-20'>
            {eventCategories.map((item) => {
                return(
            <div key={item.id} className='w-[400px] h-[380px] mr-3 xl:h-[430px] xl:w-[303px]'>
                <img className='h-full w-full rounded-[14px] object-cover'
                src={item.image} alt="category concert" />

                {/* <div className='absolute top-0 flex flex-col items-center justify-end pb-11 bg-gradient-to-b from-transparent to-[#000000] h-full w-full rounded-[14px] opacity-95'>
                    <p className='text-[12px] font-bold text-[#ffffff] text-center'>
                       Thurs Dec 21st, 2023
                    </p>
                    <p className='text-[18px] font-bold text-[#ffffff] text-center leading-6 mt-2'>
                        Soundland <br /> Concert 
                    </p>
                </div> */}
            </div>
                )
            })}

        </div>
        </div>

    </div>
  );
};


export default EventsCategory