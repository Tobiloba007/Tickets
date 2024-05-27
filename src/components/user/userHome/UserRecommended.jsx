import React, { useEffect, useState } from 'react'
import image1 from '../../../assets/image8.jpg'
import { trendingEvents } from '../../../features/EventActions'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'


export const UserRecommended = ({setModal}) => {
    const [trending, setTrending] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const [select, setSelect] = useState('Concert')

    const buttons = ['Concert', 'Business', 'Festival', 'Conference']

    const events = [image1, image1, image1, image1, image1, image1]

    const handleSelect = (item) => {
        setSelect(item)
    }

    const dispatch = useDispatch();

    const navigate = useNavigate()

    useEffect(() => {
        dispatch(trendingEvents(setTrending, setLoading, setError))
        // console.log(generalEvents, 'General Events')
      }, [dispatch])

    
    const handleTicket = (item) => {
        setModal(item)
        // console.log(item, 'TICKET ITEM')
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
            <p onClick={()=>navigate('/discover')}
            className='hidden text-[#571845] font-medium text-xs lg:flex items-center xl:text-sm'>
                View All Events 
                {/*<span className='text-[#90788a] text-[10px] pl-2 xl:text-xs xl:pl-3'>+12</span>*/}
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

        {loading
         ?<div className='flex items-center justify-start w-full mt-7 px-5 overflow-x-auto [&>div]:flex-shrink-0 hide-scrollbar xl:px-8'>
              <div className='relative flex items-center justify-center w-[200px] h-[245px] bg-[#c8c8c8] rounded-[14px] mr-3 lg:w-[215px] lg:h-[290px] lg:mr-3 xl:h-[335px] xl:w-[250px]'>
                    <div className="relative flex items-center justify-center w-7 h-7 border-4 border-gray-500 border-solid rounded-full xl:h-9 xl:w-9">
                      <div className="absolute w-7 h-7 border-t-4 border-white border-solid rounded-full animate-spin xl:h-9 xl:w-9"></div>
                    </div>
              </div>

              <div className='relative flex items-center justify-center w-[200px] h-[245px] bg-[#c8c8c8] rounded-[14px] mr-3 lg:w-[215px] lg:h-[290px] lg:mr-3 xl:h-[335px] xl:w-[250px]'>
                    <div className="relative flex items-center justify-center w-7 h-7 border-4 border-gray-500 border-solid rounded-full xl:h-9 xl:w-9">
                      <div className="absolute w-7 h-7 border-t-4 border-white border-solid rounded-full animate-spin xl:h-9 xl:w-9"></div>
                    </div>
              </div>

              <div className='relative flex items-center justify-center w-[200px] h-[245px] bg-[#c8c8c8] rounded-[14px] mr-3 lg:w-[215px] lg:h-[290px] lg:mr-3 xl:h-[335px] xl:w-[250px]'>
                    <div className="relative flex items-center justify-center w-7 h-7 border-4 border-gray-500 border-solid rounded-full xl:h-9 xl:w-9">
                      <div className="absolute w-7 h-7 border-t-4 border-white border-solid rounded-full animate-spin xl:h-9 xl:w-9"></div>
                    </div>
              </div>

              <div className='relative flex items-center justify-center w-[200px] h-[245px] bg-[#c8c8c8] rounded-[14px] mr-3 lg:w-[215px] lg:h-[290px] lg:mr-3 xl:h-[335px] xl:w-[250px]'>
                    <div className="relative flex items-center justify-center w-7 h-7 border-4 border-gray-500 border-solid rounded-full xl:h-9 xl:w-9">
                      <div className="absolute w-7 h-7 border-t-4 border-white border-solid rounded-full animate-spin xl:h-9 xl:w-9"></div>
                    </div>
              </div>

         </div>
        :
        <div className='w-full'>
        {select === 'Concert' &&
        <div className='flex items-center justify-start w-full mt-7 px-5 overflow-x-auto [&>div]:flex-shrink-0 hide-scrollbar xl:px-8'>
           {trending.map((item) => {
                return(
            <div key={item} onClick={()=>handleTicket(item)}
            className='relative w-[200px] h-[245px] mr-3 lg:w-[215px] lg:h-[290px] lg:mr-3 xl:h-[335px] xl:w-[250px]'>
                <img className='h-full w-full rounded-[14px] object-cover'
                src={item} alt="trending_events" />

                 <div className='absolute top-0 flex flex-col items-center justify-end pb-11 bg-gradient-to-b from-transparent to-[#000000] h-full w-full rounded-[14px] opacity-85'></div>
                  <div className='absolute bottom-0 flex flex-col items-center justify-end w-full pb-5 md:pb-4'>
                    <p className='text-xs text-center mb-1 text-white font-normal opacity-100 lg:text-sm xl:text-lg'>
                        {item.time_and_date.slice(0, 10)}
                    </p>
                    <p className='text-xl text-center text-white font-semibold w-[75%] lg:text-xl lg:w-[70%] xl:text-2xl'>
                        {item.event_name}
                    </p>
                  </div>

            </div>
                )
            })}
        </div>
        }
        </div>
        }

        {select === 'Business' &&
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
        }

        {select === 'Festival' &&
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
        }

        {select === 'Conference' &&
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
        }

    </div>
  )
}

