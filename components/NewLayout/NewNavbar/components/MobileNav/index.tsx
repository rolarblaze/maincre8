"use client";
import Link from "next/link";
import { navlinks } from "../../constants";
import { useAppSelector } from "@/redux/store";

const MobileNav = ({ onClose }: { onClose: () => void }) => {
  const { profile } = useAppSelector((state) => state.auth);
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
          <Link  href={"/login"} className={`${(profile.first_name || profile.last_name) && "hidden"}   block w-fit hover:text-primary500`}>
            Login
          </Link>

          <Link
            href={(profile.first_name || profile.last_name) ? "/dashboard" : "/signup"}
            className="block w-fit rounded-lg bg-grey800 px-4 py-2.5 text-grey50"
          >
            {(profile.first_name || profile.last_name) ? "Go To Dashbaord" : "Get Started"}
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default MobileNav;
