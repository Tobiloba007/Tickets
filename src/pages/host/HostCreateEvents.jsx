import React, { useState } from 'react'
import Basic from '../../components/host/hostCreateEvents/Basic'
import Tickets from '../../components/host/hostCreateEvents/Tickets'
import Coupon from '../../components/host/hostCreateEvents/Coupon'
import Staffs from '../../components/host/hostCreateEvents/Staffs'
import CancelBooking from '../../components/host/hostCreateEvents/CancelBooking'


const HostCreateEvents = () => {
    const [activeForm, setActiveForm] = useState(1)


    const tabs = [
        {
            id: 1,
            title: 'Basic',
        },
        {
            id: 2,
            title: 'Ticket',
        },
        {
            id: 3,
            title: 'Coupon',
        },
        {
            id: 4,
            title: 'Staff',
        },
        {
            id: 5,
            title: 'Cancel Booking',
        },
    ]

    const handleTab = (item) => {
        setActiveForm(item)
    }



  return (
    <div className='flex flex-col items-start justify-start w-full h-full mt-12 lg:mt-10 xl:mt-12'>
         <p className='text-base font-bold text-[#571845] w-full text-start px-5 lg:hidden'>Create Events</p>

         <div className='flex items-center justify-start w-full px-5 mt-5 overflow-x-auto [&>div]:flex-shrink-0 hide-scrollbar lg:px-6 xl:px-8'>
              {tabs.map((item) => {
                return(
              <div key={item.id} onClick={()=>handleTab(item.id)}
                   className={`flex items-center justify-center px-5 h-7 rounded-md mr-1 cursor-pointer xl:mr-[6px] xl:h-8 xl:px-6 ${item.id === 5 && 'mr-0'} ${activeForm === item.id ? 'bg-[#571845]' : 'bg-[#EEE8EC]'}`}>
                  <p className={`text-xs font-normal w-full ${activeForm === item.id ? 'text-[#ffffff]' : 'text-[#571845] font-medium opacity-60'}`}>
                       {item.title}
                  </p>
              </div>
                  )
              })}
         </div>


         <div className='flex items-center justify-center w-full px-5 mt-5 lg:px-6 xl:px-8'>
              {
                activeForm === 1 ? <Basic setActiveForm={setActiveForm} />
               :activeForm === 2 ? <Tickets setActiveForm={setActiveForm} />
               :activeForm === 3 ? <Coupon setActiveForm={setActiveForm} />
               :activeForm === 4 ? <Staffs setActiveForm={setActiveForm} />
               :activeForm === 5 && <CancelBooking setActiveForm={setActiveForm} />
              }
         </div>

    </div>
  )
}


export default HostCreateEvents
