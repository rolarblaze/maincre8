"use client";
import { usePathname } from "next/navigation";

import NewNavbar from "./NewNavbar";
import NewFooter from "./NewFooter";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  const hide =
    pathname === "/cart" ||
    pathname === "/signup" ||
    pathname === "/email-verify";

  return (
    <div className="full-width content-grid place-content-start font-manrope">
      <NewNavbar />
      <main className="full-width content-grid mt-[5.2rem] min-h-[calc(100dvh-4.2rem)] place-content-start">
        {children}
      </main>
      {!hide && <NewFooter />}
    </div>
  );
};
export default PageLayout;
