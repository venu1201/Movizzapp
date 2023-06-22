import React, { useState } from 'react'
import Videopop from '../Videopop'
import Img from '../img'
import { PlayIcon } from './Playbtn'
import './play.scss'
const Videosec = ({ data, loading }) => {
    const [showvideo, setshowvideo] = useState(false)
    const [videoid, setvideoid] = useState(null)
    //console.log("every",data?.results)
    return (
        <div className={`${data?.results?.length==0? "hidden":"flex"}`}>
            <div className='w-[99%] relative mt-10 flex  items-center flex-col'>
                <div className=' flex sm:w-[80%] w-[90%] ml-10 uppercase text-[25px] font-poppins font-semibold'>
                    Official Videos
                </div>
                {!loading ? (
                   
                      
                        <div className='flex mt-7 overflow-x-scroll sm:w-[80%] w-[90%] flex-row gap-3'>
                            {data?.results?.map((video) => (
                                <div key={video?.id} className='flex flex-col'>
                                    <div className='relative hover:opacity-[0.5] transition-all delay-300 ease-in-out z-[101] min-w-[220px] h-[150px]'>
                                        <div className='absolute playbtn top-[40px] left-[50px] z-[1000]' onClick={() => {
                                            setvideoid(video.key);
                                            setshowvideo(true)
                                        }}>
                                            <PlayIcon />

                                        </div>
                                        <Img
                                            className={"top-0 shadow-lg shadow-black min-w-[220px] h-[150px] z-[-700] object-fill"}
                                            src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`}
                                        />



                                    </div>
                                    <div className='mt-4 mb-3 flex justify-center items-center'>
                                        {video?.name}
                                    </div>
                                </div>
                            ))}

                        </div>
                      
                   


                ) : (
                    <div>

                    </div>
                )}

            </div>
            
            <div className={`absolute bg-blur z-[110] w-full h-full left-0 sm:top-[99%] top-[150%]   ${showvideo === true ? "flex" : "hidden"}`}>
                            <Videopop
                                showvideo={showvideo}
                                setshowvideo={setshowvideo}
                                videoid={videoid}
                                setvideoid={setvideoid}

                            />
                        </div>

        </div>
    )
}

export default Videosec