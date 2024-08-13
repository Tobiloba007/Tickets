"use client"
import ActivateModal from '@/app/components/Admin/adminUsers/ActivateModal'
import AdminSupportTable from '@/app/components/Admin/adminUsers/AdminSupportTable'
import AdminUsersTable from '@/app/components/Admin/adminUsers/AdminUsersTable'
import DeactivateModal from '@/app/components/Admin/adminUsers/DeactivateModal'
import DeleteModal from '@/app/components/Admin/adminUsers/DeleteModal'
import SuspendAcctModal from '@/app/components/Admin/adminUsers/SuspendAcctModal'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'



const page = () => {
     const [openModal, setOpenModal] = useState(false)
     const [select, setSelect] = useState<string>('Active')
    //  const router=useRouter()
  return (
    <div className='flex-col items-center justify-center w-full h-full overflow-y-scroll [&>div]:flex-shrink-0 hide-scrollbar mt-7 px-5 lg:px-6 xl:px-8'>

{/* create Issue BUTTON */}
{/* <section className="flex justify-end w-full">
        <div
        onClick={()=>{
          router.push("events/create")
        }}
        className="flex items-center justify-center bg-[#571845] hover:scale-110 transition cursor-pointer h-8 px-5 rounded-md ml-3 md:h-[30px] md:ml-2 lg:px-6 xl:h-10 xl:ml-3">
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.13477 12.9744H18.1348" stroke="#FEFCFD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.1348 18.9744V6.97437" stroke="#FEFCFD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
          <p className="text-[#ffffff] text-xs font-medium ml-2 xl:text-sm xl:ml-3">
      
   Create Issue
          </p>
        </div>
      </section> */}
<div className='flex items-center justify-between w-full h-12 rounded-md bg-white mt-7 px-2 md:w-[50%] md:h-14 lg:mt-0 xl:w-[450px] xl:h-16'>
                <button onClick={()=>setSelect('Active')}
                className={`text-center h-9 w-[44%] rounded-md text-sm font-semibold ${select === 'Active' && 'bg-[#571845] text-white'} xl:h-10 xl:w-[40%]`}>
                      Active
                </button>
                <button onClick={()=>setSelect('Inactive')}
                className={`text-center h-9 w-[44%] rounded-md text-sm font-semibold ${select === 'Inactive' && 'bg-[#571845] text-white'} xl:h-10 xl:w-[40%]`}>
                      Inactive
                </button>
          </div>

       <div className='flex w-full'>
           <AdminSupportTable filter={select} setOpenModal={setOpenModal} />
       </div>

       {openModal && <div onClick={()=>setOpenModal(false)} className='fixed h-screen w-full bg-[#A4A4A4] left-0 top-0 opacity-45'></div>}

       <div className='flex items-center justify-center w-full h-full'>
            <div className='fixed flex items-center justify-center w-[85%] top-[30%] md:w-[40%] lg:w-[30%] xl:w-[25%]'>
               {
                  openModal === 'Suspend'
                  ?<SuspendAcctModal setOpenModal={setOpenModal} />
                  :openModal === 'Deactivate' 
                  ?<DeactivateModal setOpenModal={setOpenModal} />
                  :openModal === 'Activate' 
                  ?<ActivateModal setOpenModal={setOpenModal} />
                  :openModal === 'Delete' &&
                   <DeleteModal setOpenModal={setOpenModal} />
                 }
            </div>
       </div>

    </div>
  )
}

export default page
