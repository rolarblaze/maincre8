import React, { FC } from "react";

const UpcomingAppointment: FC<{
  callType: string;
  desc: string;
  date: string;
}> = ({ callType, desc, date }) => {
  return (
    <div className="flex justify-between text-sm w-full px-6 py-[15px]">
      <div className="flex flex-col gap-2">
        <h5 className="text-grey900 font-semibold text-sm">{callType}</h5>
        <p className="text-grey600 font-normal text-sm">{desc}</p>
      </div>
      <p className="self-center text-grey600 font-normal text-sm">{date}</p>
    </div>
  );
};

export default UpcomingAppointment;
