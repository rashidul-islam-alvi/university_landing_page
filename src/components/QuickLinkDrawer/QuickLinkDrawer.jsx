import React from "react";
import Header from "../Header/Header";
import { ChevronRightOutlined, Close } from "@mui/icons-material";
import Card from "./Card";

const LinkDrawer = ({
  setQuickLinkModal,
  quickLinkModal,
  handleQuickLinkClick,
}) => {
  const data = [
    {
      id: 1,
      title: "Information for students",
      sub: [
        "My Program",
        "Tools & Services",
        "Study Abroad",
        "Study Service Center",
      ],
    },
    {
      id: 2,
      title: "Information for students",
      sub: [
        "My Program",
        "Tools & Services",
        "Study Abroad",
        "Study Service Center",
      ],
    },
    {
      id: 3,
      title: "Information for students",
      sub: [
        "My Program",
        "Tools & Services",
        "Study Abroad",
        "Study Service Center",
      ],
    },
    {
      id: 4,
      title: "Information for students",
      sub: [
        "My Program",
        "Tools & Services",
        "Study Abroad",
        "Study Service Center",
      ],
    },
    {
      id: 5,
      title: "Information for students",
      sub: [
        "My Program",
        "Tools & Services",
        "Study Abroad",
        "Study Service Center",
      ],
    },
    {
      id: 6,
      title: "Information for students",
      sub: [
        "My Program",
        "Tools & Services",
        "Study Abroad",
        "Study Service Center",
      ],
    },
    {
      id: 7,
      title: "Information for students",
      sub: [
        "My Program",
        "Tools & Services",
        "Study Abroad",
        "Study Service Center",
      ],
    },
    {
      id: 8,
      title: "Information for students",
      sub: [
        "My Program",
        "Tools & Services",
        "Study Abroad",
        "Study Service Center",
      ],
    },
    {
      id: 9,
      title: "Information for students",
      sub: [
        "My Program",
        "Tools & Services",
        "Study Abroad",
        "Study Service Center",
      ],
    },
  ];

  const otherLinst = [
    { id: 1, title: "Library" },
    { id: 2, title: "Campus Map" },
    { id: 3, title: "Departments" },
    { id: 4, title: "Study Center" },
    { id: 5, title: "Phone Directory" },
    { id: 6, title: "Webmail" },
  ];
  return (
    <div
      className={`flex p-10 flex-col w-[99.13vw] transition ease-out duration-1000  text-md h-fit lg:h-[100vh]  font-bold  bg-[#282828] text-gray-200`}
    >
      <div className="flex justify-end w-full ">
        <Close
          onClick={handleQuickLinkClick}
          fontSize="large"
          className="border-2"
        />
      </div>
      <div className="gap-4 lg:grid lg:grid-cols-3">
        {data?.map((info) => (
          <Card info={info} key={info.id} />
        ))}
      </div>

      <div className="gap-10 mt-20 lg:grid lg:grid-cols-2 ">
        {otherLinst?.map((o) => (
          <div
            key={o.id}
            className="lg:w-[520px] px-2 py-2 flex items-center justify-between lg:text-2xl  hover:bg-black hover:border-black cursor-pointer border-y-opacity-50 border-y-[1px]"
          >
            {o.title} <ChevronRightOutlined fontSize="large" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LinkDrawer;
