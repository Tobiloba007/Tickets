import { upcomingEvents } from '@/redux/features/EventActions';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
// import carousel1 from '../../assets/carousel1.jpg'
import { useDispatch } from 'react-redux';



const UpcomingEvents = () => {
      const [upcoming, setUpcoming] = useState([]);
      const [error, setError] = useState(false);
      const [loading, setLoading] = useState(false);

      const dispatch = useDispatch();

      const router = useRouter();


      useEffect(() => {
        dispatch(upcomingEvents(setUpcoming, setLoading, setError))
        // console.log(generalEvents, 'General Events')
      }, [dispatch])

      const handleTicket = (item) => {
        // navigate('/ticketPage', {state: item});
        router.push('/ticketPage')
        // console.log(item)
    }

  return (
    <div className='flex-col items-center justify-center w-full py-10 bg-[#ffffff] md:py-10 lg:py-10 xl:py-14 xl:pt-20'>
        <div className='flex flex-row items-center justify-start w-full px-6 md:px-8 lg:px-10 xl:px-16'>
           <p className='text-[28px] font-semibold text-[#571845] leading-9 md:text-[32px] md:leading-10 lg:text-[37px] 
           lg:leading-[45px] xl:text-[45px] xl:leading-[55px]'>
                Upcoming events  
           </p>
        </div>

        {loading 
            ?<div className='flex flex-row items-center justify-start w-full overflow-x-auto [&>div]:flex-shrink-0 hide-scrollbar mt-7 md:mt-12 lg:mt-16 xl:mt-20'>
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
        :<div className='w-full flex overflow-x-auto'>
        <div className='flex flex-row items-center justify-start w-full overflow-x-auto [&>div]:flex-shrink-0 hide-scrollbar mt-7 md:mt-12 lg:mt-16 xl:mt-20'>
            {upcoming.map((item) => {
                return(
            <div key={item.id} onClick={()=>handleTicket(item)}
            className='relative w-[300px] h-[380px] mr-3 first:ml-6 last:mr-6 md:first:ml-8 md:last:mr-8 lg:first:ml-10 lg:last:mr-10 
            lg:w-[325px] lg:h-[450px] lg:mr-4 xl:first:ml-16 xl:last:mr-16 xl:h-[525px] xl:w-[375px] xl:mr-5'>
                <img className='h-full w-full rounded-[14px] object-cover'
                src={"https://images.unsplash.com/photo-1590721791974-d6c8ca43f6bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvbmNlcnR8ZW58MHx8MHx8fDA%3D"} alt="category concert" />

                <div className='absolute top-0 flex flex-col items-center justify-end pb-11 bg-gradient-to-b from-transparent to-[#000000] h-full w-full rounded-[14px] opacity-95'>
                    <p className='text-[13px] font-semibold text-[#ffffff] text-center lg:text-sm xl:text-lg'>
                        {item.time_and_date.slice(0, 10)}
                    </p>
                    <p className='text-[20px] font-semibold text-[#ffffff] text-center leading-6 mt-2 lg:text-xl xl:text-3xl'>
                        {item.event_name}
                    </p>
                </div>
            </div>
                )
            })}

        </div>
        </div>
        }

        {/* <div className='flex flex-row items-center justify-center mt-10'>
                <div className='h-[10px] w-[10px] rounded-full bg-[#571845] mx-[3.5px] xl:mx-1 xl:w-[10px] xl:h-[10px]'></div>
                <div className='h-[10px] w-[10px] rounded-full bg-[#EEE8EC] mx-[3.5px] xl:mx-1 xl:w-[10px] xl:h-[10px]'></div>
                <div className='h-[10px] w-[10px] rounded-full bg-[#EEE8EC] mx-[3.5px] xl:mx-1 xl:w-[10px] xl:h-[10px]'></div>
        </div> */}

    </div>
  );
};


export default UpcomingEvents