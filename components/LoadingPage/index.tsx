"use client";

import React, { FC } from "react";
import NewLogo from "@/public/optimised/NewLogo";

const LoadingPage: FC = ({}) => {
  return (
    <main className="h-full w-full">
      <div className="flex h-screen flex-col items-center justify-center bg-slate-300">
        <div className="animate-bounce">
          <NewLogo />
        </div>
        <div className="h-3 w-44 animate-pulse rounded-[50%] border border-slate-400 border-opacity-10 bg-[rgba(83,84,85,0.05)] shadow"></div>
      </div>
    </main>
  );
};

export default LoadingPage;
