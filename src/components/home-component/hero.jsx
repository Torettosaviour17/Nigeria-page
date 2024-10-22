import React from "react";
import { hero_bg } from "../../images";
import { second_bg_img } from "../../images/index";

export default function hero() {
  return (
    <div>
      <section
        className=" w-full bg-no-repeat bg-cover bg-center  p-10  sm:pt-12 lg:pt-32 "
        style={{
          backgroundImage: `url(${second_bg_img}), url(${hero_bg})`,
          backgroundPosition: "center, bottom right", // Positions for each image
          backgroundSize: "cover", // Sizes for each image
        }}
      >
        <div className="text-center md:pl-12 md:text-left md:w-[50%]">
          <h1 className=" text-[22px] sm:text-[30px] md:text-[40px] lg:text-[48px]  text-white  font-bold ">Nigerian voice on National Development</h1>
          <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] text-white font-normal my-8 ">
            Track all government budgets, expenses, companies, directors and
            excutive officers. Hear the latest goverment rumors and gist from
            all the regions of the country.
          </p>
          <button className="text-white bg-[#B4020A] font-bold px-7 rounded-md py-2">
            SIGN IN
          </button>
        </div>
      </section>
    </div>
  );
}
