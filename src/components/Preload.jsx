import React, { useEffect, useState } from "react";
import astro from "../assets/images/png/astro.png";

const Preload = () => {
  const [first, setfirst] = useState(0);
  useEffect(() => {
    setfirst(0);
    setTimeout(() => {
      setfirst(1);
      document.body.classList.remove("overflow_hidden");
    }, 4000);
  }, []);
  return (
    <>
      {first === 0 ? (
        <div className="h-screen purpl_linear_bg rounded-[0] flex justify-center items-center overflow_hidden">
          <div className="h-[200px] w-[200px] animate_astro">
            <img className="w-full " src={astro} alt="astro" />
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Preload;
