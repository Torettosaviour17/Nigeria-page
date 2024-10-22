import React from "react";
import { ourvoice } from "../../images/index";

export default function ourVoice() {
  return (
    <div>
      <section className="inline md:flex md:justify-around items-center w-ful md:p-10 lg:p-20">
        <div className="flex justify-center items-center md:w-1/2">
          <img
            className="scale-50 sm:scale-75 md:scale-90 lg:scale-100 xl:scale-auto"
            src={ourvoice}
            alt=""
          />
        </div>
        <div className="md:w-1/2 p-7 md:p-auto text-center md:text-left inline-block">
          <h1 className="after:block after:h-[0.4em] after:w-[40%] after:rounded-lg after:bg-yellow-500 after:z-[-10] inline-block text-[#B4020A]  text-[22px] sm:text-[25px] md:text-[30px] lg:text-[40px] font-bold">
            We Let Your Voice Be Heard
          </h1>
          <p>
            <p className="sm:text-[14px] lg:text-[16px] text-[#333333] font-normal  my-7">
              In other to reduce government corruption in the country and to
              make our country Nigeria one of the top countries in the world, we
              created this plaform to enable both young and old voice out their
              opinions and expose the corruption of the goverment.
            </p>
            <p className="text-[16px] text-[#333333] font-normal">
              We believe in transparency which makes us the best. We believe in
              a better Nigeria without corruption and a peaceful country whcih
              her citizens will fell safe in. Fot that, we are all joining hands
              to making Nigeria a better country for us all.
            </p>
          </p>
        </div>
      </section>
    </div>
  );
}
