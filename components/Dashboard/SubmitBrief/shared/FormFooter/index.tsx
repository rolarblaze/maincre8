import Button from "@/components/Button";
import InputFile from "@/components/Forms/InputFile";
import { FileUploadIcon } from "@/public/svgs";
import React from "react";

function FormFooter({
  errors,
  handleFileUpload,
}: {
  errors?: string;
  handleFileUpload?: () => void;
}) {
  return (
    <div className="absolute inset-x-0 bottom-0 flex justify-between bg-white px-12 py-6">
      <InputFile
        label={
          <div className="flex flex-col gap-2">
            <p className="text-base text-black">Upload a brief document</p>
            <p className="text-sm font-normal text-grey400">
              Optional &bull; MAX. 50MB
            </p>
          </div>
        }
        id="document"
        name="document"
        icon={<FileUploadIcon />}
        handleUpload={(value: File | null) =>
          handleFileUpload && handleFileUpload()
        }
        parentClassNames="md:!flex-col"
        buttonStyles="px-4"
      />
      <Button
        label="Submit a brief"
        type="submit"
        classNames="self-end w-auto py-2 px-4"
      />
    </div>
  );
}

export default FormFooter;
