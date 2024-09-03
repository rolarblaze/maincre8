import { CalenderIcon, ClockIcon } from "@/public/icons";
import React from "react";

interface MeetingTimeProps {
  startTime?: string;
  endTime?: string;
}

const MeetingTime: React.FC<MeetingTimeProps> = ({ startTime, endTime }) => {
  if (!startTime || !endTime) {
    return <div>Invalid meeting time</div>;
  }

  const start = new Date(startTime);
  const end = new Date(endTime);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const formattedDate = `${start.getDate().toString().padStart(2, "0")} ${
    months[start.getMonth()]
  } ${start.getFullYear()}`;
  const formattedStartTime = `${start.getHours() % 12 || 12}:${start
    .getMinutes()
    .toString()
    .padStart(2, "0")} ${start.getHours() >= 12 ? "PM" : "AM"}`;
  const formattedEndTime = `${end.getHours() % 12 || 12}:${end
    .getMinutes()
    .toString()
    .padStart(2, "0")} ${end.getHours() >= 12 ? "PM" : "AM"}`;

  return (
    <div className="flex items-center">
      <CalenderIcon /> <span className="ml-1">{formattedDate} </span>{" "}
      <span className="ml-3 flex items-center gap-1">
        <ClockIcon /> {formattedStartTime} - {formattedEndTime}
      </span>
    </div>
  );
};

export default MeetingTime;
