import {
  PageLayout,
  BrandSection,
  CtaSection,
  HeroSection,
  LearnMoreSection,
  PackagesSection,
  CustomerReviews,
} from "@/components";
import WhyChooseSellCre8 from "@/components/LandingPage/Sections/WhyChooseSellCre8";
import IndustryLeadingExperts from "@/components/NewPages/LandingPage/sections/IndustryLeadingExperts";
import ProudlyMadeSection from "@/components/NewPages/LandingPage/sections/ProudlyMadeSection";

const Home = () => {
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
export default Home;
