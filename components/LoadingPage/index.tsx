"use client";

import React, { FC } from "react";
import Image from "next/image";

import Logo from "@/public/icons/logo.svg";

const LoadingPage: FC = ({}) => {
  return (
    <main className="h-full w-full">
      <div className="flex items-center justify-center h-screen bg-slate-300">
        <div className="animate-bounce">
          <Logo className="w-48" alt="sell crea8 logo" priority={true} />
        </div>
      </div>
    </main>
  );
};

export default LoadingPage;
