import React, { useEffect, useState } from 'react'
import DiscoverIntro from '../components/discover/DiscoverIntro'
import TrendingEvents from '../components/discover/TrendingEvents'
import PopularEvents from '../components/discover/PopularEvents'
import Footer from '../components/general/Footer'
import GeneralEvent from '../components/discover/GeneralEvent'
import { useLocation } from 'react-router-dom'

const Discover = () => {
  const [selectAll, setSelectedAll] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className='font-outfit bg-[#FAFAFA]'>
        <DiscoverIntro />
        {
          selectAll
          ? <GeneralEvent />
          :<>
            <TrendingEvents />
            <PopularEvents />
          </>
        }

        <div className='flex items-center justify-center w-full mt-20 mb-20 md:mt-24'>
             <button onClick={() => setSelectedAll(!selectAll)}
             className='text-center text-white bg-[#571845] rounded-md font-medium h-9 px-7 text-xs lg:px-9 xl:h-11 xl:px-9 xl:text-base'>
                   {
                    selectAll ? 'View suggested events' : 'View all events'
                   }
             </button>
        </div>

        <Footer />
    </div>
  )
}

export default Discover
