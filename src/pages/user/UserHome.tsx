import React from 'react'
import calendar from '../../assets/icons/calendar-2.svg'
import { UserHomeTickets } from '../../components/user/userHome/UserHomeTickets'
import { UserHomeScroll } from '../../components/user/UserHomeScroll'
import { UserRecommended } from '../../components/user/userHome/UserRecommended'

export const UserHome: React.FC = () => {
  return (
    <div className='flex-col items-center justify-start w-full h-full overflow-y-scroll [&>div]:flex-shrink-0 hide-scrollbar'>
       <div className='flex items-start justify-between w-full mt-14 px-5 lg:hidden xl:px-8'>
          <p className='text-[#571845] font-bold text-lg md:text-xl'>
              Good day, <br className='md:hidden' /> Maimunah 
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
         <UserHomeTickets />
         <UserHomeScroll />
         <UserRecommended />
       </div>

       {/* LARGE SCREEN */}
       <div className='hidden lg:flex flex-col items-center w-full'>
         <UserHomeScroll />
         <UserHomeTickets />
         <UserRecommended />
       </div>

    </div>
  )
}
