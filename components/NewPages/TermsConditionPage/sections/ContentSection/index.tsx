"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { FadeUpDiv } from "@/components";
import { termConditionsData } from "./constants";

const ContentSection = () => {
  const { activeTab } = useSelector((state: RootState) => state.tabs);
  const activeContent = termConditionsData.find(
    (item) => item.id === activeTab,
  );

  const hasTitle = (item: {
    id: number;
    title?: string;
    text: string;
  }): item is { id: number; title: string; text: string } => {
    return "title" in item;
  };

  return (
    <FadeUpDiv
      up={false}
      className="full-width content-grid h-full min-h-[calc(100dvh-22rem)] bg-grey50 py-[6.25rem]"
    >
      <div className="mx-auto w-full max-w-3xl space-y-8 lg:p-6">
        {activeContent ? (
          <div>
            <h2 className="text-lg font-medium leading-[150%] text-grey800">
              {activeContent.content.title || activeContent.content.headline}
            </h2>
            <p className="text-lg font-medium leading-[150%] text-grey800">
              {activeContent.content.paragraph}
            </p>

            {activeContent.content.list && (
              <ul className="mx-6 list-outside list-disc space-y-8">
                {activeContent.content.list.map((listItem) => (
                  <li
                    key={listItem.id}
                    className="space-y-1.5 text-pretty text-base font-medium leading-6 text-grey500"
                  >
                    {hasTitle(listItem) && (
                      <strong className="font-bold leading-6 text-grey800">
                        {listItem.title}
                      </strong>
                    )}
                    <br />
                    <span>{listItem.text}</span>
                  </li>
                ))}
              </ul>
            )}

            {activeContent.content.sections &&
              activeContent.content.sections.map((section) => (
                <div key={section.id} className="space-y-8">
                  <h3 className="text-lg font-semibold text-grey800">
                    {section.title}
                  </h3>
                  <ul className="mx-6 list-outside list-disc space-y-8">
                    {section.list.map((listItem) => (
                      <li
                        key={listItem.id}
                        className="space-y-1.5 text-base font-medium leading-6 text-grey500"
                      >
                        {hasTitle(listItem) && (
                          <>
                            <strong className="font-bold text-grey800">
                              {listItem.title}
                            </strong>
                            <br />
                          </>
                        )}
                        <span className="leading-6">{listItem.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

            <p className="font-medium leading-6 text-primary600">
              {activeContent.content.under}
            </p>
          </div>
        ) : (
          <p>No content available for this tab.</p>
        )}
      </div>
    </FadeUpDiv>
  );
};

export default ContentSection;
