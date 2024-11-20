import React from "react";
import ModalHeader from "../shared/ModalHeader";
import ModalBody from "../shared/ModalBody";
import FailureIcon from "@/public/svgs/FailureIcon";

function PaymentFailure() {
  return (
    <div className="w-full max-w-[548px] rounded-lg border border-grey50 bg-white px-6 py-6 shadow-md shadow-grey200">
      <ModalHeader
        icon={<FailureIcon />}
        title="Your payment failed"
        subtitle="Try again to complete your purchase"
      />
      <ModalBody showRedirectLink />
    </div>
  );
}

export default PaymentFailure;
