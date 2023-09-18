import React from "react";
import search from "../assets/images/svg/search2.svg";
import doublearrow from "../assets/images/svg/doublearrow.svg";
import call from "../assets/images/svg/call.svg";
import msg from "../assets/images/svg/msg.svg";
import home from "../assets/images/svg/home.svg";
import footimg1 from "../assets/images/svg/footimg1.svg";
import footimg2 from "../assets/images/svg/footimg2.svg";
import footimg3 from "../assets/images/svg/footimg3.svg";
import footimg4 from "../assets/images/svg/footimg4.svg";
import footimg5 from "../assets/images/svg/footimg5.svg";
import footimg6 from "../assets/images/svg/footimg6.svg";

const Footer = () => {
  return (
    <div className="bg-black pt-[90px]">
      <div className="container mx-auto px-[12px]">
        <div>
          <div className="flex items-center bg-white  rounded-[80px] max-w-[381px] pe-[24px] ms-auto">
            <input
              className="border-0 bg-white outline-0 text-black rounded-[80px] w-[90%] py-[10px] ps-[20px]"
              type="text"
              name=""
              id=""
              placeholder="search here..."
            />
            <img className=" cursor-pointer" src={search} alt="search" />
          </div>
          {/* ----------------------- */}
          <div className="flex flex-wrap lg:pt-[56px] pt-[30px]">
            <div className="lg:w-[25%] md:w-[50%] px-[12px]">
              <p className=" font-gilroyRegular text-[16px] text-white">
                Services
              </p>
              <div className="flex items-center md:pt-[17px] pt-[10px]  cursor-pointer">
                <img src={doublearrow} alt="doublearrow" />
                <p className=" font-gilroyRegular text-[14px] text-white ps-[5px]">
                  WordPress Development
                </p>
              </div>
              <div className="flex items-center pt-[13px]  cursor-pointer">
                <img src={doublearrow} alt="doublearrow" />
                <p className=" font-gilroyRegular text-[14px] text-white ps-[5px]">
                  WooCommerce Development
                </p>
              </div>
              <div className="flex items-center pt-[13px]  cursor-pointer">
                <img src={doublearrow} alt="doublearrow" />
                <p className=" font-gilroyRegular text-[14px] text-white ps-[5px]">
                  WordPress Maintenance
                </p>
              </div>
              <div className="flex items-center pt-[13px]  cursor-pointer">
                <img src={doublearrow} alt="doublearrow" />
                <p className=" font-gilroyRegular text-[14px] text-white ps-[5px]">
                  Speed Optimization
                </p>
              </div>
              <div className="flex items-center pt-[13px]  cursor-pointer">
                <img src={doublearrow} alt="doublearrow" />
                <p className=" font-gilroyRegular text-[14px] text-white ps-[5px]">
                  Dedicated WordPress Developer
                </p>
              </div>
              <div className="flex items-center pt-[13px]  cursor-pointer">
                <img src={doublearrow} alt="doublearrow" />
                <p className=" font-gilroyRegular text-[14px] text-white ps-[5px]">
                  Headless WordPress Development
                </p>
              </div>
              <div className="flex items-center pt-[13px]  cursor-pointer">
                <img src={doublearrow} alt="doublearrow" />
                <p className=" font-gilroyRegular text-[14px] text-white ps-[5px]">
                  White Label Development
                </p>
              </div>
            </div>
            {/* --------------------- */}
            <div className="lg:w-[25%] md:w-[50%] px-[12px] sm:pt-[0] pt-[30px] ">
              <p className=" font-gilroyRegular text-[16px] text-white">
                Services
              </p>
              <div className="flex items-center md:pt-[17px] pt-[10px]  cursor-pointer">
                <img src={doublearrow} alt="doublearrow" />
                <p className=" font-gilroyRegular text-[14px] text-white ps-[5px]">
                  WordPress Hosting
                </p>
              </div>
              <div className="flex items-center pt-[13px]  cursor-pointer">
                <img src={doublearrow} alt="doublearrow" />
                <p className=" font-gilroyRegular text-[14px] text-white ps-[5px]">
                  PSD, XD, Figma to WordPress Conversion
                </p>
              </div>
              <div className="flex items-center pt-[13px]  cursor-pointer">
                <img src={doublearrow} alt="doublearrow" />
                <p className=" font-gilroyRegular text-[14px] text-white ps-[5px]">
                  Custom WordPress Theme
                </p>
              </div>
              <div className="flex items-center pt-[13px]  cursor-pointer">
                <img src={doublearrow} alt="doublearrow" />
                <p className=" font-gilroyRegular text-[14px] text-white ps-[5px]">
                  Custom WordPress Plugins
                </p>
              </div>
              <div className="flex items-center pt-[13px]  cursor-pointer">
                <img src={doublearrow} alt="doublearrow" />
                <p className=" font-gilroyRegular text-[14px] text-white ps-[5px]">
                  CMS to WordPress
                </p>
              </div>
              <div className="flex items-center pt-[13px]  cursor-pointer">
                <img src={doublearrow} alt="doublearrow" />
                <p className=" font-gilroyRegular text-[14px] text-white ps-[5px]">
                  WordPress Malware Removal
                </p>
              </div>
            </div>
            {/* ------------------ */}
            <div className="lg:w-[25%] md:w-[50%] lg:pt-[0] pt-[30px] px-[12px]">
              <p className=" font-gilroyRegular text-[16px] text-white">
                Latest Articles
              </p>
              <p className=" font-gilroyRegular text-[14px] text-white ps-[5px] md:pt-[16px] pt-[10px]  cursor-pointer">
                7 WordPress Plugins to Create an Effective Newsletter 03.01.2022
              </p>
              <p className=" font-gilroyRegular text-[14px] text-white ps-[5px] pt-[21px]  cursor-pointer">
                What’s the Perfect Blog Post Length for Your WordPress Site’s
                SEO? 02.01.2022
              </p>

              <p className=" font-gilroyRegular text-[14px] text-white ps-[5px] pt-[21px]  cursor-pointer">
                5 Reasons the Future of WordPress Is Headless 01.01.2022
              </p>

              <p className=" font-gilroyRegular text-[14px] text-white ps-[5px] pt-[21px]  cursor-pointer">
                Viptor Says: Vipe Studio’s WordPress Developers Wrap Up the
                Amazingly Successful 2021 30.12.2021
              </p>
            </div>
            {/* ----------------- */}
            <div className="lg:w-[25%] md:w-[50%] px-[12px] lg:pt-[0] pt-[30px]">
              <p className=" font-gilroyRegular text-[16px]  text-white  cursor-pointer">
                Contact
              </p>
              <div className="flex items-center md:pt-[17px] pt-[10px]">
                <img src={call} alt="doublearrow" />
                <p className=" font-gilroyRegular text-[14px] text-white ps-[5px]  cursor-pointer">
                  EU: +359 988 993 128
                </p>
              </div>
              <div className="flex items-center pt-[28px]">
                <img src={call} alt="doublearrow" />
                <p className=" font-gilroyRegular text-[14px] text-white ps-[5px]  cursor-pointer">
                  US: +1 (1 888) 266-6917
                </p>
              </div>
              <div className="flex items-center pt-[28px]">
                <img src={msg} alt="doublearrow" />
                <p className=" font-gilroyRegular text-[14px] text-white ps-[5px]  cursor-pointer">
                  office@vipestudio.com
                </p>
              </div>
              <div className="flex items-center pt-[28px]">
                <img src={doublearrow} alt="doublearrow" />
                <p className=" font-gilroyRegular text-[14px] text-white ps-[5px]  cursor-pointer">
                  14 Srebarna, Sofia 1407, Bulgaria
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[2px] bg-white opacity-[0.3] lg:mt-[65px] mt-[40px]"></div>
      <div className="container mx-auto px-[12px] py-[31px]">
        <div className="flex sm:flex-row flex-col items-center justify-between">
          <div className="sm:text-start text-center">
            <p className="text-white font-gilroyRegular  text-[14px]">
              © Vipe Studio 2016-2022
            </p>
            <p className="text-white font-gilroyRegular  text-[14px] pt-[10px]  cursor-pointer">
              privacy | Careers | Media | Client Area
            </p>
          </div>
          <div className="flex sm:pt-0 pt-3">
            <img className=" cursor-pointer" src={footimg1} alt="footimg1" />
            <img
              className="ms-[17px]  cursor-pointer"
              src={footimg2}
              alt="footimg2"
            />
            <img
              className="ms-[17px]  cursor-pointer"
              src={footimg3}
              alt="footimg3"
            />
            <img
              className="ms-[17px]  cursor-pointer"
              src={footimg4}
              alt="footimg4"
            />
            <img
              className="ms-[17px]  cursor-pointer"
              src={footimg5}
              alt="footimg5"
            />
            <img
              className="ms-[17px]  cursor-pointer"
              src={footimg6}
              alt="footimg6"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
