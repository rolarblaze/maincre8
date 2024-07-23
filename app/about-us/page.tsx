import {
  AppWrapper,
  HomepageCTA,
  HomepageSubscribe,
  CreativeApproach,
  Team,
  Statement,
  CoreValues,
  WhoWeAre
} from "@/components";

export default function AboutUs() {
  return (
    <AppWrapper type="">
      <main>
        <WhoWeAre/>
        <CoreValues/>
        <Statement/>
        <Team />
        <CreativeApproach />
        <HomepageCTA />
        <HomepageSubscribe />
      </main>
    </AppWrapper>
  );
}
