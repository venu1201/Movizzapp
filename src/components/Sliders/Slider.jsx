import React, { useRef } from "react";
import {
    BsFillArrowLeftCircleFill,
    BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Rating from '../Rating'
import dayjs from "dayjs";
import Img from "../img";
import Posterfallback from '../../assets/noposter.png';
//import CircleRating from "../circleRating/CircleRating";
const Slider = ({ data, loading,media_typesimilar,endpoint }) => {

    const carouselContainer = useRef();
    // const slidercontainer = useRef();
    const { url } = useSelector((state) => state.home);
    const navigate = useNavigate();
    // console.log(data);
    const navigation = (dir) => {
        const container = carouselContainer.current;

        const scrollAmount =
            dir === "left"
                ? container.scrollLeft - (container.offsetWidth + 20)
                : container.scrollLeft + (container.offsetWidth + 20);

        container.scrollTo({
            left: scrollAmount,
            behavior: "smooth",
        });
    };
    const bluring = () => {
        return (
            <div className="h-[320px] bg-black md:min-w-[204px] sm:min-w-[170px] min-w-[140px]">
                <div className="relative h-full w-full bg-blue-900">
                    <div className="h-full w-[140px] sm:min-w-[170px] md:w-[204px] shadow-md shadow-black">

                    </div>
                </div>
                <div className="w-full flex flex-col">
                    <div className="mt-12 font-poppins h-7 leading-6 w-full  text-[16px] truncate"></div>
                    <div className="mt-1 text-dimWhite"></div>
                </div>
            </div>
        );
    };
    return (
        <div className="flex mt-10 justify-center items-center w-full">

            <div className="flex w-full sm:px-0 px-2  justify-center items-center relative">
                <BsFillArrowLeftCircleFill className="md:flex hidden absolute w-[25px] z-[100] h-[25px] left-6 cursor-pointer hover:scale-125 opacity-[0.8] top-1/3" onClick={() => navigation("left")} />
                <BsFillArrowRightCircleFill className="md:flex hidden absolute w-[25px] z-[100] h-[25px] right-10 cursor-pointer hover:scale-125 opacity-[0.8] top-1/3" onClick={() => navigation("right")} />

                {
                    !loading ? (
                        <div ref={carouselContainer} className="  overflow-x-scroll md:gap-[20px] gap-[12px] flex flex-row w-full cursor-pointer ">
                            {data?.map((item) => {
                                const posterurl = item?.poster_path ? url.poster + item?.poster_path : Posterfallback;
                                console.log("item ",data?.length)
                                
                                return (
                                    <div key={item?.id} className={`h-full md:min-w-[204px] sm:min-w-[170px] min-w-[140px] `} onClick={() =>
                                        navigate(
                                            `/${item?.media_type || endpoint || media_typesimilar}/${item?.id
                                            }`
                                        )
                                    }>
                                        <div className="relative h-full w-full">

                                            <Img src={posterurl} className={`h-full z-[-1] object-cover w-[140px] sm:min-w-[170px] md:w-[204px] shadow-md shadow-black`} />
                                            <Rating rating={item?.vote_average.toFixed(
                                                1
                                            )} classes={"w-[50px] absolute z-[100]  left-1  -bottom-6"} />
                                        </div>
                                        <div className="w-full flex flex-col">
                                            <div className="mt-12 font-poppins h-7 leading-6 w-full  text-[16px] truncate">
                                                {item?.title ? item?.title : item?.name}
                                            </div>
                                            <div className="mt-1 text-dimWhite">
                                                <span>
                                                    {dayjs(item?.release_date || item?.first_air_date).format(
                                                        "MMM D, YYYY"
                                                    )}
                                                </span>
                                            </div>
                                        </div>

                                    </div>
                                )
                            })}


                        </div>
                    ) : (
                        <div className=" overflow-x-scroll md:gap-[20px] gap-[12px] flex flex-row w-full ">
                            {bluring()}
                            {bluring()}
                            {bluring()}
                            {bluring()}
                            {bluring()}


                        </div>
                    )
                }



            </div>


        </div>
    )
}

export default Slider