import React from "react";
import { ouraim } from "../../images/index";
export default function ourAim() {
  return (
    <div>
      <section className="inline md:flex justify-center gap-14 items-center w-ful p-24">
        <div className="w-1/2">
          <h1 className="text-[#B4020A] text-[40px] font-bold">
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
        <div className=" w-1/2">
          <img src={ouraim} alt="" />
        </div>
      </section>
    </div>
  );
}
