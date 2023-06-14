import { ChevronRightOutlined } from "@mui/icons-material";
import React from "react";

const MobileFeatures = () => {
  const lists = [
    {
      id: 1,
      title: "Admission",
      sub: "We have students coming from different backgrounds, cultures, and nationalities as well. ",
    },
    {
      id: 2,
      title: "Programs",
      sub: "We have students coming from different backgrounds, cultures, and nationalities as well.",
    },
    {
      id: 3,
      title: "Tuition Fees",
      sub: "We offer affordable tuition fees for students with the option to pay them in multiple installments",
    },
    {
      id: 4,
      title: "Scholarship",
      sub: "We make sure all our students get the help they need to complete the degree. Scholarships are",
    },
  ];
  return (
    <div className="px-2 lg:hidden">
      {lists?.map((list) => (
        <div
          key={list.id}
          className={`flex items-center justify-between px-10 py-5 border-b-2 ${
            list.id === 4 ? "b-b-2" : ""
          }`}
        >
          <h2 className="text-2xl font-semibold">{list.title}</h2>
          <ChevronRightOutlined />
        </div>
      ))}
    </div>
  );
};

export default MobileFeatures;
