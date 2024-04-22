import React, { useEffect, useState } from 'react'
import TicketIntro from '../components/ticket/TicketIntro'
import TicketDetails1 from '../components/ticket/TicketDetails1'
import Footer from '../components/general/Footer'
import TicketDetails2 from '../components/ticket/TicketDetails2'
import { useLocation } from 'react-router-dom'

export const TicketPage: React.FC = () => {
    const [chosseTicket, setChooseTicket] = useState<boolean>(false);

    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

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
