import React from "react";
import { ourvoice } from "../../images/index";

export default function ourVoice() {
  return (
    <div>
      <section className="inline md:flex justify-around items-center w-ful p-24">
        <div className=" w-1/2">
          <img src={ourvoice} alt="" />
        </div>
        <div className="w-1/2">
          <h1 className="text-[#B4020A] text-[40px] font-bold">We Let Your Voice Be Heard</h1>
          <p>
            <p className="text-[16px] text-[#333333] font-normal  my-7">
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
