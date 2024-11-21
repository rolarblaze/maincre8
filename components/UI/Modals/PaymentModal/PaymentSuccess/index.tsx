import React from "react";
import ModalHeader from "../shared/ModalHeader";
import { SuccessIcon } from "@/public/svgs";
import ModalBody from "../shared/ModalBody";
import ModalFooter from "../shared/ModalFooter";

function PaymentSuccess({
  packageName,
  price,
  date,
  total,
}: {
  packageName?: string;
  price?: string | number;
  date?: string;
  total: string;
}) {
  return (
    <div
      className={`w-full max-w-[548px] rounded-lg border border-grey50 bg-white bg-[url('/optimised/payment-bg.webp')] bg-cover bg-center px-6 py-6 shadow-lg shadow-grey200`}
    >
      <ModalHeader
        icon={<SuccessIcon />}
        title="Thank you for your order"
        subtitle="You have successfully completed your purchase"
      />
      <ModalBody packageName={packageName} price={price} date={date} />
      <ModalFooter total={total} />
    </div>
  );
}

export default PaymentSuccess;
