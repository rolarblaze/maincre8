"use client";

import React, { FC } from "react";
import NewLogo from "@/public/optimised/NewLogo";

const LoadingPage: FC = ({}) => {
  return (
    <main className="h-full w-full">
      <div className="flex items-center justify-center h-screen bg-slate-300">
        <div className="animate-bounce">
          <NewLogo />
        </div>
      </div>
    </main>
  );
};

export default LoadingPage;
