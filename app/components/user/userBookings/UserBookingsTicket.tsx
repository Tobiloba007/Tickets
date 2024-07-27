import React from 'react'



interface componentProps {
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
}
const ticket= "/img/Ticket.svg"
const overlay= "/img/overlay.svg"


export const UserBookingsTicket: React.FC<componentProps> = (props) => {
    const tickets = [
        {
            id: 1,
            image: ticket,
            overlay: overlay
        },
        {
            id: 2,
            image: ticket,
            overlay: overlay
        },
        {
            id: 3,
            image: ticket,
            overlay: overlay
        },
        {
            id: 4,
            image: ticket,
            overlay: overlay
        },
        {
            id: 5,
            image: ticket,
            overlay: overlay
        },
    ]

  return (
    <div className='flex flex-col items-start justify-start w-full mt-12 lg:mt-8'>
         <p className='text-base font-bold text-[#571845] px-5 xl:px-8 xl:text-lg'>
             My Tickets <span className='text-[#766871] text-xs font-bold ml-1 lg:text-sm'>3</span>
         </p>

         <div className='flex items-center justify-start w-full overflow-x-scroll [&>div]:flex-shrink-0 hide-scrollbar mt-3 px-5 xl:px-8'>
               {tickets.map((item) => {
                return(
               <div key={item.id} className='flex flex-col items-start justify-start w-[250px] mr-5 bg-white p-4 rounded-[10px] lg:w-[260px] xl:w-[310px]'>
                  <img className='w-full'
                  src={ticket} alt="ticket" />
                  <div className='flex flex-col items-start justify-start w-full mt-3'>
                      <div className='flex items-center justify-start'>
                          <p className='text-base font-bold text-[#571845] xl:text-xl'>
                                Flytime Fest, Asake  
                          </p>
                          <button className='text-[8px] font-bold text-[#2F2623] bg-[#FFDE9C] rounded-md px-2 h-5 ml-[6px] xl:text-[10px]'>
                                In 3 days 
                          </button>
                      </div>

                      <p className='text-xs text-[#331F2D] mt-3 xl:text-sm xl:mt-2'>
                             1 x VIP Ticket
                      </p>

                      <div className='flex items-center justify-between w-full mt-2 xl:mt-3'>
                         <button onClick={()=>props.setModal(true)}
                         className='text-center bg-[#EEE8EC] text-[#571845] h-8 rounded-md text-xs font-medium w-[47%] xl:h-9'>
                             View Details
                         </button>
                         <button className='text-center bg-[#571845] text-white h-8 rounded-md text-xs font-medium w-[47%] xl:h-9'>
                             Download Ticket
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
