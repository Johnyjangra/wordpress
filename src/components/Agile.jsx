import React from "react";
import twoman from "../assets/images/png/twoman.png";

const Agile = () => {
  return (
    <div className="bg-[#fefefe] lg:pt-[67px] pt-[50px] lg:pb-[100px] pb-[50px]">
      <div className="container mx-auto px-[12px]">
        <div className="flex lg:flex-row flex-col items-center">
          <div className="lg:w-1/2 px-[12px]">
            <img
              className="lg:w-[95%] w-[80%] lg:mx-0 mx-auto"
              src={twoman}
              alt="twoman"
            />
          </div>
          <div className=" lg:w-1/2 px-[12px] lg:text-start text-center lg:pt-[0] pt-[24px]">
            <h1 className=" font-Personal font-normal 2xl:text-[48px] md:text-[39px] text-[26px]">
              <span className="text-[#6022EA]">Agile WordPress</span>{" "}
              Development Project management
            </h1>
            <p className=" font-gilroyRegular text-[16px] text-[black] opacity-[0.7] pt-[10px]">
              Suspendisse consequat egestas arcu et et. Viverra quis euismod
              neque luctus bibendum. Fringilla in nibh fringilla vulputate in.
              Elit, ultricies vitae pulvinar arcu dignissim ac non rutrum. Lacus
              tortor sollicitudin risus eget euismod in bibendum turpis.{" "}
            </p>
            <button className="border-none text-white gilroyRegular font-semibold text-[16px] bg-[#6022EA] rounded-[80px] py-[10px] px-[24px] mt-[30px]  hover:bg-black hover:text-white transition-[0.3s] ease-linear">
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agile;
