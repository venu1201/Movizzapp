import React, { useEffect, useState } from 'react'
import useFetch from '../../hooks/useFetch'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LazyLoadImage } from "react-lazy-load-image-component";
const Banner = () => {
    const { data, loading } = useFetch('/movie/upcoming');
    const [background, setbackground] = useState("");
    const [searchstr, setsearchstr] = useState("")
    const { url } = useSelector((state) => state.home);
    const [bgimgdata, setBgImgData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        
           // console.log(data.results)
          setBgImgData(data?.results);
        
      }, [data]);
    
      useEffect(() => {
        let intervalId;
        if (bgimgdata?.length > 0) {
          let index = Math.floor(Math.random()*20);
          setbackground(url.backdrop+bgimgdata?.[index]?.backdrop_path);
    
          intervalId = setInterval(() => {
            index = Math.floor(Math.random()*20) % bgimgdata?.length;
            setbackground(url.backdrop+bgimgdata?.[index]?.backdrop_path);
          }, 15000);
        }
    
        return () => {
          clearInterval(intervalId);
        };
      }, [bgimgdata]);

    const searchstrhandler = (e) => {
        if (e.key == "Enter" && searchstr.length > 0) {
            navigate(`/search/${searchstr}`);
        }
    };
    const func1 = () => {
        if (searchstr.length > 0) {
            navigate(`/search/${searchstr}`)
        }
    }
    return (
        <div className="md:h-[700px] h-[600px] relative w-[100%]  flex justify-center ">

            {!loading && (

                <div className="h-full pb-3 w-full opacity-[0.7] absolute left-0 top-0 overflow-hidden flex justify-center items-center">
                    {/* <Img src={background} className="h-full w-full object-fill  " /> */}
                    <LazyLoadImage src={background} alt="" className="h-full w-full object-fill"     />
                </div>
            )}
            <div className=" w-full h-[220px] bg-gradient2 absolute bottom-0 left-0 "></div>

            <div className='flex justify-center items-center'>
                <div className="flex flex-col items-center text-center text-white relative w-full mx-0 my-auto">
                    <span className="md:text-[90px] xs:text-[50px] text-[40px] font-bold md:mb-3 mb-4 uppercase">Welcome.</span>
                    <span className="md:text-[24px] text-dimWhite xs:text-[18px] text-[15px] font-medium mb-[40px]">
                        Millions of movies, TV shows and people to discover.
                        Explore now.
                    </span>
                    <div className="flex items-center md:w-full ss:w-[90%] w-[75%] ">
                        <input
                            type="text"
                            placeholder="Explore....."
                            onChange={(e) => setsearchstr(e.target.value)}
                            onKeyUp={searchstrhandler}
                            className='w-full ss:h-[50px] h-[44px] text-black text-center bg-white outline-0 rounded-l-[30px] py-[15px] ss:text-[20px] text-[18px] '
                        />
                        <button onClick={func1} className='w-[100px] ss:h-[50px] h-[44px] bg-gradient text-white outline-0 rounded-r-[30px] text-[16px] cursor-pointer'>Search</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner