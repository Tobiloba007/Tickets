import React from 'react'
import Navbar from '../general/Navbar'
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { MdCancel } from "react-icons/md";



const PricingIntro = () => {
    const plans = [
        {
            id: 1,
            name: 'Free',
            description: 'Ideal for getting started with mobile funnels and achieving your first successes.',
            deals: [
                {
                    check: true,
                    detail: 'Paid Events',
                },
                {
                    check: true,
                    detail: 'Fee paid per ticket (3.5% + ₦0.0)',
                },
                {
                    check: true,
                    detail: 'Free Events',
                },
                {
                    check: false,
                    detail: 'Onsite personnel',
                },
                {
                    check: true,
                    detail: 'Unlimited Available no. of tickets per event',
                },
                {
                    check: true,
                    detail: 'Unlimited Event listings/types',
                },
                {
                    check: true,
                    detail: 'Standard customer support',
                },
                {
                    check: true,
                    detail: 'Basic event promotion',
                    additionalDetail: 'Event listing on the platform',
                },
                {
                    check: true,
                    detail: 'Data reporting & analytics',
                },
                {
                    check: true,
                    detail: 'Financial Summary',
                },
            ]
        },
        {
            id: 2,
            name: 'Basic',
            description: 'Ideal for getting started with mobile funnels and achieving your first successes.',
            deals: [
                {
                    check: true,
                    detail: 'Paid Events',
                },
                {
                    check: true,
                    detail: 'Fee paid per ticket (4% + ₦0.0)',
                },
                {
                    check: true,
                    detail: 'Free Events',
                },
                {
                    check: false,
                    detail: 'Onsite personnel',
                },
                {
                    check: true,
                    detail: 'Unlimited Available no. of tickets per event',
                },
                {
                    check: true,
                    detail: 'Unlimited Event listings/types',
                },
                {
                    check: true,
                    detail: 'Priority customer support',
                },
                {
                    check: true,
                    detail: 'Enhanced event promotion',
                    additionalDetail: 'Event listing on the platform Social media promotion Email Campaigns',
                },
                {
                    check: true,
                    detail: 'Data reporting & analytics',
                },
                {
                    check: true,
                    detail: 'Financial Summary',
                },
            ]
        },
        {
            id: 3,
            name: 'Enterprise',
            description: 'Ideal for getting started with mobile funnels and achieving your first successes.',
            deals: [
                {
                    check: true,
                    detail: 'Paid Events',
                },
                {
                    check: true,
                    detail: 'Fee paid per ticket (4.5% + ₦50)',
                },
                {
                    check: true,
                    detail: 'Free Events',
                },
                {
                    check: true,
                    detail: 'Onsite personnel',
                },
                {
                    check: true,
                    detail: 'Unlimited Available no. of tickets per event',
                },
                {
                    check: true,
                    detail: 'Unlimited Event listings/types',
                },
                {
                    check: true,
                    detail: 'Premium customer support',
                },
                {
                    check: true,
                    detail: 'Advanced event promotion',
                    additionalDetail: 'Event listing on the platform Social media promotion Email Campaigns Targeted advertising',
                },
                {
                    check: true,
                    detail: 'Data reporting & analytics',
                },
                {
                    check: true,
                    detail: 'Financial Summary',
                },
            ]
        },
    ]

  return (
    <div className='flex flex-col items-center justify-start w-full xl:mb-10'>
        <Navbar button1='Login' button2='Sign Up' link1='/login' link2='/signup2' />

        <div className='flex flex-col items-center justify-start w-full mt-16 px-5 md:px-8 md:mt-20 md:justify-center lg:px-10 lg:mt-24 xl:px-24 xl:mt-36'>
            <div className='w-full'>
                <p className='text-2xl font-semibold text-center text-[#571845] md:text-[33px] leading-[45px] lg:text-[40px] 
                lg:leading-[50px] xl:text-[50px] xl:leading-[60px]'>
                       Simple Pricing <br /> Sign up for Free
                </p>
            </div>

            <div className='flex flex-row items-start justify-start w-full flex-wrap mt-7 pb-16 md:gap-16 md:justify-center 
            lg:justify-between md:mt-16 lg:mt-12 lg:gap-0 xl:mt-14'>
                {plans.map((item, index) => {
                    return(
                <div key={index} 
                className='flex flex-col items-center justify-start w-full pb-7 border-[0.5px] border-[#dddddd] rounded-2xl shadow-lg 
                mt-10 px-8 md:w-[40%] md:mt-3 lg:w-[32.5%] xl:pb-12'>
                       <div className='flex flex-col items-center justify-start w-full mt-8 xl:mt-14'>
                            <p className='text-xl font-semibold text-[#571845] xl:text-2xl'>
                                {item.name}
                            </p>
                            <p className='text-sm text-center font-semibold text-[#571845] mt-2 w-[80%] xl:text-base'>
                                 {item.description}
                            </p>
                            <button className='text-center text-xs text-white bg-[#571845] h-8 px-5 rounded-md mt-6 xl:text-sm xl:h-9 xl:px-7'>
                                 Get Started 
                            </button>
                       </div>

                       <div className='flex flex-col items-start justify-start w-full mt-7 xl:mt-12'>
                       {item.deals.map((deal, index) => {
                        return(
                         <div key={index} className='flex items-start justify-start w-full'>
                             {deal.check === true
                              ?<IoCheckmarkCircleSharp className='text-lg text-[#571845] xl:text-2xl' />
                              :<MdCancel className='text-lg text-[#837780] xl:text-2xl' />
                             }
                             <div className='flex flex-col items-start justify-start w-full'>
                                  <p className='text-xs font-semibold text-[#571845] px-4 pb-3 pt-[1px] xl:text-base'>
                                     {deal.detail}
                                  </p>
                                  <p className='text-xs font-normal text-[#571845] px-4 pb-3 xl:text-base'>
                                       {deal.additionalDetail}
                                  </p>
                             </div>
                         </div>
                         )
                       })}

                       </div>

                </div>
                    )
                })}

            </div>

        </div>

    </div>
  )
}

export default PricingIntro
