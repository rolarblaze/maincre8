"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
import Button from "@/components/Button";
import { useNavScrollAnimation } from "@/hooks";
import { BigCancelIcon, HamburgerIcon } from "@/public/svgs";
import SolutionsMenu from "./SolutionsMenu";
import ResourcesMenu from "./ResourcesMenu";
import { Arrow, ArrowDown, Logo} from "@/public/icons";
import { Url } from "next/dist/shared/lib/router/router";
import MobileSolutionsMenu from "./MobileSolutionsMenu";
import MobileResourcesMenu from "./MobileResourcesMenu";


const Navbar: React.FC = () => {
  const [showSolutions, setShowSolutions] = useState(false);
  const [showResources, setShowResources] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navColor, navScroll] = useNavScrollAnimation();
  const [showMobileSolutions, setShowMobileSolutions] = useState(false);
  const [showMobileResources, setShowMobileResources] = useState(false);

  const pathname = usePathname();
  const isHome =
    pathname === "/" || pathname === "/about-us" || pathname === "/services";

  const mobileNavData = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About Us",
      href: "/about-us",
    },
    {
      name: "How It Works",
      href: "/services",
    },
    {
      name: "Solutions",
      href: "",
    },
    {
      name: "Contact Us",
      href: "/",
    },
    {
      name: "Resources",
      href: "",
    },
  ];

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

  const toggleMobileSolutionsMenu = () => {
    setShowMobileSolutions(!showSolutions);
    if (showMobileResources) setShowMobileResources(false); // Close resources menu if it's open
  };

  const toggleMobileResourcesMenu = () => {
    setShowMobileResources(!showResources);
    if (showMobileSolutions) setShowMobileSolutions(false); // Close solutions menu if it's open
  };

  return (
    <header
      className={`
        ${isHome && navColor ? "bg-white" : "bg-transparent"} 
        ${
          navScroll ? "-translate-y-28 opacity-0" : "translate-x-0 opacity-100"
        } 
        ${isHome ? "bg-transparent " : "bg-white"}
        fixed top-0 w-full border-b border-transparent z-50  transition-all ease-in-out duration-500 border-box
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
        {/* Desktop Buttons */}
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
          <div className="absolute top-0 left-0 w-full bg-white shadow-md transition-transform transform translate-y-0 flex flex-col gap-3 h-screen overflow-y-auto">
            {/* Mobile Nav header */}
            <div className="flex justify-between w-full py-4 pl-5 pr-3 border-b border-grey300">
              <Link href="/" className="text-2xl font-bold">
                <Logo className="*:fill-primary500 w-full h-full" />
              </Link>
              <button
                className="w-fit h-fit cursor-pointer"
                onClick={toggleMobileMenu}
              >
                <BigCancelIcon />
              </button>
            </div>

            {/* Mobile nav body */}
            <div className="flex flex-col p-4 gap-4">
              {/* Mobile navigations */}
              <div className="flex flex-col gap-7 text-grey25">
                {mobileNavData.map((nav, navIdx) => {
                  return (
                    <div key={navIdx}>
                      {nav.name !== "Solutions" && nav.name !== "Resources" && (
                        <Link
                          href={nav.href as Url}
                          className="font-semibold text-grey900 text-sm"
                          onClick={toggleMobileMenu}
                        >
                          {nav.name}
                        </Link>
                      )}

                      {/* Solutions Menu */}
                      {nav.name === "Solutions" && (
                        <div>
                          {showMobileSolutions ? (
                            <MobileSolutionsMenu
                              onClick={() => setShowMobileSolutions(false)}
                              className={`${
                                showMobileSolutions
                                  ? "animate-fadeInDown"
                                  : "animate-fadeOutUp"
                              }`}
                            />
                          ) : (
                            <div className="flex gap-3">
                              <span className="font-semibold text-grey900 text-sm">Solutions</span>
                              <button
                                className="w-fit h-fit cursor-pointer self-center"
                                onClick={toggleMobileSolutionsMenu}
                              >
                                <ArrowDown />
                              </button>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Resources menu */}
                      {nav.name === "Resources" && (
                        <div>
                          {showMobileResources ? (
                            <MobileResourcesMenu
                              onClick={() => setShowMobileResources(false)}
                              className={`${
                                showMobileResources
                                  ? "animate-fadeInDown"
                                  : "animate-fadeOutUp"
                              }`}
                            />
                          ) : (
                            <div className="flex gap-3">
                              <span className="font-semibold text-grey900 text-sm">Resources</span>
                              <button
                                className="w-fit h-fit cursor-pointer self-center"
                                onClick={toggleMobileResourcesMenu}
                              >
                                <ArrowDown />
                              </button>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Nav Buttons */}
              <div className="flex flex-col gap-4">
                <Link
                  href="/login"
                  className={`py-[9.5px] rounded-lg text-center border border-primary500 text-primary500 font-semibold          
                  `}
                  onClick={toggleMobileMenu}
                >
                  Login
                </Link>
                <Button
                  label="Sign Up"
                  link="/signup"
                  classNames={`px-4 py-[9.5px] text-sm font-medium md:text-sm bg-primary500`}
                />
              </div>
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

        {/* MOBILE HAMBURGER */}
        <button
          className="md:hidden w-fit h-fit cursor-pointer"
          onClick={toggleMobileMenu}
        >
          <HamburgerIcon />
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
