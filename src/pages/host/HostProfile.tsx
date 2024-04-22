import React, { useState } from 'react'
import { HostAccount } from '../../components/host/hostProfile/HostAccount'
import { HostPreferences } from '../../components/host/HostPreference'

export const HostProfile = () => {
  const [select, setSelect] = useState<string>('Account')

  return (
    <div className='flex flex-col items-start justify-start w-full mt-16 px-5'>
          <p className='text-lg font-bold text-[#571845] w-full text-start lg:hidden'>My Profile</p>

          <div className='flex items-center justify-between w-full h-12 rounded-md bg-white mt-7 px-2 md:w-[50%] md:h-14 lg:mt-0 xl:w-[450px] xl:h-16'>
                <button onClick={()=>setSelect('Account')}
                className={`text-center h-9 w-[44%] rounded-md text-sm font-semibold ${select === 'Account' && 'bg-[#571845] text-white'} xl:h-10 xl:w-[40%]`}>
                      Account
                </button>
                <button onClick={()=>setSelect('Prefences')}
                className={`text-center h-9 w-[44%] rounded-md text-sm font-semibold ${select === 'Prefences' && 'bg-[#571845] text-white'} xl:h-10 xl:w-[40%]`}>
                      Prefences
                </button>
          </div>

          {
            select === 'Account' ? <HostAccount />
           :select === 'Prefences' && <HostPreferences />
          }

    </div>
  )
}