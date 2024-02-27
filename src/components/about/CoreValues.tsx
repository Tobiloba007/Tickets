import React from 'react'
import bullet from '../../assets/icons/bullet.svg'
import image1 from '../../assets/image5.svg'
import image2 from '../../assets/image4.svg'

const CoreValues = () => {
    const points = [
        {
            name: 'Communication',
            desc: 'As a remote team, clear and effective communication is important to us at Umscope  This enables us to collaborate as efficiently as possible and translate this trait into the way we communicate our key products and offerings to our customers.'
        },
        {
            name: 'Communication',
            desc: 'As a remote team, clear and effective communication is important to us at Umscope  This enables us to collaborate as efficiently as possible and translate this trait into the way we communicate our key products and offerings to our customers.'
        },
        {
            name: 'Communication',
            desc: 'As a remote team, clear and effective communication is important to us at Umscope  This enables us to collaborate as efficiently as possible and translate this trait into the way we communicate our key products and offerings to our customers.'
        },
        {
            name: 'Communication',
            desc: 'As a remote team, clear and effective communication is important to us at Umscope  This enables us to collaborate as efficiently as possible and translate this trait into the way we communicate our key products and offerings to our customers.'
        },
        {
            name: 'Communication',
            desc: 'As a remote team, clear and effective communication is important to us at Umscope  This enables us to collaborate as efficiently as possible and translate this trait into the way we communicate our key products and offerings to our customers.'
        },
        {
            name: 'Communication',
            desc: 'As a remote team, clear and effective communication is important to us at Umscope  This enables us to collaborate as efficiently as possible and translate this trait into the way we communicate our key products and offerings to our customers.'
        },
    ]

  return (
    <div className='flex flex-col items-start justify-start w-full px-5 mt-12 md:mt-20 lg:mt-20 lg:px-10 xl:px-16 xl:mt-40'>
         <div className='flex items-start justify-start w-full md:w-[50%] lg:w-[44%] xl:w-[40%]'>
             <p className='text-xl font-medium text-[#331F2D] md:text-2xl lg:text-3xl xl:text-[40px] xl:leading-[50px]'>
                  Our core values -what makes us special
             </p>
         </div>

         <div className='flex flex-row items-center justify-start flex-wrap mt-3 md:justify-between xl:mt-3'>
            {points.map((item, index)=>{
                return(
            <div key={index} className='flex flex-col items-start justify-start w-full mt-8 md:w-[43%] lg:w-[37%] lg:mt-14 xl:w-[35%] xl:mt-20'>
                <img className='h-6 w-6 xl:h-8 xl:w-8'
                src={bullet} alt="bullet" />
                <p className='text-base font-medium text-[#331F2D] mt-3 lg:text-lg xl:text-2xl xl:mt-6'>
                       {item.name}
                 </p>
                <p className='text-sm font-medium text-[#331F2D] mt-3 xl:text-lg'>
                       {item.desc}
                 </p>
            </div>
                )
            })}

         </div>


         <div className='flex flex-row flex-wrap items-center justify-center w-full mt-16 md:flex-row md:justify-between md:flex-nowrap md:items-start'>
             <img className='h-full w-full md:w-[49.5%] md:h-full'
             src={image2} alt="second" />
             <img className='h-full w-full mt-7 md:w-[49.5%] md:h-[31rem] md:mt-0 lg:h-[40rem] xl:h-[55.7rem]'
             src={image1} alt="first_image" />
         </div>

    </div>
  )
}

export default CoreValues
