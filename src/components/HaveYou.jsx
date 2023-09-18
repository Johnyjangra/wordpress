import React from "react";

const HaveYou = () => {
  return (
    <div className="bg_linear">
      <div className="container mx-auto px-[12px]  ">
        <div className="purpl_linear pt-[25px] pb-[45px] px-[45px]">
          <div className="flex items-center justify-between lg:flex-row flex-col lg:text-start text-center">
            <div>
              <h1 className=" font-Personal font-normal lg:text-[48px] text-[30px] text-white">
                Have you
              </h1>
              <p className=" font-gilroyRegular font-semibold lg:text-[24px] text-[20px] text-white max-w-[638px]">
                read our study about Speed and Performance in WordPress?
              </p>
            </div>
            <button className="border-none text-[#6022EA] font-inter font-semibold text-[16px] bg-white rounded-[80px] py-[10px] px-[24px] lg:ms-[30px] lg:mt-[0] mt-[20px]  hover:bg-black hover:text-white transition-[0.3s] ease-linear">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HaveYou;
