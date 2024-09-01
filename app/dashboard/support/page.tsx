import React from "react";
import SupportItem from "@/components/Dashboard/SupportItem";

export default function Support() {
  return (
    <section className="w-full py-12 md:py-16">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <SupportItem
          type="Live chat"
          content="Chat on WhatsApp"
          description="Chat on WhatsApp to get instant support for any queries you have."
          isLink={true}
        />
        <SupportItem
          type="Email support"
          content="support@sellcrea8.com"
          description="Email us your queries, and our support team will get back to you within 24 hours."
        />
        <SupportItem
          type="Phone support"
          content="+234 812 345 6789"
          description="Call us directly for immediate assistance with your concerns."
        />
      </div>
    </section>
  );
}
