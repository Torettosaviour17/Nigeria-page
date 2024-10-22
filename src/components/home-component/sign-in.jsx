import React from "react";
import { nigeria } from "../../images/index";
export default function signIn() {
  return (
    <div>
      <section
        style={{ backgroundImage: `url(${nigeria}),` }}
        className="flex text-center flex-col items-center gap-3  w-full bg-no-repeat bg-cover bg-center"
      >
        <div className="relative inline-block">
          <h1 className="after:block after:h-[0.4em] after:w-[40%] after:rounded-lg after:bg-yellow-500  after:text-center inline-block  text-[#B4020A]  text-[22px] sm:text-[25px] md:text-[30px] lg:text-[40px] font-bold ">
            Sign up for free
          </h1>
        </div>
        <p className="text-[#333333] sm:text-[14px] p-3 md:p-auto lg:text-[16px] font-normal text-center">
          We are here to make your voice be heard. Your contributions will go a
          long <br /> way in changing our nation for the better. Sign up to join
          the list of our <br /> contributors to help change the nation.
        </p>
        <form className="w-full p-6">
          <input
            className="border border-[#33333380] w-[90%] md:w-[64%] px-4 py-3 rounded-md"
            type="text"
            name=""
            id=""
            placeholder="Full Name"
          />
          <div className="flex flex-col justify-center items-center gap-5 md:block mt-6 md:space-x-7 mb-6">
            <input
              type="text"
              name=""
              id=""
              className="border block md:inline w-[90%] border-[#33333380] md:w-[31%] px-4 py-3 rounded-md"
              placeholder="Phone Number (+234)"
            />
            <input
              className="border block md:inline w-[90%] border-[#33333380] md:w-[31%] px-4 py-3 rounded-md"
              type="text"
              name=""
              id=""
              placeholder="Email Address"
            />
          </div>
          <div>
            <div className="flex justify-center items-center w-full m-2">
              <div className="text-[#979797] text-left md:w-[34%] lg:w-[27%] xl:w-[29%]">
                <label htmlFor="">gender</label>
              </div>
            </div>
            <div className="sm:space-x-9 space-x-4 flex text-center items-center justify-center text-[#1D3557] md:text-[19px]">
              <br />
              <div>
                <input type="radio" name="gender" id="male" />&nbsp;
                <label for="male">Male</label>
              </div>
              <div>
                <input type="radio" name="gender" id="female" />&nbsp;
                <label for="female">Female</label>
              </div>
              <div>
                <input type="radio" name="gender" id="gender" />&nbsp;
                <label htmlFor="gender">Other</label>
              </div>
            </div>
          </div>
          <button className="text-white mt-6 font-bold text-[14px] lg:text-[16px] bg-[#B4020A] px-10 py-2 sm:px-16 sm:py-2 md:px-24 md:py-3 lg:px-28 lg:py-3 rounded-lg">
            SIGN UP
          </button>
        </form>
      </section>
    </div>
  );
}
