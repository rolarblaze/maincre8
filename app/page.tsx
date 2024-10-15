import {
  BrandSection,
  CtaSection,
  HeroSection,
  LearnMoreSection,
  PackagesSection,
  CustomerReviews,
  PageLayout,
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
      <WhyChooseSellCre8 />
      <LearnMoreSection />
      <BrandSection />
      <CustomerReviews />
      <IndustryLeadingExperts />
      <CtaSection />
    </PageLayout>
  );
};
export default Home;
