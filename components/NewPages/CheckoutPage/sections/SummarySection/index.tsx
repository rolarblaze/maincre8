"use client";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { makePayment } from "@/redux/cart/features";
import { Button, InputField, Modal } from "@/components";
import SuccessModal from "../SuccessModal";


interface SummarySectionProps {
  totalPrice: number;
  packageId: number;
}

const SummarySection: React.FC<SummarySectionProps> = ({ totalPrice, packageId, }) => {
  const dispatch = useAppDispatch();
  const { isMakingPayment } = useAppSelector((state) => state.cart);

  const [isOpen, setIsOpen] = useState(false);

  const handlePayment = async () => {
    try {
      const currency = "NGN"; // Default to NGN
      console.log("Initiating payment with package_id:", packageId);

      const result = await dispatch(
        makePayment({ package_id: packageId, currency })
      ).unwrap();

      console.log("Payment successful. Redirecting to:", result.data.link);

      // Redirect to the payment link
      window.location.href = result.data.link;
    } catch (err) {
      console.error("Payment failed:", err);

      // Show error alert or modal (optional)
      // setIsOpen(false); // Close modal if open
    }
  };

  return (
    <section className="w-full sm:max-w-[27rem] space-y-6 border-grey200 bg-white p-8 sm:rounded-2xl sm:border">
      <div className="flex items-center justify-between gap-4 max-sm:flex-col">
        <InputField
          type="text"
          placeholder="Enter Discount Code"
          classNames="bg-grey50 border-none placeholder:font-medium"
        />
        <Button
          label="Add"
          classNames="sm:max-w-[7rem] text-sm font-medium py-4"
        />
      </div>

      <hr />

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <p className="text-sm font-normal leading-[150%]">Sub Total</p>
          <p className="font-medium leading-[150%] text-grey600">
            ${totalPrice.toFixed(2)}
          </p>
        </div>
        {/* <div className="flex items-center justify-between">
          <p className="text-sm font-normal leading-[150%]">Tax (10%)</p>
          <p className="font-medium leading-[150%] text-grey600">$41.00</p>
        </div> */}
      </div>

      <hr />

      <div className="flex items-center justify-between">
        <p className="text-sm font-medium leading-[150%]">Total</p>
        <p className="font-semibold leading-6 text-grey800">
          ${totalPrice.toFixed(2)}
        </p>
      </div>

      <Button
        label="Proceed to Payment"
        onClick={handlePayment}
        isLoading={isMakingPayment}
        disabled={isMakingPayment}
        classNames="font-manrope text-base font-semibold mx-auto py-4 rounded-lg"
      />

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        showCancelIcon={false}
      >
        <SuccessModal />
      </Modal>
    </section>
  );
};
export default SummarySection;
