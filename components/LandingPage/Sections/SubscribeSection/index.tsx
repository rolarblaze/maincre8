import Button from "@/components/Button";
import InputField from "@/components/Forms/InputField";
import { StartProjectText } from "@/public/icons";
import computer from "@/public/imgs/computer.png";
import Image from "next/image";

const SubscribeSection = () => {
  return (
    <section className="w-full bg-grey800">
      <div className="py-20 mx-auto max-w-[76rem] flex justify-between items-center">
        <div className="space-y-4 ">
          {/* PILL DIV */}
          <div className="border p-2 w-fit border-grey50 rounded-[0.625rem]">
            <span className="text-lg text-grey50 font-semibold leading-7">
              Subscribe to Our Newsletter 
            </span>
          </div>

          <h3 className="text-grey50 font-bold text-3.5xl leading-10">
            Stay Updated!
          </h3>

          <p className="text-grey50 font-medium leading-6">
            Subscribe to our newsletter for the latest updates, discounts, and
            promotions.
          </p>

          {/* BUTTONS */}
          <div className="max-w-[28.5rem] flex justify-center items-center gap-10">
            <InputField
              label=""
              type="text"
              placeholder="Enter email address"
              classNames="max-w-[13rem] bg-white"
            />

            <Button label="Subscribe" classNames="max-w-[13rem]" />
          </div>
        </div>

        <figure className="relative size-[16.6875rem] mr-12">
          <Image src={computer} alt="computer image" />
          <StartProjectText className="absolute bottom-6 right-7" />
        </figure>
      </div>
    </section>
  );
};
export default SubscribeSection;
