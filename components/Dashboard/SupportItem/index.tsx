"use client"
import React from "react";
import { LinkIcon, Copy } from "@/public/icons";
import { addAlert } from "@/redux/alerts";
import { useAppDispatch } from "@/redux/store";

interface SupportItemProps {
    type: string;
    content: string;
    isLink?: boolean;
}

const SupportItem: React.FC<SupportItemProps> = ({ type, content, isLink }) => {
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
        <div className="flex items-center gap-2">
            <div className="max-w-14 px-2 py-1 bg-grey200 text-sm text-grey700 font-semibold rounded-sm">
                {type}
            </div>
            <div className="flex items-center gap-1 text-base text-grey900 font-semibold">
                <p>{content}</p>
                <div
                    onClick={isLink ? undefined : handleCopy}
                    className="cursor-pointer"
                >
                    {isLink ? <LinkIcon /> : <Copy />}
                </div>
            </div>
        </div>
    );
};

export default SupportItem;
