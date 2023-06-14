import React from "react";
import FeatureCard from "./FeatureCard";

const Features = () => {
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
    <div className="lg:flex mx-[250px] hidden">
      {lists?.map((list) => (
        <FeatureCard key={list.id} list={list} />
      ))}
    </div>
  );
};

export default Features;
