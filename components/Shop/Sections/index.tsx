"use client";
import React, {
  useRef,
  useState,
  useEffect,
  RefObject,
  ReactElement,
} from "react";
import { twMerge } from "tailwind-merge";
import { BasicIcon, BlueArrowLeft, BlueArrowRight, PremiumIcon, StandardIcon } from "@/public/icons";
import Card from "../SectionCard";
import Modal from "@/components/Modals/CustomModal";
import SalesPopUp from "@/components/SalesPopUp";


interface SideScrollItem {
  name: string;
  ["talk-to-sales"]?: boolean;
  coming_soon?: boolean;
}

interface Package {
  packageId: number; 
  packageName: string;
  icon: ReactElement;
  description: string;
  price: string;
  features: string[];
}

interface Bundle {
  bundleId: number;
  bundle: string;
  packages: Package[];
}

interface SectionProps {
  pageTitle?: string;
  sideScrollItems: SideScrollItem[];
  bundles: Bundle[];
}

const Section: React.FC<SectionProps> = ({
  pageTitle,
  sideScrollItems,
  bundles,
}) => {
  const sliderRef: RefObject<HTMLDivElement> = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<number>(0); // Set the default active tab to the first bundle
  const [leftArrowBg, setLeftArrowBg] = useState<string>("transparent");
  const [rightArrowBg, setRightArrowBg] = useState<string>("bg-primary50");
  const [showAllStates, setShowAllStates] = useState<{
    [key: string]: boolean;
  }>({});

  const handleShowAllToggle = (packageIndex: number) => {
    setShowAllStates((prevStates) => ({
      ...prevStates,
      [packageIndex]: !prevStates[packageIndex],
    }));
  };

  const packageIcons = {
    "Basic Package": BasicIcon,
    "Standard Package": StandardIcon,
    "Premium Package": PremiumIcon,
  };

  const handleScroll = () => {
    const slider = sliderRef.current;
    if (slider) {
      const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
      setLeftArrowBg(slider.scrollLeft > 0 ? "bg-primary50" : "transparent");
      setRightArrowBg(
        slider.scrollLeft < maxScrollLeft ? "bg-primary50" : "transparent"
      );
    }
  };

  const scrollLeft = () => {
    const slider = sliderRef.current;
    if (slider) {
      slider.scrollBy({ left: -100, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    const slider = sliderRef.current;
    if (slider) {
      slider.scrollBy({ left: 100, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener("scroll", handleScroll);
      handleScroll();
      return () => slider.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const handleItemClick = (index: number, item: SideScrollItem) => {
    setActiveTab(index);
    if (item["talk-to-sales"] || item.coming_soon) {
      setIsModalOpen(true);
    }
  };

  return (
    <div className="text-center">
      {/* Page Title */}
      {pageTitle && <h3>{pageTitle}</h3>}

      {/* Sideways Scroll */}
      <div className="rounded-[10px] shadow-dark-blue flex items-center p-4 gap-4 justify-between mt-6 mb-10">
        <div
          className={twMerge(
            "border border-primary500 rounded-full p-4 w-fit cursor-pointer",
            leftArrowBg
          )}
          onClick={scrollLeft}
        >
          <BlueArrowLeft />
        </div>

        <div className="flex overflow-x-auto noScrollbar" ref={sliderRef}>
          {sideScrollItems?.map((item, index) => (
            <p
              key={index}
              onClick={() => handleItemClick(index, item)}
              className={twMerge(
                "span flex-none border border-grey600 py-1.5 px-2 mr-2 rounded-lg cursor-pointer",
                activeTab === index ? "bg-black text-white" : ""
              )}
            >
              {item?.name}
              {item["talk-to-sales"] && (
                <span className="text-primary900 bg-primary50 rounded-[10px] ml-2 py-0.5 px-2">
                  talk to sales
                </span>
              )}
              {item.coming_soon && (
                <span className="text-primary900 bg-primary50 rounded-[10px] ml-2 py-0.5 px-2">
                  coming soon
                </span>
              )}
            </p>
          ))}
        </div>

        <div
          className={twMerge(
            "border border-primary500 rounded-full p-4 w-fit cursor-pointer",
            rightArrowBg
          )}
          onClick={scrollRight}
        >
          <BlueArrowRight />
        </div>
      </div>

      {/* Bundles */}
      <div className="w-full flex gap-8">
        {bundles[activeTab]?.packages.map((pkg, index) => {
          const Icon =
            packageIcons[pkg.packageName as keyof typeof packageIcons] ||
            BasicIcon;
          return (
            <Card
              key={pkg?.packageName}
              icon={<Icon width={24} height={24} />}
              title={pkg?.packageName}
              description={pkg?.description}
              price={pkg?.price}
              features={pkg?.features}
              showAll={showAllStates[index]}
              onShowAllToggle={() => handleShowAllToggle(index)}
              bundleId={bundles[activeTab].bundleId} 
              packageId={pkg.packageId} 
            />
          );
        })}
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <SalesPopUp />
      </Modal>
    </div>
  );
};

export default Section;
