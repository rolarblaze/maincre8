"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SolutionsMenu from "./SolutionsMenu";
import ResourcesMenu from "./ResourcesMenu";
import Button from "@/components/Button";
import Logo from "@/public/icons/logo.svg";
import Arrow from "@/public/icons/arrow-down.svg";
import { MobileToggle } from "@/public/icons";
import { twMerge } from "tailwind-merge";
import { HamburgerIcon } from "@/public/svgs";

const Navbar: React.FC = () => {
  const [showSolutions, setShowSolutions] = useState(false);
  const [showResources, setShowResources] = useState(false);
  const [navColor, setNavColor] = useState(false);
  const [navScroll, setNavScroll] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        fixed top-0 w-full z-[40] ${
          isHome ? "bg-transparent " : "bg-white"
        } border-b border-transparent z-50  transition-all ease-in-out duration-500
      `}
      style={{ zIndex: 10000 }}
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

<<<<<<< HEAD
        {/* Mobile Menu Toggle */}
        <div className="lg:hidden" onClick={toggleMobileMenu}>
          <MobileToggle className="w-6 h-6" />{" "}
          {/* Use the imported MobileToggle icon */}
        </div>

        {/* Desktop Menu */}
        <section
          className={twMerge(
            `hidden lg:flex items-center text-grey900 gap-6 span  font-semibold`,
=======
        {/* DESKTOP NAVIGATION */}
        <section
          className={twMerge(
            `text-grey900 font-semibold flex items-center gap-6 max-lg:hidden`,
>>>>>>> 3a7fa1e2eb8c1278e61f711c10be6c50f281149b
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
