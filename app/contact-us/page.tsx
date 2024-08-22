import { AppWrapper, HomepageCTA, HomepageSubscribe } from "@/components";
import HeroSectionTwo from "@/components/LandingPage/Sections/HeroSectionTwo";
import React from "react";

function ContactUs() {
  return (
    <AppWrapper type="">
      <main className="flex flex-col items-center justify-center">
        <HeroSectionTwo content="Contact Us" />
        <HomepageCTA />
        <HomepageSubscribe />
      </main>
    </AppWrapper>
  );
}

export default ContactUs;
