"use client"
import { useEffect } from "react";
import { Button, Loader, EmptyState } from "@/components";
import { PlusIcon } from "@/public/svgs";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { fetchRecommendationHistory } from "@/redux/order/features";
import assetLibrary from "@/library";

const CustomRecommendation = () => {
  const dispatch = useAppDispatch();
  const { recommendationHistory, isLoading } = useAppSelector((state) => state.order);

  useEffect(() => {
    dispatch(fetchRecommendationHistory());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="space-y-12">
      <Button
        link="/dashboard/custom-recommendation/form"
        label={
          <div className="flex justify-center items-center gap-2">
            <PlusIcon />
            <span>Get new recommendation</span>
          </div>
        }
        classNames="max-w-[17.125rem] text-base leading-6 px-0"
      />

      <div className="space-y-6">
        <h3 className="font-semibold text-lg text-grey900 leading-6">
          Recommendation history
        </h3>

        <div className="space-y-4">
          {recommendationHistory && recommendationHistory.length > 0 ? (
            recommendationHistory.map((item) => (
              <div
                key={item.id}
                className="max-w-[28.3125rem] text-sm leading-6 flex justify-between items-center p-4 rounded-lg bg-grey100 text-grey800"
              >
                <p className="font-semibold">{item.preferred_solutions}</p>
                <p>{item.created_at ? new Date(item.created_at).toLocaleDateString('en-US', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric'
                }) : "Date not available"}</p>
              </div>
            ))
          ) : (
            <EmptyState
              imgSrc={assetLibrary.recomEmpty}
              text="No recommendations found"
              link="Get a new recommendation"
              to="/dashboard/custom-recommendation/form"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomRecommendation;
