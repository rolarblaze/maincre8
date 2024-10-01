import PageLayout from "@/components/NewLayout";
import {
  BrandSection,
  CtaSection,
  ExpertSection,
  FeatureSection,
  HeroSection,
  LearnMoreSection,
  PackagesSection,
  ProofSection,
  TestimonialSection,
} from "./sections";
import WhyChooseSellCre8 from "@/components/LandingPage/Sections/WhyChooseSellCre8";
import CustomerReviews from "@/components/NewPages/LandingPage/sections/CustomerReviews";
import IndustryLeadingExperts from "@/components/NewPages/LandingPage/sections/IndustryLeadingExperts";
import ProudlyMadeSection from "./sections/ProudlyMadeSection";

const LandingPage = () => {
  return (
    <PageLayout>
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
    </PageLayout>
  );
};
export default LandingPage;
