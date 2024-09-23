import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  XLogo,
} from "@/public/icons";
import { LogoWhiteIcon, SMGIcon } from "@/public/svgs";

const NewFooter = () => {
  return (
    <footer className="full-width content-grid bg-primary900 py-10 md:py-[6.25rem] ">
      <div className="space-y-5 sm:space-y-16">
        <section className="flex max-md:flex-col justify-between items-center gap-5">
          {/* LOGO */}
          <div className={`flex items-center gap-2.5`}>
            <LogoWhiteIcon />

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
            {socials.map(({ id, icon }) => (
              <span key={id}>{icon}</span>
            ))}
          </div>
        </section>

        <section className="text-grey500 text-sm flex justify-between items-center max-md:flex-col gap-5">
          <p className="max-md:hidden">Copyright © 2024. All rights reserved</p>

          <div className="flex justify-center items-center gap-3.5">
            <p className="mt-1">Powered by</p>
            <SMGIcon />
          </div>

          <ul className="flex justify-center gap-12 items-center">
            <li>Privacy Policy</li>
            <li>Terms & Service</li>
          </ul>

          <p className="text-grey100 text-xs md:hidden">
            ©2024 SellMedia, BOSS Global. All rights reserved.
          </p>
        </section>
      </div>
    </footer>
  );
};
export default NewFooter;

const socials = [
  {
    id: 1,
    icon: <FacebookLogo />,
  },
  {
    id: 2,
    icon: <XLogo />,
  },
  {
    id: 3,
    icon: <InstagramLogo />,
  },
  {
    id: 4,
    icon: <LinkedinLogo />,
  },
];
