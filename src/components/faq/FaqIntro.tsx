import React, { useState } from 'react'
import Navbar from '../general/Navbar'
import { FiPlus, FiMinus } from "react-icons/fi";



type Props = {}

const FaqIntro = (props: Props) => {
    const [accordion, setAccordion] = useState<number | null>(null);
    const [selected, setSelected] = useState<string>('General');

    const tabs = ['All', 'General', 'Events', 'Tickets']

    const handleTab = (item: string) => {
        setSelected(item)
        console.log(selected);
    }

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
    <div className='flex flex-col items-center justify-start w-full xl:mb-10'>
        <Navbar />

        <div className='flex flex-col items-center justify-start w-full bg-white mt-14 md:items-start md:mt-20 lg:mt-24 xl:mt-28'>
            <p className='text-[25px] text-center font-semibold px-5 text-[#571845] text-3xl md:text-start md:text-2xl md:px-10 
            lg:px-12 lg:text-[32px] lg:leading-10 xl:text-[40px] xl:leading-[50px] xl:px-24'>
                  Frequently Asked <br />Question
            </p>

            <div className='flex items-center justify-start w-full font-medium mt-8 overflow-x-auto [&>div]:flex-shrink-0 hide-scrollbar 
            md:px-5 xl:px-20 xl:my-14'>
                   {tabs.map((item, index) => {
                        return(
                   <div key={index} onClick={()=>handleTab(item)}
                   className={`flex items-center justify-center text-sm font-medium text-[#571845] h-8 rounded-2xl w-24 mx-5
                               ${selected === item && 'text-white bg-[#571845]'} xl:text-lg xl:w-28 xl:h-9 xl:rounded-3xl`}>
                              {item}
                   </div>
                   )
                  })}
            </div>

            <p className='text-xl text-[#571845] font-medium text-start w-full px-5 mt-12 md:px-10 md:text-2xl lg:px-12 xl:px-24 xl:text-3xl xl:mt-6'>
                  {selected} questions
            </p>


            <div className='flex flex-col items-center justify-start w-full px-5 mt-4 lg:mt-0 md:px-10 lg:px-12 xl:px-24'>
            {faq.map((item) => {
                return(
            <div key={item.id} className='flex flex-col items-center justify-start w-full mt-14 lg:mt-12'>
                <div className='flex flex-row items-start justify-between w-full'>
                     <p className='text-[18px] font-medium text-[#331F2D] leading-8 lg:text-[20px] lg:w-[80%] lg:leading-[40px] xl:text-[23px] xl:w-[70%]'>
                         {item.title}
                     </p>
                     <div onClick={()=>handleAccordion(item.id)}>
                         {accordion === item.id
                          ?<FiMinus className='w-[23px] h-[23px] text-[#331F2D]' />
                          :<FiPlus className='w-[23px] h-[23px] text-[#331F2D]' />
                         }
                     </div>
                </div>

                {accordion === item.id &&
                <p className='text-[14px] font-normal text-[#331F2D] leading-8 mt-2 xl:text-[17px]'>
                        {item.answer}
                </p>
                }

                <div className='w-full h-[0.5px] bg-[#331F2D] mt-[50px]'></div>
                {/* {accordion !== item.id && } */}
            </div>
                )
            })}
            
             </div>

        </div>
    </div>
  )
}

export default FaqIntro
