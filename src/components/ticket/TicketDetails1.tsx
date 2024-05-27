import { SlLocationPin } from "react-icons/sl";
import { IoCalendarOutline } from "react-icons/io5";
import location from '../../assets/icons/location.svg'
import calendar from '../../assets/icons/calendar-2.svg'
import clock from '../../assets/icons/clock.svg'
import x from '../../assets/icons/x.svg'
import instagram from '../../assets/icons/instagram.svg'
import facebook from '../../assets/icons/facebook.svg'



const TicketDetails1 = ({data, setChooseTicket}) => {
    const details = [
        {
            id: 1,
            icon: location,
            desc: data.venue
        },
        {
            id: 2,
            icon: calendar,
            desc: data.time_and_date.slice(0, 10)
            // desc: 'Saturday, December 23 2023 - Sunday, December 24 2023'
        },
        {
            id: 3,
            icon: clock,
            desc: data.time_and_date.slice(11, 16)
            // desc: '6:00 PM - 1:00 AM WAT'
        },
    ]

    
  return (
    <div className='flex flex-col items-center justify-start w-full px-5 mt-5 pb-20 md:px-8 md:flex-row md:items-start md:justify-between
                    md:mt-10 md:pb-28 lg:px-10 lg:mt-12 lg:pb-36 xl:px-16 xl:pb-44'>
        <div className='flex flex-col items-start justify-start w-full md:flex-1'>
            <p className='text-xl text-[#571845] font-semibold lg:text-2xl xl:text-3xl'>
                {data.event_name} 
            </p>

            <div className='flex flex-col items-start justify-start w-full'>
                {details.map((item) => {
                    return(
                <div key={item.id} className='flex items-center justify-start w-full mt-8 lg:mt-10'>
                     <img className="w-6 h-6 xl:w-7 xl:h-7"
                     src={item.icon} alt="icons" />
                     <p className="text-sm font-medium text-[#331F2D] pl-4 w-[75%] lg:w-[70%] xl:text-base xl:w-[55%]">
                          {item.desc}
                     </p>
                </div>
                    )
                })}
            </div>

            <div className='flex flex-col items-start justify-start w-full mt-10 md:mt-14 lg:mt-16'>
                 <p className='text-base text-[#571845] font-semibold lg:text-xl xl:text-2xl'>
                        Description
                 </p>
                 <p className="text-sm font-medium text-[#331F2D] mt-4 md:w-[85%] xl:text-base xl:w-[80%]">
                       {data.event_description}
                 </p>
            </div>


            <div className='flex flex-col items-start justify-start w-full mt-8 md:mt-14'>
                 <p className='text-base text-[#571845] font-semibold lg:text-xl xl:text-2xl'>
                        Share event 
                 </p>
                 <div className="flex items-center justify-start mt-4 lg:mt-6 xl:mt-8">
                    <a href={data.contact_details.twitter} target="_blank" rel="noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full bg-[#EEE8EC] xl:h-12 xl:w-12">
                        <img className="h-4 w-4 xl:h-5 xl:w-5"
                        src={x} alt="x" />
                    </a>
                    <a href={data.contact_details.facebook} target="_blank" rel="noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full bg-[#EEE8EC] ml-4 xl:h-12 xl:w-12">
                        <img className="h-5 w-5 xl:h-6 xl:w-6"
                        src={facebook} alt="x" />
                    </a>
                    <a href={data.contact_details.instagram} target="_blank" rel="noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full bg-[#EEE8EC] ml-4 xl:h-12 xl:w-12">
                        <img className="h-5 w-5 xl:h-6 xl:w-6"
                        src={instagram} alt="x" />
                    </a>
                 </div>
            </div>

            
        </div>

        <div className="flex flex-col items-center justify-center h-52 w-full border-[1px] border-[#dddddd] shadow-xl bg-white rounded-xl
        mt-10 md:mt-14 md:w-[35%] lg:w-[30%] xl:w-[25%]">
               <p className="text-sm font-medium text-[#331F2D] xl:text-base">
                       Ticket Starting at 
               </p>
               <p className='text-2xl text-[#571845] font-semibold mt-3'>
                    N{data.tickets[0].amount}
               </p>
               <button onClick={()=>setChooseTicket(true)}
               className="text-center text-white bg-[#571845] h-10 w-40 rounded-lg mt-6">
                     Buy tickets 
               </button>
        </div>
    </div>
  )
}

export default TicketDetails1
