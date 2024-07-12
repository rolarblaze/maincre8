import Button from "@/components/Button";
import HoneyCombDisplay from "@/components/UI/HoneyCombGrid";
import { Highlight } from "@/public/icons";

const CTASection = () => {
  return (
    <section className="py-20 size-full bg-white z-20">
      <div className="bg-primary50 py-8 px-28 mx-auto rounded-2xl max-w-[76rem] flex justify-start items-center gap-16">
        <HoneyCombDisplay />

        <div className="flex flex-col gap-4">
          <h3 className="text-3.5xl leading-10 tracking-[-0.04rem] text-grey900">
            Ready to Transform Your <br /> Business?
          </h3>
          <p>
            Get started with a bundle or a plan today and experience the <br />
            difference with SellCrea8.
          </p>

          <div className="relative mt-2 w-fit">
            <Button label="Get Started" classNames="py-2 px-4 w-fit" />
            <Highlight className="absolute -top-8 -right-[5.5rem] rotate-[280deg]" />
          </div>

        </div>
      </div>
    </section>
  );
};
export default CTASection;
