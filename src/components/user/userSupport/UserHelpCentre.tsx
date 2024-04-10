import React from 'react'
import { CiSearch } from "react-icons/ci";
import issues from '../../../assets/icons/issues.svg'
import resources from '../../../assets/icons/resources.svg'
import faq from '../../../assets/icons/faq.svg'


interface componentProps {
  setCreateIssue: React.Dispatch<React.SetStateAction<number>>;
}

export const UserHelpCentre: React.FC<componentProps> = (props) => {
  const items = [
    {
      id: 1,
      icon: issues,
      title: 'Issues',
      desc: 'Create an issue and our team will be on standby to assist you through the problem',
      button: 'Create Issue',
    },
    {
      id: 2,
      icon: resources,
      title: 'Resources',
      desc: 'Find and read articles that will guide you or answers your questions',
      button: 'Proceed',
    },
    {
      id: 3,
      icon: faq,
      title: 'FAQs',
      desc: 'Find some frequently asked questions answers here.',
      button: 'Proceed',
    }
  ]

  const handleSubmit = (item: number) => {
    if(item === 1){
      props.setCreateIssue(1)
    }
  }

  return (
    <div className='flex flex-col items-start justify-start w-full h-full'>
          <p className='text-xl font-bold text-[#571845] w-full text-start lg:hidden'>Support Channel</p>

          <div className='flex flex-col items-center justify-start w-full mt-10 lg:mt-7'>
             <p className='text-lg font-bold text-[#571845] text-center md:text-xl xl:text-2xl'>Help Centre</p>
             <p className='text-xs font-medium text-[#331F2D] text-center mt-1 md:text-sm xl:text-base xl:mt-2'>
                 Having any difficulty or questions? <br /> We are here to assist you every step of the way.
             </p>
             <div className='relative w-full mt-6 md:w-[60%] xl:w-[45%]'>
                 <input className='w-full h-10 rounded-lg border-[1px] border-[#dddddd] pl-4 text-[#331F2D] placeholder:text-[#331F2D] 
                                   text-[10px] outline-[#EEE8EC] md:h-11 md:text-xs lg:h-12 xl:h-16 xl:text-sm xl:pl-5'
                 placeholder='Enter Keyword'
                 type="text" />
                 <div className='absolute top-[6px] right-4 flex items-center justify-start lg:top-[9px] xl:top-[12px] xl:right-5'>
                    <div className='flex justify-start items-center'>
                      <div className='h-[25px] w-[1.5px] bg-[#571845] opacity-40 lg:h-[30px] xl:h-[40px]'></div>
                      <p className='text-[10px] text-[#331F2D] ml-2 md:text-xs xl:text-sm xl:ml-3'>General</p>
                    </div>
                    <div className='flex items-center justify-center h-7 px-3 bg-[#571845] rounded-md text-white ml-5 lg:ml-12 
                                    xl:h-9 xl:ml-16'>
                        <CiSearch className='xl:text-xl' />
                       <p className='text-[11px] text-white ml-[6px] font-light md:text-xs xl:text-sm xl:ml-2'>
                           Search
                       </p> 
                    </div>
                 </div>
             </div>
          </div>


          <div className='flex flex-col items-center justify-start w-full my-7 md:mt-14 md:flex-row-reverse md:justify-between xl:mt-20 xl:justify-center'>
            {items.map((item) => {
              return(
              <div className='flex flex-col items-start justify-center w-[90%] bg-white rounded-lg border-[1px] 
                            border-[#EEE8EC] p-4 mb-5 md:mx-2 md:h-60 lg:mx-2 xl:mx-4 xl:w-[320px] xl:h-64'>
                 <div className='flex items-center justify-center h-10 w-10 bg-[#EEE8EC] rounded-lg'>
                     <img className='w-6' src={item.icon} alt="box-icon" />
                 </div>
                 <p className='text-base font-bold text-[#1A0313] mt-3'>{item.title}</p>
                 <p className='text-xs font-medium text-[#331F2D] text-start mt-2 lg:text-[12px] xl:text-sm'>
                     {item.desc}
                 </p>
                 <div className='w-full border-[1px] border-[#E1DEE0] rounded-2xl my-5 opacity-40 xl:my-7'></div>
                 <button onClick={()=>handleSubmit(item.id)}
                  className='h-8 px-5 bg-[#571845] rounded-md text-center text-white text-xs xl:h-9 xl:text-sm'>
                      {item.button}
                 </button>
              </div>
              )
            })}
          </div>

    </div>
  )
}

