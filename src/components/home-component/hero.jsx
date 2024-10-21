import React from "react";
import { hero_bg } from "../../images";
import { second_bg_img } from "../../images/index";

export default function hero() {
  return (
    <div>
      <section
        className="h-[100vh] w-full bg-no-repeat bg-cover bg-center pr-96 pt-36 "
        style={{
          backgroundImage: `url(${second_bg_img}), url(${hero_bg})`,
          backgroundPosition: "center, bottom right", // Positions for each image
          backgroundSize: "cover", // Sizes for each image
        }}
      >
        <div>
          <h1 className="text-[48px] text-white  font-bold px-36">Nigerian voice on National Development</h1>
          <p className="text-[24px] text-white font-normal my-8  px-36">
            Track all government budgets, expenses, companies, directors and
            excutive officers. Hear the latest goverment rumors and gist from
            all the regions of the country.
          </p>
          <button className="text-white bg-[#B4020A] font-bold mx-36 px-7 rounded-md py-2">
            SIGN IN
          </button>
        </div>
      </section>
    </div>
  );
}
