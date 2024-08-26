import { AppWrapper, HomepageCTA, HomepageSubscribe } from "@/components";
import ContactSection from "@/components/LandingPage/Sections/ContactSection";
import HeroSectionTwo from "@/components/LandingPage/Sections/HeroSectionTwo";
import React from "react";

function ContactUs() {
  return (
    <AppWrapper type="">
      <main className="flex flex-col items-center justify-center">
        <HeroSectionTwo content="Contact Us" />
        <ContactSection />
        <HomepageCTA />
        <HomepageSubscribe />
      </main>
    </AppWrapper>
  );
}

export default ContactUs;
