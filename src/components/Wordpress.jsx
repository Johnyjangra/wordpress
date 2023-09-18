import React from "react";
import blueicon from "../assets/images/svg/blueicon.svg";
import right from "../assets/images/svg/right.svg";
import girl from "../assets/images/svg/girl.png";
import sureblur1 from "../assets/images/png/sureblur.png";
import sureblur2 from "../assets/images/png/sureblur2.png";

const Wordpress = () => {
  return (
    <div className="bg-black lg:py-[80px] py-[50px] p">
      <div className="container mx-auto relative px-[12px]">
        <div className="flex flex-wrap">
          <div className="lg:w-[40%] md:w-[50%] px-[12px] relative z-10">
            <h1 className="text-white font-Personal font-normal lg:text-[48px] text-[30px]">
              All Vipe Studio WordPress services include:{" "}
            </h1>
          </div>
          <div className="lg:w-[30%] md:w-[50%] px-[12px] relative z-10 md:pt-[0] pt-[24px]">
            <h1 className="text-white font-gilroyRegular font-semibold lg:text-[24px] text-[22px]">
              By Industry
            </h1>
            <div className="flex items-center md:pt-[23px] pt-[10px]">
              <img src={blueicon} alt="blueicon" />
              <p className="text-white font-gilroyRegular text-[16px] ps-[10px]">
                Lorem in elementum pellentesque
              </p>
            </div>
            <div className="flex items-center pt-[11px]">
              <img src={blueicon} alt="blueicon" />
              <p className="text-white font-gilroyRegular text-[16px] ps-[10px]">
                Molestie cursus praesent mi
              </p>
            </div>
            <div className="flex items-center pt-[11px]">
              <img src={blueicon} alt="blueicon" />
              <p className="text-white font-gilroyRegular text-[16px] ps-[10px]">
                Leo sed viverra cras
              </p>
            </div>
            <div className="flex items-center pt-[11px]">
              <img src={blueicon} alt="blueicon" />
              <p className="text-white font-gilroyRegular text-[16px] ps-[10px]">
                Laoreet feugiat ut at
              </p>
            </div>
            <div className="flex items-center pt-[11px]">
              <img src={blueicon} alt="blueicon" />
              <p className="text-white font-gilroyRegular text-[16px] ps-[10px]">
                Risus aliquam molestie viverra
              </p>
            </div>
            <div className="flex items-center pt-[11px]">
              <img src={blueicon} alt="blueicon" />
              <p className="text-white font-gilroyRegular text-[16px] ps-[10px]">
                Diam enim pulvinar velit
              </p>
            </div>
          </div>
          <div className="lg:w-[30%] md:w-[50%] lg:pt-[0] pt-[24px] px-[12px] relative z-10">
            <h1 className="text-white font-gilroyRegular font-semibold lg:text-[24px] text-[22px]">
              By Services
            </h1>
            <div className="flex items-center md:pt-[23px] pt-[10px]">
              <img src={blueicon} alt="blueicon" />
              <p className="text-white font-gilroyRegular text-[16px] ps-[10px]">
                Accumsan, dui a semper
              </p>
            </div>
            <div className="flex items-center pt-[11px]">
              <img src={blueicon} alt="blueicon" />
              <p className="text-white font-gilroyRegular text-[16px] ps-[10px]">
                Interdum malesuada vulputate neque
              </p>
            </div>
            <div className="flex items-center pt-[11px]">
              <img src={blueicon} alt="blueicon" />
              <p className="text-white font-gilroyRegular text-[16px] ps-[10px]">
                Nullam non a, morbi
              </p>
            </div>
            <div className="flex items-center pt-[11px]">
              <img src={blueicon} alt="blueicon" />
              <p className="text-white font-gilroyRegular text-[16px] ps-[10px]">
                Arcu morbi leo eu
              </p>
            </div>
            <div className="flex items-center pt-[11px]">
              <img src={blueicon} alt="blueicon" />
              <p className="text-white font-gilroyRegular text-[16px] ps-[10px]">
                Viverra venenatis, in ornare
              </p>
            </div>
            <div className="flex items-center pt-[11px]">
              <img src={blueicon} alt="blueicon" />
              <p className="text-white font-gilroyRegular text-[16px] ps-[10px]">
                Erat id aliquam habitant
              </p>
            </div>
          </div>
        </div>

        {/* --------------------------- */}
        <img
          className="absolute left-[-22%] lg:top-[6%] md:top-[32%] top-[33%] max-w-[700px]"
          src={sureblur1}
          alt="sureblur1"
        />
        <img
          className="absolute right-[-16%] md:bottom-[-26%] bottom-[] max-w-[700px]"
          src={sureblur2}
          alt="sureblur1"
        />
        <div className="bg-black flex flex-wrap items-center md:mt-[150px] mt-[70px] relative z-10 px-[33px] py-[50px]   rounded-[25px] lg:justify-start justify-center">
          <div className="lg:w-[30%] md:w-[50%] px-[12px]">
            <h1 className="text-white font-Personal font-normal lg:text-[35px] md:text-[30px] text-[25px]">
              Not Sure which service you need yet?{" "}
            </h1>
            <button className="border-none text-white gilroyRegular font-semibold text-[16px] bg-[#6022EA] rounded-[80px] py-[10px] px-[24px] lg:mt-[38px] mt-[15px]">
              Schedule An Appointment
            </button>
          </div>
          <div className="lg:w-[35%] md:w-[50%] px-[12px] lg:pt-[0] pt-[24px]">
            <h1 className="text-white font-gilroyBold lg:text-[24px] text-[20px]">
              20-m free consultation that will help us identifyif you need{" "}
            </h1>
            <div className="flex items-center lg:pt-[23px] pt-[15px]">
              <img src={right} alt="right" />
              <p className="text-white font-gilroyRegular text-[16px] ps-[10px]">
                Technical Description & Discovery
              </p>
            </div>
            <div className="flex items-center pt-[11px]">
              <img src={right} alt="right" />
              <p className="text-white font-gilroyRegular text-[16px] ps-[10px]">
                Custom WordPress Development
              </p>
            </div>
            <div className="flex items-center pt-[11px]">
              <img src={right} alt="right" />
              <p className="text-white font-gilroyRegular text-[16px] ps-[10px]">
                Support & Maintenance
              </p>
            </div>
            <div className="flex items-center pt-[11px]">
              <img src={right} alt="right" />
              <p className="text-white font-gilroyRegular text-[16px] ps-[10px]">
                Arcu morbi leo eu
              </p>
            </div>
          </div>
          <div className="lg:w-[35%] md:w-[50%] px-[12px] lg:pt-[0] pt-[24px]">
            <img
              className="lg:w-[80%] sm:w-[100%] ms-auto"
              src={girl}
              alt="girl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wordpress;
