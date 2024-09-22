import { Schibsted_Grotesk } from "next/font/google";

const schibstedGrotesk = Schibsted_Grotesk({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const NewNavbar = () => {
  return (
    <header className="py-6">
      <nav className="flex justify-between items-center text-grey500 font-semibold text-sm">
        {/* LINKS */}
        <ul className="flex justify-start items-center gap-11">
          <li>Pricing</li>
          <li>FAQs</li>
        </ul>

        {/* LOGO */}
        <div
          className={`font-schibsted font-bold text-2xl text-black flex items-center gap-2.5`}
        >
          <div className="size-8 bg-primary500 rounded-lg" />
          <span>SellCrea8</span>
        </div>

        {/* BUTTONS */}
        <div className="space-x-6">
          <button>Login</button>
          <button className="py-2.5 px-4 text-grey50 bg-grey800 rounded-lg">
            Get Started
          </button>
        </div>
      </nav>
    </header>
  );
};
export default NewNavbar;
