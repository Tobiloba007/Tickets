import React from 'react'
import ticket from '../../../assets/Ticket.svg'
import overlay from '../../../assets/overlay.svg'
import event from '../../../assets/event.jpg'


interface componentProps {
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UserBookingHistory: React.FC<componentProps> = (props) => {
    const tickets = [
        {
            id: 1,
            image: event,
            overlay: overlay
        },
        {
            id: 2,
            image: event,
            overlay: overlay
        },
        {
            id: 3,
            image: event,
            overlay: overlay
        },
    ]

  return (
    <div className='flex flex-col items-start justify-start w-full px-5 mt-8 pb-4 lg:mt-8'>
         <p className='text-base font-bold text-[#571845] xl:text-lg'>
              History <span className='text-[#766871] text-xs font-bold ml-1 lg:text-sm'>8</span>
         </p>

         <div className='flex flex-col items-center justify-start w-full mt-3 md:flex-row md:flex-wrap md:justify-start'>
               {tickets.map((item) => {
                return(
               <div key={item.id} className={`flex flex-col items-start justify-start w-full bg-white p-4 mb-4 rounded-[10px] md:mr-4 md:w-[225px] lg:w-[235px] lg:mb-5 
                                             xl:w-[320px] xl:mr-6 ${item.id === tickets.length  && 'mr-0'}`}>
                  <div className='relative flex h-32 w-full md:h-28 xl:h-32'>
                     <img className='w-full h-full rounded-md'
                     src={event} alt="ticket" />
                     <div className='absolute flex flex-col items-center justify-center w-full z-50 mt-8'>
                         <p className='text-white text-xs xl:text-sm'>Sat Dec 23, 2023</p>
                         <p className='text-white text-center text-xl font-semibold w-[50%] md:text-base lg:w-[70%] lg:mt-1 xl:text-xl xl:w-[70%]'>
                             Flytime Fest, Asake
                         </p>
                      </div>
                      <div className='absolute h-full w-full bg-black rounded-md opacity-40'></div>
                  </div>                              
                  <div className='flex flex-col items-start justify-start w-full mt-3'>
                      <div className='flex items-center justify-start'>
                          <p className='text-base font-bold text-[#571845] xl:text-xl'>
                                Flytime Fest, Asake  
                          </p>
                      </div>

                      <p className='text-xs text-[#331F2D] mt-2 xl:text-base'>
                             1 x VIP Ticket
                      </p>

                      <div className='flex items-center justify-between w-full mt-2 xl:mt-3'>
                         <button onClick={()=>props.setModal(true)}
                         className='text-center bg-[#EEE8EC] text-[#571845] h-9 rounded-md text-sm font-semibold w-full xl:h-10'>
                             View Details
                         </button>
                      </div>
                  </div>
               </div>
                  )
               })}
         </div>
         
    </div>
  )
}
