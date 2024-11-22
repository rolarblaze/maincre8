"use client";

import React from "react";
import { useAppSelector } from "@/redux/store";
import { RootState } from "@/redux/store";
import Alert from "../Alert";

const AlertWrapper: React.FC = () => {
  const alerts = useAppSelector((state: RootState) => state.alerts.messages);

  return (
    <div className="fixed right-0 top-0 z-9999 mt-12 rounded">
      {alerts.map((alert, alertIdx) => (
        <Alert
          key={alertIdx}
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
