import React, { useState } from 'react'

import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { MdFilterList } from "react-icons/md";



const Avatar="/img/avatar.jpg"

const AdminUsersTable = ({setOpenModal}) => {
    const [open, setOpen] = useState(false);
    const [select, setSelected] = useState('');

    const actions = ['Suspend', 'Deactivate', 'Activate', 'Delete']

    const handleOpen = (item) => {
        setOpen(!open)
        setSelected(item.id)
    }

    const handleAction = (item) => {
        setOpen(false)
        setOpenModal(item)
    }

    const tableData = [
        {
            id: 1,
            img: Avatar,
            name: 'Kemi Adetiba',
            userName: 'Kemikemzy',
            email: 'kemidetiba@gmail.com',
            phone: '08163973026'
        },
        {
            id: 2,
            img: Avatar,
            name: 'Kemi Adetiba',
            userName: 'Kemikemzy',
            email: 'kemidetiba@gmail.com',
            phone: '08163973026'
        },
        {
            id: 3,
            img: Avatar,
            name: 'Kemi Adetiba',
            userName: 'Kemikemzy',
            email: 'kemidetiba@gmail.com',
            phone: '08163973026'
        },
        {
            id: 4,
            img: Avatar,
            name: 'Kemi Adetiba',
            userName: 'Kemikemzy',
            email: 'kemidetiba@gmail.com',
            phone: '08163973026'
        },
        {
            id: 5,
            img: Avatar,
            name: 'Kemi Adetiba',
            userName: 'Kemikemzy',
            email: 'kemidetiba@gmail.com',
            phone: '08163973026'
        },
    ]

  return (
    <div className='flex flex-col items-center justify-start w-full mt-3 mb-6 md:mt-2 lg:mt-3 xl:mt-4 xl:mb-8'>

       <div className='flex items-center justify-center w-full md:mt-2'>
              <div className='flex items-center justify-between px-5 bg-white h-14 rounded-t-2xl w-full mt-5 pt-2 border-b-[1px] border-[#dddddd] md:mt-2 xl:px-8 xl:h-16'>
                   <p className='text-sm text-[#571845] font-medium xl:text-lg'>Users</p>
                   <div className='flex items-center'>
                         <MdFilterList className='text-[#292D32] w-6 md:w-7 xl:text-xl' />
                         <p className='text-[10px] text-[#292D32] font-medium md:pl-1 md:text-[11px] xl:text-[13px]'>Filter & Sort </p>
                   </div>
              </div>

       </div>
    
       <div className="overflow-x-auto w-full hide-scrollbar pb-[150px]">
                <table className="table-auto border-collapse w-full rounded-lg border-[1px] border-[#00000]">
                <thead className='bg-[#F6F5F6]'>
                  <tr className='w-full rounded-lg'>
                    <th className="px-4 py-[10px] bg-[#F6F5F6] text-[11px] font-medium text-start text-[#766871] md:py-3 lg:py-3 xl:px-8 xl:py-4 xl:text-[13px]">
                        <p className='w-[150px]'>
                            NAME
                        </p>
                    </th>
                    <th className="px-4 py-[10px] bg-[#F6F5F6] text-[11px] font-medium text-start text-[#766871] md:py-3 lg:py-3 xl:px-8 xl:py-4 xl:text-[13px]">
                      <p className='w-[75px] md:w-[90px]'>
                           USERNAME
                      </p>
                    </th>
                    <th className="px-4 py-[10px] bg-[#F6F5F6] text-[11px] font-medium text-start text-[#766871] md:py-3 lg:py-3 xl:px-8 xl:py-4 xl:text-[13px]">
                      <p className='w-[75px] md:w-[90px]'>
                           EMAIL
                      </p>
                    </th>
                    <th className="px-4 py-[10px] bg-[#F6F5F6] text-[11px] font-medium text-start text-[#766871] md:py-3 lg:py-3 xl:px-8 xl:py-4 xl:text-[13px]">
                      <p className='w-[75px] md:w-[90px]'>
                           PHONE
                      </p>
                    </th>
                    <th className="px-4 py-[10px] bg-[#F6F5F6] text-[11px] font-medium text-start text-[#766871] md:py-3 lg:py-3 xl:px-8 xl:py-4 xl:text-[13px]">
                       <p className='w-[75px] md:w-[90px]'>
                           ACTION
                       </p>
                    </th>
                  </tr>
                </thead>

                {tableData.map((item) => {
                    return(
                <tbody>
                  <tr className='w-full bg-white hover:bg-[#F6F5F6]'>
                    <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">
                         <div className="flex items-center justify-start">
                             <img className="w-11 h-9 rounded-full object-cover" src={item.img} alt="event_picture" />
                             <p className='w-full pl-2 text-[#571845] xl:text-sm xl:pl-3'>{item.name}</p>
                         </div>
                    </td>
                    <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium text-[#331F2D] md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">{item.userName}</td>
                    <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium text-[#331F2D] md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">{item.email}</td>
                    <td className="px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium text-[#331F2D] md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">{item.phone}</td>
                    <td className="relative px-4 py-3 border-t-[1px] border-[#E1DEE0] text-xs font-medium text-[#331F2D] md:py-4 lg:py-5 xl:px-8 xl:py-6 xl:text-sm">
                         <div onClick={()=>handleOpen(item)} className='flex items-center justify-center h-8 w-full rounded-md bg-[#EEE8EC]'>
                              <p className='pr-2 text-[#571845] xl:text-sm xl:pr-3'>View</p>
                              {
                                open
                                ?<SlArrowUp />
                                :<SlArrowDown />
                              }
                         </div>

                         {select === item.id && open &&
                         <div className='absolute left-1 mt-[6px] flex flex-col items-start border-[1px] border-[#dddddd] rounded bg-white z-50 w-[90px] md:w-[106px] lg:w-[111px] xl:w-[157px]'>
                              {actions.map((action) => {
                                return(
                                    <div onClick={()=>handleAction(action)} 
                                    className={`flex flex-col items-start w-full border-b-[1px] border-[#dddddd] p-3 ${item === 'Delete' && 'border-none'}`}>
                                        <p className='pl-2 text-[#571845] text-[11px] xl:text-[13px]'>{action}</p>
                                    </div>
                                )
                              })}
                         </div>
                        }
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

export default AdminUsersTable
