import React, { useEffect, useState } from 'react'
import image1 from '../../assets/image8.jpg'
import image2 from '../../assets/image11.jpg'
import image3 from '../../assets/image12.jpg'
import { useDispatch } from 'react-redux'
import { trendingEvents } from '../../features/EventActions'
import { useNavigate } from 'react-router-dom'


const TrendingEvents = () => {
  const [trending, setTrending] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(trendingEvents(setTrending, setLoading, setError))
    // console.log(generalEvents, 'General Events')
  }, [dispatch])

  const navigate = useNavigate();

  const handleTicket = (item) => {
    navigate('/ticketPage', {state: item});
    // console.log(item)
  }

  const baseUrl = process.env.REACT_APP_BASE_URL;


  return (

    <div className='flex flex-col items-start justify-start mt-24 md:mt-28 xl:mt-36'>
        <div className='w-full px-6 md:px-8 lg:px-10 xl:px-16'>
         <p className='text-2xl font-semibold text-start text-[#571845] md:text-[25px] leading-[45px] lg:text-[30px] 
                lg:leading-[50px] xl:text-[37px] xl:leading-[60px]'>
                  Trending events for you 
          </p>
        </div>


        {loading ?
        <div className='flex flex-row items-center justify-start w-full overflow-x-auto [&>div]:flex-shrink-0 hide-scrollbar mt-7 md:mt-12 lg:mt-16 xl:mt-20'>
                <div className='relative flex items-center justify-center bg-[#c8c8c8] rounded-[14px] w-[300px] h-[380px] mr-3 first:ml-6 last:mr-6 md:first:ml-8 md:last:mr-8 lg:first:ml-10 lg:last:mr-10 
                                lg:w-[325px] lg:h-[450px] lg:mr-4 xl:first:ml-16 xl:last:mr-16 xl:h-[525px] xl:w-[375px] xl:mr-5'>
                   <div className="absolute w-7 h-7 border-t-4 border-white border-solid rounded-full animate-spin xl:h-9 xl:w-9"></div>
                </div>
                <div className='relative flex items-center justify-center bg-[#c8c8c8] rounded-[14px] w-[300px] h-[380px] mr-3 first:ml-6 last:mr-6 md:first:ml-8 md:last:mr-8 lg:first:ml-10 lg:last:mr-10 
                                lg:w-[325px] lg:h-[450px] lg:mr-4 xl:first:ml-16 xl:last:mr-16 xl:h-[525px] xl:w-[375px] xl:mr-5'>
                   <div className="absolute w-7 h-7 border-t-4 border-white border-solid rounded-full animate-spin xl:h-9 xl:w-9"></div>
                </div>
                <div className='relative flex items-center justify-center bg-[#c8c8c8] rounded-[14px] w-[300px] h-[380px] mr-3 first:ml-6 last:mr-6 md:first:ml-8 md:last:mr-8 lg:first:ml-10 lg:last:mr-10 
                                lg:w-[325px] lg:h-[450px] lg:mr-4 xl:first:ml-16 xl:last:mr-16 xl:h-[525px] xl:w-[375px] xl:mr-5'>
                   <div className="absolute w-7 h-7 border-t-4 border-white border-solid rounded-full animate-spin xl:h-9 xl:w-9"></div>
                </div>
                <div className='relative flex items-center justify-center bg-[#c8c8c8] rounded-[14px] w-[300px] h-[380px] mr-3 first:ml-6 last:mr-6 md:first:ml-8 md:last:mr-8 lg:first:ml-10 lg:last:mr-10 
                                lg:w-[325px] lg:h-[450px] lg:mr-4 xl:first:ml-16 xl:last:mr-16 xl:h-[525px] xl:w-[375px] xl:mr-5'>
                   <div className="absolute w-7 h-7 border-t-4 border-white border-solid rounded-full animate-spin xl:h-9 xl:w-9"></div>
                </div>
        </div>
        :
         <div className='w-full flex overflow-x-auto'>
         <div className='flex flex-row items-center justify-start w-full overflow-x-auto [&>div]:flex-shrink-0 hide-scrollbar mt-7 md:mt-12 lg:mt-16 xl:mt-20'>
            {trending.map((item) => {
                return(
            <div key={item.id} onClick={()=>handleTicket(item)}
            className='relative w-[300px] h-[380px] mr-3 first:ml-6 last:mr-6 md:first:ml-8 md:last:mr-8 lg:first:ml-10 lg:last:mr-10 
            lg:w-[325px] lg:h-[450px] lg:mr-4 xl:first:ml-16 xl:last:mr-16 xl:h-[525px] xl:w-[375px] xl:mr-5'>
                <img className='h-full w-full rounded-[14px] object-cover'
                src={baseUrl + item.images[0]} alt="trending_events" />

                 <div className='absolute top-0 flex flex-col items-center justify-end pb-11 bg-gradient-to-b from-transparent to-[#000000] h-full w-full rounded-[14px] opacity-85'></div>
                  <div className='absolute bottom-0 flex flex-col items-center justify-end w-full pb-10'>
                    <p className='text-xs text-center text-white font-medium opacity-100 lg:text-sm xl:text-lg'>
                        {item.time_and_date.slice(0, 10)}
                    </p>
                    <p className='text-base text-center text-white font-semibold w-[50%] lg:text-xl xl:text-2xl'>
                        {item.event_name}
                    </p>
                  </div>

            </div>
                )
            })}

         </div>
         </div>
         }


    
    </div>
  )
}

export default TrendingEvents
