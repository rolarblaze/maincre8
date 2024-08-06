"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import Button from "@/components/Button";
import Arrow from "@/public/icons/arrow-down.svg";
import Logo from "@/public/icons/logo.svg";
import { HamburgerIcon } from "@/public/svgs";
import { useNavScrollAnimation } from "@/hooks";
import ResourcesMenu from "./ResourcesMenu";
import SolutionsMenu from "./SolutionsMenu";

const Navbar: React.FC = () => {
  const [showSolutions, setShowSolutions] = useState(false);
  const [showResources, setShowResources] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navColor, navScroll] = useNavScrollAnimation();

  const pathname = usePathname();
  const isHome =
    pathname === "/" || pathname === "/about-us" || pathname === "/services";

  const toggleSolutionsMenu = () => {
    setShowSolutions(!showSolutions);
    if (showResources) setShowResources(false); // Close resources menu if it's open
  };

  const toggleResourcesMenu = () => {
    setShowResources(!showResources);
    if (showSolutions) setShowSolutions(false); // Close solutions menu if it's open
  };

  const closeSolutionsMenu = () => {
    setShowSolutions(false);
  };

  const closeResourcesMenu = () => {
    setShowResources(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={`
        ${isHome && navColor ? "bg-white" : "bg-transparent"} 
        ${
          navScroll ? "-translate-y-28 opacity-0" : "translate-x-0 opacity-100"
        } 
        fixed top-0 w-full z-[40] ${
          isHome ? "bg-transparent " : "bg-white"
        } border-b border-transparent z-50  transition-all ease-in-out duration-500
      `}
    >
      <nav
        className={`mx-auto py-6 flex items-center justify-between max-w-[76rem] max-xl:px-4 relative`}
      >
        <Link href="/" className="text-2xl font-bold">
          <Logo
            className={
              isHome && !navColor ? "*:fill-white" : "*:fill-primary500"
            }
          />
        </Link>
        {/* DESKTOP NAVIGATION */}
        <section
          className={twMerge(
            `text-grey900 font-semibold flex items-center gap-6 max-lg:hidden`,
            `${isHome && !navColor && "text-white"}`
          )}
        >
          <Link href={"/"}>Home</Link>
          <Link href={"/about-us"}>About Us</Link>
          <Link href={"/services"}>How it works</Link>
          <div
            className="flex items-center gap-2 cursor-pointer "
            onClick={toggleSolutionsMenu}
          >
            <span>Solutions</span>
            <Arrow className={isHome && !navColor && "*:fill-white"} />
          </div>
          <Link href={"/"}>Contact Us</Link>
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={toggleResourcesMenu}
          >
            <span>Resources</span>
            <Arrow className={isHome && !navColor && "*:fill-white"} />
          </div>
        </section>
        f {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center gap-6">
          <Link
            href="/login"
            className={`${
              isHome && navColor
                ? "text-blue-500 hover:text-blue-700"
                : "text-white hover:text-primary100"
            }`}
          >
            Login
          </Link>
          <Button
            label="Sign Up"
            link="/signup"
            classNames={`px-4 py-2 text-sm font-semibold md:text-sm ${
              isHome && !navColor && "bg-white text-primary900"
            }`}
          />
        </div>
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md transition-transform transform translate-y-0">
            <div className="flex flex-col p-4 gap-4">
              <Link href={"/"} onClick={toggleMobileMenu}>
                Home
              </Link>
              <Link href={"/about-us"} onClick={toggleMobileMenu}>
                About Us
              </Link>
              <Link href={"/services"} onClick={toggleMobileMenu}>
                How it works
              </Link>
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={toggleSolutionsMenu}
              >
                <span>Solutions</span>
                <Arrow className={isHome && !navColor && "*:fill-white"} />
              </div>
              <Link href={"/"} onClick={toggleMobileMenu}>
                Contact Us
              </Link>
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={toggleResourcesMenu}
              >
                <span>Resources</span>
                <Arrow className={isHome && !navColor && "*:fill-white"} />
              </div>
              <Link
                href="/login"
                className={`${
                  isHome && navColor
                    ? "text-blue-500 hover:text-blue-700"
                    : "text-primary900 hover:text-primary700"
                }`}
                onClick={toggleMobileMenu}
              >
                Login
              </Link>
              <Button
                label="Sign Up"
                link="/signup"
                classNames={`px-4 py-2 text-sm font-semibold md:text-sm ${
                  isHome && !navColor && "bg-primary900 text-white"
                }`}
              />
            </div>
          </div>
        )}
        {showSolutions && (
          <SolutionsMenu
            isVisible={showSolutions}
            onClose={closeSolutionsMenu}
          />
        )}
        {showResources && (
          <ResourcesMenu
            isVisible={showResources}
            onClose={closeResourcesMenu}
          />
        )}
        {/* MOBILE NAVIGATION */}
        <div>
          <HamburgerIcon />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
