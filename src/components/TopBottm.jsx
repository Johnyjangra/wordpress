import React, { useState } from "react";
import topimg from "../assets/images/png/topimg.png";

const TopBottm = () => {
  const [first, setfirst] = useState(true);
  const top = () => {
    document.documentElement.scrollTop = 0;
  };
  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 500) {
      setfirst(false);
    } else {
      setfirst(true);
    }
  });
  return (
    <div>
      <div
        onClick={() => {
          top();
        }}
        className={
          first
            ? "fixed bottom-[11%] end-[3%] hidden w-[60px] z-20"
            : "fixed bottom-[11%] end-[3%] block h-[60px] z-20"
        }
      >
        <img
          className="h-[50px] w-[50px] rounded-[50%]"
          src={topimg}
          alt="topimg"
        />
      </div>
    </div>
  );
};

export default TopBottm;
