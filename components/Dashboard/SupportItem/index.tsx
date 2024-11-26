"use client";
import React from "react";
import { LinkIcon, Copy } from "@/public/icons";
import { addAlert } from "@/redux/alerts";
import { useAppDispatch } from "@/redux/store";

interface SupportItemProps {
  type: string;
  content: string;
  description: string;
  isLink?: boolean;
}

const SupportItem: React.FC<SupportItemProps> = ({
  type,
  content,
  description,
  isLink,
}) => {
  const dispatch = useAppDispatch();

  const handleCopy = () => {
    navigator.clipboard.writeText(content).then(
      () => {
        dispatch(
          addAlert({
            id: "",
            headText: "Success",
            subText: "Copied to clipboard!",
            type: "success",
          }),
        );
      },
      (err) => {
        console.error("Could not copy text: ", err);
        dispatch(
          addAlert({
            id: "",
            headText: "Error",
            subText: "Failed to copy to clipboard.",
            type: "error",
          }),
        );
      },
    );
  };

  const redirectToWhatsApp = () => {
    const whatsAppNumber = "+2349129567246";
    const whatsappLink = `https://wa.me/${whatsAppNumber}?text=Hello%2C%20I%20want%20to%20make%20inquiries%20about%20SellCrea8`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <div className="flex w-full flex-col items-start rounded-lg border p-4 shadow-sm">
      <h3 className="mb-2 text-lg font-semibold text-grey900">{type}</h3>
      <p className="mb-4 text-sm text-grey600">{description}</p>
      <div
        onClick={isLink ? redirectToWhatsApp : handleCopy}
        className="flex cursor-pointer items-center gap-2 font-medium text-primary600"
      >
        <span>{content}</span>
        <div>{isLink ? <LinkIcon /> : <Copy />}</div>
      </div>
    </div>
  );
};

export default SupportItem;
