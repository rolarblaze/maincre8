import React from "react";
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
      <div className="space-y-6">
        {showSearchbar && <div>Search bar</div>}
        {showTabs && <div>Tabs</div>}
      </div>
    </section>
  );
}

export default WhiteHeroSection;
