import { useEffect, useState } from "react";
import Link from "next/link";
import SolutionsMenu from "./SolutionsMenu";
import ResourcesMenu from "./ResourcesMenu";
import Button from "@/components/Button";
import Logo from "@/public/icons/logo.svg";
import Arrow from "@/public/icons/arrow-down.svg";

const Navbar: React.FC = () => {
  const [showSolutions, setShowSolutions] = useState(false);
  const [showResources, setShowResources] = useState(false);

  const [navColor, setNavColor] = useState(false);
  const [navScroll, setNavScroll] = useState(false);

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

      if (window.scrollY >= 70) {
        setNavColor(true);
      } else {
        setNavColor(false);
      }
    });
  }, [navScroll, navColor]);

  return (
    <header
      className={`fixed top-0 w-full bg-transparent border-b border-transparent z-50 `}
    >
      <nav
        className={`
        ${navScroll ? "-translate-y-28" : "translate-x-0"} ${navColor && "bg-white"}
        mx-auto px-4 py-3 flex items-center justify-between md:px-14 md:py-6 lg:px-28 relative transition-all ease-in-out duration-500`}
      >
        <Link href="/" className="text-2xl font-bold">
          <Logo />
        </Link>

        {/* the solution and resources weight and size were different */}

        <section className="flex items-center gap-6 span text-grey900 font-semibold">
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>About Us</Link>
          <div
            className="flex items-center gap-2 cursor-pointer "
            onClick={toggleSolutionsMenu}
          >
            <span>Solutions</span>
            <Arrow />
          </div>
          <Link href={"/"}>Contact Us</Link>
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={toggleResourcesMenu}
          >
            <span>Resources</span>
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
            classNames="px-4 py-2 text-xs font-normal md:text-sm"
          />
        </div>
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
