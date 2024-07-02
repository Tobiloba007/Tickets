import React, { useEffect, useState } from 'react'
import calendar from '../../assets/icons/calendar-2.svg'
import { UserHomeTickets } from '../../components/user/userHome/UserHomeTickets'
import { UserHomeScroll } from '../../components/user/userHome/UserHomeScroll'
import { UserRecommended } from '../../components/user/userHome/UserRecommended'
import { UserHomeModal } from '../../components/modal/UserHomeModal'


export const UserHome = () => {
  const [modal, setModal] = useState(false)
  const [user, setUser] = useState([]);

  // const user = useSelector((state) => state.auth.user)

  useEffect(() => {
    // Retrieve data from local storage on component mount
    const storedItem = localStorage.getItem('userData');
    // Parse the JSON data if it exists
    if (storedItem) {
      setUser(JSON.parse(storedItem));
      console.log(user, 'user')
    }
  }, []);


  return (
    <div className='flex flex-col items-center justify-start w-full h-full'>
    <div className='flex-col items-center justify-start w-full h-full overflow-y-scroll [&>div]:flex-shrink-0 hide-scrollbar'>
       <div className='flex items-start justify-between w-full mt-14 px-5 lg:hidden xl:px-8'>
          <p className='text-[#571845] font-bold text-lg md:text-xl'>
              Good day, <br className='md:hidden' /> {user.user_name}
          </p>

          <div className='flex items-center justify-center w-[80px] h-8 border-[1.7px] border-[#C6C0C4] rounded-lg md:w-24'>
              <img className='w-5'
              src={calendar} alt="calendar" />
              <p className='text-[#1A0313] text-sm ml-2 md:ml-3'>
                 21 Jan
              </p>
          </div>
       </div>

       {/* MOBILE SCREEN */}
       <div className='flex flex-col items-center w-full lg:hidden'>
         <UserHomeTickets setModal={setModal} />
         <UserHomeScroll />
         <UserRecommended setModal={setModal} />
       </div>

       {/* LARGE SCREEN */}
       <div className='hidden lg:flex flex-col items-center w-full'>
         <UserHomeScroll />
         <UserHomeTickets setModal={setModal} />
         <UserRecommended setModal={setModal} />
       </div>


    </div>

       {modal && <div onClick={()=>setModal(false)} className='fixed top-0 z-50 opacity-40 h-[100vh] w-full bg-black lg:w-[78%] xl:w-[82%]'></div>}

       {modal && 
       <div className='absolute top-80 z-[200] flex items-start justify-center w-[85%] md:top-10 md:w-[80%] lg:w-[65%] xl:w-[55%]'>
         <UserHomeModal data={modal} />
       </div>
       }
    </div>
  )
}
