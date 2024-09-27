import { LogoIcon } from "@/public/svgs";
import Link from "next/link";

const NewNavbar = () => {
  return (
    <header className="py-6">
      <nav className="flex items-center justify-between text-sm font-semibold text-grey500">
        {/* LINKS */}
        <ul className="flex items-center justify-start gap-11 max-sm:hidden">
          <li>Pricing</li>
          <li>FAQs</li>
        </ul>

        {/* LOGO */}
        <div className={`flex items-center gap-2.5`}>
          <LogoIcon />
          <span className="font-schibsted text-2xl font-bold text-black">
            SellCrea8
          </span>
        </div>

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
        </div>

        {/* MOBILE: TOGGLE NAV */}
        <div className="size-5 rounded-md bg-black sm:hidden" />
      </nav>
    </header>
  );
};
export default NewNavbar;
