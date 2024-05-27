import React, { useEffect, useState } from 'react'
import TicketCheckout from './TicketCheckout';
import TicketSummary from './TicketSummary';



const TicketDetails2 = ({data, setChooseTicket}) => {
  const [checkOut, setCheckout] = useState(false);

  const [value, setValue] = useState(1);


  const ticket = value * data.tickets[0].amount
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
             data={data}
             setCheckout={setCheckout}
             value={value}
             setValue={setValue}
             ticket={ticketString}
             fees={feesString}
             subTotal={subTotalSting}
             total={totalString}
              />
             :<TicketSummary
             data={data}
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
