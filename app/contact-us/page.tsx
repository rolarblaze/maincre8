import {
  HomepageCTA,
  HomepageSubscribe,
  PageLayout,
} from "@/components";
import ContactSection from "@/components/LandingPage/Sections/ContactSection";
import HeroSection from "@/components/LandingPage/Sections/HeroSection";
import React from "react";

function ContactUs() {
  return (
    <PageLayout>
      <main className="">
        {/* <HeroSection
          title="Contact Us"
          showGifs={false}
          showPillText={false}
          applyTitleStyles={true}
        /> */}
        <ContactSection />
        {/* <HomepageCTA /> */}
        {/* <HomepageSubscribe /> */}
      </main>
    </PageLayout>
  );
}

export default ContactUs;
