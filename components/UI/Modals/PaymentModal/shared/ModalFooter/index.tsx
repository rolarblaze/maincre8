import React from "react";
import RedirectLink from "../RedirectLink";

interface ModalFooterProps {
  total?: number;
  currency?: string;
  redirectLink?: string;
  linkText?: string;
}

function ModalFooter({
  total,
  currency,
  redirectLink = "/dashboard/my-services",
  linkText = "Go to my services",
}: ModalFooterProps) {
  return (
    <footer className="w-full space-y-6 border-t border-grey200 pt-6">
      <div className="flex justify-between">
        <h5>Total</h5>
        <p className="text-2xl text-grey900">{currency} {total}</p>
      </div>

      <RedirectLink url={redirectLink} linkText={linkText} />
    </footer>
  );
}

export default ModalFooter;
