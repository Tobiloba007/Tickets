import { RiSearch2Line } from "react-icons/ri";


type Props = {}

const HowItWorks = (props: Props) => {
  return (
    <div className='flex-col items-center justify-center  w-full mt-[22rem] px-6 pb-10 md:mt-[18rem] md:px-8 lg:mt-[20rem] lg:px-10 lg:pb-20 xl:mt-[38rem] xl:px-16'>
        <p className='text-[28px] font-semibold text-[#571845] text-center md:text-[32px] lg:text-[37px] xl:text-[45px]'>
            How it Works 
        </p>

        <div className='flex flex-col items-center justify-start w-full mt-12 md:flex-row md:items-center xl:mt-16'>
            <div className='flex flex-row items-start justify-start w-full lg:w-[35%] lg:items-center'>
                <div className='flex flex-col items-center justify-start w-[25px] h-[500px] bg-[#ffffff] rounded-[50px] md:h-[450px] lg:h-[550px] lg:w-[35px] xl:h-[635px]'>
                   <div className='w-full h-[18%] bg-[#FFC655] rounded-[50px]'></div>
                </div>

                <div className='flex flex-col items-start justify-start ml-6 md:ml-5 lg:ml-6 lg:mr-12 xl:ml-7 xl:mr-[150px]'>
                    <div>
                        <p className='text-[21px] text-[#2A1D34] font-medium xl:text-[26px]'>
                             Choose What To Do
                        </p>
                        <p className='text-[17px] text-[#2A1D34] font-medium mt-4 lg:text-[16px] lg:mt-2 xl:text-[18px]'>
                             Easily find events through search system with multiple parameters 
                        </p>
                    </div>

                    <div className='mt-24 md:mt-[70px] lg:mt-24'>
                        <p className='text-[21px] text-[#2A1D34] font-medium xl:text-[26px]'>
                             Booking event that you like
                        </p>
                        <p className='text-[17px] text-[#2A1D34] font-medium mt-4 lg:text-[16px] lg:mt-2 xl:text-[18px]'>
                             Select your event and buy a ticket. Support payment via Flutterwave. 
                        </p>
                    </div>

                    <div className='mt-24 md:mt-[70px] lg:mt-24'>
                        <p className='text-[21px] text-[#2A1D34] font-medium xl:text-[26px]'>
                             Receive ticket for attendance 
                        </p>
                        <p className='text-[17px] text-[#2A1D34] font-medium mt-4 lg:text-[16px] lg:mt-2 xl:text-[18px]'>
                             Upon successful booking, you will receive the ticket via email or can download it from your account.
                        </p>
                    </div>

                </div>
            </div>


            <div className='flex flex-col items-start justify-start w-full h-[325px] bg-[#ffffff] px-6 pt-8 rounded-[12px] mt-8 md:mt-0 md:h-[350px] lg:h-[525px] lg:w-[65%] 
            lg:rounded-[15px] lg:px-10 lg:pt-12 xl:h-[600px] xl:px-12 xl:pt-14'>
                <div>
                    <div className='h-[7px] w-[135px] bg-[#F5F5F6] rounded-[9px] md:h-[9px] md:w-[160px] lg:h-[10px] lg:w-[250px] xl:h-[12px] xl:w-[320px]'></div>
                    <div className='h-[7px] w-[95px] bg-[#F5F5F6] rounded-[9px] mt-3 md:h-[9px] md:w-[100px] lg:h-[10px] lg:w-[150px] lg:mt-4 xl:h-[12px] xl:w-[215px]'></div> 
                </div>

                <p className='text-[14px] text-[#2A1D34] font-medium my-4 md:text-[15px] lg:text-[16px] lg:pt-2 xl:text-[19px] xl:pt-3 xl:mb-5'>
                      Discover events 
                 </p>

                 <div className="relative w-[98%] h-[35.5px] md:h-[40px] lg:h-[55px] xl:h-[65px]">
                      <input className='h-full w-full rounded-[5px] border-[0.7px] border-[#571845] border-solid outline-none bg-[#F5F5F6] pl-3 text-[10px] 
                      md:text-[11px] lg:rounded-[7px] lg:pl-4 lg:text-[12px] xl:rounded-[8px] xl:text-[15px] xl:pl-5'
                      type="text" 
                      />
                      <RiSearch2Line className="absolute top-[10px] right-3 w-[15px] lg:top-4 lg:w-[20px] lg:h-[20px] lg:right-4 xl:w-[27px] xl:h-[27px] xl:top-5"
                      color="#331F2D" />
                 </div>

                 <div className="flex flex-col items-start justify-start w-full lg:mt-3">
                       <p className='text-[9px] text-[#766871] font-medium my-4 md:text-[10px] lg:text-[12px] xl:text-[14px] xl:my-5'>
                             2 events found 
                       </p>

                       <div className="flex flex-row items-center justify-start w-full">
                           <div className="w-[88.5px] h-[95.7px] rounded-[7px] bg-[#FDF6E9] border-solid border-[#dedddd] border-[0.4px] mr-2 md:h-[110px] md:w-[100px] 
                           lg:h-[175px] lg:w-[150px] lg:rounded-[8px] lg:mr-3 xl:h-[210px] xl:w-[190px] xl:mr-4"></div>
                           <div className="w-[88.5px] h-[95.7px] rounded-[7px] bg-[#FDF6E9] border-solid border-[#dedddd] border-[0.4px] mr-2 md:h-[110px] md:w-[100px] 
                           lg:h-[175px] lg:w-[150px] lg:rounded-[8px] lg:mr-3 xl:h-[210px] xl:w-[190px] xl:mr-4"></div>
                       </div>
                 </div>
            </div>

        </div>

    </div>
  )
}

export default HowItWorks