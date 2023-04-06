import React from "react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[96px] h-screen w-full flex flex-col items-center mx-auto text-center">
        <p className="text-[#0adf9a] font-bold p-2">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="font-bold text-2xl sm:text-4xl md:text-7xl md:py-6 ">
          Grow with data.
        </h1>
        <div className="flex items-center gap-2 py-4">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold">
            Fast, flexible financing for
          </p>
          <TypeAnimation
            sequence={["BTB", "BTC", 2000, "SASS", 2000]}
            speed={20}
            repeat={Infinity}
            wrapper="p"
            className="md:text-5xl sm:text-4xl text-xl font-bold"
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          Monitor your data analytics to increase revenue for BTB, BTC & SASS
          platforms.
        </p>
        <button
          type="button"
          className="bg-[#0adf9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:scale-105"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
