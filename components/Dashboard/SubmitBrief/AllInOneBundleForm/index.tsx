import { useAppDispatch, useAppSelector } from "@/redux/store";
import { FormikHelpers, useFormik } from "formik";
import React from "react";
import {
  allInOneFormSchema,
  allInOneInitialValues,
  AllInOneValues,
} from "../shared/formTypes/allInOneTypes";
import { addAlert } from "@/redux/alerts";
import { allInOneFormData } from "../shared/formData/allInOnebundle";
import CustomDropdown from "@/components/Forms/CustomDropdown";
import Textarea from "@/components/Forms/Textarea";
import InputFile from "@/components/Forms/InputFile";
import CustomFileLabel from "@/components/Forms/CustomFileLabel";
import { FileUploadIcon } from "@/public/svgs";
import FormFooter from "../shared/FormFooter";
import { briefEndpoints } from "../shared/briefEndpoint";
import useFileUpload from "@/hooks/UseFileUpload";
import { submitFormData } from "@/redux/myServices/features";
import { formConfig } from "@/redux/myServices/formConfig";

function AllInOneBundleForm() {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(
    (state: any) => state.forms?.AllInOne?.isLoading,
  );
  const { handleFileUpload } = useFileUpload();

  // Define formik
  const formik = useFormik<AllInOneValues>({
    initialValues: allInOneInitialValues,
    validationSchema: allInOneFormSchema,
    onSubmit: async (values, { resetForm }: FormikHelpers<AllInOneValues>) => {
      try {
        const config = formConfig.AllInOne;
        if (!config) {
          throw new Error("Form configuration not found");
        }
        const formPayload = config.constructPayload(values);

        // Dispatch the thunk with endpoint and payload
        const response = await dispatch(
          submitFormData({
            formName: "AllInOne", // Pass only formName
            payload: formPayload, // Pass only the payload
          }),
        );

        dispatch(
          addAlert({
            id: "",
            headText: "Success",
            subText: "Your all-in-one brief has been submitted",
            type: "success",
          }),
        );
        resetForm();
      } catch (error) {
        console.error("Error submitting form:", error);
        dispatch(
          addAlert({
            id: "",
            headText: "Error",
            subText:
              "Error submitting digital marketing brief, please try again later",
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
    if (formik) {
      await handleFileUpload(file, briefEndpoints.allInOne, fieldName, formik);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="noScrollbar w-full">
      <main className="w-full space-y-8">
        {allInOneFormData.map((data, dataIdx) => {
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
                <div className="space-y-2">
                  <Textarea
                    id={data.name}
                    name={data.name}
                    label={data.label}
                    sublabel={data.sublabel}
                    placeholder={data.placeholder}
                    value={
                      (values[data.name as keyof AllInOneValues] as string) ||
                      ""
                    }
                    error={errors[data.name as keyof AllInOneValues]}
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
                      onFileChange={(file: File | null) =>
                        onFileChange(file, `${data.name}Document`)
                      }
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
      <FormFooter
        formik={formik}
        name="document"
        endpoint={briefEndpoints.allInOne}
        isLoading={isLoading}
      />
    </form>
  );
}

export default AllInOneBundleForm;
