import React from 'react'
import ReactPlayer from "react-player/youtube"
import { VscChromeClose } from "react-icons/vsc";
const Videopop = ({showvideo,setshowvideo,videoid,setvideoid}) => {
    const hidepop=()=>{
        setshowvideo(false)
        setvideoid(null)
    }
  return (
    <div className='flex justify-center items-center w-full h-full'>
        <div className='relative  ssm:h-[500px] ssm:w-[900px] sm:h-[450px] sm:w-[700px] ss:h-[450px] ss:w-[500px] ms:h-[300px] ms:w-[400px] h-[280px] w-[320px]'>
            <span className='-top-5 flex justify-end bg-black right-0'><VscChromeClose className='w-7 h-7 cursor-pointer hover:scale-110' onClick={hidepop}/></span>
            <ReactPlayer
                url={`https://www.youtube.com/watch?v=${videoid}`}
                controls
                width="100%"
                height="100%"
                playing
            
            />
        </div>
    </div>
  )
}

export default Videopop