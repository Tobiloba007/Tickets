import React from 'react'
import logo1 from '@/public/img/logoipsum1.svg'
import logo2 from '@/public/img/logoipsum2.svg'

type Props = {}

const Testimonials = (props: Props) => {
  return (
    <div className='flex-col items-center justify-center w-full px-6 py-10 bg-[#ffffff] md:px-8 md:py-10 lg:py-14 lg:px-10 xl:px-16 xl:py-16'>
        <div className='flex flex-row items-center justify-center w-full'>
           <p className='text-[28px] font-semibold text-[#571845] text-center leading-9 md:text-[32px] md:leading-10 lg:text-[37px] 
           lg:leading-[45px] xl:text-[45px] xl:leading-[55px]'>
                Testimonials 
           </p>
        </div>

        <div className='flex flex-row items-center justify-center w-full mt-6 px-2 md:mt-5 lg:mt-7 xl:mt-8'>
           <p className='text-[#1A0313] text-[18px] font-medium text-center leading-[47px] md:leading-10 md:w-[95%] lg:w-[85%] lg:text-[23px] lg:leading-[47px] xl:w-[60%] xl:leading-[50px]'>
               " Femme Fest is one of the most stressful events I've ever worked on till date. There were so many moving parts but with Umscope, I didn't have to worry about guests registration or onsite ticket validation."
           </p>
        </div>


        <p className='text-[#000000] text-[23px] font-medium text-center mt-6 leading-[47px] pt-4 md:mt-0 md:text-[17px] lg:pt-6 lg:text-[20px] xl:text-[19px]'>
             Oluwatobi Joseph, Admin
        </p>


        <div className='flex flex-row items-center justify-center flex-wrap w-full mt-6 md:mt-0 lg:mt-1'>
            <img className='h-[20px] w-[80px] mx-3 mt-5 md:mx-4 lg:w-[95px] lg:h-[35px] xl:w-[100px] xl:h-[35px]'
            src={logo1} alt="firstLogo" />
            <img className='h-[24px] w-[100px] mx-3 mt-5 md:mx-4 lg:w-[120px] lg:h-[33px] xl:w-[125px] xl:h-[35px]'
            src={logo2} alt="firstLogo" />
            <img className='h-[20px] w-[80px] mx-3 mt-5 md:mx-4 lg:w-[95px] lg:h-[33px] xl:w-[100px] xl:h-[35px]'
            src={logo1} alt="firstLogo" />
        </div>

</div>
  )
}

export default Testimonials