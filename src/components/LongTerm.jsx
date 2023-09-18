import React from "react";
import propy from "../assets/images/png/propy.png";
import ciela from "../assets/images/png/ciela.png";
import spqrk from "../assets/images/png/spqrk.png";
import reveuele from "../assets/images/png/reveuele.png";

const LongTerm = () => {
  return (
    <div className="bg-[#f6f6f6] lg:py-[65px] py-[50px]">
      <div className="container mx-auto px-[12px]">
        <h1 className=" font-Personal font-normal md:text-[48px] text-[27px] max-w-[631px]">
          Long Term WordPress Partner
        </h1>
        <p className=" font-gilroyRegular text-[16px] opacity-[0.8] max-w-[693px] pt-[10px]">
          Our motto is the long-term partnership – we will not only develop your
          perfect website, but will be behind you through the whole process.
          They already trusted us:
        </p>
        <marquee behavior="" direction=" ">
          <div className="flex gap-12 items-center pt-[37px]">
            <img className="max-w-[179px] h-[39px]" src={propy} alt="propy" />
            <img className="max-w-[162px] h-[56px]" src={ciela} alt="propy" />
            <img
              className="max-w-[191px] h-[57px]"
              src={reveuele}
              alt="propy"
            />
            <img className="max-w-[162px] h-[56px]" src={ciela} alt="propy" />
            <img className="max-w-[170px] h-[65px]" src={spqrk} alt="propy" />
            <img className="max-w-[162px] h-[56px]" src={ciela} alt="propy" />
          </div>
        </marquee>
      </div>
    </div>
  );
};

export default LongTerm;
