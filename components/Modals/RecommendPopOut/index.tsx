import { BulbIcon } from "@/public/icons";
import React from "react";

interface RecommendPopOutProps {
  onClick?: () => void;
}

const RecommendPopOut: React.FC<RecommendPopOutProps> = ({ onClick }) => {
  return (
    <div className="py-6 px-6 rounded-lg max-w-[453px] max-h-[265px] w-full h-full flex flex-col gap-4 bg-white">
      <BulbIcon className="stroke-primary600 w-[40px] h-[50px]" />
      <div className="flex flex-col gap-1">
        <h3 className="text-grey900 font-bold text-2xl">
          Custom recommendations
        </h3>
        <p className="">
          New here? Get custom service recommendations that fit your unique
          needs and situation.
        </p>
      </div>
      <div className="w-full flex justify-between mt-4">
        <button
          className="py-2 rounded-lg w-[11.3rem] text-sm bg-primary500 text-white font-semibold"
          onClick={onClick}
        >
          Get recommendations
        </button>
        <button className="py-2 rounded-lg w-[11.3rem] text-sm bg-white text-primary600 border border-primary600 font-semibold">
          Keep exploring
        </button>
      </div>
    </div>
  );
};

export default RecommendPopOut;
