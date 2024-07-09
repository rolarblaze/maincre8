import { HomepageBundles, HomepageServices } from "@/components";
import AppWrapper from "@/components/LandingPage/AppWrapper";
import Image from "next/image";

export default function Home() {
  return (
    <AppWrapper type="">
      <main className="flex flex-col items-center justify-between p-24">
        <h1>Home page</h1>
      </main>
    </AppWrapper>
  );
}
