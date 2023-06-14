import React from "react";

const News = () => {
  return (
    <div className="px-5 lg:px-[250px] py-10">
      <h2 className="font-[ClarendonBT-Bold] font-semibold text-3xl">NEWS</h2>
      <div className="flex flex-col gap-5 mt-10 lg:grid lg:grid-cols-4 ">
        <div className="relative col-span-2 row-span-2 overflow-hidden shadow-lg cursor-pointer">
          <div className="z-10 h-fit">
            <h2 className="font-[ClarendonBT-Bold] underline text-black px-4 mb-5 lg:text-2xl font-bold">
              NORTHERN EDUCATION GROUP AND KOTLER IMPACT JOINTLY ORGANIZED
              MODERN MARKETING CONCLAVE-2023
            </h2>
          </div>
          <img
            src="https://nub.ac.bd/assets/images/news/NEG_WMS.jpg"
            alt="news1"
            className="z-0 object-cover object-left h-full transition duration-700 ease-in-out"
          />
        </div>
        <div className="bg-gray-200 shadow-lg ">News</div>
        <div className="bg-gray-200 shadow-lg ">News</div>
        <div className="bg-gray-200 shadow-lg ">News</div>
        <div className="bg-gray-200 shadow-lg ">News</div>
      </div>
    </div>
  );
};

export default News;
