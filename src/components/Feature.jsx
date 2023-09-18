import React from "react";
import yahoo1 from "../assets/images/svg/yahoo1.svg";
import yahoo2 from "../assets/images/svg/yahoo2.svg";
import yahoo3 from "../assets/images/svg/yahoo3.svg";
import yahoo4 from "../assets/images/svg/yahoo4.svg";
import yahoo5 from "../assets/images/svg/yahoo5.svg";
import yahoo6 from "../assets/images/svg/yahoo6.svg";

const Feature = () => {
  return (
    <div className="bg-[#f6f6f6] lg:py-[90px] py-[40px]">
      <div className="container mx-auto">
        <h1 className=" font-Personal font-normal lg:text-start text-center lg:text-[48px] text-[30px]">
          Featured on
        </h1>
        <marquee behavior="" direction=" ">
          <div className="flex gap-12 items-center pt-[50px]">
            <img src={yahoo1} alt="yahoo1" />
            <img src={yahoo2} alt="yahoo2" />
            <img src={yahoo3} alt="yahoo3" />
            <img src={yahoo4} alt="yahoo4" />
            <img src={yahoo5} alt="yahoo5" />
            <img src={yahoo6} alt="yahoo6" />
          </div>
        </marquee>
      </div>
    </div>
  );
};

export default Feature;
