import React, { useState } from 'react'
import { UserBookingsTicket } from '../../components/user/userBookings/UserBookingsTicket'
import { UserBookingHistory } from '../../components/user/userBookings/UserBookingHistory'
import { UserHomeModal } from '../../components/modal/UserHomeModal'

export const UserBookings: React.FC = () => {
  const [modal, setModal] = useState<boolean>(false)


  return (
    <div className='flex flex-col items-center justify-center w-full h-full'>
       <div className='flex flex-col items-center justify-start w-full h-full bg-[#FAFAFA]'>
            <UserBookingsTicket setModal={setModal} />
            <UserBookingHistory setModal={setModal} />
       </div>
       
       {modal && <div onClick={()=>setModal(false)} className='fixed top-0 z-50 opacity-40 h-[100vh] w-full bg-black lg:w-[78%] xl:w-[82%]'></div>}
       {modal && 
       <div className='flex items-center justify-center w-full lg:w-[50%] xl:w-[82%]'>
         <UserHomeModal />
       </div>
       }
    </div>
  )
}