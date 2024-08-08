import React, { useState } from 'react'
import { IoIosAdd } from 'react-icons/io';
import SupportActiveTable from '../../components/Admin/adminSupport/SupportActiveTable';
import SupportInactiveTable from '../../components/Admin/adminSupport/SupportInactiveTable';

const AdminSupport = () => {

  const [tab, setTab] = useState('Active')

  const tabs = ['Active', 'Inactive']

  const handleTab = (item) => {
    setTab(item)
  }

  return (
    <div className='flex flex-col items-end justify-start w-full h-full bg-[#FAFAFA] pt-14 pb-5 px-5 md:pb-7 md:pt-16 lg:pb-9 lg:px-6 xl:px-8'>
    
          <div className='flex items-center justify-center px-3 h-7 rounded-md bg-[#571845] md:h-8 md:rounded-md lg:h-9'>
             <IoIosAdd className='text-white text-lg lg:text-xl' />
             <p className='text-[12px] text-white font-normal pl-1.5 lg:text-sm lg:pl-2 xl:text-[15px]'>
                  Create issue  
             </p>
          </div>

          <div className='flex items-center justify-start w-full mt-7'>
               {tabs.map((item) => (
               <button key={item} onClick={()=>handleTab(item)}
                      className={`text-center w-24 h-7 rounded-md text-[12px] font-normal mr-2.5 md:h-8 md:rounded-md lg:h-9 lg:w-32 lg:mr-4 lg:text-sm xl:text-base 
                                  xl:mr-5 xl:h-10 xl:font-medium ${tab === item ? 'bg-[#571845] text-white' : 'bg-white text-[#331F2D]'}`}>
                    {item} 
               </button>
               ))}
          </div>

          <div className='flex w-full'>
             {
              tab === 'Active'
              ?<SupportActiveTable />
              :<SupportInactiveTable />
             }
          </div>

    </div>
  )
}

export default AdminSupport
