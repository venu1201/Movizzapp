import React from 'react'
import { useSelector } from 'react-redux'
import Img from '../img'
import avatar from '../../assets/avatar.png'
const Cast = ({data,loading}) => {
    const {url} =useSelector((state)=>state.home)
    const blur=()=>{
        return (
            <div className=''>
                <div>
                    <div className=' bg-blue-900 h-[150px] w-[150px] rounded-full'>

                    </div>
                </div>
            </div>
        )
    };
  return (
    <div>
        <div className='w-[99%] mt-10 flex  items-center flex-col '>
            <div className=' flex sm:w-[80%] w-[90%] ml-10 uppercase text-[25px] font-poppins font-semibold'>
                Top Cast
            </div>
            {!loading?(
                <div className='flex mt-7 overflow-x-scroll sm:w-[80%] w-[90%] flex-row gap-3'>
                    {data?.map((item)=>{
                        let imgurl=item?.profile_path? url.profile+item?.profile_path:avatar;
                        return (
                            <div key={item?.id} className='flex flex-col '>
                                <div className='rounded-full'>
                                    <Img className={"rounded-full h-[150px] min-w-[150px] object-fill"} src={imgurl}/>
                                </div>
                                <div className='flex justify-center items-center mt-4 text-[16px]'>
                                    {item?.name}
                                </div>
                                <div className='flex justify-center items-center mt-3 text-dimWhite text-[14px]'>
                                    {item?.character}
                                </div>
                            </div>
                        )
                    })}
                </div>
            ):(
                <div className='flex flex-row gap-3'>
                    {blur()}
                    {blur()}
                    {blur()}
                    {blur()}
                    {blur()}

                </div>
            )}




        </div>



    </div>
  )
}

export default Cast