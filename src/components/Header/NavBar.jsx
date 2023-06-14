import { list } from "postcss";
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const lists = [
  { id: 1, title: "PROGRAAMS" },
  { id: 2, title: "RESEARCH" },
  { id: 3, title: "THE UNIVERSITY" },
  { id: 4, title: "CAREERS" },
];

const NavBar = () => {
  return (
    <div className="hidden lg:flex text-[1.15rem] h-[10vh] justify-between w-full px-10  ">
      <div className="flex items-center justify-center py-2">
        <img
          src="https://nub.ac.bd/assets/images/logo_nub.png"
          className="h-[60px] w-[280px]"
          alt="logo_nub"
        />
      </div>
      <ul className="flex justify-center ">
        {lists?.map((list) => (
          <li
            key={list.id}
            className="px-5  flex justify-center items-center border-b-4 border-white transition-all ease-in-out duration-700 hover:border-b-[#1F85A4] cursor-pointer font-semibold"
          >
            {list.title}
            <span className="ml-[10px]">
              <KeyboardArrowDownIcon className="text-[#1F85A4]" />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
