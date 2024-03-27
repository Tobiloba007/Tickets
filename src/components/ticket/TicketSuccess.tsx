import React from 'react'
import Navbar from '../general/Navbar'
import Footer from '../general/Footer';
import { useLocation } from 'react-router-dom';



const TicketSuccess = () => {
    const location = useLocation();
    const { state } = location;

    const email = state
  
  return (
    <div className='flex flex-col items-center justify-start w-full max-w-screen-2xl mx-auto font-outfit bg-[#FAFAFA]'>
        <Navbar button1='Go to Dashboard' button2='Log out' link1='/' link2='/' />

        <div className='flex flex-col items-center justify-start w-full px-5 mt-20 mb-40 md:px-8 lg:px-10 xl:px-16'>
            <p className='text-xl text-[#331F2D] font-semibold lg:text-2xl xl:text-[28px]'>
                Tickets have been sent to
            </p>
            <p className='text-xs text-[#571845] font-semibold mt-3 lg:text-sm xl:text-base'>
                {email}
            </p>

            <div className='flex flex-col items-center w-full mt-12 md:mt-14'>
                <p className='text-sm text-[#331F2D] font-semibold lg:text-base xl:text-lg'>
                    Didn't receive ticket yet ?
                </p>
                <button className='text-center bg-[#571845] h-8 px-4 rounded-md text-white mt-4 text-xs lg:px-6 xl:text-sm xl:h-9'>
                      Resend ticket 
                </button>
            </div>

            <div className='flex flex-col items-center w-full mt-12 md:mt-14'>
                <p className='text-sm text-[#331F2D] font-semibold lg:text-base xl:text-lg'>
                    Having trouble receiving tickets?
                </p>
                <p className='text-xs text-[#571845] font-semibold mt-3 lg:text-sm xl:text-base'>
                     Contact Us 
                </p>
            </div>
        </div>

        <Footer />
    </div>
  )
}

export default TicketSuccess
