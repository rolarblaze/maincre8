"use client";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeAlert } from "@/redux/alerts/index";
import Tick from "@/public/svgs/TickIcon";
import { Close } from "@/public/svgs";

interface AlertProps {
  id: string;
  headText: string;
  subText: string;
  type: "success" | "error" | "warning";
  autoClose?: boolean;
}

const Alert: React.FC<AlertProps> = ({
  id,
  headText,
  subText,
  type,
  autoClose = true,
}) => {
  const dispatch = useDispatch();

    useEffect(() => {
      if (autoClose) {
        const timer = setTimeout(() => {
          dispatch(removeAlert(id));
        }, 5000);
        return () => clearTimeout(timer);
      }
    }, [autoClose, dispatch, id]);

  const handleClose = () => {
    dispatch(removeAlert(id));
  };

  const alertStyles = {
    success: "bg-white border-l-4 border-alert-green ",
    error: "bg-white border-l-4 border-alert-red ",
    warning: "bg-white  border-l-4 border-yellow-500 ",
  };

  const iconColors = {
    success: "#04802E",
    error: "#CB1A14",
    warning: "#F59E0B",
  };

  return (
    <div
      className={`max-w-96 w-full h-auto mb-4 ${alertStyles[type]} flex items-start justify-between rounded z-50`}
    >
      <div className="w-full  flex items-start gap-3 border-r border-grey100 py-3 px-4">
        <div>
          <Tick color={iconColors[type]} />
        </div>
        <div className="flex flex-col gap-1">
          <strong className="text-grey900">{headText}</strong>
          <p className="text-grey600">{subText}</p>
        </div>
      </div>
      <button onClick={handleClose} className="pl-4 pt-2 pr-2 ">
        <Close />
      </button>
    </div>
  );
};

export default Alert;
