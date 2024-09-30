import { ArrowDown } from "@/public/icons";
import { PlusIcon, TrashIcon } from "@/public/svgs";

const CartSection = () => {
  return (
    <section className="flex flex-col gap-6">
      <h3 className="text-sm font-medium leading-[150%] text-grey900">
        Your Cart
      </h3>

      <div className="divide-y rounded-[1.25rem] border border-grey100 px-6 py-2.5">
        {[1, 2].map((item) => (
          <div
            key={item}
            className="flex w-full items-center justify-between gap-8 py-5"
          >
            <div className="h-[3.75rem] w-40 rounded-2xl bg-primary200"></div>

            <div className="flex items-center justify-center gap-6">
              <div className="flex items-center justify-center gap-2 rounded-lg border border-grey100 px-4 py-2 text-sm font-semibold text-grey400 shadow-sm">
                <span>Switch Package</span>

                <ArrowDown className="fill-grey300" />
              </div>

              <button className="rounded-lg bg-grey100 p-2">
                <TrashIcon />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="ml-auto flex items-center justify-center gap-6 text-sm font-semibold text-grey400">
        <button className="flex items-center justify-center gap-2 rounded-lg bg-grey100 px-5 py-2">
          Add New Bundle <PlusIcon fillColor="#667185" />
        </button>

        <button className="flex items-center justify-center gap-2 rounded-lg border border-grey100 px-4 py-2">
          <span>Clear Cart</span>
          <TrashIcon fillColor="#d0d5dd" />
        </button>
      </div>
    </section>
  );
};
export default CartSection;
