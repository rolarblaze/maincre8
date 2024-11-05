import Button from "@/components/Button";
import CustomFileLabel from "@/components/Forms/CustomFileLabel";
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
        label={<CustomFileLabel />}
        id="document"
        name="document"
        icon={<FileUploadIcon />}
        handleUpload={(value: File | null) =>
          handleFileUpload && handleFileUpload()
        }
        parentClassNames="md:!flex-col"
        buttonStyles="px-4"
        error={errors}
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
