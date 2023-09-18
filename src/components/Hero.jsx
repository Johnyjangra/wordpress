import React from "react";
import team from "../assets/images/png/heroimg.png";
import playbutton from "../assets/images/png/playbutton.png";
import purpleblur from "../assets/images/png/purpleblur.png";
import linearbg2 from "../assets/images/png/linearbg2.png";
import search from "../assets/images/svg/search.svg";
import load from "../assets/images/svg/load.svg";

const Hero = () => {
  return (
    <div className="bg-black  ">
      <div className="container mx-auto px-[12px] lg:pt-20 pt-10">
        <div className=" flex lg:flex-wrap lg:flex-row flex-col-reverse items-center">
          <div className="lg:w-2/5  lg:pt-[0px] pt-[24px] box-border relative z-10">
            <h1 className="text-white  font-Personal relative leading-[107%] before:['*'] before:absolute before:h-[85%] before:w-[5px] before:bg-[#6022ea] 2xl:text-[72px] lg:text-[49px] md:text-[53px] sm:text-[35px] text-[30px] lg:before:top-[20px] before:top-[10px] before:left-[-12px]">
              WordPress Development Agency
            </h1>
            <p className="text-white lg:pt-[30px] pt-[18px] font-gilroyBold md:text-[24px] text-[21px]">
              for Enterprise + Friendly Team{" "}
            </p>
            <p className="text-white lg:pt-[22px] pt-[10px] font-gilroyRegular  fs-[16px]  opacity-70 max-w-[592px]">
              Vipe Studio is a WordPress Agency for development - a long-term
              partner for any WordPress service. Websites and,online shops
              development, maintenance and customization is what we do best.
            </p>
            <div className="flex sm:flex-row flex-col items-center pt-[27px]">
              <button className="border-none text-white gilroyRegular font-semibold text-[16px] bg-[#6022EA] rounded-[80px] py-[12px] px-[40px]  hover:bg-white hover:text-[#6022EA] transition-[0.3s] ease-linear">
                Get Started
              </button>
              <div className="flex items-center sm:ms-[34px] lg:mt-[0] mt-5">
                <img
                  className="h-[32px] w-[32px]  cursor-pointer"
                  src={playbutton}
                  alt="playbutton "
                />
                <span className="text-white ps-[14px]">
                  What is Vipe? (1min)
                </span>
              </div>
            </div>
          </div>
          <div className="lg:w-3/5  relative">
            <img
              className="relative  z-10 lg:right-[-38px] xl:right-[-70px] w-[100%]"
              src={team}
              alt="team"
            />
            <img
              className="absolute  max-w-[1000px] top-[-29%] right-[-22%]"
              src={purpleblur}
              alt="linearbg2"
            />
            <img
              className="absolute  max-w-[849px] 2xl:top-[16%] 2xl:left-[-30%] top-[-3%] left-[-25%]"
              src={linearbg2}
              alt="linearbg2"
            />
          </div>
        </div>
      </div>
      <div className="flex bg-[#0d0d0d] lg:py-[64px] py-[40px] md:mt-[149px] mt-7 relative z-10">
        <div className="container mx-auto px-[12px]">
          <div className="flex md:flex-row flex-col">
            <div className="md:w-1/2 w-full md:text-start text-center">
              <h1 className="text-white font-Personal font-normal md:text-[36px] text-[30px]">
                Tell us more....
              </h1>
              <p className="text-white font-gilroyRegular text-[16px] md:max-w-[537px] pt-[16px]">
                Lectus vitae est ultrices sed. Sit aliquam commodo hac donec
                augue in quis. Magna vel orci sem neque fringilla et lectus
                laoreet.
              </p>
            </div>
            <div className="md:w-1/2 w-full md:pt-[0] pt-5">
              <div className="flex items-center bg-[#252525]  rounded-[80px]">
                <input
                  className="border-0 bg-[#252525] outline-0 text-white rounded-[80px] w-[90%] py-[20px] ps-[33px]"
                  type="text"
                  name=""
                  id=""
                  placeholder="What do you need assistance with?"
                />
                <img className=" cursor-pointer" src={search} alt="search" />
              </div>
              <div className="flex justify-between px-3 pt-2">
                <div className="flex">
                  <img className=" cursor-pointer" src={load} alt="load" />
                  <p className="text-white font-gilroyRegular text-[16px] ps-[3px]">
                    or send us an inquire?{" "}
                  </p>
                </div>
                <a href="#" className="text-white">
                  Learn more about...
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
