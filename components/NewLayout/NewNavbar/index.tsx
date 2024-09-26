import { LogoIcon } from "@/public/svgs";

const NewNavbar = () => {
  return (
    <header className="py-6">
      <nav className="flex justify-between items-center text-grey500 font-semibold text-sm">
        {/* LINKS */}
        <ul className="flex justify-start items-center gap-11 max-sm:hidden">
          <li>Pricing</li>
          <li>FAQs</li>
        </ul>

        {/* LOGO */}
        <div className={`flex items-center gap-2.5`}>
          <LogoIcon />
          <span className="font-schibsted font-bold text-black text-2xl">
            SellCrea8
          </span>
        </div>

        {/* BUTTONS */}
        <div className="space-x-6  max-sm:hidden">
          <button>Login</button>
          <button className="py-2.5 px-4 text-grey50 bg-grey800 rounded-lg">
            Get Started
          </button>
        </div>

        {/* MOBILE: TOGGLE NAV */}
        <div className="sm:hidden bg-black size-5  rounded-md" />
      </nav>
    </header>
  );
};
export default NewNavbar;
