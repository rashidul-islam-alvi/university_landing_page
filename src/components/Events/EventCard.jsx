import React from "react";

const EventCard = ({ event }) => {
  return (
    <div className="flex-1 px-5 py-5 bg-white">
      <div className="flex my-5">
        <h2 className="px-2 mr-2 text-4xl font-semibold text-center border-r-2 border-black">
          {event.date}
        </h2>
        <h2 className="text-lg text-gray-700">
          {event.title}{" "}
          <span className="font-semibold text-black">{event.time}</span>
        </h2>
      </div>
      <div className="my-5">
        <h2 className="text-2xl font-semibold underline cursor-pointer">
          {event.mainTitle}
        </h2>
      </div>
      <div className="">
        <p className="text-[17px] text-gray-400">{event.desc}</p>
      </div>
      <div className="flex items-center mt-5 text-center">
        <p className="text-[14px] bg-black text-white  px-5 py-2 font-semibold">
          Knowledge for innovation and change
        </p>
      </div>
    </div>
  );
};

export default EventCard;
