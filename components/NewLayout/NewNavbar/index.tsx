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
        <div
          className={`font-schibsted font-bold text-2xl text-black flex items-center gap-2.5`}
        >
          <div className="size-8 bg-primary500 rounded-lg" />
          <span>SellCrea8</span>
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
