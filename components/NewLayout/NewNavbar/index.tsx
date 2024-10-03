"use client";
import Link from "next/link";
import { useState } from "react";
import { LogoIcon } from "@/public/svgs";
import { CartPage, Modal } from "@/components";
import CartButton from "./CartButton";

const NewNavbar = () => {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <header className="full-width content-grid fixed z-50 w-full overflow-hidden">
      <div className="full-width absolute size-full bg-white/30 backdrop-blur-md"></div>
      <nav className="z-20 flex items-center justify-between py-6 text-sm font-semibold text-grey500">
        {/* LINKS */}
        <ul className="flex items-center justify-start gap-11 max-sm:hidden">
          <li>Pricing</li>
          <li><Link href={"/faqs"}>FAQs</Link></li>
        </ul>

        {/* LOGO */}
        <Link href={"/"} className={`flex items-center gap-2.5 sm:ml-24`}>
          <LogoIcon />
          <span className="font-schibsted text-2xl font-bold text-black">
            SellCrea8
          </span>
        </Link>

        {/* BUTTONS */}
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

          <CartButton
            click={cartOpen}
            onClick={() => setCartOpen((prev) => !prev)}
          />
        </div>

        {/* MOBILE: TOGGLE NAV */}
        <div className="size-5 rounded-md bg-black sm:hidden" />
      </nav>

      <Modal isOpen={cartOpen} onClose={() => setCartOpen(false)}>
        <CartPage />
      </Modal>
    </header>
  );
};
export default NewNavbar;
