
"use client";

import React from "react";
import Alert from "@/components/Alert";
import { useAppSelector } from "@/redux/store";
import { RootState } from "@/redux/store";

const AlertWrapper: React.FC = () => {
  const alerts = useAppSelector((state: RootState) => state.alerts.messages);

  return (
    <div className="fixed top-0 right-0 mt-6 z-50 rounded ">
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
