import React, { useEffect, useState } from 'react'
// import image1 from '../../assets/image8.jpg'
// import image2 from '../../assets/image11.jpg'
// import image3 from '../../assets/image12.jpg'
import { useDispatch } from 'react-redux'
import { recentEvents } from '@/redux/features/EventActions'
import { useRouter } from 'next/navigation';


const PopularEvents = () => {
  const [recent, setRecent] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(recentEvents(setRecent, setLoading, setError))
  }, [dispatch])

  const router = useRouter();

  const handleTicket = (item) => {
    // navigate('/ticketPage', {state: item});
    router.push("/ticketPage")
    // console.log(item)
  }

  return (
    <div className='flex flex-col items-start justify-start mt-20 md:mt-24 xl:mt-32'>
        <div className='w-full px-6 md:px-8 lg:px-10 xl:px-16'>
         <p className='text-2xl font-semibold text-start text-[#571845] md:text-[25px] leading-[45px] lg:text-[30px] 
                lg:leading-[50px] xl:text-[37px] xl:leading-[60px]'>
                  Popular events 
          </p>
        </div>

        <div className='w-full flex overflow-x-auto'>
         <div className='flex flex-row items-center justify-start w-full overflow-x-auto [&>div]:flex-shrink-0 hide-scrollbar mt-7 md:mt-12 lg:mt-16 xl:mt-20'>
            {recent.map((item) => {
                return(
            <div key={item.id} onClick={()=>handleTicket(item)}
            className='relative w-[300px] h-[380px] mr-3 first:ml-6 last:mr-6 md:first:ml-8 md:last:mr-8 lg:first:ml-10 lg:last:mr-10 
            lg:w-[325px] lg:h-[450px] lg:mr-4 xl:first:ml-16 xl:last:mr-16 xl:h-[525px] xl:w-[375px] xl:mr-5'>
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

    
    </div>
  )
}

export default PopularEvents
