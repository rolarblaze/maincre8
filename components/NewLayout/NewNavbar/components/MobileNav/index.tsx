"use client";
import Link from "next/link";
import { navlinks } from "../../constants";

const MobileNav = ({ onClose }: { onClose: () => void }) => {
  return (
    <nav
      onClick={onClose}
      className="z-20 min-h-[calc(100dvh-4rem)] text-grey800 lg:hidden"
    >
      <div className="space-y-8 rounded-[1.25rem] bg-white px-6 py-10">
        <ul className="flex flex-col items-center justify-center gap-4">
          {navlinks.map(({ name, link }) => (
            <li key={name} className="hover:text-primary700">
              <Link href={link}>{name}</Link>
            </li>
          ))}
        </ul>

        <hr />

        <div className="flex items-center justify-center gap-6">
          <Link href={"/login"} className="block w-fit hover:text-primary500">
            Login
          </Link>

          <Link
            href={"/signup"}
            className="block w-fit rounded-lg bg-grey800 px-4 py-2.5 text-grey50"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default MobileNav;
