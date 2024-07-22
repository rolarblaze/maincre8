import React from "react";
import Image from "next/image";
import { footerData } from "./footerData";
import Logo from "../../../public/icons/footer-logo.svg";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full max-xl:px-4 flex flex-col gap-5 bg-dark-cyan-blue text-grey100/80 text-sm py-5 md:py-20">
      <div>
        <section className="flex flex-col mx-auto max-w-[76rem] items-start gap-6 md:justify-between md:flex-row">
          <section className="flex flex-col gap-4">
            <Logo />
            <p className="text-2xl font-semibold leading-8">Talk to SMG</p>

            <div className="max-w-80 w-full flex flex-col gap-4">
              <p className="flex gap-x-2 flex-wrap justify-start items-center">
                Email:{" "}
                {footerData.contact.email.map((email, i) => (
                  <span key={`email-${i}`} className="inline">
                    {email}
                  </span>
                ))}
              </p>
              <p>Phone: {footerData.contact.phone}</p>
              {/* <p>Address: {footerData.contact.address}</p> */}
            </div>
          </section>

          <section className="grid grid-cols-1 gap-5 md:gap-10 lg:gap-28 md:grid-cols-2 lg:grid-cols-3">
            {footerData.sections.map((section, index) => (
              <div key={index} className="flex flex-col gap-6">
                <p className="text-base text-grey100/80 ">{section.title}</p>
                <ul className="flex flex-col gap-4">
                  {section.links.map((link, idx) => (
                    <li key={idx}>{link}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        </section>
      </div>
      <div className="mx-auto w-full max-w-[76rem]">
        <p>© {currentYear} Rayna. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
