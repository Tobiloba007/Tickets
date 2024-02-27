import React from 'react'
import Navbar from '../general/Navbar'

const PricingIntro = () => {
    const plans = [
        {
            name: 'Free'
        },
        {
            name: 'Basic'
        },
        {
            name: 'Enterprise'
        },
    ]

  return (
    <div className='flex flex-col items-center justify-start w-full xl:mb-10'>
        <Navbar />

        <div className='flex flex-col items-center justify-start w-full mt-12 px-5 md:mt-20 lg:px-10 lg:mt-24 xl:px-16 xl:mt-36'>
            <div className='w-full'>
                <p className='text-2xl font-semibold text-center text-[#571845] md:text-[33px] leading-[45px] lg:text-[40px] 
                lg:leading-[50px] xl:text-[50px] xl:leading-[60px]'>
                       Simple Pricing <br /> Sign up for Free
                </p>
            </div>

            <div className='flex flex-row items-center justify-start w-full flex-wrap mt-14 md:justify-between lg:mt-12 xl:mt-14'>
                {plans.map((item, index) => {
                    return(
                <div key={index} 
                className='flex flex-col items-start justify-start w-full h-[28.5rem] border-[0.5px] border-red-400 rounded-2xl shadow-lg 
                mt-8 md:w-[32.4%] lg:h-[30rem] xl:h-[40rem]'>
                </div>
                    )
                })}

            </div>

        </div>

    </div>
  )
}

export default PricingIntro
