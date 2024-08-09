import { MobileMenu } from "@/public/svgs";
import React from "react";

interface MobileNavprops {
  title: string;
  onClick: () => void;
}

const MobileNav: React.FC<MobileNavprops> = ({ title, onClick }) => {
  return (
    <nav className="flex fixed inset-x-0 top-0 z-40 gap-4 md:hidden lg:hidden py-4 px-5 bg-primary50">
      <button className="w-fit h-fit" onClick={onClick}>
        <MobileMenu />
      </button>
      <span>{title}</span>
    </nav>
  );
};

export default MobileNav;
