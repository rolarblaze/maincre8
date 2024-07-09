import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import { Logo } from "@/public/icons";
import Arrow from "@/public/icons/arrow-down.svg";

const Navbar: React.FC = () => {
  return (
    <header className="fixed top-0 w-full bg-white z-50">
      <nav className="mx-auto px-4 py-3 flex items-center justify-between  md:px-14 md:py-6 lg:px- ">
        <Link href="/" className="text-2xl font-bold">
          <Logo />
        </Link>

        <section className="flex items-center gap-6 text-sm text-grey900 ">
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>About Us</Link>
          <div className="flex items-center gap-2">
            <p>Solutions</p>
            <Arrow />
          </div>
          <Link href={"/"}>Contact Us</Link>
          <div className="flex items-center gap-2">
            <p>Resources</p>
            <Arrow />
          </div>
        </section>
        <div className="flex items-center gap-6">
          <Link href="/login" className="text-blue-500 hover:text-blue-700">
            Login
          </Link>
          <Button
            label="Sign Up"
            link="/signup"
            classNames="px-4 py-1 text-xs font-normal md:text-sm"
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
