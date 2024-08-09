import React, { useEffect, useState } from 'react'
import { IoCalendarOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import bg from '../../assets/image13.jpg'
import Navbar from '../general/Navbar';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { introEvent } from '../../features/EventActions';



const DiscoverIntro = () => {
    const [intro, setIntro] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(introEvent(setIntro, setLoading, setError))
  }, [dispatch])
  
    const navigate = useNavigate();
  
    const handleTicket = () => {
      navigate('/ticketPage', {state: intro});
    }

    const baseUrl = process.env.REACT_APP_BASE_URL;


  return (
    <div className='flex flex-col items-center justify-start w-full'>
        <Navbar button1='Login' button2='Sign Up' link1='/login' link2='/signup1' />

        <div className='flex flex-col items-center justify-start w-full px-5 md:px-8 lg:px-10 xl:px-16'>
            <div className='w-full mt-7 md:mt-10 xl:mt-16'>
                <p className='text-2xl font-semibold text-start text-[#571845] md:text-[28px] leading-[45px] lg:text-[32px] 
                lg:leading-[50px] xl:text-[40px] xl:leading-[60px]'>
                    Discover Events 
                </p>
            </div>

            {loading ?
                <div className='absolute top-0 flex items-center justify-center h-screen w-screen bg-[#cccccc] opacity-45 z-50'>
                      <div className="absolute w-7 h-7 border-t-4 border-white border-solid rounded-full z-100 animate-spin xl:h-9 xl:w-9"></div>
                </div>
                :
            <div className='relative w-full h-[400px] flex flex-col items-center lg:mt-2 lg:h-[500px] xl:h-[650px] xl:mt-5'
            style={{backgroundImage: `url(${baseUrl + intro.images})`, backgroundRepeat:'no-repeat', backgroundSize: 'cover'}}>
                <div className='flex flex-col items-center justify-center h-full w-full bg-[#000000] opacity-30'></div>
                <div className='absolute top-[40%] flex flex-col items-center justify-center w-full z-50'>
                    <button onClick={handleTicket}
                    className='text-center text-xs h-6 rounded-md text-[#2F2623] bg-[#FFDE9C] px-4 xl:h-8 xl:px-6 xl:rounded-lg xl:text-base'>
                          {intro?.time_and_date?.slice(0, 10)}
                    </button>
                    <p className='text-2xl font-medium text-white mt-3 w-[70%] text-center lg:text-3xl xl:text-[40px] xl:mt-6'>
                            {intro?.event_name}
                    </p>

                    <button onClick={()=>handleTicket(intro)}
                    className='text-center text-sm font-semibold h-8 rounded-md text-[#331F2D] bg-[#ffffff] px-6 mt-8 xl:mt-10 xl:h-10 xl:px-10 xl:text-base'>
                         Buy ticket 
                    </button>
                </div>

                <div className='absolute top-[93%] flex items-center justify-between w-[95%] bg-[#FFFFFF] py-2 px-3 rounded-lg shadow-lg 
                border-[1px] border-[#eeeeee] md:h-[70px] md:px-5 lg:w-[90%] xl:h-[90px] xl:top-[95%] xl:rounded-xl xl:px-7'>
                    <div className='flex items-center justify-start w-[40%] md:w-[50%] xl:w-[55%]'>
                        <p className='text-[#331F2D] text-[10px] font-medium md:text-xs lg:text-sm xl:text-base'>
                              {intro?.event_name}
                        </p>
                    </div>

                    <div className='flex flex-row flex-wrap items-center justify-between w-full flex-1 md:w-[50%] xl:w-[45%]'>
                        <div className='flex items-center justify-start'>
                            <div className='h-10 w-[0.3px] bg-[#571845] mr-2 md:mr-6'></div>
                            <IoCalendarOutline className='text-[#331F2D] text-xs md:text-sm lg:text-base xl:text-lg' />
                            <p className='text-[#331F2D] text-[9px] font-medium ml-2 md:text-xs lg:text-sm xl:text-base'>
                                 {intro?.time_and_date?.slice(0, 10)}
                            </p>
                        </div>

                        <div className='flex items-center justify-center h-6 px-3 rounded-md bg-[#571845] ml-2 md:h-7 md:px-5 lg:h-8 xl:h-9 xl:px-7'>
                             <CiSearch className='text-white text-xs md:text-sm lg:text-base xl:text-lg' />
                             <p className='text-[#FFFFFF] text-[10px] font-medium pl-2 lg:text-smn xl:text-base xl:pl-3'>
                                 Search
                            </p>
                        </div>

                    </div>

                </div>

            </div>
            }

       </div>

    </div>
  )
}

export default DiscoverIntro
