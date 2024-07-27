import React from 'react'
// import Arrow from '../../../assets/icons/successArrow.svg'
// import Ticket from '../../../assets/image6.svg'
// import Avatar from '../../../assets/avatar.jpg'



const WithdrawalSuccess = ({setSuccess}) => {


    const Arrow="/img/icons/successArrow.svg"
    const Ticket="/img/image6.svg"
    const Avatar="/img/avatar.jpg"
    
  return (
    <div className='flex flex-col items-center justify-center w-full px-4 pt-6 pb-4 bg-white rounded-xl xl:pt-8 xl:pb-6 xl:px-5'>
         <div className='flex flex-col items-center justify-start w-full'>
              <img className='w-12'
              src={Arrow} alt='success icon' />
              <p className='text-xl font-bold text-black mt-3'>
                   NGN 200,000
              </p>

              <div className='flex items-center justify-center rounded-2xl bg-[#EDF8EC] px-3 py-1 mt-1'>
                  <p className='text-xs font-medium text-[#4BB543]'>
                      Successful
                  </p>
              </div>

              <div className='flex flex-col items-center justify-center w-full p-3 rounded-md bg-[#EDEBEC] mt-6'>
                  <div className='flex items-center justify-between w-full mb-4'>
                      <p className='text-xs font-normal text-[#4F3D49]'>
                          Date:
                      </p>
                      <p className='text-xs font-semibold text-[#4F3D49]'>
                          09:32, 30-01-2024
                      </p>
                  </div>

                  <div className='flex items-center justify-between w-full mb-4'>
                      <p className='text-xs font-normal text-[#4F3D49]'>
                           Transaction ID:
                      </p>
                      <p className='text-xs font-semibold text-[#4F3D49]'>
                           HGOGHSYK
                      </p>
                  </div>

                  <div className='flex items-center justify-between w-full'>
                      <p className='text-xs font-normal text-[#4F3D49]'>
                           Ticket Type:
                      </p>
                      <p className='text-xs font-semibold text-[#4F3D49]'>
                           Regular
                      </p>
                  </div>
              </div>


              <div className='flex flex-col items-center justify-center w-full p-3 rounded-md bg-[#EDEBEC] mt-6'>
                  <div className='flex flex-col items-start justify-center w-full mb-3'>
                      <p className='text-xs font-normal text-[#4F3D49] mb-1'>
                          User
                      </p>
                      <div className='flex items-center justify-start w-full'>
                           <img className='w-12 h-12 rounded-full'
                           src={Avatar} alt='success icon' />
                           <p className='text-sm font-medium text-[#4F3D49] w-28 pl-2'>
                               Muniah Mudi
                           </p>
                      </div>
                  </div>

                  <div className='flex flex-col items-start justify-center w-full'>
                      <p className='text-xs font-normal text-[#4F3D49] mb-1'>
                          Event
                      </p>
                      <div className='flex items-center justify-start w-full'>
                           <img className='w-12 rounded-md'
                           src={Ticket} alt='success icon' />
                           <p className='text-xs font-normal text-[#4F3D49] w-28 pl-2'>
                                Palm Wine Music Festival (Lagos)
                           </p>
                      </div>
                  </div>

              </div>
            
         </div>
    </div>
  )
}

export default WithdrawalSuccess
