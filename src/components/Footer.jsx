import { useNavigate } from "react-router-dom";
import  logo  from "../assets/logo.png";
import { socialMedia } from "../constants";
const Footer = () => (
  <section className={`flex w-full left-0 mt-28 justify-center items-center bg-black z-[105] p-3 m-2 rounded-2xl flex-col`}>
    <div className={`flex justify-start items-center md:flex-row flex-col mb-8 w-full`}>
      <div className=" flex flex-row justify-center mr-16" >
        <img
          src={logo}
          alt="amazz"
          className="w-[200px] mt-2 h-[72.14px] object-contain"
        />
        <div className="flex-1 font-poppins text-[30px] font-bold flex justify-center items-center text-white">
            Movizz
        </div>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10 p-5">
            <div className="flex flex-col mb-7 font-poppins gap-3 justify-start items-baseline">
                <h2 className="text-white font-semibold">
                    Useful Links
                </h2>
                <ul className="flex flex-col">
                    {["Content","How it Works","Create","Explore","Terms & Serivices"].map((item,index)=>(
                        <li className="text-dimWhite m-2" key={index}>
                            {item}
                        </li>
                    ))}
                </ul>

            </div>
            <div className="flex flex-col gap-3 font-poppins justify-start items-baseline">
                <h2 className="text-white font-semibold">
                    Community
                </h2>
                <ul className="flex flex-col mb-7">
                    {["Help Center","Partners","Suggestions","Blog","Newsletters"].map((item,index)=>(
                        <li className="text-dimWhite m-2" key={index}>
                            {item}
                        </li>
                    ))}
                </ul>

            </div>
            <div className="flex flex-col gap-3 font-poppins justify-start items-baseline">
                <h2 className="text-white font-semibold">
                    Partner
                </h2>
                <ul className="flex flex-col">
                    {["Our Partner","Become a Partner"].map((item,index)=>(
                        <li className="text-dimWhite m-2" key={index}>
                            {item}
                        </li>
                    ))}
                </ul>

            </div>
      </div>
    </div>

    <div className="w-full p-5 flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        Copyright Ⓒ 2023 Movizz. All Rights Reserved.
      </p>

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain hover:scale-110 cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;