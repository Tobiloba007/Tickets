import React from 'react'
import bullet from '../../assets/icons/bullet.svg'
import image1 from '../../assets/image5.svg'
import image2 from '../../assets/image4.svg'

const CoreValues = () => {
    const points = [
        {
            name: 'Integrity',
            desc: "Integrity is at the heart of our mission. As a secure and user-friendly event ticketing platform, we prioritize honesty, transparency, and reliability. Whether you're a host or attendee, our commitment to integrity ensures a unique and trustworthy experience. Discover upcoming events effortlessly, while our platform handles ticketing, registrations, and check-ins with utmost integrity. Your trust is our priority, making Umscopeticket the ideal choice for all your event needs."
        },
        {
            name: 'User-Centric',
            desc: "Step into a world of personalized event experiences with Umscopeticket. Our commitment to being truly user-centric sets us apart. As a secure and effortlessly navigable ticketing platform, we prioritize your comfort and convenience. Explore upcoming events, from vibrant festivals to insightful conferences, with a user-friendly ticketing process that caters to your preferences."
        },
        {
            name: 'Innovation',
            desc: 'Experience the future of event engagement at Umscopeticket, where innovation takes center stage. Discover upcoming events effortlessly, spanning festivals, conferences, and more, all within an intuitively designed platform. Our commitment to innovation extends to revolutionizing the ticketing process, providing a dynamic and forward-thinking approach. Choose Umscopeticket for an event journey that reflects the latest in technological innovation, making every interaction a testament to our commitment to progress.'
        },
        {
            name: 'Creativity',
            desc: 'Unleash your event journey with a touch of innovation and artistic flair at Umscopeticket. Our platform is a hub of creativity, where every event is a unique masterpiece waiting to be explored. Seamlessly navigate through upcoming festivals, conferences, and more, presented in a visually stunning environment. Our user-centric approach is a fusion of functionality and creativity, offering an immersive ticketing process tailored to your artistic preferences.'
        },
    ]

  return (
    <div className='flex flex-col items-start justify-start w-full px-5 mt-12 md:mt-20 lg:mt-20 lg:px-10 xl:px-16 xl:mt-40'>
         <div className='flex items-start justify-start w-full md:w-[50%] lg:w-[44%] xl:w-[40%]'>
             <p className='text-xl font-medium text-[#331F2D] md:text-2xl lg:text-3xl xl:text-[40px] xl:leading-[50px]'>
                  Our core values -what makes us special
             </p>
         </div>

         <div className='flex flex-row items-start justify-start flex-wrap mt-3 md:justify-between xl:mt-3'>
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
             <img className='h-full w-full md:w-[49.5%] md:h-full lg:h-[40rem] xl:h-[55.7rem]'
             src={image2} alt="second" />
             <img className='h-full w-full mt-7 md:w-[49.5%] md:h-[31rem] md:mt-0 lg:h-[40rem] xl:h-[55.7rem]'
             src={image1} alt="first_image" />
         </div>

    </div>
  )
}

export default CoreValues
