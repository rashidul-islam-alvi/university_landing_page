import React from "react";

const Card = ({ info }) => {
  return (
    <div className="border-[1px] mt-5 lg:mt-0 cursor-pointer hover:border-opacity-100 border-opacity-50 lg:w-[520px] border-slate-300 px-5 py-5">
      <h2 className=";g:text-3xl font-thin">{info.title}</h2>
      {
        <ul className="hidden lg:block">
          {info.sub?.map((s, i) => (
            <div className="flex" key={i}>
              <span className="mr-2">-</span>
              <li className="text-xl font-thin normal-case case">{s}</li>
            </div>
          ))}
        </ul>
      }
    </div>
  );
};

export default Card;
