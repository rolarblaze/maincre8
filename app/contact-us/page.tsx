import { PageLayout } from "@/components";
import MainContactSection from "@/components/NewPages/ContactPage/sections/MainContactSection";
import WhiteHeroSection from "@/components/NewPages/sharedSections/WhiteHeroSection";
import React from "react";

function ContactUs() {
  return (
    <PageLayout>
      <main className="">
        <WhiteHeroSection
          title="Contact Us"
          paragraph="FOR ANY INQUIRIES, REACH OUT TO US, OUR TEAM WILL GET BACK TO YOU PROMPTLY"
        />
        <MainContactSection />
      </main>
    </PageLayout>
  );
}

export default ContactUs;
