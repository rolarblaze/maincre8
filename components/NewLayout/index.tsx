"use client";

import { twMerge } from "tailwind-merge";
import { usePathname } from "next/navigation";
import { hideComponent } from "@/hooks";
import NewNavbar from "./NewNavbar";
import NewFooter from "./NewFooter";
import { getBundles } from "@/redux/shop/features";
import { RootState, useAppDispatch, useAppSelector } from "@/redux/store";
import { useEffect } from "react";
import { getCartItems } from "@/redux/cart/features";

const PageLayout = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const pathname = usePathname();
  let dispatch = useAppDispatch();
  const bundlesData = useAppSelector(
    (state: RootState) => state.pageViewData.allShopBundles,
  );
  const hide = hideComponent(pathname);

  useEffect(() => {
    if (bundlesData.length === 0) {
      dispatch(getBundles());
    }
  }, []);

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
