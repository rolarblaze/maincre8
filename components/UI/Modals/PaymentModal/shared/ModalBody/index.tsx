import React from "react";
import RedirectLink from "../RedirectLink";

interface ModalBodyProps {
  packageName?: string;
  price?: string | number;
  date?: string;
  redirectLink?: string;
  showRedirectLink?: boolean;
}

function ModalBody({
  packageName = "Graphic Design-Basic | Brand Design-Standard",
  price = "$499",
  date = "01 July 2024",
  redirectLink = "/dashboard/services",
  showRedirectLink = false,
}: ModalBodyProps) {
  return (
    <main className="w-full space-y-6 py-6">
      <h5 className="">Order details</h5>
      <div>
        <div>
          <p className="text-sm font-semibold text-grey500">PACKAGE</p>
          <p className="text-grey700">{packageName}</p>
        </div>
        <div className="flex gap-16">
          <div>
            <p className="text-sm font-semibold text-grey500">PRICE</p>
            <p className="text-grey700">{price}</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-grey500">DATE</p>
            <p className="text-grey700">{date}</p>
          </div>
        </div>
      </div>
      {showRedirectLink && (
        <RedirectLink url={redirectLink} linkText="Back to service page" />
      )}
    </main>
  );
}

export default ModalBody;
