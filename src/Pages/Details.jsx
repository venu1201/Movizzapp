import React from 'react'
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Itembanner from '../components/detailscomponents/Itembanner'
import Cast from '../components/detailscomponents/Cast';
import Videosec from '../components/detailscomponents/Videosec';
import Similar from '../components/Sliders/Similar';
import Recommended from '../components/Sliders/Recommended'
const Details = () => {
    const { mediaType, id } = useParams();
   const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);

   const { data: credits, loading: creditsLoading } = useFetch(
    `/${mediaType}/${id}/credits`
)
    console.log("detail",mediaType)
  return (
    <div className='text-white'>
        <Itembanner video={data?.results?.[0]} crew={credits?.crew}/>
        <Cast data={credits?.cast} loading={creditsLoading}/>
        <Videosec data={data} loading={loading}/>

        <Similar mediaType={mediaType} id={id} />
        <Recommended mediaType={mediaType} id={id}/>
    </div>
  )
}

export default Details