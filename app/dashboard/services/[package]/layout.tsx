"use client";
import { useRouter } from "nextjs-toploader/app";
import { packages } from "../_constants";

interface ServicePackageLayoutProps {
  children: React.ReactNode;
  params: {
    package: string;
  };
}

const ServicesPackageLayout: React.FC<ServicePackageLayoutProps> = ({
  children,
  params,
}) => {
  const getPackageName = () => {
    return packages.find(
      (pkg) => pkg.name.toLowerCase().replace(/\s+/g, "-") === params.package,
    );
  };

  const router = useRouter();

  return (
    <div className="font-manrope">
      {/* HEADER */}
      <header className="flex flex-col items-start justify-between px-6 pb-4">
        <button onClick={() => router.back()} className="my-6">
          {" "}
          ← back to services
        </button>

        <div className="space-y-1">
          <h2 className="text-2xl font-semibold text-grey900">
            {getPackageName()?.name}
          </h2>
          <p className="text-base font-medium text-grey500">
            {getPackageName()?.text}
          </p>
        </div>
      </header>

      <hr />

      {children}
    </div>
  );
};

export default ServicesPackageLayout;
