import { HomepageBundles, HomepageServices } from "@/components";
import AppWrapper from "@/components/LandingPage/AppWrapper";
import BrandSection from "@/components/LandingPage/Sections/BrandSection";
import DashboardSection from "@/components/LandingPage/Sections/DashboardSection";
import HeroSection from "@/components/LandingPage/Sections/HeroSection";
import SubscribeSection from "@/components/LandingPage/Sections/SubscribeSection";
export default function Home() {
  return (
    <AppWrapper type="">
      <main className="flex flex-col items-center justify-between">
        <h1>Home page</h1>
        <HeroSection />
        <HomepageServices />
        <HomepageBundles />
        <DashboardSection />
        <BrandSection />
        <SubscribeSection />
      </main>
    </AppWrapper>
  );
}
