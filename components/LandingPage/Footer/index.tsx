import React from "react";
import Image from "next/image";
import { footerData } from "./footerData";
import Logo from "../../../public/icons/footer-logo.svg";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full mx-auto flex flex-col gap-5 px-4  bg-dark-cyan-blue text-grey100 text-sm py-5  md:px-14 lg:px-28  md:py-20 ">
      <section className="flex flex-col items-start gap-6 md:justify-between md:flex-row">
        <section className="flex flex-col gap-4">
          <Logo />

          <div className="max-w-80 w-full flex flex-col gap-4">
            <p>Email: {footerData.contact.email}</p>
            <p>Phone: {footerData.contact.phone}</p>
            <p>Address: {footerData.contact.address}</p>
          </div>
        </section>
        <section className="grid grid-cols-1 gap-5 md:gap-10 lg:gap-20 md:grid-cols-2 lg:grid-cols-3">
          {footerData.sections.map((section, index) => (
            <div key={index} className="flex flex-col gap-6">
              <p className="text-base text-grey100 ">{section.title}</p>
              <ul className="flex flex-col gap-4">
                {section.links.map((link, idx) => (
                  <li key={idx}>{link}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      </section>
      <div className="self-start">
          <p>© {currentYear} Rayna. All rights reserved.</p>
        </div>
    </footer>
  );
};

export default Footer;
