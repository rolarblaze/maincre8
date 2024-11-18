import Button from "@/components/Button";
import CustomFileLabel from "@/components/Forms/CustomFileLabel";
import InputFile from "@/components/Forms/InputFile";
import { FileUploadIcon } from "@/public/svgs";
import { FormikProps } from "formik";
import React from "react";

function FormFooter({
  formik,
  name = "document",
}: {
  formik?: FormikProps<any>;
  name?: string;
}) {
  // HANDLE FILE UPLOAD ONCHANGE
  function onFileChange(file: File | null, name: string) {
    console.log(file);

    // Write your logic for api upload here. The name parameter above is used to distinguish the api name for different form upload name since they share the same footer.
    //----------------

    // Then after getting the upload link, you set it to formik via the name here
    // -----------
    // if(formik){
    //   formik.setFieldValue(name, uploadLink) 
    // }
  }
  return (
    <div className="absolute inset-x-0 bottom-0 flex flex-col justify-between gap-6 bg-white px-6 py-6 md:flex-row md:px-12">
      <InputFile
        label={<CustomFileLabel />}
        id={name as string}
        name={name}
        icon={<FileUploadIcon />}
<<<<<<< HEAD
        // showUploadButton= {false}
        handleUpload={(value: File | null) =>
          handleFileUpload && handleFileUpload()


        }
=======
        showUploadButton={false}
        onFileChange={(file: File | null) => onFileChange(file, name as string)}
>>>>>>> 02b2f4ec9bd9f1938aa26513abda4efca26be574
        parentClassNames="md:!flex-col"
        buttonStyles="px-4"
        // error={}
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
