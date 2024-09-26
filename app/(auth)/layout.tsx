"use client";
import { FC, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
<<<<<<< HEAD
=======
import { GoogleIcon, LogoBlack } from "@/public/icons";
import { Wave } from "@/public/imgs";
import path from "path";
>>>>>>> c6edd5ed73e2617965852cca6aad4774baa40364
import Image from "next/image";

interface Props {
  children: React.ReactNode;
}

// responsible for the SSO with Google, Facebook, LinkedIn
const SingleSignOnSection = () => {
  return (
    <section className="mt-5">
      <div className="relative h-4 center">
        <hr className="bg-[#F0F2F5] w-full" />
        <p className="absolute bg-white text-xs py-1 px-2 font-normal text-[#667185]">
          Or Continue with
        </p>
      </div>
      <div className="center gap-5 mt-5">
        {[
          { label: "Google", icon: "/images/google.png" },
          { label: "Facebook", icon: "/images/facebook.png" },
          { label: "LinkedIn", icon: "/images/linkedin.png" },
        ].map((sso) => {
          return (
            <div key={sso.label} className="inline-block">
              <Link
                href="/"
                className="center gap-1 bg-[#F7F9FC] border border-[#D0D5DD] rounded-md p-4"
              >
                <figure className="relative size-5 center">
                  <Image fill={true} src={sso.icon} alt={`${sso.label} Icon`} />
                </figure>
                <p className="font-semibold text-[16px] text-[#344054]">
                  {sso.label}
                </p>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

const AuthPageLayout: FC<Props> = ({ children }) => {
  const pathname = usePathname();
  const [isNewMemberText, setIsNewMemberText] = useState<JSX.Element | null>(
    null
  );

  useEffect(() => {
    if (pathname === "/signup") {
      setIsNewMemberText(
        <div className="center mt-5">
          <p className="text-xs font-normal text-[#667185]">
            Already have an account?
          </p>
          <Link
            href="/login"
            className="p-2 w-auto text-xs bg-transparent font-medium text-[#1574E5]"
          >
            Log in
          </Link>
        </div>
      );
    } else if (pathname === "/login") {
      setIsNewMemberText(
        <div className="center mt-5">
          <p className="text-xs font-normal text-[#667185]">
            Are you new here?
          </p>
          <Link
            href="/signup"
            className="p-2 w-auto text-xs bg-transparent font-medium text-[#1574E5]"
          >
            Create Account
          </Link>
        </div>
      );
    }
  }, [pathname]);

  const maxWClass =
    pathname === "/forgot-password" ? "max-w-3xl" : "max-w-[592px]";

  return (
    <main className="min-h-screen relative bg-[#F7F9FC]">
      {/* auth layout header */}
      <div className="center bg-white border border-b-[#93BFF3] py-3">
        <Link href="/" className="center gap-2">
          <figure className="relative size-8 center">
            <Image
              fill={true}
              src="/images/logo-icon.png"
              alt="SellCrea8 Logo"
            />
          </figure>
          <p className="font-bold text-lg leading-6 text-black">SellCrea8</p>
        </Link>
      </div>

      <div className="w-full mx-auto flex flex-col gap-5 p-4 md:py-8 md:px-28 md:gap-10">
        <div
          className={`min-w-[40%] mx-auto bg-white py-8 px-7 rounded-[10px] border border-[#D0D5DD]`}
        >
          <div className="flex flex-col gap-4 text-center">{children}</div>

          <div className="">
            {/* Only show SSO if the pathname is among the paths in the list */}
            {["/login", "/signup"].includes(pathname) && (
              <SingleSignOnSection />
            )}

            {["/login", "/signup"].includes(pathname) && isNewMemberText}
          </div>
        </div>
      </div>
    </main>
  );
};

export default AuthPageLayout;
