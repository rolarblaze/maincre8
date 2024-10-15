"use client";

import { twMerge } from "tailwind-merge";
import { usePathname } from "next/navigation";
import { hideComponent } from "@/hooks";
import NewNavbar from "./NewNavbar";
import NewFooter from "./NewFooter";

const PageLayout = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const pathname = usePathname();

  const hide = hideComponent(pathname);

  return (
    <div
      className={twMerge(
        "full-width content-grid place-content-start font-manrope",
        className,
      )}
    >
      <NewNavbar />
      <main className="full-width content-grid mt-[5.2rem] min-h-[calc(100dvh-4.2rem)] place-content-start">
        {children}
      </main>
      {!hide && <NewFooter />}
    </div>
  );
};
export default PageLayout;
