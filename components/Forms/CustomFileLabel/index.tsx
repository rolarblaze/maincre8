import React from "react";

function CustomFileLabel({
  mainLabel = "Upload a brief document",
}: {
  mainLabel?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-base text-black">{mainLabel}</p>
      <p className="text-sm font-normal text-grey400">
        Optional &bull; MAX. 50MB
      </p>
    </div>
  );
}

export default CustomFileLabel;
