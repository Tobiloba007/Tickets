import React, { useState } from 'react'
import ticket from '../../../assets/Ticket.svg'
import overlay from '../../../assets/overlay.svg'


interface componentProps {
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UserHomeTickets: React.FC<componentProps> = (props) => {
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

    const [hover, setHover] = useState<boolean | number>(false);

    const handleMouseOver = (item: number) => {
        setHover(item)
    }

    const handleMouseOut = () => {
        setHover(false)
    }


  return (
    <div className='flex flex-col items-start justify-start w-full mt-7 lg:mt-4'>
         <p className='text-base font-bold text-[#571845] px-5 xl:px-8'>
             My Tickets <span className='text-[#766871] text-xs font-bold ml-1 lg:text-sm'>2</span>
         </p>

         <div className='flex items-center justify-start w-full overflow-x-scroll [&>div]:flex-shrink-0 hide-scrollbar mt-3 px-5 xl:px-8'>
               {tickets.map((item) => {
                return(
               <div key={item.id} onMouseOver={()=>handleMouseOver(item.id)} onMouseOut={handleMouseOut}
               className='relative w-[250px] mr-3 lg:w-[260px] xl:w-[310px]'>
                  <img className='w-full'
                  src={ticket} alt="ticket" />
                  {hover === item.id &&
                  <img 
                //   onClick={()=>props.setModal(true)}
                  className={`absolute top-0 w-full mr-3`}
                  src={overlay} alt="overlay" />
                  }
               </div>
                  )
               })}
         </div>
         
    </div>
  )
}
