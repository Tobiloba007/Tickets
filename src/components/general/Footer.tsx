import instagram from '../../assets/icons/instagram.svg'
import facebook from '../../assets/icons/facebook.svg'
import x from '../../assets/icons/x.svg'
import sms from '../../assets/icons/sms.svg'
import location from '../../assets/icons/location.svg'


type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='flex flex-col items-start justify-start w-full px-6 bg-[#ffffff] pt-14 pb-5'>
        <div className='flex flex-row flex-wrap items-start justify-between w-[85%]'>
                 {/* COMPANY */}
             <div className='flex flex-col items-start justify-start'>
                 <p className='text-[#1A0313] text-[19px] font-medium mb-3'>
                     Company
                 </p>
                 <p className='text-[#5C4C57] text-[17px] font-medium my-4'>
                     About
                 </p>
                 <p className='text-[#5C4C57] text-[17px] font-medium my-4'>
                     Blog 
                 </p>
                 <p className='text-[#5C4C57] text-[17px] font-medium mt-4'>
                     Help  
                 </p>
             </div>


                 {/* FOLLOW US */}
             <div className='flex flex-col items-start justify-start'>
                   <p className='text-[#1A0313] text-[19px] font-medium mb-3'>
                         Follow Us 
                   </p>

                  <div className='flex flex-row items-center justify-start my-4'>
                      <img className="mr-3 h-6.5 w-6.5"
                      src={instagram} alt="instagram" />
                      <p className='text-[#5C4C57] text-[17px] font-medium'>
                          Instagram
                      </p>
                  </div>

                  <div className='flex flex-row items-center justify-start my-4'>
                      <img className="mr-3 h-6.5 w-6.5"
                      src={facebook} alt="instagram" />
                      <p className='text-[#5C4C57] text-[17px] font-medium'>
                           Facebook
                      </p>
                  </div>

                  <div className='flex flex-row items-center justify-start my-4'>
                      <img className="mr-3 h-6.5 w-6.5"
                      src={x} alt="instagram" />
                      <p className='text-[#5C4C57] text-[17px] font-medium'>
                           X app 
                      </p>
                  </div>

             </div>


                  {/* RESOURCES */}
             <div className='flex flex-col items-start justify-start mt-12'>
                 <p className='text-[#1A0313] text-[19px] font-medium mb-3'>
                      Resources
                 </p>
                 <p className='text-[#5C4C57] text-[17px] font-medium my-4'>
                      Pricing 
                 </p>
                 <p className='text-[#5C4C57] text-[17px] font-medium my-4'>
                       Contact Us  
                 </p>
                 <div className='flex flex-row items-center justify-start my-4'>
                      <p className='text-[#5C4C57] text-[17px] font-medium'>
                           App Downloads  
                      </p>
                      <p className='flex items-center justify-center text-[#FFC655] text-[9px] font-medium h-6 w-20 bg-[#FFF9EE] rounded-2xl ml-1'>
                           Coming Soon 
                      </p>
                  </div>
             </div>


                              {/* ADDRESSS */}
             <div className='flex flex-col items-start justify-start mt-12'>
                   <p className='text-[#1A0313] text-[19px] font-medium mb-3'>
                         Address
                   </p>

                  <div className='flex flex-row items-start justify-start my-4'>
                      <img className="mr-3 h-6.5 w-6.5"
                      src={sms} alt="instagram" />
                      <p className='text-[#1A0313] text-[16px] font-medium'>
                           support@umscope.com
                      </p>
                  </div>

                  <div className='flex flex-row items-start justify-start my-4'>
                      <img className="mr-3 h-6.5 w-6.5"
                      src={location} alt="instagram" />
                      <p className='text-[#1A0313] text-[16px] font-medium'>
                             1216 Ibiyinka Olorunbe, <br /> Victoria Island, Lagos
                      </p>
                  </div>

              </div>

        </div>

        {/* FOOTER BOTTOM */}
        <div className="flex flex-col items-start justify-start w-full">
            <div className="flex flex-col items-start justify-start">
                 <p className='text-[#5C4C57] text-[17px] font-medium my-4'>
                      Terms & Conditions  
                 </p>
                 <p className='text-[#5C4C57] text-[17px] font-medium my-4'>
                       Privacy Policy  
                 </p>
                 <p className='text-[#5C4C57] text-[17px] font-medium my-4'>
                        Refund policy 
                 </p>
            </div>

            <div className="flex flex-row items-center justify-start w-full">
                <p className="text-[#331F2D] text-[17px] font-medium my-4 w-[80%]">
                     ©2023. Umscope Limited . All rights reserved
                </p>
            </div>

        </div>

    </div>
  )
}

export default Footer