import {
  EmailAddressIcon,
  PhoneNumberIcon,
  SubmitBriefIcon,
} from "@/public/icons";
import React from "react";

const SalesPopUp = () => {
  return (
    <>
      <div className="border border-[#E5E5EA] flex items-start gap-6 p-6">
        <div>
          <EmailAddressIcon />
        </div>
        <div className="flex flex-col items-start text-start">
          <p className="text-primary500 text-lg font-semibold mb-2">
            Email Address
          </p>
          <p className="text-grey500">
            For technical assistance or support-related queries, please contact
            our dedicated support team at
          </p>
          <a href="mailto:hello@sellmedia.africa" className="p text-grey900">
            hello@sellmedia.africa
          </a>
        </div>
      </div>

      <div className="border border-[#E5E5EA] flex items-start gap-6 p-6">
        <PhoneNumberIcon />
        <div>
          <p className="text-primary500 text-lg font-semibold mb-2">
            Phone Number
          </p>
          <a href="tel:+2347064191282" className="p text-grey500">
            +2347064191282
          </a>
        </div>
      </div>

      <div className="border border-[#E5E5EA] flex items-start gap-6 p-6">
        <SubmitBriefIcon />
        <div>
          <p className="text-primary500 text-lg font-semibold mb-2">
            Submit a brief
          </p>
        </div>
      </div>
    </>
  );
};

export default SalesPopUp;
