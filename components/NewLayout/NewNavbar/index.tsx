"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LogoIcon } from "@/public/svgs";
import CartButton from "./CartButton";

const NewNavbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [cartOpen, setCartOpen] = useState(false);

  const hide =
    pathname === "/cart" ||
    pathname === "/signup" ||
    pathname === "/email-verify";

  const handleCart = () => {
    setCartOpen((prev) => !prev);
    router.push("/cart");
  };

  return (
    <header
      className={`full-width content-grid fixed z-50 w-full overflow-hidden ${hide && "border-b border-primary200"}`}
    >
      <div className="full-width absolute size-full bg-white/30 backdrop-blur-md"></div>
      <nav
        className={`z-20 flex items-center py-6 text-sm font-semibold text-grey500 ${hide ? "justify-center" : "justify-between"}`}
      >
        {/* LINKS */}
        {!hide && (
          <ul className="flex items-center justify-start gap-11 max-sm:hidden">
            <li>Pricing</li>
            <li>
              <Link href={"/faqs"}>FAQs</Link>
            </li>
          </ul>
        )}

        {/* LOGO */}
        <Link
          href={"/"}
          className={`flex items-center gap-2.5 ${!hide && "sm:ml-24"}`}
        >
          <LogoIcon />
          <span className="font-schibsted text-2xl font-bold text-black">
            SellCrea8
          </span>
        </Link>

        {/* BUTTONS */}
        {!hide && (
          <div className="flex items-center justify-center gap-6 max-sm:hidden">
            <Link href={"/login"} className="block w-fit">
              Login
            </Link>
            <Link
              href={"/signup"}
              className="block w-fit rounded-lg bg-grey800 px-4 py-2.5 text-grey50"
            >
              Get Started
            </Link>

            <CartButton click={cartOpen} onClick={handleCart} />
          </div>
        )}

        {/* MOBILE: TOGGLE NAV */}
        <div className="size-5 rounded-md bg-black sm:hidden" />
      </nav>
    </header>
  );
};
export default NewNavbar;
