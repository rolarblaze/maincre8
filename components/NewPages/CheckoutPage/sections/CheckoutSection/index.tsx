import { CartSection, AddOnSection, InputField } from "@/components";
import { EmailFieldIcon } from "@/public/icons";

interface CheckoutSectionProps {
  cartItems: {
    id: number;
    bundle: {
      bundle_name: string;
      bundle_image_link: string;
      bundle_id: number;
    };
    package: { package_name: string };
    addons: {
      id: number;
      quantity: number;
      addon: { name: string; price: number; description: string };
    }[];
  }[];
  cartAddOns: {
    id: number;
    quantity: number;
    addon: { name: string; price: number; description: string };
  }[];
}

const CPCartSection: React.FC<CheckoutSectionProps> = (
  {
    cartItems,
    cartAddOns,
  }
) => {

  // Group addons by bundle name for display
  const groupedAddOns = cartAddOns.reduce((acc: Record<string, any[]>, addon) => {
    // Iterate through cartItems and find the matching bundle using bundle_id
    cartItems.forEach(item => {
      // Match addon with the correct cartItem using addon.bundle_id
      const matchingAddon = item.addons.find((a) => a.id === addon.id);

      if (matchingAddon) {
        const bundleName = item.bundle.bundle_name;

        if (!acc[bundleName]) {
          acc[bundleName] = [];
        }

        acc[bundleName].push({
          uniqueKey: `${addon.id}-${addon.addon.name}`,
          id: addon.id,
          name: addon.addon.name,
          feature: addon.addon.description,
          price: addon.addon.price,
        });
      }
    });

    return acc;
  }, {});

  // Map the grouped add-ons into the expected format for AddOnSection
  const addOns = Object.keys(groupedAddOns).map((bundleName) => ({
    type: bundleName,
    recommendations: groupedAddOns[bundleName],
  }));



  return (
    <div className="h-fit space-y-10 border-grey200 bg-white p-5 font-manrope sm:rounded-2xl sm:border sm:p-8 lg:w-[50rem]">
      <h2 className="text-center text-2xl font-semibold leading-10 text-grey900 lg:text-3.5xl">
        Confirm your plan and Checkout
      </h2>

      <div className="relative flex w-full items-center justify-center">
        <hr className="w-full" />
        <p className="absolute -top-9 mx-auto !mt-7 w-fit bg-white px-2 text-center">
          Confirm Package
        </p>
      </div>

      <CartSection cartItems={cartItems} />
      <AddOnSection addOns={addOns} onAddOnChange={() => { }} />

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

      <p className="text-end text-sm font-normal leading-[150%] text-grey500 sm:text-center">
        Your plan will renew automatically
      </p>
    </div>
  );
};
export default CPCartSection;
