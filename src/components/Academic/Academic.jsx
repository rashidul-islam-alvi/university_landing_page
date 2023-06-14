import React from "react";
import AcademicCard from "./AcademicCard";

const Academic = () => {
  const lists = [
    {
      id: 1,
      img: "img1",
      title: "Faculty of Science & Enginnering",
      desc: "For students who want an adaptable, multidisciplinary engineering education, a BS in Engineering may be the best fit. This degree equips students to enter into a variety of engineering careers.",
    },
    {
      id: 2,
      img: "img2",
      title: "Faculty of Business",
      desc: "For students who want an adaptable, multidisciplinary engineering education, a BS in Engineering may be the best fit. This degree equips students to enter into a variety of engineering careers.",
    },

    {
      id: 3,
      img: "img3",
      title: "Faculty of Humanities & Social Science",
      desc: "For students who want an adaptable, multidisciplinary engineering education, a BS in Engineering may be the best fit. This degree equips students to enter into a variety of engineering careers.",
    },
    {
      id: 4,
      img: "img4",
      title: "Faculty of Law",
      desc: "For students who want an adaptable, multidisciplinary engineering education, a BS in Engineering may be the best fit. This degree equips students to enter into a variety of engineering careers.",
    },
    {
      id: 5,
      img: "img",
      title: "Faculty of Health Science",
      desc: "For students who want an adaptable, multidisciplinary engineering education, a BS in Engineering may be the best fit. This degree equips students to enter into a variety of engineering careers.",
    },
  ];

  return (
    <div className="mt-10 text-3xl px-5 lg:px-[250px] flex flex-col bg-[#F0F0F0] py-20">
      <div className="">
        <h2 className="uppercase text-3xl font-semibold font-[ClarendonBT-Bold] ">
          Academic Programs
        </h2>
        <p className="my-5 text-lg lg:text-xl">
          NUB has been expanding its academic programs at the Bachelors and
          Masters levels under different faculties and departments . At present,
          the university’s academic programs are as follows :
        </p>
      </div>
      <div className="flex flex-col flex-1 gap-5 lg:grid-cols-3 lg:grid ">
        {lists?.map((list) => (
          <AcademicCard list={list} key={list.id} />
        ))}
      </div>
    </div>
  );
};

export default Academic;
