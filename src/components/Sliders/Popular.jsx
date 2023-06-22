import React, { useEffect, useState } from 'react'
import Switch from './Switch'
import useFetch from '../../hooks/useFetch'
import Slider from './Slider'
const Popular = () => {
  const [endpoint, setendpoint] = useState("movie")
  const {data,loading}=useFetch(`/${endpoint}/popular`);
  //console.log(data);
  
  const ontabchange=(tab,index)=>{
      if(tab==="Movies")
      {
        setendpoint("movie");
      }
      else
      {
        setendpoint("tv");
      }
  }
  return (
    <div className='flex flex-col justify-between items-center w-full  mt-10'>
      <div className='flex justify-around md:w-[1100px] w-full  items-center '>
        <h1 className='flex h-[40px] xs:mr-10 mr-3  ss:mr-0 justify-center uppercase font-poppins ss:text-[25px] xs:text-[20px] text-[17px] items-center'>
          Popular Stuff
        </h1>
        <div className='flex justify-between items-center'>
          <Switch data={["Movies","Shows"] } ontabchange={ontabchange} />
        </div>
      </div>
      <div className='flex justify-center md:w-[1100px] w-full items-center'>

        <Slider data={data?.results} loading={loading} endpoint={endpoint}/>
      </div>

    </div>
  )
}

export default Popular