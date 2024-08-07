import Button from "@/components/Button";
import HoneyCombDisplay from "@/components/UI/HoneyCombGrid";
import { Highlight } from "@/public/icons";

const CTASection = () => {
  return (
    <section className="py-20 lg:max-lg:px-5 size-full bg-white z-20">
      <div className="bg-primary50 py-8 px-5 md:px-10 lg:px-28 mx-auto lg:rounded-2xl max-w-[76rem] flex max-md:flex-col-reverse justify-start items-center gap-10 lg:gap-16">
        <HoneyCombDisplay />

        <div className="flex flex-col gap-4 w-full sm:max-md:text-center">
          <h3 className="max-sm:text-2xl text-3.5xl leading-10 tracking-[-0.04rem] text-grey900">
            Ready to Transform Your <br className="max-sm:hidden" /> Business?
          </h3>
          <p>
            Get started with a bundle or a plan today and experience the <br className="max-sm:hidden" />
            difference with SellCrea8.
          </p>

          <div className="relative mt-2 w-fit sm:max-md:mx-auto">
            <Button label="Get Started" classNames="py-2 px-4 w-fit" link="/shop" />
            <Highlight className="absolute -top-8 -right-[5.5rem] rotate-[280deg]" />
          </div>

        </div>
      </div>
    </section>
  );
};
export default CTASection;
