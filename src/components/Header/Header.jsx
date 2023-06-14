import React, { useState } from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import {
  Close,
  Email,
  Instagram,
  Link,
  LinkedIn,
  Menu,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import Drawer from "./Drawer/Drawer";
import LinkDrawer from "../QuickLinkDrawer/QuickLinkDrawer";

const Header = () => {
  const lists = [
    { id: 1, title: "Students" },
    { id: 2, title: "Alumni" },
    { id: 3, title: "Press" },
    { id: 4, title: "Staff" },
    { id: 5, title: "Library" },
    { id: 6, title: "Portal" },
  ];
  // const icons = [
  //   <FacebookOutlinedIcon fontSize="small" />,
  //   <Instagram fontSize="small" />,
  //   <YouTube fontSize="small" />,
  //   <LinkedIn fontSize="small" />,
  //   <Email fontSize="small" />,
  //   <Twitter fontSize="small" />,
  // ];

  const [isModal, setIsModal] = useState(false);
  const [quickLinkModal, setQuickLinkModal] = useState(false);

  const handleMenuClick = () => {
    setIsModal((prev) => !prev);
  };

  const handleQuickLinkClick = () => {
    setQuickLinkModal((prev) => !prev);
  };

  return (
    <header className="flex text-md h-[6vh] lg:h-[4vh] font-bold bg uppercase bg-black text-gray-200">
      <div className="flex items-center justify-center lg:block lg:flex-1">
        <ul className="hidden h-full sm:flex">
          {lists?.map((list) => (
            <li
              key={list.id}
              className={`px-5 cursor-pointer h-full flex justify-center items-center hover:bg-[#1F85A4]  hover:border-[#1F85A4] ease-in-out transition`}
            >
              {list.title}
            </li>
          ))}
        </ul>
        <div
          className="flex items-center justify-center h-full px-3 transition duration-1000 ease-in-out lg:hidden"
          onClick={handleMenuClick}
        >
          {isModal ? <Close fontSize="large" /> : <Menu fontSize="large" />}
        </div>
      </div>

      <div className="flex items-center justify-end flex-1 h-full ">
        {/* <div className="flex-1 hidden lg:visible">
          <ul className="flex justify-end h-full px-5">
            {icons?.map((icon) => (
              <li
                key={icon}
                className=" px-1 text-gray-400 hover:text-[#1F85A4] cursor-pointer"
              >
                {icon}
              </li>
            ))}
          </ul>
        </div> */}
        <div
          className="px-5 hover:bg-[#1F85A4] h-full flex justify-center items-center border-l-[1px] cursor-pointer"
          onClick={handleQuickLinkClick}
        >
          <h2 className="hidden lg:block">Quicklinks +</h2>
          <h2 className="flex justify-center lg:hidden">
            <Link fontSize="medium" /> <span className="ml-1">+</span>
          </h2>
        </div>
      </div>

      <div className="absolute z-20">
        {isModal ? (
          <Drawer
            isModal={isModal}
            handleMenuClick={handleMenuClick}
            setIsModal={setIsModal}
          />
        ) : (
          <></>
        )}
      </div>

      <div className="absolute z-20">
        {quickLinkModal ? (
          <LinkDrawer
            quickLinkModal={quickLinkModal}
            setQuickLinkModal={setQuickLinkModal}
            handleQuickLinkClick={handleQuickLinkClick}
          />
        ) : (
          <></>
        )}
      </div>
    </header>
  );
};

export default Header;
