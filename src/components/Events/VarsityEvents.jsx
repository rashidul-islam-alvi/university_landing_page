import { ChevronRight } from "@mui/icons-material";
import React from "react";
import EventCard from "./EventCard";

const VarsityEvents = () => {
  const events = [
    {
      id: 1,
      date: "13 JUN",
      time: "18:00",
      title: "LIBRARY & LEARNING CENTER FORUM",
      mainTitle: "Towards a Sustainable Economy, featuring Vice-Chancellor",
      desc: "Discussion to celebrate the new edition of the Sustainable Economics and Business textbook",
    },
    {
      id: 2,
      time: "18:00",
      date: "13 JUN",
      title: "LIBRARY & LEARNING CENTER FORUM",
      mainTitle: "Towards a Sustainable Economy, featuring Vice-Chancellor",
      desc: "Discussion to celebrate the new edition of the Sustainable Economics and Business textbook",
    },
    {
      id: 3,
      date: "13 JUN",
      time: "18:00",
      title: "LIBRARY & LEARNING CENTER FORUM",
      mainTitle: "Towards a Sustainable Economy, featuring Vice-Chancellor",
      desc: "Discussion to celebrate the new edition of the Sustainable Economics and Business textbook",
    },
    {
      id: 4,
      date: "13 JUN",
      time: "18:00",
      title: "LIBRARY & LEARNING CENTER FORUM",
      mainTitle: "Towards a Sustainable Economy, featuring Vice-Chancellor",
      desc: "Discussion to celebrate the new edition of the Sustainable Economics and Business textbook",
    },
  ];
  return (
    <div className=" px-5 lg:px-[250px] bg-[#F0F0F0] py-10">
      <div className="flex flex-col justify-between mb-5 lg:my-10 lg:flex-row">
        <h2 className="font-semibold text-3xl font-[ClarendonBT-Bold]">
          EVENTS
        </h2>
        <h2 className="flex mt-5 text-lg font-semibold text-center underline cursor-pointer lg:mt-0">
          All events
          <span>
            <ChevronRight />
          </span>
        </h2>
      </div>
      <div className="flex flex-col gap-5 py-5 lg:flex-row">
        {events?.map((event) => (
          <EventCard event={event} key={event.id} />
        ))}
      </div>
    </div>
  );
};

export default VarsityEvents;
