import React, { useState } from 'react'
import { FiPlus, FiMinus } from "react-icons/fi";


type Props = {}

const FaqSection = (props: Props) => {
    const [accordion, setAccordion] = useState<number | null>(null)

    const faq = [
        {
            id: 1,
            title: "What is umscope ticket?",
            answer: "scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
            id: 2,
            title: "How do I create my event",
            answer: "scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s"
        },
        {
            id: 3,
            title: "Why should I use Umscope ticket",
            answer: "scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
            id: 4,
            title: "How much does it cost to use Umscope ticket",
            answer: "scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting"
        },
    ]

    const handleAccordion = (item: number) => {
        setAccordion((prevIndex) => (prevIndex === item ? null : item))
    }

  return (
    <div className='flex items-center justify-center w-full'>
    <div className='flex flex-col items-start justify-start w-full bg-[#571845] py-14 pb-24 px-6 md:mt-3 md:px-8 lg:flex-row lg:items-start lg:justify-between lg:w-[92%] lg:px-28 lg:pb-28 xl:w-[90%] xl:pt-20 xl:pb-36'>
        <div className='flex flex-col items-start justify-start w-full lg:mt-12'>
            <p className='text-[23px] font-semibold text-[#ffffff] leading-8 md:text-[26px] lg:text-[30px] lg:leading-10 xl:text-[35px] xl:leading-[45px]'>
                Get to know us <br /> better.
            </p>
            <button className='text-[15px] font-semibold text-[#571845] text-center h-10 w-[135px] rounded-[9px] bg-[#ffffff] mt-5 lg:mt-6 xl:mt-8 xl:h-11 xl:w-[140px]'>
                See all FAQs
            </button>
        </div>

        <div className='flex flex-col items-center justify-start w-full mt-4 lg:mt-0'>
            {faq.map((item) => {
                return(
            <div className='flex flex-col items-center justify-start w-full mt-14 lg:mt-12'>
                <div className='flex flex-row items-start justify-between w-full'>
                     <p className='text-[18px] font-medium text-[#ffffff] leading-8 lg:text-[20px] lg:w-[80%] lg:leading-[40px] xl:text-[23px] xl:w-[70%]'>
                         {item.title}
                     </p>
                     <div onClick={()=>handleAccordion(item.id)}>
                         {accordion === item.id
                          ?<FiMinus className='w-[23px] h-[23px] text-[#ffffff]' />
                          :<FiPlus className='w-[23px] h-[23px] text-[#ffffff]' />
                         }
                     </div>
                </div>

                {accordion === item.id &&
                <p className='text-[14px] font-normal text-[#ffffff] leading-8 mt-2 xl:text-[17px]'>
                        {item.answer}
                </p>
                }

                <div className='w-full h-[0.5px] bg-[#ffffff] mt-[50px]'></div>
                {/* {accordion !== item.id && } */}
            </div>
                )
            })}
            
        </div>

    </div>
    </div>
  )
}

export default FaqSection