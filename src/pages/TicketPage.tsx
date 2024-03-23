import React, { useState } from 'react'
import TicketIntro from '../components/ticket/TicketIntro'
import TicketDetails1 from '../components/ticket/TicketDetails1'
import Footer from '../components/general/Footer'
import TicketDetails2 from '../components/ticket/TicketDetails2'

export const TicketPage: React.FC = () => {
    const [chosseTicket, setChooseTicket] = useState<boolean>(false);

  return (
    <div className='max-w-screen-2xl mx-auto font-outfit bg-[#FAFAFA]'>
         <TicketIntro />
         {chosseTicket
         ?<TicketDetails2 setChooseTicket={setChooseTicket} />
         :<TicketDetails1 setChooseTicket={setChooseTicket} />
         }
         <Footer />
    </div>
  )
}
