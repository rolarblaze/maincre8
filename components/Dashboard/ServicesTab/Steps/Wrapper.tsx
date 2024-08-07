import Button from "@/components/Button";
import { CheckboxIcon } from "@/public/svgs";
import React from "react";

interface CallComponentProps {
  iconFillColor: string;
  iconUnchecked?: boolean;
  title: string;
  description: string;
  buttonLabel: string;
  buttonClassNames: string;
  containerClassNames?: string;
  showButton?: boolean;
  showDate?: boolean;
  dateBought?: string;
}

const WrapperComponent: React.FC<CallComponentProps> = ({
  iconFillColor,
  iconUnchecked = false,
  title,
  description,
  buttonLabel,
  buttonClassNames,
  containerClassNames = "",
  showButton = true,
  showDate = false,
  dateBought = "",
}) => {
  return (
    <div className="flex items-center">
      <div className="mx-auto w-[70px] h-[70px] grid place-items-center">
        <CheckboxIcon
          fillColor={iconFillColor}
          className="size-8 cursor-pointer"
          unchecked={iconUnchecked}
        />
      </div>

      <div
        className={`w-full flex items-center justify-between gap-2 border-2 border-grey200 rounded-lg p-6 bg-grey100 ${containerClassNames}`}
      >
        <div>
          <p className="text-lg text-grey400 font-semibold">{title}</p>
          <p className="text-grey400">{description}</p>
        </div>

        <div>
          {showButton && (
            <Button
              label={buttonLabel}
              classNames={`text-white bg-grey300 w-fit !text-xs px-3 ${buttonClassNames}`}
            />
          )}
          {showDate && <p>{dateBought}</p>}
        </div>
      </div>
    </div>
  );
};

export default WrapperComponent;
