import React from "react";
import RedirectLink from "../RedirectLink";
import moment from "moment";

interface ModalBodyProps {
  packageName?: string;
  price?: number;
  date?: string;
  bundleName?:string,
  currency?: string,
  redirectLink?: string;
  showRedirectLink?: boolean;
}

function ModalBody({
  packageName,
  price,
  date,
  bundleName,
  currency,
  redirectLink = "/dashboard/services",
  showRedirectLink = false,
}: ModalBodyProps) {
  return (
    <main className="w-full space-y-6 py-6">
      <h5 className="">Order details</h5>
      <div className="space-y-4">
        <div className="">
          <p className="text-sm font-semibold text-grey500">PACKAGE</p>
          <p className="text-black font-semibold">{packageName}</p>
          <p className="text-grey700">{bundleName}</p>
        </div>
        <div className="w-full max-w-[330px] flex justify-between">
          <div>
            <p className="text-sm font-semibold text-grey500">PRICE</p>
            <p className="text-grey700">{currency} {price}</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-grey500">DATE</p>
            <p className="text-grey700">{date ? moment(date).format("d/M/Y") : "N/A"}</p>
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
