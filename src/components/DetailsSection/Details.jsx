import React from "react";

const Details = () => {
  const h2Style = "lg:text-2xl";
  const h1Style =
    "lg:text-6xl text-[#0B80A7] font-semibold font-[ClarendonBT-Bold]";
  const divStyle = "flex flex-col  items-center mb-10";

  return (
    <div className="lg:h-[20vh] flex flex-col lg:flex-row items-center justify-between px-10  py-10 lg:py-0 lg:px-20  bg-[#B0CBD4]">
      <div className={divStyle}>
        <h1 className={h1Style}>3000</h1>
        <h2 className={h2Style}>Students</h2>
      </div>
      <div className={divStyle}>
        <h1 className={h1Style}>6</h1>
        <h2 className={h2Style}>Faculties</h2>
      </div>
      <div className={divStyle}>
        <h1 className={h1Style}>2 Acrs</h1>
        <h2 className={h2Style}>Campus</h2>
      </div>
      <div className={`${divStyle} mb-0`}>
        <h1 className={h1Style}>10</h1>
        <h2 className={h2Style}>Partnered Univeristy</h2>
      </div>
    </div>
  );
};

export default Details;
