import {
  AllServices,
  AppWrapper,
  GetStarted,
  HomepageHero,
  HowWeDeliver,
} from "@/components";
import CTASection from "@/components/LandingPage/Sections/CTASection";

const Services = () => {
  return (
    <AppWrapper type="">
      <main>
        <HomepageHero
          pillText="How SellCrea8 Works"
          title="Your Creative and Digital Business Needs, Simplified  "
          subtitle="Our platform connects you with a diverse range of professional creatives and digital experts, ready to deliver bespoke solutions tailored to your needs. Discover SellCrea8, where turning your ideas into reality is seamless and effortless."
          buttonLabel="Get Started"
          buttonLink="/services"
          showGifs={false}
        />
        <AllServices />
        <GetStarted />
        <HowWeDeliver />
        <CTASection />
      </main>
    </AppWrapper>
  );
};

export default Services;
