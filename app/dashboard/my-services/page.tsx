"use client";
import { Button, EmptyState, Loader, ServiceCard } from "@/components";
import AllInOneBundleForm from "@/components/Dashboard/SubmitBrief/AllInOneBundleForm";
import BrandDesignForm from "@/components/Dashboard/SubmitBrief/BrandDesignForm";
import ContentCreationForm from "@/components/Dashboard/SubmitBrief/ContentCreationForm";
import DigitalMarketForm from "@/components/Dashboard/SubmitBrief/DigitalMarketForm";
import GraphicsDesignForm from "@/components/Dashboard/SubmitBrief/GraphicsDesignForm";
import BusinessBriefHeader from "@/components/Dashboard/SubmitBrief/shared/BusinessBriefHeader";
import SliderModal from "@/components/UI/Modals/SliderModal";
import { handleFormModal } from "@/redux/myServices";
import { formConfig } from "@/redux/myServices/formConfig";
import { getUserOrderHistory } from "@/redux/servicesTracker/features";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import React, { useEffect, useState } from "react";

const MyServices = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(-1);
  const { orderHistory, loading } = useAppSelector((state) => state.services);
  const dispatch = useAppDispatch();

  const bundleColors: { [key: string]: string } = {};

  useEffect(() => {
    dispatch(getUserOrderHistory());
  }, [dispatch]);

  // Placeholder
  const servicesObj = {
    digitalMarketing: "Digital Marketing",
    graphicsDesign: "Graphics Design",
    brandDesign: "Brand Design",
    contentCreation: "Content Creation",
    AllInOne: "All-In-One Bundle",
  };

  const serviceKeys = Object.keys(servicesObj) as Array<
    keyof typeof formConfig
  >;
  // // Placeholder
  const currentServiceKey = serviceKeys[currentServiceIndex];

  const currentServiceTitle =
    servicesObj[currentServiceKey as keyof typeof servicesObj];

  // Effect to open modal whenever `currentServiceIndex` changes
  useEffect(() => {
    if (currentServiceKey) {
      dispatch(
        handleFormModal({ formName: currentServiceKey, isModalOpen: true }),
      );
    }
  }, [currentServiceKey, dispatch]);

  // Access the isModalOpen state for the current service form
  const isModalOpen = useAppSelector(
    (state) => currentServiceKey && state.forms[currentServiceKey]?.isModalOpen,
  );

  // Placeholder
  const handleClose = () => {
    dispatch(
      handleFormModal({ formName: currentServiceKey, isModalOpen: false }),
    );
  };

  // Placeholder
  const handleNextService = () => {
    console.log("clicked!");

    setCurrentServiceIndex((prevIndex) =>
      prevIndex === serviceKeys.length - 1 ? 0 : prevIndex + 1,
    );
    // dispatch(
    //   handleFormModal({ formName: currentServiceKey, isModalOpen: true }),
    // );
  };

  if (loading)
    return (
      <div className="flex items-center justify-center">
        <Loader />
      </div>
    );

  return (
    <>
      <main className="absolute right-[35%] top-1/4 gap-10">
        <Button
          label="Toggle Service"
          classNames="w-auto py-2 px-4 hover:bg-primary500"
          onClick={handleNextService}
        />
        <SliderModal
          isOpen={isModalOpen}
          onClose={handleClose}
          title="Digital Marketing Brief Submission Form"
          cancelBtnStyles="border-none top-1 right-6 md:top-5 md:right-10"
        >
          <BusinessBriefHeader
            title={`${currentServiceTitle} Business Brief Form`}
          />
          {currentServiceTitle === servicesObj.digitalMarketing ? (
            <DigitalMarketForm />
          ) : currentServiceTitle === servicesObj.graphicsDesign ? (
            <GraphicsDesignForm />
          ) : currentServiceTitle === servicesObj.brandDesign ? (
            <BrandDesignForm />
          ) : currentServiceTitle === servicesObj.contentCreation ? (
            <ContentCreationForm />
          ) : (
            <AllInOneBundleForm />
          )}
        </SliderModal>
      </main>
      {orderHistory && orderHistory?.length < 1 ? (
        <EmptyState
          imgSrc="/images/myservices-empty.png"
          text="Buy a package to get started"
          link="Shop now"
          to="/dashboard/services"
          imgStyle=""
        />
      ) : (
        <div className="grid gap-6 overflow-y-auto md:grid-cols-3">
          {orderHistory?.map((transaction, i) => (
            <ServiceCard
              key={i}
              category={transaction.package.package_name}
              title={transaction.package.package_name}
              description={transaction.package.description}
              color={bundleColors[transaction.package.bundle.bundle_name]}
              id={transaction.package.package_id}
              transactionId={transaction.transaction_id}
              isPaid
            />
          ))}
        </div>
      )}
    </>
  );
};

export default MyServices;
