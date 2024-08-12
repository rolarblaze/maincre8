import {
    AppWrapper,
    HomepageCTA,
    HomepageHero,
    HelpCenter,
  } from "@/components";
  
  export default function HelpCenterPage() {
    return (
      <AppWrapper type="">
        <main>
          <HomepageHero
            title="Help and answers from Sellcrea8 Team"
            showGifs={false}
          />
          <HelpCenter/>
          <HomepageCTA />
        </main>
      </AppWrapper>
    );
  }