"use client";
import Navbar from "../Navbar";
import Footer from "../Footer";

import React, {
  ReactNode,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

const AppWrapper = ({
  children,
  type,
}: {
  children: ReactNode;
  type: string;
}) => {
  return (
    <main className="mx-auto flex flex-col min-h-screen">
      <Navbar/>
      <div className="flex-grow">{children}</div>
      <Footer/>
    </main>
  );
};

export default AppWrapper;
