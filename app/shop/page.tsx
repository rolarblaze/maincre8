"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ShopPage() {
  const router = useRouter();
  useEffect(() => {
    router.push("/shop/2");
  }, []);

  return (
    <main>
      <h1 className="text-center text-4xl text-slate-400 xs:max-md:text-3xl">
        Select any of our available bundles
      </h1>
    </main>
  );
}
