import React from "react";
import astro from "../assets/images/png/astro.png";
import ppc1 from "../assets/images/png/ppc1.png";

const Success = () => {
  return (
    <div className="bg-[#fefefe] lg:pt-[200px] md:pt-[70px] pt-[50px] lg:pb-[100px] pb-[50px]">
      <div className="container mx-auto px-[12px]">
        <div className="flex lg:items-center lg:flex-row flex-col">
          <div className="lg:w-[35%] sm:w-[80%] mx-auto text-center px-[12px]">
            <img className="w-full " src={astro} alt="astro" />
          </div>
          <div className="lg:w-[65%] w-full  px-[12px]">
            <p className=" font-gilroyRegular text-[16px] text-[#868687]">
              HAVE YOU SEEN OUR MASCOT?
            </p>
            <h1 className=" font-Personal font-normal lg:text-[48px] text-[30px]">
              Success Guides{" "}
            </h1>
            <div>
              <button className=" bg-[transparent] border-[2px] border-[#6022EA] gilroyRegular font-semibold text-[16px] text-[#6022EA] rounded-[80px] py-[8px] px-[16px] mt-[20px] ">
                Category-1
              </button>
              <button className=" bg-[transparent] border-[2px] border-[#6022EA] gilroyRegular font-semibold text-[16px] text-[#6022EA] rounded-[80px] py-[8px] px-[16px] mt-[20px] ms-[10px]">
                Category-2
              </button>
              <button className=" bg-[transparent] border-[2px] border-[#6022EA] gilroyRegular font-semibold text-[16px] text-[#6022EA] rounded-[80px] py-[8px] px-[16px] mt-[20px] ms-[10px]">
                Category-3
              </button>
              <button className=" bg-[transparent] border-[2px] border-[#6022EA] gilroyRegular font-semibold text-[16px] text-[#6022EA] rounded-[80px] py-[8px] px-[16px] mt-[20px] ms-[10px]">
                Category-4
              </button>
            </div>
            <div className="flex flex-wrap pt-[33px]">
              <div className="md:w-[33.33%] sm:w-[50%] px-[12px]">
                <div className="border-[2px] border-[#e3e3e3] rounded-[16px] py-[15px] px-[17px] bg-white">
                  <img src={ppc1} alt="ppc1" />
                  <h1 className=" font-gilroyBold lg:text-[24px] text-[22px] text-[#0d0d0d] pt-[17px]">
                    Sit diam metus
                  </h1>
                  <p className=" font-gilroyRegular text-[16px] opacity-[0.7]">
                    Arcu amet, consectetur vel pellentesque mattis ipsum sed
                    mattis sed.
                  </p>
                  <a
                    className=" font-gilroyRegular font-semibold text-[16px] text-[#6022EA] mt-[7px]"
                    href="#"
                  >
                    Read More....
                  </a>
                </div>
              </div>
              <div className="md:w-[33.33%] sm:w-[50%] sm:mt-[0] mt-[24px] px-[12px]">
                <div className="border-[2px] border-[#e3e3e3] rounded-[16px] py-[15px] px-[17px] bg-white">
                  <img src={ppc1} alt="ppc1" />
                  <h1 className=" font-gilroyBold lg:text-[24px] text-[22px] text-[#0d0d0d] pt-[17px]">
                    Sit diam metus
                  </h1>
                  <p className=" font-gilroyRegular text-[16px] opacity-[0.7]">
                    Arcu amet, consectetur vel pellentesque mattis ipsum sed
                    mattis sed.
                  </p>
                  <a
                    className=" font-gilroyRegular font-semibold text-[16px] text-[#6022EA] mt-[7px]"
                    href="#"
                  >
                    Read More....
                  </a>
                </div>
              </div>
              <div className="md:w-[33.33%] sm:w-[50%] md:mt-[0] mt-[24px] px-[12px]">
                <div className="border-[2px] border-[#e3e3e3] rounded-[16px] py-[15px] px-[17px] bg-white">
                  <img src={ppc1} alt="ppc1" />
                  <h1 className=" font-gilroyBold lg:text-[24px] text-[22px] text-[#0d0d0d] pt-[17px]">
                    Sit diam metus
                  </h1>
                  <p className=" font-gilroyRegular text-[16px] opacity-[0.7]">
                    Arcu amet, consectetur vel pellentesque mattis ipsum sed
                    mattis sed.
                  </p>
                  <a
                    className=" font-gilroyRegular font-semibold text-[16px] text-[#6022EA] mt-[7px]"
                    href="#"
                  >
                    Read More....
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
