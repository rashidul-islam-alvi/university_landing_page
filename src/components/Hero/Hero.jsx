import React from "react";

const Hero = () => {
  return (
    <div className="mt-[1px] p-2 lg:p-0  h-[66vh] relative overflow-hidden flex justify-center items-center">
      <img
        src="https://nub.ac.bd/nub1.jpg"
        className="absolute object-cover w-full h-full p-2 sm:p-0 lg:object-cover"
        alt="nub1"
      />
      <div className="z-10  lg:visible text-white uppercase mt-[150px] mr-[250px] px-3 lg:px-5 absolute w-full  translate-x-[125px]">
        <h2 className="bg-[#1b83a0] px-3 text-2xl lg:text-5xl mb-5 lg:w-fit lg:px-5 lg:py-1 lg:font-bold font-[ClarendonBT-Bold]">
          Apply now for master's program at NUB
        </h2>
        <p className="hidden lg:block lg:w-fit bg-[#1b83a0] text-[15px] px-5 py-1 font-semibold ">
          Set the course for a succesful future with one of NUB's master program
        </p>
        <button
          type="button"
          className=" text-white lg:block border-white text-2xl border-2 bg-transparent  px-5 py-1 lg:mt-5 rounded-sm font-[ClarendonBT-Bold] "
        >
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
