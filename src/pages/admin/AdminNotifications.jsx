import React, { useState } from 'react'
import { BiSolidTrash } from 'react-icons/bi'
import { GoDotFill } from 'react-icons/go'
import DeleteModal from '../../components/Admin/adminUsers/DeleteModal';


const AdminNotifications = () => {
  const [openModal, setOpenModal] = useState(false);

  const [tab, setTab] = useState('Unread')

  const tabs = ['Unread', 'Read']

  const handleTab = (item) => {
    setTab(item)
  }

  const notifications = [
    {
      id: 1,
      status: 'Support',
      desc: 'UserID 2334567896 created an issue',
      date: '31/01/2024',
      time: '3:00PM'
    },
    {
      id: 2,
      status: 'User',
      desc: 'Admin created a new user',
      date: '31/01/2024',
      time: '3:00PM'
    },
    {
      id: 3,
      status: 'User',
      desc: 'Admin created a new user',
      date: '31/01/2024',
      time: '3:00PM'
    },
    {
      id: 4,
      status: 'User',
      desc: 'Admin created a new user',
      date: '31/01/2024',
      time: '3:00PM'
    },
  ]


  return (
    <div className='flex flex-col items-center justify-start w-full h-full bg-[#FAFAFA] pt-11 pb-10 px-5 md:pb-7 md:py-12 lg:pt-7 lg:pb-12 lg:px-6 xl:px-8xl:pb-16'>
           <div className='flex items-center justify-start w-full mt-7'>
               {tabs.map((item) => (
               <button key={item} onClick={()=>handleTab(item)}
                      className={`text-center w-24 h-7 rounded-md text-[12px] font-normal mr-2.5 md:h-8 md:rounded-md lg:h-9 lg:w-32 lg:mr-4 lg:text-sm xl:text-base 
                                  xl:mr-5 xl:h-10 xl:font-medium ${tab === item ? 'bg-[#571845] text-white' : 'bg-white text-[#331F2D]'}`}>
                    {item} 
               </button>
               ))}
           </div>


           {/* CONTENT CARD */}
           <div className='flex flex-col items-start w-full bg-white rounded-md mt-7 md:rounded-lg md:mt-9'>
               {notifications.map((item) => (
               <div key={item.id} className='flex flex-col items-center justify-start w-full'>
                   <div className='flex items-start justify-between w-full py-4 px-3 md:px-5 xl:px-7 xl:py-6'>
                        <div className='flex items-center justify-start w-[60%]'>
                             <GoDotFill className='text-[#743F65] text-base xl:text-xl' />

                             <div className='flex flex-col items-start ml-1.5 md:ml-2.5 lg:ml-3 xl:ml-4'>
                                 <button className={`text-center py-1 rounded-2xl text-[11px] font-semibold xl:text-[13px] xl:py-1.5
                                                  ${item.status === 'User' ? 'bg-[#EDF8EC] text-[#4BB543] px-5 xl:px-7' : 'bg-[#FFF9EE] text-[#FB2621] px-3 xl:px-5'}`}>
                                     {item.status}
                                 </button>
                                 <p className='text-[11px] font-medium text-[#331F2D] pt-1 md:pt-1.5 md:text-xs xl:text-sm xl:pt-2'>
                                     {item.desc}
                                 </p>
                                 <p className='text-[11px] font-medium text-[#571845] pt-2 md:pt-3 md:text-xs xl:text-sm xl:pt-4'>
                                     View  
                                 </p>
                             </div>
                        </div>

                        <div className='flex flex-col items-end justify-between w-[30%]'>
                             <p className='text-[10px] font-medium text-[#766871] text-end md:text-xs xl:text-sm'>
                                 {item.date} <span className='pl-1 xl:pl-1.5'>{item.time} </span> 
                             </p>

                             <BiSolidTrash onClick={()=>setOpenModal(true)} className='text-[#571845] text-lg mt-10 cursor-pointer xl:text-2xl' />
                        </div>
                   </div>
                   {item.id !== 4 && 
                   <div className='w-full border-[1px] border-[#eeeeee]'></div>
                   }
               </div>
               ))}
           </div>




        {openModal && <div onClick={()=>setOpenModal(false)} className='fixed h-screen w-full bg-[#A4A4A4] left-0 top-0 opacity-45'></div>}

        <div className='flex items-center justify-center w-full h-full'>
           <div className='fixed flex items-center justify-center w-[85%] top-[30%] md:w-[40%] lg:w-[30%] xl:w-[25%]'>
                  { openModal &&  <DeleteModal setOpenModal={setOpenModal} /> }
           </div>
        </div>

    </div>
  )
}

export default AdminNotifications
