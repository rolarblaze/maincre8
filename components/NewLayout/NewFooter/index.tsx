import Link from "next/link";
import { LogoWhiteIcon, SMGIcon } from "@/public/svgs";
import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  XLogo,
} from "@/public/icons";

const NewFooter = () => {
  const navlinks = [
    {
      name: "Help",
      link: "/contact-us",
    },
    {
      name: "Pricing",
      link: "/shop",
    },
    {
      name: "FAQs",
      link: "/faqs",
    },
  ];

  const navlinks2 = [
    {
      name: "Privacy Policy",
      link: "/privacy-policy",
    },
    {
      name: "Terms & Conditions",
      link: "/terms-and-conditions",
    },
  ];

  return (
    <footer className="full-width content-grid bg-primary900 py-10 md:py-[6.25rem]">
      <div className="space-y-5 sm:space-y-16">
        <section className="flex items-center justify-between gap-5 max-md:flex-col">
          {/* LOGO */}
          <Link href={"/"} className={`flex items-center gap-2.5`}>
            <LogoWhiteIcon />

            <span className="font-schibsted text-2xl font-bold text-white">
              SellCrea8
            </span>
          </Link>

          {/* NAVLINKS */}
          <nav className="lg:ml-12">
            <ul className="flex items-center justify-center gap-[2.75rem] text-sm text-grey200">
              {navlinks.map(({ name, link }) => (
                <li key={name}>
                  <Link href={link} className="hover:text-grey400">{name}</Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* SOCIALS */}
          <div className="flex items-center justify-center gap-6">
            {socials.map(({ id, icon, link }) => (
              <Link key={id} href={link} target="_blank" className="group relative">
                <div className="hidden group-hover:block absolute size-full bg-primary900/50"></div>
                {icon}
              </Link>
            ))}
          </div>
        </section>

        <section className="flex items-center justify-between gap-5 text-sm text-grey500 max-lg:flex-col">
          <p className="max-lg:hidden">
            Copyright © 2024. All rights reserved
          </p>

          <div className="flex items-center justify-center gap-3.5">
            <p className="mt-1">Powered by</p>
            <SMGIcon />
          </div>

          <ul className="flex items-center justify-center gap-12">
            {navlinks2.map(({ name, link }) => (
              <li key={name} className="hover:text-grey300">
                <Link
                  href={link}
                  className="xs:max-md:text-nowrap xs:max-md:text-sm"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>

          <p className="text-xs text-grey300 xs:max-md:text-center sm:max-lg:mt-4 lg:hidden">
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
    link: "https://www.facebook.com/share/1GQhHm5L7q/?mibextid=JRoKGi",
  },
  {
    id: 2,
    icon: <XLogo />,
    link: "https://x.com/sellcrea8frica",
  },
  {
    id: 3,
    icon: <InstagramLogo />,
    link: "https://www.instagram.com/sellcrea8?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    id: 4,
    icon: <LinkedinLogo />,
    link: "https://www.linkedin.com/company/sellcrea8/",
  },
]
