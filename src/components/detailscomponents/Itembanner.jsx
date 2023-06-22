import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";


import useFetch from "../../hooks/useFetch";
import Rating from "../Rating";
import Img from "../img";
import { PlayIcon } from "./Playbtn";
import './play.scss'
import PosterFallback from "../../assets/noposter.png";
import { space } from "postcss/lib/list";
import FacebookPlayer from "react-player/facebook";
import Videopop from "../Videopop";
const Itembanner = ({ video, crew }) => {
    const { mediaType, id } = useParams();
    const { data, loading } = useFetch(`/${mediaType}/${id}`);
    //console.log(data);
    const { url } = useSelector((state) => state.home);
    const director = crew?.filter((f) => f.job === "Director");
    const writer = crew?.filter(
        (f) => f.job === "Screenplay" || f.job === "Story" || f.job === "Writer"
    );
    //console.log("hey",director)
    const toHoursAndMinutes = (totalMinutes) => {
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
    };
    
    const [showvideo, setshowvideo] = useState(false);
    const [videoid, setvideoid] = useState(null);
    return (
        <div className="w-full h-full relative mt-[70px]">
            {!loading? (
                <div className="h-full  w-full  ">
                    <div className="opacity-[0.2] w-screen h-screen absolute top-0 left-0 overflow-hidden">
                        <Img className={'w-screen h-screen bg-repeat-y object-fill object-center'} src={url.backdrop + data?.backdrop_path} />
                        <div className="w-screen h-screen absolute bottom-0 opacity-[0.8] left-0" style={{ 'background': "linear-gradient(180deg,rgba(4, 21, 45, 0) 0%,#04152d 79.17%)" }}></div>

                    </div>
                    <div className="lg:mx-[80px] mx-0    ss:p-10 p-5 ">
                        <div className="flex w-full relative sm:flex-row flex-col gap-10">
                            <div className="flex-shrink-0 sm:flex-none flex ss:justify-center justify-start items-center">
                                {data?.poster_path ? (
                                    <Img className={"ms:h-[500px] xs:h-[400px] h-[380px] rounded-t-[30px] shadow-lg shadow-black ms:min-w-[400px] xs:min-w-[300px] min-w-[200px]  "} src={url.backdrop + data?.poster_path} />
                                ) : (
                                    <Img className={"ms:h-[500px] xs:h-[400px] h-[380px] rounded-t-[30px] shadow-lg shadow-black ms:min-w-[400px] xs:min-w-[300px] min-w-[200px] "} src={PosterFallback} />
                                )}
                            </div>
                            <div className="ms:px-3 ">
                                <div className="mt-5 font-poppins text-[30px]">
                                    {`${data?.name || data?.title} (${dayjs(data?.release_date).format("YYYY")})`}
                                </div>
                                <div className="mt-3 text-dimWhite text-[20px]">
                                    {data?.tagline}
                                </div>
                                <div className="mt-5 flex flex-wrap gap-4">
                                    {data?.genres?.map((item, index) => (
                                        <div key={index} className="bg-red-500  rounded-md p-2 ">{item?.name}</div>
                                    ))}
                                </div>
                                <div className="mt-5 flex flex-row">
                                    <Rating rating={data?.vote_average?.toFixed(
                                        1
                                    )} classes={"w-[80px] z-[100] "} />
                                    <div
                                        className="playbtn "
                                        onClick={()=>{
                                            setshowvideo(true);
                                            setvideoid(video.key)
                                        }}
                                    >
                                        <PlayIcon/>
                                        <span className="text ">
                                            Watch Trailer
                                        </span>
                                    </div>
                                </div>
                                <div className="flex flex-col mt-5">
                                    <div className="font-poppins text-[30px] font-semibold">
                                        Overview
                                    </div>
                                    <div className="mt-4 text-dimWhite md:text-[14px] text-[12px]">
                                        {data?.overview}
                                    </div>
                                </div>
                                <div className="mt-5 flex gap-5 xs:flex-row flex-col xs:justify-evenly border-t-[1px] border-b-[1px] p-3 border-t-dimWhite border-b-dimWhite">
                                    {data?.status && (
                                        <div className="flex lg:flex-row xs:flex-col flex-row gap-2">
                                            <span className="flex justify-center items-center">
                                                Status  {" "}
                                            </span>
                                            <span className="ml-1 text-dimWhite">
                                                {data?.status}
                                            </span>
                                        </div>
                                    )}
                                    {data?.release_date && (
                                        <div className="flex lg:flex-row xs:flex-col flex-row gap-2">
                                            <span className="flex justify-center items-center">
                                                Release Date  {" "}
                                            </span>
                                            <span className="ml-1 text-dimWhite">
                                                {dayjs(data?.release_date).format("MMM D,YYYY")}
                                            </span>
                                        </div>
                                    )}
                                    {data?.runtime && (
                                        <div className="flex lg:flex-row xs:flex-col flex-row gap-2">
                                            <span className="flex justify-center items-center">
                                                Runtime  {" "}
                                            </span>
                                            <span className="ml-1 text-dimWhite">
                                                {toHoursAndMinutes(data?.runtime)}
                                            </span>
                                        </div>
                                    )}
                                </div>
                                {director?.length>0 && (
                                    <div className="p-5 border-b-[1px] flex gap-2 border-b-dimWhite">
                                        <span className="font-bold w-[100px] font-poppins">
                                            Director 
                                        </span>
                                        <span className="text-dimWhite flex flex-wrap gap-1">
                                            {director?.map((d,i)=>(
                                                <span key={i}>
                                                    {d.name}
                                                    {director.length-1 !== i && ", "}
                                                </span>
                                            ))}
                                        </span>
                                    </div>
                                )}
                                 {writer?.length>0 && (
                                    <div className="p-5 border-b-[1px] flex gap-2 border-b-dimWhite">
                                        <span className="font-bold w-[100px] font-poppins">
                                            Writer 
                                        </span>
                                        <span className="text-dimWhite flex flex-wrap gap-1">
                                            {writer?.map((d,i)=>(
                                                <span key={i}>
                                                    {d.name}
                                                    {writer.length-1 !== i && ", "}
                                                </span>
                                            ))}
                                        </span>
                                    </div>
                                )}
                                 {data?.created_by?.length>0 && (
                                    <div className="p-5 border-b-[1px] flex gap-2 border-b-dimWhite">
                                        <span className="font-bold font-poppins">
                                            Creator 
                                        </span>
                                        <span className="text-dimWhite flex flex-wrap gap-1">
                                            {data?.created_by?.map((d,i)=>(
                                                <span key={i}>
                                                    {d?.name}
                                                    {data?.created_by?.length-1 !== i && ", "}
                                                </span>
                                            ))}
                                        </span>
                                    </div>
                                )}
                               
                            </div>
                        </div>
                    </div>
                    <div className={`absolute bg-blur z-[105] w-full h-full left-0 top-0 ${showvideo===true? "flex":"hidden"}`}>
                            <Videopop
                                showvideo={showvideo}
                                setshowvideo={setshowvideo}
                                videoid={videoid}
                                setvideoid={setvideoid}

                            />
                    </div>

                </div>
            ) : (
                <div className="h-full  w-full ">
                    <div className="lg:mx-[40px] mx-0    ss:p-10 p-5 ">
                        <div className=" gap-5 lg:mx-[40px] mx-0 flex md:flex-row flex-col     ss:p-10 p-5">
                            <div className=" bg-blue-900 ms:h-[500px] xs:h-[400px] h-[380px] rounded-t-[30px] shadow-lg shadow-black ms:min-w-[400px] xs:min-w-[300px] min-w-[200px] ">

                            </div>
                            <div className="ms:px-3 bg-blue-900 h-[500px] w-full rounded-3xl">

                            </div>
                        </div>
                    </div>
                </div>
            )}


        </div>
    )
}

export default Itembanner