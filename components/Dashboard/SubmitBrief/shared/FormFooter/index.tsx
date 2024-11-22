import Button from "@/components/Button";
import CustomFileLabel from "@/components/Forms/CustomFileLabel";
import InputFile from "@/components/Forms/InputFile";
import { FileUploadIcon } from "@/public/svgs";
import { RootState } from "@/redux/store";
import { FormikProps } from "formik";
import React from "react";
import useFileUpload from "../../../../../hooks/UseFileUpload";
import { useSelector } from "react-redux";
import { selectFileUploadState } from "@/redux/file";

function FormFooter({
  formik,
  name = "document",
  endpoint = "",
  fileId,
  isLoading = false,
}: {
  formik?: FormikProps<any>;
  name?: string;
  endpoint?: string;
  fileId: string;
  isLoading?: boolean;
}) {
  const { handleFileUpload } = useFileUpload();
  // Use the selector to get the file upload state for the specific fileId
  const fileState = useSelector((state: RootState) =>
    selectFileUploadState(state, fileId),
  );

  // HANDLE FILE UPLOAD ONCHANGE
  async function onFileChange(file: File | null) {
    if (formik) {
      await handleFileUpload(file, endpoint, fileId, name, formik); //order of parameters: file, endpoint, fileId, fieldName, formik
    }
  }

  return (
    <div className="absolute inset-x-0 bottom-0 flex flex-col justify-between gap-6 bg-white px-6 py-6 md:flex-row md:px-12">
      <InputFile
        label={<CustomFileLabel />}
        id={name as string}
        name={name}
        icon={<FileUploadIcon />}
        showUploadButton={false}
        onFileChange={(file: File | null) => onFileChange(file)}
        parentClassNames="md:!flex-col"
        buttonStyles="px-4"
        isLoading={fileState?.isLoading}
      />
      <Button
        label="Submit a brief"
        type="submit"
        classNames="md:self-end w-auto py-2 px-4"
        isLoading={isLoading}
      />
    </div>
  );
}

export default FormFooter;
