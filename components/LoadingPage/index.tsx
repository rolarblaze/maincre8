"use client";

import React, { FC } from "react";
import { Logo } from "@/public/icons";

import { LogoBlack } from "@/public/icons";


const LoadingPage: FC = ({}) => {
  return (
    <main className="h-full w-full">
      <div className="flex items-center justify-center h-screen bg-slate-300">
        <div className="animate-bounce">
          <LogoBlack className="w-48" alt="sell crea8 logo" priority={true} />
        </div>
      </div>
    </main>
  );
};

export default LoadingPage;
