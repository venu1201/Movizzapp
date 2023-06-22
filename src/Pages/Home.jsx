import React from 'react'
import Banner from '../components/homecomponents/Banner'
import Trending from '../components/Sliders/Trending'
import Popular from '../components/Sliders/Popular'
// import Nowplaying from '../components/Sliders/Nowplaying'
import Toprated from '../components/Sliders/Toprated'
// import Upcoming from '../components/Sliders/Upcoming'
const Home = () => {
  return (
    <div className='text-white w-[100%]'>
        
        <Banner/>
        <Trending/>
        
        <Popular/>
        <Toprated/>
    </div>
  )
}

export default Home