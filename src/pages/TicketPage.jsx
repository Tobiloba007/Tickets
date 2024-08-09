import React, { useEffect, useState } from 'react'
import TicketIntro from '../components/ticket/TicketIntro'
import TicketDetails1 from '../components/ticket/TicketDetails1'
import Footer from '../components/general/Footer'
import TicketDetails2 from '../components/ticket/TicketDetails2'
import { useLocation } from 'react-router-dom'


export const TicketPage = () => {
    const location = useLocation();
    const { state } = location;


    const [chosseTicket, setChooseTicket] = useState(false);

    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);

      console.log(state, 'intro');
    }, [pathname, state]);

    
  return (
    <div className='max-w-screen-2xl mx-auto font-outfit bg-[#FAFAFA]'>
         <TicketIntro data={state} />
         {chosseTicket
         ?<TicketDetails2 data={state} setChooseTicket={setChooseTicket} />
         :<TicketDetails1 data={state} setChooseTicket={setChooseTicket} />
         }
         <Footer />
    </div>
  )
}
