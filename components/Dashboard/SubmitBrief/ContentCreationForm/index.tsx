import { useAppDispatch, useAppSelector } from "@/redux/store";
import { FormikHelpers, useFormik } from "formik";
import React from "react";
import {
  contentCreationFormSchema,
  contentCreationInitialValues,
  ContentCreationValues,
} from "../shared/formTypes/contentCreationTypes";
import { addAlert } from "@/redux/alerts";
import { contentCreationFormData } from "../shared/formData/contentCreation";
import CustomDropdown from "@/components/Forms/CustomDropdown";
import Textarea from "@/components/Forms/Textarea";
import FormFooter from "../shared/FormFooter";
import { briefEndpoints } from "../shared/briefEndpoint";
import { formConfig } from "@/redux/myServices/formConfig";
import { submitFormData } from "@/redux/myServices/features";

function ContentCreationForm() {
  const dispatch = useAppDispatch();
  const isLoading =  useAppSelector((state: any) => state.forms?.contentCreation?.isLoading);

  // Define formik
  const formik = useFormik<ContentCreationValues>({
    initialValues: contentCreationInitialValues,
    validationSchema: contentCreationFormSchema,
    onSubmit: async (
      values,
      { resetForm }: FormikHelpers<ContentCreationValues>,
    ) => {
      try {
        const config = formConfig.contentCreation;
        if (!config) {
          throw new Error("Form configuration not found");
        }
        const formPayload = config.constructPayload(values);

        // Dispatch the thunk with endpoint and payload
        const response = await dispatch(
          submitFormData({
            formName: "contentCreation", // Pass only formName
            payload: formPayload, // Pass only the payload
          }),
        );
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

  return (
    <form onSubmit={handleSubmit} className="noScrollbar w-full">
      <main className="w-full space-y-8">
        {contentCreationFormData.map((data, dataIdx) => {
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
                <div className="">
                  <Textarea
                    id={data.name}
                    name={data.name}
                    label={data.label}
                    sublabel={data.sublabel}
                    placeholder={data.placeholder}
                    value={
                      (values[
                        data.name as keyof ContentCreationValues
                      ] as string) || ""
                    }
                    error={errors[data.name as keyof ContentCreationValues]}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    textAreaStyle="placeholder:!text-grey900"
                  />
                </div>
              )}
            </div>
          );
        })}
      </main>
      <FormFooter
        name="document"
        formik={formik}
        endpoint={briefEndpoints.contentCreation}
      />
    </form>
  );
}

export default ContentCreationForm;
