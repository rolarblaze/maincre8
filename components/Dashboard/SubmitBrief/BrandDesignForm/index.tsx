import { useAppDispatch, useAppSelector } from "@/redux/store";
import React, { useState } from "react";
import {
  brandDesignFormSchema,
  brandDesignInitialValues,
  BrandDesignValues,
} from "../shared/formTypes/brandDesignTypes";
import { FormikHelpers, useFormik } from "formik";
import { addAlert } from "@/redux/alerts";
import { brandDesignFormData } from "../shared/formData/brandDesign";
import CustomDropdown from "@/components/Forms/CustomDropdown";
import Textarea from "@/components/Forms/Textarea";
import InputFile from "@/components/Forms/InputFile";
import CustomFileLabel from "@/components/Forms/CustomFileLabel";
import { FileUploadIcon } from "@/public/svgs";
import FormFooter from "../shared/FormFooter";
import { brandDesignBriefs, uploadDocument } from "@/redux/myServices/features";


function BrandDesignForm() {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.brandDesign);


  console.log('loading...', isLoading);

  // Define formik
  const formik = useFormik<BrandDesignValues>({
    initialValues: brandDesignInitialValues,
    validationSchema: brandDesignFormSchema,
    onSubmit: async (
     payload,
      
      { resetForm }: FormikHelpers<BrandDesignValues>,
    ) => {
      try {
        console.log("valuesss", payload)
        const resp = await dispatch(brandDesignBriefs(payload));
         console.log("response", resp)
        resetForm();
      } catch (error) {
        console.error("Error submitting form:", error);
        dispatch(
          addAlert({
            id: "",
            headText: "Error",
            subText: "Error submitting brief, please try again later",
            type: "error",
          }),
        );
      }
    },
  });

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = formik;

  // HANDLE FILE UPLOAD ONCHANGE
  const onFileChange = async (file: File | null, fieldName: string) => {
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
  
      const actionResult = await dispatch(uploadDocument(formData));
      if (uploadDocument.fulfilled.match(actionResult)) {
        const fileLink = actionResult.payload?.file_link; // Adjust based on your API response
        console.log("File link received:", fileLink);
  
        // Dynamically update the form field with the link
        setFieldValue(fieldName, fileLink);
  
        dispatch(
          addAlert({
            id: "",
            headText: "Success",
            subText: "Brief successfully uploaded.",
            type: "success",
          })
        );
      } else if (uploadDocument.rejected.match(actionResult)) {
        const errorMessage =
          actionResult.error?.message || "Failed to upload Brief. Please try again.";
        console.error("Error uploading file:", errorMessage);
  
        dispatch(
          addAlert({
            id: "",
            headText: "Error",
            subText: errorMessage,
            type: "error",
          })
        );
      }
    }
  };
  return (
    <form onSubmit={handleSubmit} className="noScrollbar w-full">
      <main className="w-full space-y-8">
        {brandDesignFormData.map((data, dataIdx) => {
          return (
            <div key={dataIdx}>
              {data.type === "select" && (
                <CustomDropdown
                  name={data.name}
                  label={data.label}
                  sublabel={data.sublabel}
                  placeholder={data.placeholder}
                  options={data.options || []}
                  isCheckbox={data.isCheckbox}
                  isRadio={data.isRadio}
                  optionStyles="w-full md:w-1/2"
                  formik={formik}
                />
              )}
              {data.type === "textArea" && (
                <div>
                  <Textarea
                    id={data.name}
                    name={data.name}
                    label={data.label}
                    sublabel={data.sublabel}
                    placeholder={data.placeholder}
                    value={
                      (values[
                        data.name as keyof BrandDesignValues
                      ] as string) || ""
                    }
                    error={errors[data.name as keyof BrandDesignValues]}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    textAreaStyle="placeholder:!text-grey900"
                  />
                  {data.isImage && (
                    <InputFile
                      label={<CustomFileLabel />}
                      id={`${data.name}Document`}
                      name={`${data.name}Document`}
                      icon={<FileUploadIcon />}
                      onFileChange={(file: File | null) => onFileChange(file, `${data.name}Document`)}
                      showUploadButton={false}
                      parentClassNames="md:!flex-col"
                      buttonStyles="px-4"
                      // error={errors}
                    />
                  )}
                </div>
              )}
            </div>
          );
        })}
      </main>
      <FormFooter formik={formik} name="document" />
    </form>
  );
}

export default BrandDesignForm;
