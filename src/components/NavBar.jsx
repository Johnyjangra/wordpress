import React, { useState } from "react";
import glob from "../assets/images/png/globe.png";

const NavBar = () => {
  const [nav, setnav] = useState(true);

  return (
    <div className="bg-black">
      <div className="container mx-auto px-[12px]">
        <div
          className="pt-[30px] md:ps-[40px] sm:ps-[30px] ps-[12px] lg:hidden block relative z-50"
          onClick={() => {
            setnav(false);
          }}
        >
          <div className="h-[3px] bg-[white] w-[40px] rounded-[24px]"></div>
          <div className="h-[3px] bg-[white] w-[40px] rounded-[24px] mt-[8px]"></div>
          <div className="h-[3px] bg-[white] w-[40px] rounded-[24px] mt-[8px]"></div>
        </div>
      </div>
      <div
        className={
          nav
            ? "top-[-100%] bg-black lg:h-full  h-screen py-[33px] lg:static absolute z-50 lg:bg-black  w-full transition-[0.5s] ease-linear"
            : " top-[0] bg-black lg:h-full transition-[0.5s] ease-linear  h-screen py-[33px] lg:static absolute z-50 lg:bg-black  w-full"
        }
      >
        <p
          className=" text-[white] z-50 text-[30px] font-extrabold absolute right-[4%] top-[4%] lg:hidden  block"
          onClick={() => {
            setnav(true);
          }}
        >
          &#9587;
        </p>
        <div className="container mx-auto px-[12px] h-full  z-10 relative ">
          <div className="max-w-[1100px] h-full ms-auto flex lg:flex-row flex-col lg:justify-between justify-center items-center    ">
            <div className="flex items-center lg:flex-row flex-col">
              <div className="flex items-center cursor-pointer">
                <a
                  className="text-white font-gilroyRegular text-[16px]"
                  href="#"
                >
                  WordPress Solution
                </a>
                <span className="text-white mt-[-9px] ms-[5px] text-[20px]">
                  &#8964;
                </span>
              </div>
              <div className="flex items-center lg:ms-[20px] lg:pt-[0] pt-[20px]  cursor-pointer">
                <a
                  className="text-white font-gilroyRegular text-[16px]"
                  href="#"
                >
                  Services
                </a>
                <span className="text-white mt-[-9px] ms-[5px] text-[20px]">
                  &#8964;
                </span>
              </div>
              <div className="flex items-center lg:ms-[20px] lg:pt-[0] pt-[20px]  cursor-pointer">
                <a
                  className="text-white font-gilroyRegular text-[16px]"
                  href="#"
                >
                  Portfolio
                </a>
              </div>
              <div className="flex items-center lg:ms-[20px] lg:pt-[0] pt-[20px]  cursor-pointer">
                <a
                  className="text-white font-gilroyRegular text-[16px]"
                  href="#"
                >
                  About
                </a>
                <span className="text-white mt-[-9px] ms-[5px] text-[20px]">
                  &#8964;
                </span>
              </div>
              <div className="flex items-center lg:ms-[20px] lg:pt-[0] pt-[20px]  cursor-pointer">
                <a
                  className="text-white font-gilroyRegular text-[16px]"
                  href="#"
                >
                  Blog
                </a>
              </div>
            </div>
            <div className="flex items-center lg:flex-row flex-col">
              <a
                className="text-white lg:pt-[0] pt-[20px] font-gilroyRegular text-[16px]  cursor-pointer"
                href="#"
              >
                1 888 266-6917 <span className=" italic">(eu?)</span>
              </a>
              <button className="border-none text-white gilroyRegular font-semibold text-[18px] bg-[#6022EA] rounded-[80px] py-[10px] px-[24px] lg:ms-[30px] lg:mt-[0] mt-[20px] hover:bg-white hover:text-[#6022EA] transition-[0.3s] ease-linear">
                Contact Us
              </button>
              <div className="flex lg:ms-[20px] lg:pt-[0] pt-[20px]  cursor-pointer">
                <img className="h-[24px] w-[24px] " src={glob} alt="glob" />
                <a
                  className="text-white ps-[4px] font-gilroyRegular text-[16px]"
                  href="#"
                >
                  Eng
                </a>
                <span className="text-white mt-[-9px] ms-[5px] text-[20px]">
                  &#8964;
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
