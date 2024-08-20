import React from "react";
import SupportItem from "@/components/Dashboard/SupportItem";

export default function Support() {
  return (
    <section className="w-full py-12 md:py-16">
      <div className="max-w-72 w-full flex flex-col items-start gap-4">
        <SupportItem type="Chat" content="Chat on WhatsApp" isLink={true} />
        <SupportItem type="Email" content="support@sellcrea8.com" />
        <SupportItem type="Chat" content="+234 812 345 6789" />
      </div>
    </section>
  );
}
