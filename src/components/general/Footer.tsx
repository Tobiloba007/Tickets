import instagram from '../../assets/icons/instagram.svg'
import facebook from '../../assets/icons/facebook.svg'
import x from '../../assets/icons/x.svg'
import sms from '../../assets/icons/sms.svg'
import location from '../../assets/icons/location.svg'
import logo from '../../assets/footerLogo.svg'


type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='flex flex-col items-start justify-start w-full px-6 bg-[#ffffff] pt-5 pb-5 md:px-8 lg:px-10 xl:px-24'>
        <img className='w-32 h-20 mb-10 xl:h-24 xl:w-40'
        src={logo} alt="logo" />
        <div className='flex flex-row flex-wrap items-start justify-between w-[85%] md:flex-row-reverse md:w-full'>
                 {/* COMPANY */}
             <div className='flex flex-col items-start justify-start xl:items-start'>
                 <p className='text-[#1A0313] text-[19px] font-medium mb-3 md:text-base xl:text-lg'>
                     Company
                 </p>
                 <p className='text-[#5C4C57] text-[17px] font-medium my-4 md:text-sm xl:text-base'>
                     About
                 </p>
                 <p className='text-[#5C4C57] text-[17px] font-medium my-4 md:text-sm xl:text-base'>
                     Blog 
                 </p>
                 <p className='text-[#5C4C57] text-[17px] font-medium mt-4 md:text-sm xl:text-base'>
                     Help  
                 </p>
             </div>


                 {/* FOLLOW US */}
             <div className='flex flex-col items-start justify-start'>
                   <p className='text-[#1A0313] text-[19px] font-medium mb-3 md:text-base xl:text-lg'>
                         Follow Us 
                   </p>

                  <div className='flex flex-row items-center justify-start my-4'>
                      <img className="mr-3 h-6.5 w-6.5"
                      src={instagram} alt="instagram" />
                      <p className='text-[#5C4C57] text-[17px] font-medium md:text-sm xl:text-base'>
                          Instagram
                      </p>
                  </div>

                  <div className='flex flex-row items-center justify-start my-4'>
                      <img className="mr-3 h-6.5 w-6.5"
                      src={facebook} alt="instagram" />
                      <p className='text-[#5C4C57] text-[17px] font-medium md:text-sm xl:text-base'>
                           Facebook
                      </p>
                  </div>

                  <div className='flex flex-row items-center justify-start my-4'>
                      <img className="mr-3 h-6.5 w-6.5"
                      src={x} alt="instagram" />
                      <p className='text-[#5C4C57] text-[17px] font-medium md:text-sm xl:text-base'>
                           X app 
                      </p>
                  </div>

             </div>


                  {/* RESOURCES */}
             <div className='flex flex-col items-start justify-start mt-12 md:mt-0'>
                 <p className='text-[#1A0313] text-[19px] font-medium mb-3 md:text-base xl:text-lg'>
                      Resources
                 </p>
                 <p className='text-[#5C4C57] text-[17px] font-medium my-4 md:text-sm xl:text-base'>
                      Pricing 
                 </p>
                 <p className='text-[#5C4C57] text-[17px] font-medium my-4 md:text-sm xl:text-base'>
                       Contact Us  
                 </p>
                 <div className='flex flex-row flex-wrap items-center justify-start my-4 md:flex-col md:items-start'>
                      <p className='text-[#5C4C57] text-[17px] font-medium md:text-sm xl:text-base'>
                           App Downloads  
                      </p>
                      <p className='flex items-center justify-center text-[#FFC655] text-[9px] font-medium h-6 w-20 bg-[#FFF9EE] rounded-2xl 
                      ml-1 md:ml-0 md:mt-2 md:text-[11px] md:w-24'>
                           Coming Soon 
                      </p>
                  </div>
             </div>


                              {/* ADDRESSS */}
             <div className='flex flex-col items-start justify-start mt-12 md:mt-0'>
                   <p className='text-[#1A0313] text-[19px] font-medium mb-3 md:text-base xl:text-lg'>
                         Address
                   </p>

                  <div className='flex flex-row items-start justify-start my-4'>
                      <img className="mr-3 h-6.5 w-6.5"
                      src={sms} alt="instagram" />
                      <p className='text-[#1A0313] text-[16px] font-medium md:text-sm xl:text-base'>
                           support@umscope.com
                      </p>
                  </div>

                  <div className='flex flex-row items-start justify-start my-4'>
                      <img className="mr-3 h-6.5 w-6.5"
                      src={location} alt="instagram" />
                      <p className='text-[#1A0313] text-[16px] font-medium md:text-sm xl:text-base'>
                             1216 Ibiyinka Olorunbe, <br /> Victoria Island, Lagos
                      </p>
                  </div>

              </div>

        </div>

        {/* FOOTER BOTTOM */}
        <div className="flex flex-col items-start justify-start w-full md:flex-row-reverse md:justify-between md:mt-10">
            <div className="flex flex-col items-start justify-start w-full md:flex-row md:justify-end">
                 <p className='text-[#5C4C57] text-[17px] font-medium my-4 md:text-sm md:px-2 lg:px-4 xl:text-base xl:px-5'>
                      Terms & Conditions  
                 </p>
                 <p className='text-[#5C4C57] text-[17px] font-medium my-4 md:text-sm md:px-2 lg:px-4 xl:text-base xl:px-5'>
                       Privacy Policy  
                 </p>
                 <p className='text-[#5C4C57] text-[17px] font-medium my-4 md:text-sm md:px-2 lg:px-4 xl:text-base xl:pl-5'> 
                        Refund policy 
                 </p>
            </div>

            <div className="flex flex-row items-center justify-start w-full">
                <p className="text-[#331F2D] text-[17px] font-medium my-4 w-[80%] md:text-sm xl:text-base">
                     ©2023. Umscope Limited . All rights reserved
                </p>
            </div>

        </div>

    </div>
  )
}

export default Footer