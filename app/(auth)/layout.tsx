"use client"
import { FC, useEffect, useState  } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  children: React.ReactNode;
}

const AuthPageLayout: FC<Props> = ({ children }) => {
  const pathname = usePathname();
  const [text, setText] = useState<JSX.Element | null>(null);

  useEffect(() => {
    if (pathname === "/signup" || pathname === "/email-verify") {
      setText(
        <p className="flex items-center gap-2 self-center text-grey500 md:self-end">
          Already have an account?{" "}
          <Link href="/login">
            <p className="text-primary500">Login</p>
          </Link>
        </p>
      );
    } else if (pathname === "/login" || pathname === "/reset-password") {
      setText(
        <p className="flex items-center gap-2 self-center text-grey500 md:self-end">
          No account?{" "}
          <Link href="/signup">
            <p className="text-primary500">Sign up</p>
          </Link>
        </p>
      );
    }
  }, [pathname]);

  return (
    <main className="w-full mx-auto flex flex-col gap-5 p-4 md:py-8 md:px-28 md:gap-10">
     {text}
      <div className="max-w-[592px] w-full h-full  mx-auto self-center  bg-white relative overflow-y-auto">
        {children}
      </div>
    </main>
  );
};

export default AuthPageLayout;
