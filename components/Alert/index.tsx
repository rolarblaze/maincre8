"use client";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeAlert } from "@/redux/alerts/index";
import { Tick } from "@/public/svgs";
import { Close } from "@/public/icons";

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
    success: "#04802E", //green
    error: "#CB1A14", //red
    warning: "#F59E0B", //yellow
  };

  return (
    <div
      className={`relative top-10 mb-4 h-auto w-full max-w-96 ${alertStyles[type]} z-50 flex items-start justify-between rounded`}
    >
      <div className="flex w-full items-start gap-3 border-r border-grey100 px-4 py-3">
        <div>
          <Tick color={iconColors[type]} />
        </div>
        <div className="flex flex-col gap-1">
          <strong className="text-grey900">{headText}</strong>
          <p className="text-grey600">{subText}</p>
        </div>
      </div>
      <button onClick={handleClose} className="pl-4 pr-2 pt-2">
        <Close />
      </button>
    </div>
  );
};

export default Alert;
