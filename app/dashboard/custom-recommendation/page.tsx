"use client";
import { useEffect, useState } from "react";
import { Button, Loader, EmptyState, Modal } from "@/components";
import { PlusIcon } from "@/public/svgs";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { fetchRecommendationHistory } from "@/redux/order/features";
import assetLibrary from "@/library";
import DashboardPopoutWrapper from "@/components/UI/Modals/DashboardPopoutWrapper";
import RecommendFormInputs from "@/components/NewPages/CustomRecommend/shared/RecommendFormInputs";
import DashboardRecommendForm from "@/components/NewPages/CustomRecommend/DasboardRecommendForm";

const CustomRecommendation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();
  const { recommendationHistory, isLoading } = useAppSelector(
    (state) => state.order,
  );

  useEffect(() => {
    dispatch(fetchRecommendationHistory());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="space-y-12 pt-10 md:pt-0">
      <Button
        label={
          <div className="flex items-center justify-center gap-2">
            <PlusIcon />
            <span>Get new recommendation</span>
          </div>
        }
        onClick={() => setIsOpen(true)}
        classNames="max-w-[17.125rem] text-base leading-6 px-0"
      />

      {/* Business Brief Form Modal */}
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        showCancelIcon={true}
        cancelBtnStyles="border-none mb-6"
        cancelIconStyles="stroke-grey400 w-6 h-6"
        className="!items-start"
      >
        <DashboardPopoutWrapper
          title="Business Brief Submission Form"
          subtitle="Fill out this form to get custom service recommendations"
          classNames=""
        >
          <DashboardRecommendForm />
        </DashboardPopoutWrapper>
        {/* <SuccessModal /> */}
      </Modal>

      <div className="space-y-6">
        <h3 className="text-lg font-semibold leading-6 text-grey900">
          Recommendation history
        </h3>

        <div className="space-y-4">
          {recommendationHistory && recommendationHistory.length > 0 ? (
            recommendationHistory.map((item) => (
              <div
                key={item.id}
                className="flex max-w-[28.3125rem] items-center justify-between gap-4 rounded-lg bg-grey100 p-4 text-sm leading-6 text-grey800"
              >
                <p className="font-semibold">{item.preferred_solutions}</p>
                <p>
                  {item.created_at
                    ? new Date(item.created_at).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })
                    : "Date not available"}
                </p>
              </div>
            ))
          ) : (
            <EmptyState
              imgSrc={assetLibrary.recomEmpty}
              text="No recommendations requested yet"
              // link="Get a new recommendation"
              to="/dashboard/custom-recommendation/form"
              imgStyle="!w-[300px]!h-[300px]"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomRecommendation;
