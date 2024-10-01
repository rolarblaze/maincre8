import React from 'react';
import {
  PageLayout,
  BrandSection,
  CtaSection,
  HeroSection,
  LearnMoreSection,
  PackagesSection,
} from "@/components";
import ProudlyMadeSection from "@/components/LandingPage/Sections/ProudlyMadeSection";
import WhyChooseSellCre8 from "@/components/LandingPage/Sections/WhyChooseSellCre8";
import CustomerReviews from "@/components/LandingPage/Sections/CustomerReviews";
import IndustryLeadingExperts from "@/components/LandingPage/Sections/IndustryLeadingExperts";

const Home = () => {
  return (
    <>
      <HeroSection />
      <PackagesSection />
      <ProudlyMadeSection />
      {/* <ProofSection /> */}
      <WhyChooseSellCre8 />
      {/* <FeatureSection /> */}
      <LearnMoreSection />
      <BrandSection />
      {/* <TestimonialSection /> */}
      <CustomerReviews />
      {/* <ExpertSection /> */}
      <IndustryLeadingExperts />
      <CtaSection />
    </>
  );
};
export default Home;
