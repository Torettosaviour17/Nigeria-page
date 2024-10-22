import React from "react";
import { ouraim } from "../../images/index";
export default function ourAim() {
  return (
    <div>
      <section className="inline md:flex justify-center gap-14 items-center w-ful md:p-10 lg:p-20">
        <div className="md:w-1/2 text-center md:text-left p-4 md:peer-auto relative inline-block">
          <h1 className="after:block after:left-0 after:bottom-[5.2em] after:h-[0.4em] after:w-[40%] after:rounded-lg after:bg-yellow-500 after:z-[-10] inline-block  text-[#B4020A] text-[20px] sm:text-[26px] md:text-[34px] lg:text-[40px] font-bold">
            We Aim To Solve National Problem
          </h1>
          <p>
            <p className="text-[16px] text-[#333333] font-normal  my-7">
              With the aim of national awareness and the voices of the citizens
              at hand, it’s our sole responsibility to bridge the gap and find
              safe and lasting solutions to the daily rise in national
              insecurities and embezzlement.
            </p>
            <p className="text-[16px] text-[#333333] font-normal">
              Assuredly, with the interest of the masses at heart and the
              progress of the nation, we would get the country to the expected
              promise land, which would flow with milk and honey once again.
            </p>
          </p>
        </div>
        <div className=" flex justify-center items-center md:w-1/2">
          <img  className="scale-50 sm:scale-75 md:scale-90 lg:scale-100 xl:scale-auto" src={ouraim} alt="" />
        </div>
      </section>
    </div>
  );
}
