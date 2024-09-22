const NewFooter = () => {
  return (
    <footer className="full-width content-grid py-[6.25rem] bg-primary900">
      <div className="space-y-16">
        <section className="flex justify-between items-center">
          {/* LOGO */}
          <div className={`flex items-center gap-2.5`}>
            <div className="size-8 bg-white rounded-lg" />
            <span className="font-schibsted font-bold text-2xl text-white ">
              SellCrea8
            </span>
          </div>

          {/* NAVLINKS */}
          <nav>
            <ul className="flex justify-center items-center text-grey200 text-sm gap-[2.75rem]">
              <li>Home</li>
              <li>Pricing</li>
              <li>FAQs</li>
            </ul>
          </nav>

          {/* SOCIALS */}
          <div className="flex justify-center items-center gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div className="size-8 bg-white rounded-lg" />
            ))}
          </div>
        </section>

        <section className="text-grey500 text-sm flex justify-between items-center">
          <p>Copyright © 2024. All rights reserved</p>

          <div className="flex justify-center items-center gap-3.5">
            <span>Powered by</span>
            <div className="w-24 h-8 bg-white rounded-lg" />
          </div>

          <ul className="flex justify-center gap-12 items-center">
            <li>Privacy Policy</li>
            <li>Terms & Service</li>
          </ul>
        </section>
      </div>
    </footer>
  );
};
export default NewFooter;
