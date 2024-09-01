"use client"
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

const SupportItem: React.FC<SupportItemProps> = ({ type, content, description, isLink }) => {
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
                    })
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
                    })
                );
            }
        );
    };

    return (
        <div className="flex flex-col items-start p-4 border rounded-lg shadow-sm w-full">
            <h3 className="text-lg font-semibold text-grey900 mb-2">{type}</h3>
            <p className="text-sm text-grey600 mb-4">{description}</p>
            <div className="flex items-center gap-2 text-primary600 font-medium cursor-pointer">
                <span>{content}</span>
                <div onClick={isLink ? undefined : handleCopy}>
                    {isLink ? <LinkIcon /> : <Copy />}
                </div>
            </div>
        </div>
    );
};

export default SupportItem;
