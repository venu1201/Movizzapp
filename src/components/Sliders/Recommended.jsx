import React, { useEffect, useState } from 'react'
import Switch from './Switch'
import useFetch from '../../hooks/useFetch'
import Slider from './Slider'
const Similar = ({mediaType,id}) => {
 
    const { data, loading, error } = useFetch(
        `/${mediaType}/${id}/recommendations`
    );
  //console.log(data);
  const title = mediaType === "tv" ? "Similar TV Shows" : "Similar Movies";
  
  return (
    <div className={`flex flex-col justify-center items-center w-[99%]  mt-10 ${data?.results?.length===0?"hidden":""}`}>
      <div className='flex sm:w-[80%] w-[90%] ml-10 uppercase text-[25px] font-poppins font-semibold'>
        
      Recommendations
        
        
      </div>
      <div className='flex mt-3 overflow-x-scroll sm:w-[80%] w-[90%] flex-row gap-3'>

        <Slider data={data?.results} loading={loading}/>
      </div>

    </div>
  )
}

export default Similar