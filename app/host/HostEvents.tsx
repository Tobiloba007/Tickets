import React, { useState } from 'react'
import UpcomingTable from '../components/host/hostEvents/UpcomingTable'
import CompletedTable from '../components/host/hostEvents/CompletedTable'
import DraftTable from '../components/host/hostEvents/DraftTable'
import HostEventDetailsPage from './HostEventDetailsPage'

const HostEvents = () => {
    const [active, setActive] = useState(1)

    const [next, setNext] = useState(1)


    const tabs = [
        {
            id: 1,
            title: 'Upcoming',
            amount: 5
        },
        {
            id: 2,
            title: 'Completed',
            amount: 3
        },
        {
            id: 3,
            title: 'Drafts',
            amount: 1
        },
    ]

    



  return (
    <div className='flex flex-col items-start justify-start w-full h-full mt-12 lg:mt-10 xl:mt-12'>
    {next === 1 &&
    <div className='flex flex-col items-start justify-start w-full'>
          <p className='text-base font-bold text-[#571845] w-full text-start px-5 lg:hidden'>My Events</p>


          <div className='flex flex-col items-center justify-start w-full mt-6 px-5 md:flex-row lg:px-6 xl:px-8'>
                <div className='flex flex-col items-start justify-center w-full bg-white rounded-md py-3 px-4 md:w-[200px] md:py-4 xl:px-5'>
                     <p className='text-xs font-normal text-[#766871] xl:text-[13px]'>Total Events</p>
                     <p className='text-lg font-bold text-[#331F2D] mt-2 xl:text-xl xl:mt-4'>100</p>
                     <p className='text-[10px] font-normal text-[#766871] lg:mt-1 xl:text-[11px] xl:mt-2'><span className='text-[#4BB543]'>+20%</span> vs previous day</p>
                </div>

                <div className='flex flex-col items-start justify-center w-full bg-white rounded-md py-3 px-4 mt-3 md:mt-0 md:w-[200px] md:ml-3 md:py-4 xl:px-5 xl:ml-4'>
                     <p className='text-xs font-normal text-[#766871] xl:text-[13px]'>Total Sold Tickets</p>
                     <p className='text-lg font-bold text-[#331F2D] mt-2 xl:text-xl xl:mt-4'>2456</p>
                     <p className='text-[10px] font-normal text-[#766871] lg:mt-1 xl:text-[11px] xl:mt-2'><span className='text-[#4BB543]'>+20%</span> vs previous day</p>
                </div>
          </div>
          

          <div className='flex items-center justify-start w-full mt-10 px-5 [&>div]:flex-shrink-0 hide-scrollbar z-30 md:mt-11 md:-mb-8 lg:px-6 lg:-mb-11 lg:mt-12 xl:px-8 xl:-mb-14 xl:mt-14'>
                {tabs.map((item)=>{
                    return(
                        <div onClick={()=>setActive(item.id)}
                        className={`flex items-center justify-center px-5 h-8 rounded-md mr-[6px] cursor-pointer xl:h-9 xl:px-7 xl:mr-[10px] ${active === item.id ? 'bg-[#571845]' : 'bg-[#EEE8EC]'}`}>
                              <p className={`text-xs font-normal md:font-medium xl:text-sm ${active === item.id ? 'text-[#ffffff]' : 'text-[#571845]'}`}>{item.title} ({item.amount})</p>
                        </div>
                    )
                })}
          </div>

          <div className='flex items-center justify-start w-full'>
                {
                    active === 1 ? <UpcomingTable setNext={setNext} />
                   :active === 2 ? <CompletedTable setNext={setNext} />
                   :active === 3 && <DraftTable setNext={setNext} />
                }
          </div>
    </div>
    }

    {next === 2 && <HostEventDetailsPage  setNext={setNext} />}

    </div>
  )
}

export default HostEvents
