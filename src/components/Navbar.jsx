import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";

import logo from "../assets/logo.png";
const Navbar = () => {
  const [menubar, setmenubar] = useState(true);
  const [searchclick, setsearchclick] = useState(true);
  const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [query, setQuery] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const controlNavbar = () => {
    console.log(window.scrollY);
    if (window.scrollY > 500) {
      if (window.scrollY > lastScrollY) {
        setShow("hide");
      } else {
        setShow("show");
      }
    } else {
      setShow("top");
    }
    setLastScrollY(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  const navigationHandler = (type) => {
    if (type === "movie") {
      navigate("/explore/movie");
    } else {
      navigate("/explore/tv");
    }
    //setMobileMenu(false);
  };
  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
      setTimeout(() => {
        searchclickhandle();
      }, 500);
    }
  };



  const menubarhandle = () => {
    if (menubar == true) {
      setmenubar(false);
      setsearchclick(true);
      //searchclickhandle();
    }
    else {
      setmenubar(true);

    }

  }
  const searchclickhandle = () => {
    if (searchclick == true) {
      setsearchclick(false);
      setmenubar(true);
    }
    else {
      setsearchclick(true);
      //setmenubar(false);
    }

  }
  
  return (
    <header className={`w-full ${show == "top" ? "bg-navbar" : ""} ${show == "hide" ? "hidden" : ""} ${show == "show" ? "bg-[--black3] z-[101]" : ""} z-[100] top-0 h-[70px] fixed`}>
      <div className="flex relative w-full h-full justify-between">
        <div className=" cursor-pointer px-5 z-20 h-full flex justify-center items-center" onClick={()=>{navigate('/')}}>
          <img src={logo} className="sm:h-full h-[48px] shadow-2xl object-contain" alt="" />
          <div className=" sm:text-[35px] text-[28px] flex justify-center items-center from-blue-600 via-purple-400 to-purple-600 bg-gradient-to-r bg-clip-text text-transparent font-bold">Movizz</div>
        </div>
        <div className="text-white px-5 z-[100] sm:flex hidden flex-row justify-center  items-center w-[500px]  ">
          <ul className="w-full flex-1 flex sm:justify-evenly justify-end cursor-pointer  md:gap-10 gap-10 sm:text-white items-center  ">
            <li className="cursor-pointer text-[20px] font-poppins  font-medium hover:scale-110"
              onClick={() => navigationHandler("movie")}
            >
              Movies
            </li>
            <li className="cursor-pointer text-[20px] font-poppins font-medium hover:scale-110" onClick={() => navigationHandler("tv")}>
              Tv shows
            </li>
            <li className="cursor-pointer text-[20px] font-poppins font-medium hover:scale-125">
              <HiOutlineSearch onClick={searchclickhandle} />
            </li>
          </ul>
        </div>
        <div className="sm:hidden px-5 z-[100] flex gap-5 justify-center items-center">
          <div className="flex cursor-pointer justify-center items-center text-white text-[25px]">
            <HiOutlineSearch onClick={searchclickhandle} />
          </div>
          <div className="flex cursor-pointer justify-center items-center text-white text-[25px]">
            {menubar === true ? (<SlMenu onClick={menubarhandle} />) : (<VscChromeClose onClick={menubarhandle} />)}
          </div>

        </div>
        {
          !menubar && <div className={`absolute ${menubar ? " animate-slidetop " : " animate-slidedown"} sm:hidden flex flex-col w-full z-10 h-[190px] bg-black `}    >
            <div className="w-full text-black h-[70px] border-b-[1px] border-b-dimWhite">
              .
            </div>
            <div className="flex h-[119px] p-2 pl-6 ">
              <ul className="text-white h-full  w-full flex-1 flex flex-col justify-evenly    ">
                <li className="cursor-pointer text-[20px] font-poppins font-medium " onClick={() => navigationHandler("movie")}>
                  Movies
                </li>
                <li className="cursor-pointer text-[20px] font-poppins font-medium " onClick={() => navigationHandler("tv")}>
                  Tv shows
                </li>

              </ul>
            </div>
          </div>
        }

        {
          !searchclick && <div className={`w-full bg-black h-[120px] absolute flex flex-col ${searchclick == true ? "animate-slidetop" : " animate-slidedown"}  `}>
            <div className="w-full text-black h-[70px] border-b-[1px] border-b-dimWhite">
              .
            </div>
            <div className="flex relative h-[50px] sm:pr-[66px] sm:pl-[27px] px-3 bg-white ">
              <input type="text" placeholder="Search for Movies and Tv shows..." className="w-full bg-white h-[50px] outline-none border-none" onChange={(e) => setQuery(e.target.value)}
                onKeyUp={searchQueryHandler} />
              <VscChromeClose className=" h-full w-[30px]" onClick={searchclickhandle} />
            </div>

          </div>
        }

      </div>
    </header>
  )
}

export default Navbar