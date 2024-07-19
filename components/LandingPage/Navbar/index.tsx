"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SolutionsMenu from "./SolutionsMenu";
import ResourcesMenu from "./ResourcesMenu";
import Button from "@/components/Button";
import Logo from "@/public/icons/logo.svg";
import Arrow from "@/public/icons/arrow-down.svg";
import { m } from "framer-motion";
import { twMerge } from "tailwind-merge";

const Navbar: React.FC = () => {
  const [showSolutions, setShowSolutions] = useState(false);
  const [showResources, setShowResources] = useState(false);

  const [navColor, setNavColor] = useState(false);
  const [navScroll, setNavScroll] = useState(false);

  const pathname = usePathname();
  const isHome = pathname === "/";

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

  // HANDLE NAVBAR SCROLL ANIMATION
  useEffect(() => {
    let lastScrollY = window.scrollY;

    window.addEventListener("scroll", () => {
      if (lastScrollY < window.scrollY) {
        setNavScroll(true);
      } else {
        setNavScroll(false);
      }
      lastScrollY = window.scrollY;

      if (window.scrollY >= 140) {
        setNavColor(true);
      } else {
        setNavColor(false);
      }
    });
  }, [navScroll, navColor]);

  return (
    <header
      className={`
        ${isHome && navColor ? "bg-white" : "bg-transparent"} 
        ${
          navScroll ? "-translate-y-28 opacity-0" : "translate-x-0 opacity-100"
        } 
        fixed top-0 w-full ${
          isHome ? "bg-transparent " : "bg-white"
        } border-b border-transparent z-50  transition-all ease-in-out duration-500
      `}
    >
      <nav
        className={`mx-auto py-3 flex items-center justify-between max-w-[76rem] max-xl:px-4 md:py-6 relative`}
      >
        <Link href="/" className="text-2xl font-bold">
          <Logo className={isHome && !navColor && "*:fill-white"} />
        </Link>

        {/* the solution and resources weight and size were different */}

        <section
          className={twMerge(
            `flex items-center text-grey900 gap-6 span  font-semibold`,
            `${isHome && !navColor && "text-white"}`
          )}
        >
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>About Us</Link>
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

        {/* <div className="flex items-center gap-6">
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
        </div> */}

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
      </nav>
    </header>
  );
};

export default Navbar;
