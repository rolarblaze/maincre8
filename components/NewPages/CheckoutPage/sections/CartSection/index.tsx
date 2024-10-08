import { CartSection, AddOnSection, InputField } from "@/components";
import { EmailFieldIcon } from "@/public/icons";

const CPCartSection = () => {
  return (
    <div className="h-fit w-[50rem] space-y-10 rounded-2xl border border-grey200 bg-white p-8 font-manrope">
      <h2 className="text-center text-3.5xl font-semibold leading-10 text-grey900">
        Confirm your plan and Checkout
      </h2>

      <p className="!mt-7 text-center">Confirm Package</p>

      <CartSection />
      <AddOnSection />

      <div className="flex items-center justify-start gap-2">
        <input type="checkbox" />

        <p className="text-sm font-medium text-grey500">Also renew add-ons</p>
      </div>

      <InputField
        type="text"
        label="Billing Email address"
        classNames="max-w-[28.125rem] border-primary100"
        icon={<EmailFieldIcon />}
      />

      <p className="text-center text-sm font-normal leading-[150%] text-grey500">
        Your plan will renew automatically
      </p>
    </div>
  );
};
export default CPCartSection;
