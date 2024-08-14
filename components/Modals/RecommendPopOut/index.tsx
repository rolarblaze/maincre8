import assetLibrary from "@/library";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface RecommendPopOutProps {
  title: string;
  paragraph: string;
  getRecommend?: () => void;
  keepExploring?: () => void;
}

const RecommendPopOut: React.FC<RecommendPopOutProps> = ({
  title,
  paragraph,
  getRecommend,
  keepExploring,
}) => {
  return (
    <div className="py-6 px-6 rounded-lg md:max-w-[453px] md:max-h-[265px] w-full md:h-full flex flex-col gap-4 justify-center md:justify-start items-center md:items-start bg-white">
      <Image
        src={assetLibrary.bulbIcon}
        alt="Bulb icon"
        width={30}
        height={40}
      />
      <div className="flex flex-col gap-1 justify-center md:justify-start">
        {/* Mobile */}
        <h3 className="text-grey900 font-bold text-2xl text-center md:hidden">
          Personalised service recommendations
        </h3>
        {/* Desktop and Tabs */}
        <h3 className="text-grey900 font-bold text-2xl text-left hidden md:block">
          Custom recommendations
        </h3>
        {/* Mobile */}
        <p className="text-center md:hidden">
          New here? Get personalised service recommendations that fit your
          unique needs and situation.
        </p>
        {/* Desktop and Tabs */}
        <p className="text-start hidden md:block">
          New here? Get custom service recommendations that fit your unique
          needs and situation.
        </p>
      </div>
      <div className="w-full flex flex-col gap-[18px] md:flex-row md:justify-between items-center md:items-start mt-4">
        <Link
          href={"/"}
          className="py-2 flex justify-center items-center rounded-lg w-full md:w-[11.3rem] text-sm bg-primary500 text-white font-semibold"
          onClick={getRecommend}
        >
          Get recommendations
        </Link>
        <button
          className="py-2 rounded-lg w-full md:w-[11.3rem] text-sm bg-white text-primary600 border border-primary600 font-semibold"
          onClick={keepExploring}
        >
          Keep exploring
        </button>
      </div>
    </div>
  );
};

export default RecommendPopOut;
