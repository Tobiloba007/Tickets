import React, { useState } from 'react'
import TicketSummary from './TicketSummary';
import TicketCheckout from './TicketCheckout';


interface Props {
  setChooseTicket: React.Dispatch<React.SetStateAction<boolean>>;
}

const TicketDetails2 = ({setChooseTicket}: Props) => {
  const [checkOut, setCheckout] = useState<boolean>(false);

  const [value, setValue] = useState<number>(1);


  const ticket = value * 100000
  const ticketString = ticket.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

  const fees = ticket * 0.05
  const feesString = fees.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

  
  const subTotal = ticket + fees
  const subTotalSting = subTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")


  const total = subTotal
  const totalString = total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

  return (
        <div className='flex items-center justify-center w-full'>
             {
              checkOut
             ?<TicketCheckout 
             setCheckout={setCheckout}
             value={value}
             setValue={setValue}
             ticket={ticketString}
             fees={feesString}
             subTotal={subTotalSting}
             total={totalString}
              />
             :<TicketSummary 
             setCheckout={setCheckout} 
             value={value}
             setValue={setValue}
             ticket={ticketString}
             fees={feesString}
             subTotal={subTotalSting}
             total={totalString}
             />
             }
        </div>
  )
}

export default TicketDetails2
