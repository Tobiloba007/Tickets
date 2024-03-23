import React, { useState } from 'react'
import TicketSummary from './TicketSummary';
import TicketCheckout from './TicketCheckout';


interface Props {
  setChooseTicket: React.Dispatch<React.SetStateAction<boolean>>;
}

const TicketDetails2 = ({setChooseTicket}: Props) => {
  const [checkOut, setCheckout] = useState<boolean>(false);

  return (
        <div className='flex items-center justify-center w-full'>
             {
              checkOut
             ?<TicketCheckout setCheckout={setCheckout} />
             :<TicketSummary setCheckout={setCheckout} />
             }
        </div>
  )
}

export default TicketDetails2
