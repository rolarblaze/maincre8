import Button from "@/components/Button";
import { CheckboxIcon } from "@/public/svgs";
import React from "react";

interface CallComponentProps {
  title: string;
  description: string;
  buttonLabel: string;
  buttonClassNames: string;
  showButton?: boolean;
  showDate?: boolean;
  dateBought?: string;
  status: "inactive" | "inprogress" | "completed";
  onClick?: any;
  completedState?: React.ReactElement;
  loading?: boolean;
  extraDescription?: any;
}

const WrapperComponent: React.FC<CallComponentProps> = ({
  status,
  title,
  description,
  buttonLabel,
  buttonClassNames,
  showButton = true,
  showDate = false,
  dateBought = "",
  onClick,
  completedState,
  loading,
  extraDescription,
}) => {
  const iconFill = status === "inactive" ? "#D0D5DD" : "#1574E5";
  const iconCheck = status === "completed" ? false : true;
  const containerStyle =
    status === "inprogress"
      ? "border-2 border-primary500 bg-primary50 border-dashed"
      : "border-grey100 bg-grey100 cursor-not-allowed";

  const textColor = status === "inactive" ? "text-[#98A2B3]" : "text-[#344054]";

  const btnStyles = status !== "inprogress" ? "bg-grey300" : "bg-primary500";

  const showDescription = status === "completed" ? "hidden" : "block";

  return (
    <div className="flex items-center">
      <div className="mx-auto w-[70px] h-[70px] xs:max-md:size-8 grid place-items-center">
        <CheckboxIcon
          fillColor={iconFill}
          className="size-8 xs:max-md:size-5"
          unchecked={iconCheck}
          disabled
        />
      </div>

      <div
        className={`w-full flex flex-wrap items-center justify-between gap-2 rounded-lg p-3 xs:max-md:p-3 ${containerStyle} ${textColor}`}
      >
        <div>
          <p className="text-base md:text-lg font-semibold">{title}</p>
          <p className={`${showDescription} xs:max-md:text-sm`}>{description}</p>
          <div className={`${showDescription}`}>{extraDescription}</div>
        </div>

        <div className="text-end">
          {status === "completed" && completedState
            ? completedState
            : showButton && (
                <Button
                  label={buttonLabel}
                  classNames={`text-white w-fit !text-xs !py-2 !px-4 ${btnStyles} ${buttonClassNames}`}
                  onClick={onClick}
                  isLoading={loading}
                />
              )}
          {showDate && (
            <span className="text-sm text-grey500 mt-1 md:mt-2">
              {dateBought !== "Unknown date" && dateBought}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default WrapperComponent;
