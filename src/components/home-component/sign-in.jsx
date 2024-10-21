import React from "react";
import { nigeria } from "../../images/index";
export default function signIn() {
  return (
    <div>
      <section
        style={{ backgroundImage: `url(${nigeria}),` }}
        className="flex text-center flex-col items-center gap-3  w-full bg-no-repeat bg-cover bg-center"
      >
        <h1 className="text-[#B4020A] text-[40px] font-bold ">
          Sign up for free
        </h1>
        <p className="text-[#333333] text-[16px] font-normal text-center">
          We are here to make your voice be heard. Your contributions will go a
          long <br /> way in changing our nation for the better. Sign up to join
          the list of our <br /> contributors to help change the nation.
        </p>
        <form className="w-full p-6">
          <input
            className="border border-[#33333380] w-[50%] px-4 py-3 rounded-md"
            type="text"
            name=""
            id=""
            placeholder="Full Name"
          />
          <div className="mt-6 space-x-7 mb-6">
            <input
              type="text"
              name=""
              id=""
              className="border border-[#33333380] w-[24%] px-4 py-3 rounded-md"
              placeholder="Phone Number (+234)"
            />
            <input
              className="border border-[#33333380] w-[24%] px-4 py-3 rounded-md"
              type="text"
              name=""
              id=""
              placeholder="Email Address"
            />
          </div>
          <div className="space-x-9 flex text-center items-center justify-center text-[#1D3557]">
            {/* <div className="text-[#979797] text-left">
              <label htmlFor="">
                gender
              </label>
            </div> */}
            <br />
            <div>
              <input type="radio" name="gender" id="gender" />
              <label for="gender">Male</label>
            </div>
            <div>
              <input type="radio" name="gender" id="gender" />
              <label for="gender">Female</label>
            </div>
            <div>
              <input type="radio" name="gender" id="gender" />
              <label htmlFor="gender">Other</label>
            </div>
          </div>
          <button className="text-white mt-6 font-bold text-[16px] bg-[#B4020A] px-28 py-3 rounded-lg">
            SIGN UP
          </button>
        </form>
      </section>
    </div>
  );
}
