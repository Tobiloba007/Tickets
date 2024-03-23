import calendar from '../../assets/icons/calendar-2.svg'
import { HiOutlineMinus, HiOutlinePlus } from "react-icons/hi2";


interface Props {
    setCheckout: React.Dispatch<React.SetStateAction<boolean>>;
  }

const TicketSummary = ({setCheckout}: Props) => {
  return (
    <div className='flex flex-col items-center justify-start w-full px-5 mt-5 pb-20 md:px-8 md:flex-row md:items-start md:justify-between
                     md:mt-10 md:pb-28 lg:px-10 lg:mt-12 lg:pb-36 xl:px-16 xl:pb-44'>

            {/* LEFT */}
          <div className='flex flex-col items-start justify-start w-full md:flex-1'>
               <p className='text-lg text-[#571845] font-semibold lg:text-xl xl:text-2xl'>
                      Choose your ticket 
               </p>

               {/* LEFT CARD */}
               <div className='flex flex-col items-start justify-start w-full border-[1px] border-[#dddddd] rounded-lg bg-white 
                               py-10 mt-5 shadow-slate-500 md:h-80 lg:py-7 xl:h-96 xl:px-6'>
                  <div className='flex flex-col items-start w-full px-4'>
                      <p className='text-lg text-[#331F2D] font-semibold lg:text-xl xl:text-2xl'>
                          Flytime Fest, Asake 
                      </p>
                      <div className='flex items-center justify-start w-full mt-3'>
                          <img className="w-6 h-6 xl:w-7 xl:h-7"
                          src={calendar} alt="icons" />
                          <p className="text-sm font-medium text-[#331F2D] pl-4 w-[75%] lg:w-[70%] xl:text-base xl:w-[55%]">
                               Saturday, December 23 2023 
                          </p>
                      </div>
                  </div>

                  {/* LINE */}
                  <div className='border-[1px] border-[#dddddd] w-full mt-4'></div>

                  <div className='flex items-start justify-between w-full px-4 mt-4 md:mt-6'>
                    <div className='flex flex-col items-start'>
                          <p className="text-base font-medium text-[#571845] lg:text-lg xl:text-2xl">
                               VVIP Ticket  
                          </p>
                          <p className="text-sm font-semibold text-[#571845] pt-1 lg:text-base xl:text-xl xl:pt-2">
                                N104,100 
                                <span className='text-[#4F3D49] text-[10px] font-medium pl-2 lg:text-xs xl:text-sm'>
                                      including N4100 fee
                                </span>
                          </p>
                    </div>

                    <div className='flex items-center justify-start'>
                       <div className='flex items-center justify-center h-8 px-2 rounded-md bg-[#571845] text-white text-sm lg:h-10 lg:px-3 xl:h-11'>
                            <HiOutlineMinus className='xl:text-lg' />
                       </div>
                       <p className='text-xs text-[#571845] font-medium px-4 lg:text-sm lg:px-6 xl:text-base xl:px-7'>
                          1 
                       </p>
                       <div className='flex items-center justify-center h-8 px-2 rounded-md bg-[#571845] text-white text-sm lg:h-10 lg:px-3 xl:h-11'>
                            <HiOutlinePlus className='xl:text-lg' />
                       </div>
                    </div>

                  </div>
                  <p className='text-[10px] text-[#4F3D49] px-4 pt-1 font-medium lg:text-xs lg:w-[70%] xl:text-sm xl:pt-2'>
                         We Own December! 13 years and older. Limited seating available. Access to FLY VILLAGE, a collection of impressive food, drink, and retail vendors. | Access to FLY SPACE, a walk-through access area with a variety of culture-curated experiences. | Free hospitality drinks from your favorite sponsors | A fast tracked-accreditation and admittance entry | Conducive parking close to the festival grounds
                  </p>
               </div>
          </div>


          {/* RIGHT CARD */}
          <div className='flex flex-col items-center justify-start w-full border-[1px] border-[#dddddd] rounded-lg bg-white 
                               py-4 mt-3 shadow-slate-500 px-4 md:mt-12 md:w-[35%] md:h-80 md:ml-3 lg:w-[30%] xl:text-base xl:h-96 xl:px-6'>
              <div className='flex items-center justify-between w-full mb-3'>
                 <p className='text-sm text-[#331F2D] font-semibold lg:text-base xl:text-lg'>
                     Summary 
                 </p>
                 <p className='text-xs text-[#571845] font-semibold underline underline-offset-1 xl:text-sm'>
                     Coupon 
                 </p>
              </div>

              {/* TICKET PRICE */}
              <div className='flex flex-col items-center justify-center w-full mt-3'>
                <div className='flex items-center justify-between w-full'>
                     <p className='text-xs text-[#331F2D] font-medium xl:text-base'>
                         1 x VIP Ticket 
                     </p>
                     <p className='text-xs text-[#331F2D] font-medium xl:text-base'>
                         N100,000
                     </p>
                 </div>
                 <div className='border-[1px] border-[#dddddd] w-full mt-4 opacity-50'></div>
              </div>

              {/* FEES */}
              <div className='flex flex-col items-center justify-center w-full mt-4'>
                <div className='flex items-center justify-between w-full'>
                     <p className='text-xs text-[#331F2D] font-medium xl:text-base'>
                         Fees 
                     </p>
                     <p className='text-[10px] text-[#331F2D] font-medium xl:text-sm'>
                          N4,100
                     </p>
                 </div>
                 <div className='border-[1px] border-[#dddddd] w-full mt-4 opacity-50'></div>
              </div>

              {/* SUBTOTAL */}
              <div className='flex flex-col items-center justify-center w-full mt-4'>
                <div className='flex items-center justify-between w-full'>
                     <p className='text-xs text-[#331F2D] font-medium xl:text-base'>
                           Subtotal  
                     </p>
                     <p className='text-[10px] text-[#331F2D] font-medium xl:text-sm'>
                          N104,100
                     </p>
                 </div>
                 <div className='border-[1px] border-[#dddddd] w-full mt-4 opacity-50'></div>
              </div>

              {/* TOTAL */}
              <div className='flex flex-col items-center justify-center w-full mt-4'>
                <div className='flex items-center justify-between w-full'>
                     <p className='text-xs text-[#331F2D] font-medium xl:text-base'>
                         Total 
                     </p>
                     <p className='text-xs text-[#331F2D] font-semibold xl:text-base'>
                          N104,100
                     </p>
                 </div>
              </div>

              <button onClick={()=>setCheckout(true)}
              className='text-sm text-white bg-[#571845] rounded-md h-10 w-full mt-10 xl:h-12 xl:rounded-lg xl:text-xl xl:font-medium'>
                   Continue
              </button>
          </div>

    </div>
  )
}

export default TicketSummary
