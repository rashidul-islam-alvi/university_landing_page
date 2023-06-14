import { ArrowRightAltOutlined } from "@mui/icons-material";
import React from "react";

const AcademicCard = ({ list }) => {
  return (
    <div className="flex flex-col rounded-md bg-white shadow-lg lg:min-h-[40vh]">
      <div className="flex-1 hidden lg:block bg-slate-300">{list.img}</div>
      <div className="flex flex-col justify-between flex-1 px-5 py-2">
        <h2 className="text-lg font-semibold lg:text-2xl">{list.title}</h2>
        <p className="my-2 text-sm lg:my-0 lg:visible">{list.desc}</p>
        <button className="py-1 my-2 lg:my-0  mt-5 lg:mt-0 text-white transition duration-500 ease-in-out rounded-md cursor-pointer text-[16px] sm:text-2xl sm:px-5 bg-cyan-600 hover:bg-cyan-700">
          Learn More <ArrowRightAltOutlined />
        </button>
      </div>
    </div>
  );
};

export default AcademicCard;
