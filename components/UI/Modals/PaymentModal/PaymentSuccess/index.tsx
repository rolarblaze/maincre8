import React from "react";
import ModalHeader from "../shared/ModalHeader";
import { SuccessIcon } from "@/public/svgs";
import ModalBody from "../shared/ModalBody";
import ModalFooter from "../shared/ModalFooter";

interface PaymentSuccessProps {
  package_name?: string;
  bundle_name?: string;
  amount?: number;
  currency?: string;
  created_at?: string;
  total?: number;
}

const PaymentSuccess: React.FC<PaymentSuccessProps> = ({
  package_name,
  bundle_name,
  amount,
  created_at,
  currency,
   total,
}) =>{
  return (
    <div
      className={`w-full max-w-[548px] rounded-lg border border-grey50 bg-white bg-[url('/optimised/payment-bg.webp')] bg-cover bg-center px-6 py-6 shadow-lg shadow-grey200`}
    >
      <ModalHeader
        icon={<SuccessIcon />}
        title="Thank you for your order"
        subtitle="You have successfully completed your purchase"
      />
      <ModalBody packageName={ package_name} bundleName={bundle_name} price={amount} date={created_at} currency={currency}/>
      <ModalFooter total={amount} currency={currency} />
    </div>
  );
}

export default PaymentSuccess;
