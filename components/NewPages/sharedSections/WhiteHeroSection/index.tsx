import InputField from "@/components/Forms/InputField";
import { SearchIcon } from "@/public/icons";
import React from "react";
import FaqTabs from "../../FAQPage/sections/FaqSection/FaqTabs";
interface WhiteHeroSectionProps {
  title: string;
  paragraph: string;
  showSearchbar?: boolean;
  showTabs?: boolean;
  className?: string;
}

function WhiteHeroSection({
  title,
  paragraph,
  showSearchbar = false,
  showTabs = false,
  className,
}: WhiteHeroSectionProps) {
  return (
    <section
      className={`flex w-full flex-col items-center gap-10 bg-white px-5 pb-[5rem] pt-[6.25rem] ${className}`}
    >
      <h3 className="text-textMain">{title}</h3>
      <p className="text-sm text-gray-500">{paragraph}</p>
      <div className="flex flex-col gap-y-6 items-center">
        {showSearchbar && (
          <div className="w-[818px]">
            <InputField
              type="text"
              icon={
                <SearchIcon className="size-5 !stroke-black stroke-[0.5]" />
              }
              classNames="py-6 placeholder:text-sm text-grey400 border-none !bg-grey50"
              placeholder="What do you need help with?"
            />
          </div>
        )}
        {showTabs && (
          <div>
            <FaqTabs />
          </div>
        )}
      </div>
    </section>
  );
}

export default WhiteHeroSection;
