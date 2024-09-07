import assetLibrary from "@/library";
import Image from "next/image";
import React from "react";

interface NewLogoProps {
  className?: string;
}
const NewLogo: React.FC<NewLogoProps> = ({ className }) => {
  return (
    <div
      className={`max-w-[112px] max-h-[28px] md:max-w-[171px] md:max-h-[40px] ${className}`}
    >
      <Image src={assetLibrary.newLogo} alt="Logo" width={171} height={40} />
    </div>
  );
};

export default NewLogo;
