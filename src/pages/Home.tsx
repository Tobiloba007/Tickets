import React from 'react'
import Navbar from '../components/general/Navbar'
import HomeIntro from '../components/home/HomeIntro'

type Props = {}

const Home = (props: Props) => {
  return (
    <div className='flex-col items-center w-full'>
        <Navbar />
        <HomeIntro />
    </div>
  )
}

export default Home