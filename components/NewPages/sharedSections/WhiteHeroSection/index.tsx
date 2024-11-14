"use client";

import InputField from "@/components/Forms/InputField";
import { SearchIcon } from "@/public/icons";
import React, { ChangeEvent, useState } from "react";
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
  const [queryInput, setQueryInput] = useState<string | undefined>("");

  function handleQueryInput(
    e: ChangeEvent<HTMLInputElement>,
    input: string | undefined,
  ) {
    setQueryInput(input);
  }
  return (
    <section
      className={`full-width flex flex-col items-center gap-10 bg-white py-8 md:pb-[5rem] md:pt-[6.25rem] ${className}`}
    >
      <h3 className="w-full max-w-[24.7rem] text-center text-textMain">
        {title}
      </h3>
      <p className="text-sm text-gray-500">{paragraph}</p>
      {/* Search bar, FAQ tab and FAQ */}
      <div className="flex w-full flex-col items-center gap-y-6 bg-white">
        <div className="w-full px-5 md:px-0">
          {showSearchbar && (
            <InputField
              type="text"
              onChange={handleQueryInput}
              classNames="py-6 placeholder:text-sm text-grey400 border-none !bg-grey50 mx-auto w-full max-w-[900px]"
              placeholder="What do you need help with? Search by keywords."
              icon={<SearchIcon  />}
            />
          )}
        </div>
        {showTabs && <FaqTabs queryInput={queryInput} />}
      </div>
    </section>
  );
}

export default WhiteHeroSection;
