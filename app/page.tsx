"use client";
import { useState, useEffect, useRef } from "react";
import {
  AppWrapper,
  HomepageDashboard,
  HomepageHero,
  HomepageBrand,
  CustomerReviews,
  HomepageCTA,
  HomepageBenefits,
  HomepageBundles,
  HomepageSubscribe,
  HomepageServices,
  FAQ,
  Modal,
} from "@/components";
import RecommendPopOut from "@/components/Modals/RecommendPopOut";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsModalOpen(true);
        }
      },
      { threshold: 0.5 } // Adjust this value to control when the modal pops up
    );

    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }

    return () => {
      if (servicesRef.current) {
        observer.unobserve(servicesRef.current);
      }
    };
  }, []);

  return (
    <AppWrapper type="">
      <main className="flex flex-col items-center justify-between">
        <HomepageHero
          pillText="Welcome to SellCrea8"
          title="Your One-Stop Creative and Digital Solutions Hub"
          subtitle="SellCrea8 is a productized eCommerce platform designed by SMG to
            deliver affordable, high-quality, and personalized creative and
            digital services. Simplify your service access and project
            management with our user-friendly interface."
          buttonLabel="Get Started"
          buttonLink="/shop"
          showGifs={true}
        />
        <HomepageServices ref={servicesRef} />
        <HomepageBundles />
        <HomepageDashboard />
        <HomepageBenefits />
        <HomepageBrand />
        <CustomerReviews />
        <FAQ />
        <HomepageCTA />
        <HomepageSubscribe />
      </main>

      {/* Modal component */}
      {/* <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        className="!px-4 !py-4"
        showCancelIcon={false}
      >
        <RecommendPopOut
        title="Custom recommendations"
          getRecommend={handleCloseModal}
          keepExploring={handleCloseModal}
        />
      </Modal> */}
    </AppWrapper>
  );
}
