import React, { useState } from 'react'
import HostWalletTable from '../../components/host/hostWallet/HostWalletTable'
import WithdrawalPopup from '../../components/host/hostWallet/WithdrawalPopup'
import WithdrawalSuccess from '../../components/host/hostWallet/WithdrawalSuccess'



const HostWallet = () => {
    const [open, setOpen] = useState(false)
    const [success, setSuccess] = useState(false)

    const handleClose = () => {
        setOpen(false)
        setSuccess(false)
    }

  return (
    <div className='flex items-center justify-center w-full h-full'>
    <div className='flex flex-col items-start justify-start w-full h-full px-5 mt-12 lg:mt-10 lg:px-6 xl:px-8 xl:mt-12'>
         <p className='text-base font-bold text-[#571845] w-full text-start lg:hidden'>Wallet</p>

          {/* TOP CARD */}
         <div className='flex flex-col items-center justify-start w-full my-4 md:flex-row md:justify-between'>
                {/* WITHDRAW CARD */}
               <div className='flex flex-col items-start justify-center h-[150px] w-full rounded-lg bg-[#571845] px-4 md:flex-row md:items-center md:justify-between md:w-[40%] md:h-[100px] xl:h-[120px] xl:px-5'>
                   <div className='flex flex-col items-start justify-center'>
                       <p className='text-xs font-light text-white xl:text-sm'>
                            Current Balance
                       </p>
                       <p className='text-lg font-semibold text-white mt-[10px] xl:text-2xl xl:mt-5'>
                            NGN 9,200,000
                       </p>
                   </div>

                   <div onClick={()=>setOpen(true)}
                   className='flex items-center justify-center w-full rounded-md h-9 bg-white mt-5 cursor-pointer md:w-[90px] md:mt-0 md:h-8 xl:h-9 xl:w-[120px]'>
                       <p className='text-xs font-bold text-[#571845] md:text-[11px] lg:text-xs xl:text-sm'>
                            Withdraw
                       </p>
                   </div>
               </div>

                {/* PROFIT CARD */}
               <div className='flex flex-col items-start justify-center h-[105px] w-full rounded-lg bg-[#ffffff] px-4 mt-5 md:w-[28%] md:h-[100px] md:mt-0 xl:h-[120px] xl:px-5'>
                   <div className='flex flex-col items-start justify-center'>
                       <p className='text-xs font-light text-[#766871] xl:text-sm xl:font-normal'>
                           Total Profit
                       </p>
                       <p className='text-xl font-bold text-[#331F2D] mt-3 lg:text-lg xl:text-2xl xl:mt-5'>
                           NGN 200,000
                       </p>
                   </div>
               </div>

                {/* BOOKING CARD */}
               <div className='flex flex-col items-start justify-center h-[105px] w-full rounded-lg bg-[#ffffff] px-4 mt-5 md:w-[28%] md:h-[100px] md:mt-0 xl:h-[120px] xl:px-5'>
                   <div className='flex flex-col items-start justify-center'>
                       <p className='text-xs font-light text-[#766871] xl:text-sm xl:font-normal'>
                           Total Booking
                       </p>
                       <p className='text-xl font-bold text-[#331F2D] mt-3 lg:text-lg xl:text-2xl xl:mt-5'>
                           200
                       </p>
                   </div>
               </div>

         </div>

            {/* TABLE */}
         <div className='flex items-center justify-center w-full'>
             <HostWalletTable />
         </div>

    </div>


      {success | open &&
        <div onClick={handleClose} className='fixed h-full w-full bg-[#A4A4A4] left-0 top-0 opacity-45'></div>
        }

        {open && 
           <div className='fixed flex items-center justify-center w-[85%] top-[30%] md:w-[45%] lg:w-[35%] xl:w-[30%]'>
                <WithdrawalPopup setOpen={setOpen} setSuccess={setSuccess} />
           </div>
        }

        {success && 
           <div className='absolute flex items-center justify-center w-[80%] top-[20%] md:w-[40%] lg:w-[35%] xl:w-[25%]'>
                   <WithdrawalSuccess setSuccess={setSuccess} />
           </div>
        }

    </div>
  )
}

export default HostWallet
