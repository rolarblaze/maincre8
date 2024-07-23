import {
  AppWrapper,
  HomepageDashboard,
  HomepageHero,
  HomepageBrand,
  CustomerReviews,
  HomepageCTA,
  HomepageBenefits,
  HomepageBundles,
  HomepageSubscribe,
  HomepageServices,
  FAQ,
} from "@/components";

export default function Home() {
  return (
    <AppWrapper type="">
      <main className="flex flex-col items-center justify-between">
        <HomepageHero
          pillText="Welcome to SellCrea8"
          title="Your One-Stop Creative and Digital Solutions Hub"
          subtitle="SellCrea8 is a productized eCommerce platform designed by SMG to
            deliver affordable, high-quality, and personalized creative and
            digital services. Simplify your service access and project
            management with our user-friendly interface."
          buttonLabel="Get Started"
          buttonLink="/shop"
          showGifs={true}
        />
        <HomepageServices />
        <HomepageBundles />
        <HomepageDashboard />
        <HomepageBenefits />
        <HomepageBrand />
        <CustomerReviews />
        <FAQ />
        <HomepageCTA />
        <HomepageSubscribe />
      </main>
    </AppWrapper>
  );
}
