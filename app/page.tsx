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
        <HomepageHero />
        <HomepageServices />
        <HomepageBundles />
        <HomepageDashboard />
        <HomepageBenefits />
        <HomepageBrand />
        <CustomerReviews />
        <FAQ/>
        <HomepageCTA />
        <HomepageSubscribe />
      </main>
    </AppWrapper>
  );
}
