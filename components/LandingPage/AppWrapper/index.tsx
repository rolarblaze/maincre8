"use client";
import Navbar from "../Navbar";
import Footer from "../Footer";

import React, { ReactNode } from "react";

const AppWrapper = ({
  children,
  type,
}: {
  children: ReactNode;
  type: string;
}) => {
  return (
    <main className="mx-auto flex flex-col min-h-screen overflow-x-hidden">
      <Navbar />
      {/* pt to prevent content running into the navbar */}
      <div className="flex-grow pt-24">{children}</div>
      <Footer />
    </main>
  );
};

export default AppWrapper;
