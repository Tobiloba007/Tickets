import { CiFilter } from 'react-icons/ci';
import Avatar from '../../../assets/avatar.jpg'
import ticketPreview from '../../../assets/blogPreview.jpg'
import { MdFilterList } from "react-icons/md";
import { useState } from 'react';



const EventsTable = () => {

  const [openSort, setOpenSort] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);


    const tableData = [
        {
            id: 1,
            img: ticketPreview,
            name: 'Soundland Concert',
            category: 'Concert',
            price: 'N2500',
            date: '22-01-2024',
            hostName: 'Kemi Adetiba',
            hostImg: Avatar,
            sold: '234',
            status: 'Live'
        },
        {
            id: 2,
            img: ticketPreview,
            name: 'Soundland Concert',
            category: 'Concert',
            price: 'N2500',
            date: '22-01-2024',
            hostName: 'Kemi Adetiba',
            hostImg: Avatar,
            sold: '234',
            status: 'Open'
        },
        {
            id: 3,
            img: ticketPreview,
            name: 'Soundland Concert',
            category: 'Concert',
            price: 'N2500',
            date: '22-01-2024',
            hostName: 'Kemi Adetiba',
            hostImg: Avatar,
            sold: '234',
            status: 'Closed'
        },
        {
            id: 4,
            img: ticketPreview,
            name: 'Soundland Concert',
            category: 'Concert',
            price: 'N2500',
            date: '22-01-2024',
            hostName: 'Kemi Adetiba',
            hostImg: Avatar,
            sold: '234',
            status: 'Open'
        },
        {
            id: 5,
            img: ticketPreview,
            name: 'Soundland Concert',
            category: 'Concert',
            price: 'N2500',
            date: '22-01-2024',
            hostName: 'Kemi Adetiba',
            hostImg: Avatar,
            sold: '234',
            status: 'Open'
        },
        {
            id: 6,
            img: ticketPreview,
            name: 'Soundland Concert',
            category: 'Concert',
            price: 'N2500',
            date: '22-01-2024',
            hostName: 'Kemi Adetiba',
            hostImg: Avatar,
            sold: '234',
            status: 'Open'
        },
    ]



    const sortItems = [ 'Oldest', 'Ascending', 'Newest', 'Descending', 'Lowest' ]

    const filterItems = [ 'Date', 'Open', 'Closed', 'Price', 'Live' ]



  return (
    <div className='relative flex flex-col items-center justify-start w-full mt-3 md:mt-2 lg:mt-3 xl:mt-4'>

       <div className='flex items-center justify-center w-full md:mt-2'>
              <div className='flex items-center justify-between px-5 bg-white h-14 rounded-t-2xl w-full mt-5 pt-2 border-b-[1px] border-[#dddddd] md:mt-2 xl:px-8 xl:h-16'>
                   <p className='text-sm text-[#571845] font-medium xl:text-lg'>Events</p>

                   <div className='flex items-center justify-end'>
                         <div onClick={()=>setOpenSort(!openSort)}
                          className='flex items-center cursor-pointer'>
                             <MdFilterList className='text-[#292D32] w-6 md:w-7 xl:text-xl' />
                             <p className='text-[10px] text-[#292D32] font-medium md:pl-1 md:text-[11px] xl:text-[13px]'>Sort</p>
                         </div>

                         <div onClick={()=>setOpenFilter(!openFilter)}
                         className='flex items-center ml-4 cursor-pointer lg:ml-6 xl:ml-5'>
                             <CiFilter  className='text-[#292D32] w-6 md:w-7 xl:text-xl' />
                             <p className='text-[10px] text-[#292D32] font-medium md:pl-1 md:text-[11px] xl:text-[13px]'>Filter</p>
                         </div>
                   </div>
              </div>
       </div>

       {openSort &&
       <div className='absolute right-28 top-[70px] flex flex-col items-end w-24 bg-white shadow-lg border-[1px] border-[#dddddd] rounded-md md:top-16 lg:w-28 
                       lg:right-32 xl:w-32 xl:right-36 xl:top-[70px]'>
           {sortItems.map((item) => (
           <div key={item} onClick={()=>setOpenSort(false)}
                className={`flex items-center justify-start w-full px-4 py-2.5 border-[#dddddd] cursor-pointer hover:bg-[#F6F5F6] ${item === 'Lowest' ? 'border-b-none' : 'border-b-[1px]' }`}>
               <p className='text-[10px] text-[#331F2D] font-semibold md:pl-1 md:text-[11px] xl:text-[13px]'>
                    {item}   
               </p>
           </div>
           ))}
       </div>
       }

       {openFilter &&
       <div className='absolute right-1 top-[70px] flex flex-col items-end w-24 bg-white shadow-lg border-[1px] border-[#dddddd] rounded-md md:top-16 lg:w-28 xl:w-32 
                       xl:top-[70px]'>
           {filterItems.map((item) => (
           <div key={item} onClick={()=>setOpenFilter(false)}
                className={`flex items-center justify-start w-full px-4 py-2.5 border-[#dddddd] cursor-pointer hover:bg-[#F6F5F6] ${item === 'Live' ? 'border-b-none' : 'border-b-[1px]' }`}>
               <p className='text-[10px] text-[#331F2D] font-semibold md:pl-1 md:text-[11px] xl:text-[13px]'>
                    {item}   
               </p>
           </div>
           ))}
       </div>
       }
    
       <div className="overflow-x-auto w-full hide-scrollbar">
                <table className="table-auto border-collapse w-full rounded-lg border-[1px] border-[#00000]">
                <thead className='bg-[#F6F5F6]'>
                  <tr className='w-full rounded-lg'>
                    <th className="px-4 py-[10px] bg-[#F6F5F6] text-[11px] font-medium text-start text-[#766871] md:py-3 lg:py-3 xl:px-8 xl:py-4 xl:text-[13px]">
                        <p className='w-[100px]'>
                            NAME
                        </p>
                    </th>
                    <th className="px-4 py-[10px] bg-[#F6F5F6] text-[11px] font-medium text-start text-[#766871] md:py-3 lg:py-3 xl:px-8 xl:py-4 xl:text-[13px]">
                      <p className='w-[75px] md:w-[90px]'>
                           CATEGORY
                      </p>
                    </th>
                    <th className="px-4 py-[10px] bg-[#F6F5F6] text-[11px] font-medium text-start text-[#766871] md:py-3 lg:py-3 xl:px-8 xl:py-4 xl:text-[13px]">
                      <p className='w-[75px] md:w-[90px]'>
                           PRICE 
                      </p>
                    </th>
                    <th className="px-4 py-[10px] bg-[#F6F5F6] text-[11px] font-medium text-start text-[#766871] md:py-3 lg:py-3 xl:px-8 xl:py-4 xl:text-[13px]">
                      <p className='w-[75px] md:w-[90px]'>
                           DATE 
                      </p>
                    </th>
                    <th className="px-4 py-[10px] bg-[#F6F5F6] text-[11px] font-medium text-start text-[#766871] md:py-3 lg:py-3 xl:px-8 xl:py-4 xl:text-[13px]">
                       <p className='w-[100px] md:w-[90px]'>
                           HOST 
                       </p>
                    </th>
                    <th className="px-4 py-[10px] bg-[#F6F5F6] text-[11px] font-medium text-start text-[#766871] md:py-3 lg:py-3 xl:px-8 xl:py-4 xl:text-[13px]">
                       <p className='w-[50px] md:w-[70px]'>
                           SOLD 
                       </p>
                    </th>
                    <th className="px-4 py-[10px] bg-[#F6F5F6] text-[11px] font-medium text-start text-[#766871] md:py-3 lg:py-3 xl:px-8 xl:py-4 xl:text-[13px]">
                       <p className='w-[75px] md:w-[90px]'>
                           STATUS 
                       </p>
                    </th>
                  </tr>
                </thead>


                {tableData.map((item) => {
                    return(
                <tbody>
                  <tr className='w-full bg-white hover:bg-[#F6F5F6]'>
                    <td className="px-4 pr-7 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">
                         <div className="flex items-center justify-start">
                             <img className="w-8 h-8 rounded-md object-cover xl:h-10 xl:w-10" src={item.img} alt="event_picture" />
                             <p className='w-full pl-2 text-[#571845] xl:text-sm xl:pl-3'>{item.name}</p>
                         </div>
                    </td>
                    <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium text-[#331F2D] md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">{item.category}</td>
                    <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium text-[#331F2D] md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">{item.price}</td>
                    <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium text-[#331F2D] md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">{item.date}</td>
                    <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">
                         <div className="flex items-center justify-start">
                             <img className="w-7 h-7 rounded-full object-cover" src={item.hostImg} alt="event_picture" />
                             <p className='w-full pl-2 text-[#571845] text-[11px] xl:text-xs xl:pl-3'>{item.hostName}</p>
                         </div>
                    </td>
                    <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium text-[#331F2D] md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">{item.sold}</td>
                    <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium text-[#331F2D] md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">
                         <div className={`flex items-center justify-center h-7 w-full rounded-2xl xl:h-8 ${item.status === 'Live' ? 'bg-[#EDF8EC]' : item.status === 'Open' ? 'bg-[#FFE8B9]' : 'bg-[#FFE9E9]'}`}>
                              <p className={`xl:text-sm ${item.status === 'Live' ? 'text-[#4BB543]' : item.status === 'Open' ? 'text-[#FFC655]' : 'text-[#FB2621]'}`}>
                                  {item.status}
                              </p>
                         </div>
                    </td>
                  </tr>
                  
                </tbody>
                    )
                })}

              </table>
         </div>

    </div>
  )
}


export default EventsTable
