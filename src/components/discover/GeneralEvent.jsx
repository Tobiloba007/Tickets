import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { allEvents } from '../../features/EventActions'
import { useNavigate } from 'react-router-dom'

const GeneralEvent = () => {

const [all, setAll] = useState([]);
const [error, setError] = useState(false);
const [loading, setLoading] = useState(false);

const dispatch = useDispatch();

const navigate = useNavigate();


useEffect(() => {
  dispatch(allEvents(setAll, setLoading, setError))
}, [dispatch])

const handleTicket = (item) => {
    navigate('/ticketPage', {state: item});
    // console.log(item)
}

  return (
    <div className='flex flex-col items-start justify-start mt-20 md:mt-24 xl:mt-32'>
        <div className='w-full px-5 md:px-8 lg:px-10 xl:px-16'>
         <p className='text-2xl font-semibold text-start text-[#571845] md:text-[25px] leading-[45px] lg:text-[30px] 
                lg:leading-[50px] xl:text-[37px] xl:leading-[60px]'>
                  All events 
          </p>
        </div>

          <div className='flex flex-row flex-wrap items-center justify-center w-full px-5 md:px-8 md:justify-between lg:px-10 xl:px-16 xl:mt-8'>
          {all.map((item) => {
                return(
            <div key={item.id} onClick={()=>handleTicket(item)}
            className='relative w-[300px] h-[380px] mt-7 md:w-[210px] md:h-[280px] md:mr-0 md:mt-10 lg:w-[300px] lg:h-[370px] lg:mb-6 xl:h-[525px] xl:w-[32.5%]'>
                <img className='h-full w-full rounded-[14px] object-cover'
                src={item.images[0]} alt="trending_events" />

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
  )
}

export default GeneralEvent
