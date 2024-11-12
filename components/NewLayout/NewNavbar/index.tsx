"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { LogoIcon, MobileMenu } from "@/public/svgs";
import { AvatarProfile } from "@/public/icons";
import { hideComponent } from "@/hooks";
import { CartButton, MobileNav } from "./components";
import { navlinks } from "./constants";

const NewNavbar = () => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const hide = hideComponent(pathname);
  const authenticated = pathname === "/checkout";

  return (
    <header
      className={`full-width content-grid fixed z-40 w-full overflow-hidden ${hide && "border-b border-primary200"}`}
    >
      <div className="full-width absolute size-full bg-white/30 backdrop-blur-md"></div>
      <nav
        className={`z-20 flex items-center py-6 text-sm font-semibold text-grey500 ${hide && !authenticated ? "justify-center" : "justify-between"}`}
      >
        {/* LINKS */}
        {!hide && (
          <ul className="flex items-center justify-start gap-11 max-lg:hidden">
            {navlinks?.map(({ name, link }) => (
              <li key={name} className="hover:text-primary700">
                <Link href={link}>{name}</Link>
              </li>
            ))}
          </ul>
        )}

        {/* LOGO */}
        <Link
          href={"/"}
          className={`flex items-center gap-2.5 ${!hide && "lg:ml-24"}`}
        >
          <LogoIcon />
          <span className="font-schibsted text-2xl font-bold text-black">
            SellCrea8
          </span>
        </Link>

        {/* BUTTONS */}
        {!hide && (
          <div className="flex items-center justify-center gap-6 max-lg:hidden">
            <Link href={"/login"} className="block w-fit hover:text-primary500">
              Login
            </Link>
            <Link
              href={"/signup"}
              className="block w-fit rounded-lg bg-grey800 px-4 py-2.5 text-grey50"
            >
              Get Started
            </Link>

            <Link href={"/cart"} className="block">
              <CartButton
                click={cartOpen}
                onClick={() => setCartOpen((prev) => !prev)}
              />
            </Link>
          </div>
        )}

        {authenticated && (
          <div className="flex items-center justify-end gap-3">
            <p className="font-normal leading-6">Welcome, Bola</p>
            <AvatarProfile />
          </div>
        )}

        {/* MOBILE: TOGGLE NAV */}
        {!hide && (
          <div className="flex items-center justify-end gap-4 lg:hidden">
            <Link href={"/cart"} className="block">
              <CartButton
                click={cartOpen}
                onClick={() => setCartOpen((prev) => !prev)}
              />
            </Link>

            <button onClick={() => setMobileOpen((prev) => !prev)}>
              <MobileMenu />
            </button>
          </div>
        )}
      </nav>

      {mobileOpen && (
        <MobileNav onClose={() => setMobileOpen((prev) => !prev)} />
      )}
    </header>
  );
};
export default NewNavbar;
