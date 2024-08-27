import { AppWrapper, HomepageCTA, HomepageSubscribe } from "@/components";
import ContactSection from "@/components/LandingPage/Sections/ContactSection";
import HeroSection from "@/components/LandingPage/Sections/HeroSection";
import React from "react";

function ContactUs() {
  return (
    <AppWrapper type="">
      <main className="">
        <HeroSection title="Contact Us" showGifs={false} showPillText={false} />
        <ContactSection />
        <HomepageCTA />
        <HomepageSubscribe />
      </main>
    </AppWrapper>
  );
}

export default ContactUs;
