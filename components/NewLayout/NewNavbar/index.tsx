"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { LogoIcon, MobileMenu } from "@/public/svgs";
import { AvatarProfile } from "@/public/icons";
import { hideComponent } from "@/hooks";
import { CartButton, MobileNav } from "./components";
import { navlinks } from "./constants";
import { useAppSelector } from "@/redux/store";
import { BellIcon, CartIcon } from "@/public/svgs";

const NewNavbar = () => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [name, setName] = useState("");
  const navlink = [
    {
      name: "Pricing",
      // link: "/shop",
      link: "/shop/2",
    },
    {
      name: "FAQs",
      link: "/faqs",
    },
  ];

  const hide = hideComponent(pathname);
  const authenticated = pathname === "/checkout";
  const { profile } = useAppSelector((state) => state.auth);
  const { cartItems } = useAppSelector((state) => state.cart);

  useEffect(() => {
    let userName = localStorage.getItem("SellCrea8User");
    let loginDetails = localStorage.getItem("loginDetails");

    if (!userName) {
      try {
        let typeCastLoginDetails = JSON.parse(loginDetails as string) as {
          email: string;
        };
        setName(typeCastLoginDetails.email);
      } catch (error) {
        setName("---");
      }
    } else {
      let typeCastUserName = JSON.parse(userName as string) as {
        first_name: string;
        last_name: string;
      };
      setName(typeCastUserName.first_name);
    }
  }, []);

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
            <Link
              href={"/login"}
              className={`${(profile.first_name || profile.last_name) && "hidden"} block w-fit hover:text-primary500`}
            >
              Login
            </Link>
            <Link
              href={
                profile.first_name || profile.last_name
                  ? "/dashboard"
                  : "/signup"
              }
              className="block w-fit rounded-lg bg-grey800 hover:bg-grey700 px-4 py-2.5 text-grey50"
            >
              {profile.first_name || profile.last_name
                ? "Go To Dashbaord"
                : "Get Started"}
            </Link>

            <div
              className={`${cartItems.length === 0 ? "bg-[#F0F2F5] hover:bg-slate-200" : "bg-[#E8F1FC] hover:bg-blue-200"} relative size-8 rounded-full p-1`}
            >
              {cartItems.length !== 0 && (
                <div className="center absolute -right-1 -top-1 aspect-square min-h-4 w-auto min-w-4 rounded-full bg-[#1574E5] p-[1px]">
                  <p className="leading-0 text-[10px] text-[#E8F1FC]">
                    {cartItems.length}
                  </p>
                </div>
              )}
              <Link href="/cart" className="center size-full">
                <div className="size-5">
                  <CartIcon
                    fillColor={`${cartItems.length === 0 ? "#667185" : "#1574E5"}`}
                  />
                </div>
              </Link>
            </div>
          </div>
        )}

        {authenticated && (
          <div className="flex items-center justify-end gap-3">
            <p className="font-normal leading-6">Welcome, {name}</p>
            <AvatarProfile />
          </div>
        )}

        {/* MOBILE: TOGGLE NAV */}
        {!hide && (
          <div className="flex items-center justify-end gap-4 lg:hidden">
            <div
              className={`${cartItems.length === 0 ? "bg-[#F0F2F5]" : "bg-[#E8F1FC]"} relative size-8 rounded-full p-1`}
            >
              {cartItems.length !== 0 && (
                <div className="center absolute -right-1 -top-1 aspect-square min-h-4 w-auto min-w-4 rounded-full bg-[#1574E5] p-[1px]">
                  <p className="leading-0 text-[10px] text-[#E8F1FC]">
                    {cartItems.length}
                  </p>
                </div>
              )}
              <Link href="/cart" className="center size-full">
                <div className="size-5">
                  <CartIcon
                    fillColor={`${cartItems.length === 0 ? "#667185" : "#1574E5"}`}
                  />
                </div>
              </Link>
            </div>

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
