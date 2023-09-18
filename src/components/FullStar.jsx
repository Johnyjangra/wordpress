import React from "react";
import vipeteam from "../assets/images/png/vipeteam.png";

const FullStar = () => {
  return (
    <div className="bg-[#f6f6f6] xl:py-[100px] py-[50px]">
      <div className="container mx-auto px-[12px]">
        <div className="flex lg:flex-row flex-col-reverse">
          <div className="lg:w-1/2 w-full px-[12px] lg:text-start text-center lg:pt-[0] pt-[24px]">
            <h1 className=" font-Personal font-normal lg:text-[48px] text-[30px]">
              Team Full of Stars{" "}
            </h1>
            <p className=" font-gilroyRegular text-[16px] text-[black] leading-6 lg:pe-[120px]">
              Suspendisse consequat egestas arcu et et. Viverra quis euismod
              neque luctus bibendum. Fringilla in nibh fringilla vulputate in.
              Elit, ultricies vitae pulvinar arcu dignissim ac non rutrum. Lacus
              tortor sollicitudin risus eget euismod in bibendum turpis.{" "}
            </p>
            <button className="border-none text-white gilroyRegular font-semibold text-[16px] bg-[#6022EA] rounded-[80px] py-[10px] px-[24px] mt-[30px]  hover:bg-black hover:text-white transition-[0.3s] ease-linear">
              Explore
            </button>
          </div>
          <div className="lg:w-1/2 w-full px-[12px] relative">
            <img
              className="lg:absolute w-[95%] bottom-[-13%] xl:bottom-[-69%] 2xl:bottom-[-99%]"
              src={vipeteam}
              alt="vipeteam"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullStar;
