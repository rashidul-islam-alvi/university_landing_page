import {
  ChevronLeftOutlined,
  ChevronRightOutlined,
  Close,
  Menu,
  Search,
} from "@mui/icons-material";
import React from "react";

const Drawer = ({ isModal, setIsModal, handleMenuClick }) => {
  const section1 = [
    { id: 1, title: "PROGRAAMS" },
    { id: 2, title: "RESEARCH" },
    { id: 3, title: "THE UNIVERSITY" },
    { id: 4, title: "CAREERS" },
  ];

  const section2 = [
    { id: 1, title: "Students" },
    { id: 2, title: "Alumni" },
    { id: 3, title: "Press" },
    { id: 4, title: "Staff" },
    { id: 5, title: "Library" },
    { id: 6, title: "Portal" },
  ];

  return (
    <section className="flex flex-col w-[100vw] transition ease-out duration-1000  text-md h-[100vh] lg:h-[4vh] font-bold bg uppercase bg-[#282828] text-gray-200">
      <div className="flex h-[6vh] justify-between  w-full">
        <div className="flex items-center justify-center lg:block lg:flex-1">
          <div
            className="flex items-center justify-center h-full px-3 transition duration-1000 ease-in-out lg:hidden"
            onClick={handleMenuClick}
          >
            {isModal ? <Close fontSize="large" /> : <Menu fontSize="large" />}
          </div>
        </div>
      </div>
      <div className="flex flex-col py-10 bg-[#282828] px-5">
        {/* input */}
        <section className="flex bg-[#212121] px-3 items-center justify-between w-full">
          <input
            type="text"
            placeholder="SEARCH"
            className="w-full text-gray-300  font-thin border-none bg-transparent h-[5vh] outline-none"
          />

          <Search fontSize="medium" />
        </section>

        {/* section 2 */}
        <section className="mt-5">
          <ul className="flex flex-col">
            {section1?.map((s) => (
              <div
                key={s.id}
                className={`flex h-[7vh] justify-between items-center border-t-[1px] border-gray-400 ${
                  s.id === 4 ? "border-b-[1px]" : ""
                } ${s.id === 1 ? "border-t-[0px]" : ""}`}
              >
                <li className="text-lg font-thin ">{s.title}</li>
                <div className="flex items-center justify-center h-full bg-black broder-2">
                  <ChevronRightOutlined fontSize="large" />
                </div>
              </div>
            ))}
          </ul>
        </section>
      </div>
      <div className="flex flex-col px-5 bg-black">
        <ul className="flex flex-col">
          {section2?.map((s) => (
            <div
              key={s.id}
              className={`flex h-[7vh] justify-between items-center border-t-[1px] border-gray-400 ${
                s.id === 5 ? "border-b-[1px]" : ""
              } ${s.id === 1 ? "border-t-[0px]" : ""}`}
            >
              <li className="text-lg font -thin ">{s.title}</li>
              <div>
                <ChevronRightOutlined fontSize="large" />
              </div>
            </div>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Drawer;
