import React from "react";

const FeatureCard = ({ list }) => {
  return (
    <div
      className={` ${list.id === 1 ? "border-l-2" : "border-r-2"}
       flex-1 border-r-2   text-center py-5  px-10 flex flex-col items-center  `}
    >
      <h2 className="mb-10 text-2xl font-semibold">{list.title}</h2>
      <p className="text-[16px]">{list.sub}</p>
    </div>
  );
};

export default FeatureCard;
