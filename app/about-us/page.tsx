import { Metadata } from "next";
import {
  AppWrapper,
  HomepageCTA,
  HomepageSubscribe,
  CreativeApproach,
  Team,
  Statement,
  CoreValues,
  WhoWeAre,
  HomepageHero,
} from "@/components";

export const metadata: Metadata = {
  title: "About SellCrea8 | Innovating Marketing for Businesses",
  description:
    "Learn more about SellCrea8, your trusted partner in branding, content, and marketing. We provide businesses with the tools and expertise to thrive in the digital space.",
  keywords: [
    "SellCrea8",
    "Innovative Marketing",
    "Business Branding",
    "Digital Expertise",
    "Content and Branding Solutions",
  ],
};

export default function AboutUs() {
  return (
    <AppWrapper type="">
      <main>
        <HomepageHero
          pillText="About us"
          title="Discover the Power of Creativity with SellCrea8"
          subtitle="Elevate your brand with our comprehensive creative and digital marketing solutions. Experience quality, innovation, and results that exceed expectations. Join us and transform your creative vision into reality."
          buttonLabel="Get Started"
          buttonLink="/shop"
          showGifs={false}
        />
        <WhoWeAre />
        <CoreValues />
        <Statement />
        <Team />
        <CreativeApproach />
        <HomepageCTA />
        <HomepageSubscribe />
      </main>
    </AppWrapper>
  );
}
