"use client";
import { FC, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { PageLayout } from "@/components";

interface Props {
  children: React.ReactNode;
}

// responsible for the SSO with Google, Facebook, LinkedIn
const SingleSignOnSection = () => {
  return (
    <section className="mt-5">
      <div className="center relative h-4">
        <hr className="w-full bg-[#F0F2F5]" />
        <p className="absolute bg-white px-2 py-1 text-xs font-normal text-[#667185]">
          Or Continue with
        </p>
      </div>
      <div className="center mt-5 gap-5">
        {[
          { label: "Google", icon: "/images/google.png" },
          { label: "Facebook", icon: "/images/facebook.png" },
          { label: "LinkedIn", icon: "/images/linkedin.png" },
        ].map((sso) => {
          return (
            <div key={sso.label} className="inline-block">
              <Link
                href="/"
                className="center gap-1 rounded-md border border-[#D0D5DD] bg-[#F7F9FC] p-4"
              >
                <figure className="center relative size-5">
                  <Image fill={true} src={sso.icon} alt={`${sso.label} Icon`} />
                </figure>
                <p className="text-[16px] font-semibold text-[#344054]">
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
    null,
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
            className="w-auto bg-transparent p-2 text-xs font-medium text-[#1574E5]"
          >
            Log in
          </Link>
        </div>,
      );
    } else if (pathname === "/login") {
      setIsNewMemberText(
        <div className="center mt-5">
          <p className="text-xs font-normal text-[#667185]">
            Are you new here?
          </p>
          <Link
            href="/signup"
            className="w-auto bg-transparent p-2 text-xs font-medium text-[#1574E5]"
          >
            Create Account
          </Link>
        </div>,
      );
    }
  }, [pathname]);

  const maxWClass =
    pathname === "/forgot-password" ? "max-w-3xl" : "max-w-[592px]";

  return (
    <PageLayout className="relative w-full bg-[#F7F9FC] pt-10">
      <div className="mx-auto flex w-full flex-col gap-5">
        <div
          className={`mx-auto min-w-[40%] rounded-[10px] border border-[#D0D5DD] bg-white px-7 py-8`}
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
    </PageLayout>
  );
};

export default AuthPageLayout;
