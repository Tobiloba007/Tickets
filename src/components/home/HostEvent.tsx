import React from 'react'

type Props = {}

const HostEvent = (props: Props) => {
  return (
    <div className='flex-col items-center justify-center w-full px-6 py-16 bg-[#FAFAFA] md:px-8 md:py-24 lg:py-28 lg:px-28 xl:px-40 xl:py-32'>
        <div className='flex flex-col items-start justify-center bg-[#FFC655] w-full h-[286px] rounded-[24px] px-8 md:h-[330px] md:items-center xl:h-[390px]'>
            <p className='text-[27px] text-[#1A0313] font-semibold leading-9 md:text-center md:text-[35px] md:leading-[47px] xl:text-[40px] xl:leading-[55px]'>
                Ready to bring <br /> your event to life !
            </p>

            <button className='text-[17px] font-semibold mt-9 h-11 w-[168px] rounded-[9px] bg-[#571845] text-[#ffffff] md:mt-7 md:h-10 md:text-[16px] md:w-[165px] xl:h-11 xl:w-[175px]'>
                  Host an event 
            </button>
        </div>

    </div>
  )
}

export default HostEvent