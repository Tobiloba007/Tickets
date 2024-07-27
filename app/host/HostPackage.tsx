import React from 'react'
import CurrentPackage from '../components/host/hostPackage/CurrentPackage'
import BasicPackage from '../components/host/hostPackage/BasicPackage'
import EnterprisePackage from '../components/host/hostPackage/EnterprisePackage'

const HostPackage = () => {
  return (
    <div className='flex flex-col items-start justify-start w-full h-full mt-12 lg:mt-12 xl:mt-16'>

           <p className='text-base font-bold text-[#571845] w-full text-start px-5 md:hidden'>My Package</p>

           <div className='hidden md:flex flex-col items-start w-full px-5 lg:px-6 xl:px-8'>
                  <p className='text-sm font-bold text-[#571845] w-full text- lg:text-xs xl:text-sm'>Current Package</p>
                  <p className='text-[11px] font-normal text-[#331F2D] mt-1 xl:text-[13px]'>
                        This is your current package. You can upgrade or downgrade.
                  </p>
           </div>

            {/*CURRENT PACKAGE*/}
           <div className='flex items-center justify-center w-full mt-4 px-5 lg:mt-5 lg:px-6 xl:px-8 xl:w-[95%]'>
                <CurrentPackage />
           </div>

            {/*AVAILABLE PACKAGE*/}
           <div className='flex flex-col items-center w-full mt-7 pb-8 md:mt-8 md:pb-10 xl:mt-10 xl:pb-12 xl:w-[95%]'>
               <p className='text-sm font-bold text-[#571845] w-full text-start mb-2 px-5 md:mb-3 lg:px-6 xl:px-8'>Available Packages</p>

               <div className='flex items-start justify-start w-full overflow-x-auto [&>div]:flex-shrink-0 hide-scrollbar px-5 md:overflow-hidden md:flex-col'>
                   <BasicPackage />
                   <EnterprisePackage />
               </div>
           </div>

    </div>
  )
}

export default HostPackage
