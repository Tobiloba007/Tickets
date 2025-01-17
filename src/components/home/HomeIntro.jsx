import bg from '../../assets/introBg.svg'
import carousel1 from '../../assets/carousel1.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { recentEvents } from '../../features/EventActions';



const HomeIntro = () => {
    const navigate = useNavigate();

    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)

    const user = useSelector((state) => state.auth.user)

    const [recent, setRecent] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(recentEvents(setRecent, setLoading, setError))
  }, [dispatch])


  const handleTicket = (item) => {
    navigate('/ticketPage', {state: item});
    // console.log(item)
  }

  const baseUrl = process.env.REACT_APP_BASE_URL;


      
  return (
    <div className='flex flex-col items-center justify-start w-full h-screen bg-cover bg-center px-6 rounded-b-3xl md:rounded-b-[0px] lg:rounded-b-[40px]' 
    style={{backgroundImage: `url(${bg})`}}
    >
        <div className='flex flex-col w-full pt-36 md:items-center xl:pt-44'>
            <p className='text-[28px] font-bold text-white text-center leading-10 md:text-[32px] lg:text-[37px] lg:leading-[48px] xl:text-[45px] xl:leading-[60px]'>
                Tickets in a tap, events <br /> that captivate!
            </p>
            <p className='text-[17px] font-medium text-white text-center pt-5 px-8 md:text-[19px] md:px-28 lg:w-[80%] xl:w-[60%]'>
                Everything you need to create events, sell tickets and receive payments
            </p>
        </div>

        <div className='flex flex-col justify-center items-center w-full mt-14 px-6 md:flex-row mb-14 lg:mb-16 xl:mb-24'>
            <button onClick={()=>navigate(isLoggedIn === true && user.user_type === 'user' ?  '/login'
                                         :isLoggedIn === true && user.user_type === 'host' ?  '/hostDashboard' 
                                         : '/login')}
            className='text-center text-[17px] font-semibold text-[#571845] bg-[#EEE8EC] h-[45px] w-full rounded-[9px] md:w-[180px] xl:w-[200px]'>
                 Host an event 
            </button>
            <button onClick={()=>navigate(isLoggedIn === true && user.user_type === 'user' ?  '/userDashboard'
                                        :isLoggedIn === true && user.user_type === 'host' ?  '/login' 
                                        : '/login')}
            className='text-center text-[17px] font-semibold text-[#571845] bg-[#FFC655] h-[45px] w-full rounded-[9px] mt-4 md:w-[180px] md:ml-5 md:mt-0 xl:w-[200px]'>
                 Buy tickets 
            </button>
        </div>



        <div className='w-full md:px-2 lg:px-4 xl:px-10'
        >
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 1500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                modules={[Autoplay, Pagination]}
                className="flex flex-row items-center justify-center w-full"
              >
                {recent.map((item) => (
                <SwiperSlide key={item?.id} onClick={()=>handleTicket(item)}
                 className='relative flex items-center justify-center w-full'>
                    <img className='h-[450px] rounded-3xl w-full object-cover xl:h-[600px]'
                    src={baseUrl + item.images[0]} alt="carousel1" />
                    <div className='absolute bottom-5 left-4 flex flex-col items-start justify-center w-full z-30 md:left-8 md:bottom-7 lg:left-12 lg:bottom-10'>
                          <p className='text-[9px] font-bold text-white md:text-xs xl:text-base xl:mb-1'>
                               {item?.time_and_date?.slice(0, 10)}
                          </p>
                          <p className='text-[17px] font-semibold text-white pb-3 md:text-2xl lg:text-[27px] xl:text-[35px]'>
                              {item?.event_name}
                          </p>
                    </div>
                    <div className="absolute inset-0 bg-gray-900 opacity-30 rounded-3xl"></div>
                </SwiperSlide>
                ))}
              </Swiper>
        </div>

    </div>
  )
}

export default HomeIntro