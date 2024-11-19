import Button from "@/components/Button";
import CustomFileLabel from "@/components/Forms/CustomFileLabel";
import InputFile from "@/components/Forms/InputFile";
import { FileUploadIcon } from "@/public/svgs";
import { uploadDocument } from "@/redux/myServices/features";
import { useAppDispatch } from "@/redux/store";
import { FormikProps } from "formik";
import React from "react";
import { addAlert } from "@/redux/alerts";
import useFileUpload from "../../../../../hooks/UseFileUpload";

function FormFooter({
  formik,
  name = "document",
  endpoint = "",
}: {
  formik?: FormikProps<any>;
  name?: string;
  endpoint?: string;
}) {
  const { handleFileUpload } = useFileUpload();

  // HANDLE FILE UPLOAD ONCHANGE
  async function onFileChange(file: File | null) {
    if (formik) {
      await handleFileUpload(file, endpoint, name, formik);
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
      />
      <Button
        label="Submit a brief"
        type="submit"
        classNames="md:self-end w-auto py-2 px-4"
      />
    </div>
  );
}

export default FormFooter;
