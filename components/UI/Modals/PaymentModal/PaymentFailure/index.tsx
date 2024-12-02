import React from "react";
import ModalHeader from "../shared/ModalHeader";
import ModalBody from "../shared/ModalBody";
import FailureIcon from "@/public/svgs/FailureIcon";




interface PaymentFailureProps {
  package_name?: string;
  bundle_name?: string;
  amount?: number;
  currency?: string;
  created_at?: string;
  total?: number;
}


const PaymentFailure: React.FC<PaymentFailureProps> = ({
  package_name,
  bundle_name,
  amount,
  created_at,
  currency,
   total,
}) =>{
  return (
    <div className="w-full max-w-[548px] rounded-lg border border-grey50 bg-white px-6 py-6 shadow-md shadow-grey200">
      <ModalHeader
        icon={<FailureIcon />}
        title="Your payment failed"
        subtitle="Try again to complete your purchase"
      />
      <ModalBody
        showRedirectLink
        packageName={ package_name} bundleName={bundle_name} price={amount} date={created_at} currency={currency}
      />
    </div>
  );
}

export default PaymentFailure;
