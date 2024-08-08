import React, { useState } from 'react'
import AddMemberButton from '../../components/Admin/adminAccounts/AddMemberButton'
import AdminAccountsTable from '../../components/Admin/adminAccounts/AdminAccountsTable'
import AddMemberModal from '../../components/Admin/adminAccounts/AddMemberModal';
import ActivateModal from '../../components/Admin/adminUsers/ActivateModal';
import DeactivateModal from '../../components/Admin/adminUsers/DeactivateModal';
import ResetPasswordModal from '../../components/Admin/adminAccounts/ResetPasswordModal';


const AdminAccounts = () => {
  const [openModal, setOpenModal] = useState(false);


  return (
    <div className='flex flex-col items-center justify-start w-full h-full bg-[#FAFAFA] pt-14 pb-5 px-5 md:pb-7 md:pt-16 lg:pb-9 lg:px-6 xl:px-8'>
          <div className='flex justify-end w-full cursor-pointer'>
              <AddMemberButton setOpenModal={setOpenModal} />
          </div>

          <div className='flex w-full'>
              <AdminAccountsTable setOpenModal={setOpenModal} />
          </div>


        {openModal && <div onClick={()=>setOpenModal(false)} className='fixed h-screen w-full bg-[#A4A4A4] left-0 top-0 opacity-45'></div>}

        <div className='flex items-center justify-center w-full h-full'>
           <div className='fixed flex items-center justify-center w-[85%] top-[30%] md:w-[40%] lg:w-[30%] xl:w-[25%]'>
                  { 
                    openModal  === 'Member' ?
                    <AddMemberModal setOpenModal={setOpenModal} /> 
                    :openModal  === 'Activate' ?
                    <ActivateModal setOpenModal={setOpenModal} /> 
                    :openModal  === 'Deactivate' ?
                    <DeactivateModal setOpenModal={setOpenModal} /> 
                    :openModal  === 'Reset Password' &&
                    <ResetPasswordModal setOpenModal={setOpenModal} /> 
                  }
           </div>
        </div>
    </div>
  )
}

export default AdminAccounts
