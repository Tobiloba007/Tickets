import { log } from 'console'
import React, { useState } from 'react'


export const UserPreferences: React.FC = () => {
    const [toggleEmail, setToggleEmail] = useState<boolean>(true)
    const [toggleSms, setToggleSms] = useState<boolean>(false)
    const [togglerole, setToggleRole] = useState<boolean>(false)

  return (
    <div className='flex flex-col items-center justify-start w-full bg-white rounded-md mt-5 px-5 py-4 mb-6 md:px-5 md:items-start'>
         <div className='flex items-center justify-between w-full xl:w-[76%]'>
             <div className='flex flex-col items-start justify-center'>
                 <p className='text-base font-bold text-[#571845] xl:text-lg'>
                     Preferences
                 </p>
                 <p className='text-xs text-[#331F2D] xl:text-sm'>
                     Customize According to your preferences
                 </p>
             </div>

             <div className='hidden md:flex items-center justify-end'>
                 <button className='h-7 w-[90px] text-center text-[11px] font-medium bg-[#EEE8EC] text-[#571845] rounded-md xl:h-8 xl:text-xs'>
                     Cancel 
                 </button>
                 <button className='h-7 w-[90px] text-center text-[11px] font-medium bg-[#571845] text-white rounded-md ml-3 xl:h-8 xl:text-xs'>
                     Save 
                 </button>
             </div>
         </div>

         <div className='border-[1px] border-[#A4A4A4] w-full opacity-30 mt-4'></div>

         <div className='flex flex-col items-center justify-start w-full mt-6 md:w-[60%] lg:w-[50%] xl:w-[40%]'>
              {/* EMAIL NOTIFICATIONS */}
             <div className='flex items-start justify-between w-full mb-6'>
                  <div className='flex flex-col items-start justify-start w-[50%] lg:w-[60%]'>
                     <p className='text-sm font-bold text-[#571845] xl:text-lg'>
                          Email Notifications
                     </p>
                     <p className='text-xs text-[#331F2D] xl:text-sm'>
                          Receive email notifications from us.
                     </p>
                  </div>

                  <div className='flex flex-1 items-center justify-end'>
                      <div onClick={()=>setToggleEmail(!toggleEmail)}
                      className={`flex items-center justify-start w-7 h-4 rounded-xl p-[2px] xl:h-5 xl:w-8
                                 ${toggleEmail ? 'justify-end bg-[#571845]' : 'bg-[#685963]'}`}>
                         <div className='h-[13px] w-[13px] rounded-full bg-white xl:w-4 xl:h-4'></div>
                      </div>
                      <p className='text-xs text-[#331F2D] pl-2'>
                          {toggleEmail ? 'On' : 'Off'}
                      </p>
                  </div>
             </div>

              {/* SMS NOTIFICATIONS */}
             <div className='flex items-start justify-between w-full mb-6'>
                  <div className='flex flex-col items-start justify-start w-[50%] lg:w-[60%]'>
                     <p className='text-sm font-bold text-[#571845] xl:text-lg'>
                          SMS Notifications
                     </p>
                     <p className='text-xs text-[#331F2D] xl:text-sm'>
                          Receive SMS notifications from us.
                     </p>
                  </div>

                  <div className='flex flex-1 items-center justify-end'>
                      <div onClick={()=>setToggleSms(!toggleSms)}
                      className={`flex items-center justify-start w-7 h-4 rounded-xl p-[2px] xl:h-5 xl:w-8
                                 ${toggleSms ? 'justify-end bg-[#571845]' : 'bg-[#685963]'}`}>
                         <div className='h-[13px] w-[13px] rounded-full bg-white xl:w-4 xl:h-4'></div>
                      </div>
                      <p className='text-xs text-[#331F2D] pl-2'>
                          {toggleSms ? 'On' : 'Off'}
                      </p>
                  </div>
             </div>

              {/* SWITCH ROLE*/}
             <div className='flex items-start justify-between w-full mb-6'>
                  <div className='flex flex-col items-start justify-start w-[50%] lg:w-[60%]'>
                     <p className='text-sm font-bold text-[#571845] xl:text-lg'>
                          Switch to Vendor Role
                     </p>
                     <p className='text-xs text-[#331F2D] xl:text-sm'>
                           Vendors can create events and manage them
                    </p>
                  </div>

                  <div className='flex flex-1 items-center justify-end'>
                      <div onClick={()=>setToggleRole(!togglerole)}
                      className={`flex items-center justify-start w-7 h-4 rounded-xl p-[2px] xl:h-5 xl:w-8
                                 ${togglerole ? 'justify-end bg-[#571845]' : 'bg-[#685963]'}`}>
                         <div className='h-[13px] w-[13px] rounded-full bg-white xl:w-4 xl:h-4'></div>
                      </div>
                      <p className='text-xs text-[#331F2D] pl-2'>
                          {togglerole ? 'On' : 'Off'}
                      </p>
                  </div>
             </div>

         </div>

    </div>
  )
}
