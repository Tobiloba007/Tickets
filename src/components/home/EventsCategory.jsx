import React, { useEffect, useState } from 'react';
import carousel1 from '../../assets/carousel1.jpg'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { upcomingEvents } from '../../features/EventActions';

const EventsCategory = () => {
    const [upcoming, setUpcoming] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [tab, setTab] = useState('Concert');

    const handleTab = (item) => {
        setTab(item)
    }

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(upcomingEvents(setUpcoming, setLoading, setError))
      // console.log(generalEvents, 'General Events')
    }, [dispatch])


    const handleTicket = (item) => {
        navigate('/ticketPage', {state: item});
        // console.log(item)
    }


  return (
    <div className='flex-col justify-center items-center w-full py-10 bg-[#ffffff] md:py-14 lg:py-12'>
        <div className='flex flex-row items-center justify-center w-full px-6 md:px-8 lg:px-10 xl:px-16'>
           <p className='text-[28px] font-semibold text-[#571845] text-center w-[80%] leading-9 md:text-[32px] md:w-[50%] md:leading-10 lg:text-[37px] 
           lg:leading-[45px] lg:w-[43%] xl:text-[45px] xl:leading-[55px]'>
                Breathtaking events all in one  platform  
           </p>
        </div>

        <div className='flex flex-row flex-wrap items-center justify-center w-full mt-10 px-6 md:mt-12 md:px-8 lg:px-10 xl:px-16'>
            <div onClick={()=>handleTab('Concert')}
            className={`flex items-center justify-center px-10 h-[35px] rounded-[24px] mr-4 mb-3 xl:h-[36px] xl:px-12 xl:mr-10 ${tab === 'Concert' ? 'bg-[#571845]' : 'bg-[#ffffff]'}`}>
                <p className={`text-center text-[14px] font-semibold xl:text-[15px] ${tab === 'Concert' ? 'text-[#ffffff]' : 'text-[#331F2D]'}`}>
                     Concert
                </p>
            </div>

            <div onClick={()=>handleTab('Business')}
            className={`flex items-center justify-center px-10 h-[35px] rounded-[24px] mr-4 mb-3 xl:h-[36px] xl:px-12 xl:mr-10 ${tab === 'Business' ? 'bg-[#571845]' : 'bg-[#ffffff]'}`}>
                <p className={`text-center text-[14px] font-semibold  xl:text-[15px] ${tab === 'Business' ? 'text-[#ffffff]' : 'text-[#331F2D]'}`}>
                     Business
                </p>
            </div>

            <div onClick={()=>handleTab('Festival')}
            className={`flex items-center justify-center px-10 h-[35px] rounded-[24px] mr-4 mb-3 xl:h-[36px] xl:px-12 xl:mr-10 ${tab === 'Festival' ? 'bg-[#571845]' : 'bg-[#ffffff]'}`}>
                <p className={`text-center text-[14px] font-semibold xl:text-[15px] ${tab === 'Festival' ? 'text-[#ffffff]' : 'text-[#331F2D]'}`}>
                     Festival
                </p>
            </div>

            <div onClick={()=>handleTab('Conference')}
            className={`flex items-center justify-center px-10 h-[35px] rounded-[24px] mr-4 mb-3 xl:h-[36px] xl:px-12 xl:mr-10 ${tab === 'Conference' ? 'bg-[#571845]' : 'bg-[#ffffff]'}`}>
                <p className={`text-center text-[14px] font-semibold xl:text-[15px] ${tab === 'Conference' ? 'text-[#ffffff]' : 'text-[#331F2D]'}`}>
                     Conference 
                </p>
            </div>
        </div>


           {/* CONCERT */}
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
        {
         tab === 'Concert' &&
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
       }
       </div>
       }


           {/* BUSINESS */}
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
        {
         tab === 'Business' &&
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
       }
       </div>
       }



           {/* FESTIVAL */}
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
        {
         tab === 'Festival' &&
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
       }
       </div>
       }



           {/* CONFERENCE */}
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
        {
         tab === 'Conference' &&
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
       }
       </div>
       }

    </div>
  );
};


export default EventsCategory