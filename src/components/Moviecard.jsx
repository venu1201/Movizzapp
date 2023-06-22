import React from "react";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Img from "../components/img";
import Rating from "../components/Rating";
import Posterfallback from "../assets/noposter.png";

const Moviecard = ({ data, fromsearch, mediaType }) => {
    const { url } = useSelector((state) => state.home);

    const posterurl = data?.poster_path ? url.poster + data?.poster_path : Posterfallback;
    const navigate = useNavigate();
    return (
        <div key={data?.id} className="h-full mb-5 md:min-w-[204px] sm:min-w-[170px] min-w-[140px]" onClick={() =>
            navigate(
                `/${data?.media_type || mediaType}/${data?.id
                }`
            )
        }>

            <div className="relative h-full w-full">

                <Img src={posterurl} className={`h-[270px] z-[-1] object-fill w-[204px] sm:min-w-[204px] md:w-[204px] shadow-md shadow-black`} />
                {!fromsearch && (
                    <Rating rating={data?.vote_average.toFixed(
                        1
                    )} classes={"w-[50px] absolute z-[100]  left-1  -bottom-6"} />
                )}

            </div>
            <div className="w-[204px] sm:min-w-[204px] md:w-[204px]  flex flex-col">
                <div className="mt-12 font-poppins h-7 leading-6 w- text-white  text-[16px] truncate">
                    {data?.title ? data?.title : data?.name}
                </div>
                <div className="mt-1 text-dimWhite">
                    <span>
                        {dayjs(data?.release_date || data?.first_air_date).format(
                            "MMM D, YYYY"
                        )}
                    </span>
                </div>
            </div>

        </div>
    )
}

export default Moviecard