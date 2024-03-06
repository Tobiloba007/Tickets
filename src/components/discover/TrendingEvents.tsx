import React from 'react'
import image1 from '../../assets/image8.jpg'
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';


const TrendingEvents = () => {
  return (
    <div className='flex flex-col items-start justify-start mt-24 md:mt-28 md:px-8 lg:px-10 xl:px-16 xl:mt-36'>
        <div className='w-full px-5 lg:px-10 xl:px-16'>
         <p className='text-2xl font-semibold text-start text-[#571845] md:text-[25px] leading-[45px] lg:text-[30px] 
                lg:leading-[50px] xl:text-[37px] xl:leading-[60px]'>
                  Trending events for you 
          </p>
        </div>

          <div className='flex flex-row items-center justify-start w-full px-5 mt-5 lg:px-10 xl:px-16 xl:mt-8'>
            <PerfectScrollbar style={{ overflowX: 'scroll', display: 'flex', width: '100%' }}>
               <div className='relative w-[290px] h-[24rem] mr-2 xl:w-[350px] xl:h-[27rem]'>
                  <img className='w-full h-full rounded-xl mr-2 z-30'
                  src={image1} alt="trending_events" />
                  <div className='absolute w-full h-full top-0 rounded-xl bg-black opacity-40'></div>
                  <div className='absolute bottom-0 flex flex-col items-center justify-end w-full pb-10'>
                    <p className='text-xs text-center text-white font-medium opacity-100'>
                        Sat Dec 23, 2023
                    </p>
                    <p className='text-base text-center text-white font-semibold w-[60%]'>
                        Flytime Fest, Kizz Daniel 
                    </p>
                  </div>
               </div>

               <div className='relative w-[290px] h-[24rem] mr-2 xl:w-[350px]'>
                  <img className='w-full h-full rounded-xl mr-2 z-30'
                  src={image1} alt="trending_events" />
                  <div className='absolute w-full h-full top-0 rounded-xl bg-black opacity-40'></div>
                  <div className='absolute bottom-0 flex flex-col items-center justify-end w-full pb-10'>
                    <p className='text-xs text-center text-white font-medium opacity-100'>
                        Sat Dec 23, 2023
                    </p>
                    <p className='text-base text-center text-white font-semibold w-[60%]'>
                        Flytime Fest, Kizz Daniel 
                    </p>
                  </div>

               </div>
            </PerfectScrollbar>
               
            
          </div>

    
    </div>
  )
}

export default TrendingEvents
