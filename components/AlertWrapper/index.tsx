"use client";

import React from "react";
import { useAppSelector } from "@/redux/store";
import { RootState } from "@/redux/store";
import Alert from "../Alert";

const AlertWrapper: React.FC = () => {
  const alerts = useAppSelector((state: RootState) => state.alerts.messages);

  return (
    <div className="z-9999 fixed right-0 top-0 mt-12 rounded">
      {alerts.map((alert) => (
        <Alert
          key={alert.id}
          id={alert.id!}
          headText={alert.headText}
          subText={alert.subText}
          type={alert.type}
          autoClose={alert.autoClose}
        />
      ))}
    </div>
  );
};

export default AlertWrapper;
