import React from "react";
import file1 from "../assets/images/svg/file1.svg";
import file2 from "../assets/images/svg/file2.svg";
import file3 from "../assets/images/svg/file3.svg";
function Integer() {
  return (
    <div className="bg-[#fefefe] lg:pt-[97px] pt-[50px] lg:pb-[100px] pb-[50px]">
      <div className="container mx-auto px-[12px]">
        <h1 className="font-Personal font-normal lg:text-[48px] text-[30px]">
          Integer et nisl non
        </h1>
        <div className="flex flex-wrap justify-center lg:pt-[50px] pt-[30px]">
          <div className="lg:w-[33.33%] sm:w-[50%] text-center px-[12px] ">
            <div
              className="bg-white xl:px-9 px-4 border-[1px] border-[#e6e6e7] rounded-[16px] py-[50px]
             hover:shadow-[2px #E5E9F6] h-full  cursor-pointer hover:scale-[1.06] transition-[1s] ease-linear "
            >
              <img className="mx-auto" src={file1} alt="file1" />
              <h1 className="font-inter font-semibold text-[24px] pt-[41px]">
                Enterprise WordPress Solutions{" "}
              </h1>
              <p className=" font-gilroyRegular text-[16px] text-black opacity-[0.7] pt-[15px]">
                Pretium, a et sapien non nunc libero. Id dolor sed quis
                convallis turpis purus feugiat nibh eu. Auctor cras hac ac,
                sociis diam montes, turpis commodo elit.
              </p>
              <a
                className=" font-gilroyRegular font-semibold text-[#6022ea] text-[16px] mt-[20px]"
                href="#"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="lg:w-[33.33%] sm:w-[50%] text-center px-[12px] sm:pt-[0] pt-[24px]">
            <div
              className="bg-white xl:px-9 px-4 border-[1px] border-[#e6e6e7] rounded-[16px] py-[50px]
             hover:shadow-[2px #E5E9F6] h-full  cursor-pointer  hover:scale-[1.06] transition-[1s] ease-linear"
            >
              <img className="mx-auto" src={file2} alt="file1" />
              <h1 className="font-inter font-semibold text-[24px] pt-[41px]">
                Small to Mid Size Business Development
              </h1>
              <p className=" font-gilroyRegular text-[16px] text-black opacity-[0.7] pt-[15px]">
                Et nunc fermentum id amet tempus, elementum. Eget ac ultrices
                tortor, mattis amet blandit aenean amet. Massa diam lacus,
                aliquam neque, cursus.
              </p>
              <a
                className=" font-gilroyRegular font-semibold text-[#6022ea] text-[16px] mt-[20px]"
                href="#"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="lg:w-[33.33%] sm:w-[50%] text-center px-[12px] lg:pt-[0] pt-[24px]">
            <div
              className="bg-white xl:px-9 px-4 border-[1px] border-[#e6e6e7] rounded-[16px] py-[50px]
             hover:shadow-[2px #E5E9F6] h-full  cursor-pointer  hover:scale-[1.06] transition-[1s] ease-linear"
            >
              <img className="mx-auto" src={file3} alt="file1" />
              <h1 className="font-inter font-semibold text-[24px] pt-[41px]">
                Support & Maintenance
              </h1>
              <p className=" font-gilroyRegular text-[16px] text-black opacity-[0.7] pt-[15px]">
                Ac donec ipsum fringilla tortor, consectetur etiam sociis amet
                quis. Viverra volutpat pretium non in fusce tellus sed urna.
                Pharetra ullamcorper et donec aliquam.
              </p>
              <a
                className=" font-gilroyRegular font-semibold text-[#6022ea] text-[16px] mt-[20px]"
                href="#"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Integer;
