import PageLayout from "@/components/NewLayout";
import {
  BrandSection,
  CtaSection,
  HeroSection,
  LearnMoreSection,
  PackagesSection,                          
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
      <WhyChooseSellCre8 />
      <LearnMoreSection />
      <BrandSection />
      <CustomerReviews />
      <IndustryLeadingExperts />
      <CtaSection />
    </PageLayout>
  );
};
export default LandingPage;
