import React from "react";

const Degree = () => {
  return (
    <div className="lg:px-[250px]  lg:relative overflow-hidden flex flex-col my-10 lg:flex-row items-center lg:my-20">
      <div className="lg:w-[600px] w-[350px] border-2 lg:translate-x-[200px] px-5 flex flex-col justify-center lg:px-10 rounded-lg py-5 bg-[#ecc47e77]">
        <h2 className="mb-2 text-xl font-bold sm:mb-5 sm:text-3xl">
          Earn Your Degree on Our Beautiful Campuse
        </h2>
        <p className="text-sm lg:text-lg">
          Northern University Bangladesh is now owned and managed by a group of
          academics under the illustrious and reputable banner of NUB Trust, who
          intend to not only provide higher education to the deserving students
          with moderate means but also aims to mould individuals with a specific
          skill set along with the value of social responsibility. Northern
          University Bangladesh believes in building a better future for the
          citizens of Bangladesh by enhancing its socio-economic empowerment.
        </p>
        <button
          type="button"
          className=" mt-5 px-5 py-2 uppercase  text-white transition duration-500 ease-in-out rounded-md cursor-pointer text-[16px] lg:text-2xl sm:px-5 bg-cyan-600 hover:bg-cyan-700"
        >
          Learn More
        </button>
      </div>
      <div className="px-5 mt-5 lg:mt-0 lg:px-0 lg:absolute h-full lg:w-[620px] lg:translate-x-[780px] lg:translate-y-[200px]">
        <img
          src="https://nub.ac.bd/nub1.jpg"
          alt="nub1"
          className="rounded-sm lg:rounded-lg"
        />
      </div>
    </div>
  );
};

export default Degree;
