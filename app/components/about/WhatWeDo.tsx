import React from 'react'


const WhatWeDo = () => {
  return (
    <div className='flex flex-col items-center justify-start w-full px-5 pt-10 md:flex-row md:items-start md:mt-14 lg:mt-20 lg:px-10 xl:px-16 xl:mt-32'>
      <div className='flex flex-col items-start justify-start w-full'>
        <p className='text-xl font-medium text-[#331F2D] md:text-2xl lg:text-3xl xl:text-[40px]'>
             What do we do ? 
        </p>
        <p className='text-sm font-medium text-[#331F2D] mt-5 leading-6 lg:text-base lg:leading-7 xl:text-xl xl:leading-10 xl:mt-12'>
             Umscopeticket.com is a secure and user friendly Event ticketing platform, built to provide every user with a unique experience either as an event organizer or attendee furthermore this site helps event lovers find upcoming event around them such as musical festivals, concerts, conferences, shows as well as seminars. We also use our social media platform to promote your event at no additional cost to the right audience.
             Umscopeticket.com specializes in handling event ticketing (Free & Paid), attendee registration and event check-in making your event ticketing process easy and affording you more time to attend to other aspect of the event.
             Using our online ticketing and event registration platform will save you time and money. Whether you are planning to sell tickets online for 100 to 50,000 people for your upcoming event.
             Umscopeticket.com can be used for all genres of events like concert & festival ticketing, virtual event ticketing, conference registrations, school event ticketing, exhibition ticketing, sport event ticketing and theatre ticketing.
        </p>
      </div>

      <div className='w-full h-full mt-8 md:ml-10 md:mt-0'>
        <img src={"/img/image3.svg"} alt="what_we_do" />
      </div>
    </div>
  )
}

export default WhatWeDo
