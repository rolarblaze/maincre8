import { HowWeDeliver, PageLayout } from "@/components";
import ComprehensiveSupport from "@/components/NewPages/FAQPage/sections/ComprehensiveSupport";
import WhiteHeroSection from "@/components/NewPages/sharedSections/WhiteHeroSection";
import React from "react";

function FAQS() {
  return (
    <PageLayout>
      <WhiteHeroSection
        title="Frequently Asked Questions"
        paragraph="ALL YOUR QUESTIONS, ANSWERED"
      />
      <HowWeDeliver />
      <ComprehensiveSupport />
    </PageLayout>
  );
}

export default FAQS;
