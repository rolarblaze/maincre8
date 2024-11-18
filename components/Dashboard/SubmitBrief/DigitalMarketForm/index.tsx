import React from "react";
import FormFooter from "../shared/FormFooter";
import { FormikHelpers, useFormik } from "formik";
import {
  digitalMarketingFormSchema,
  digitalMarketingInitialValues,
  DigitalMarketingValues,
} from "../shared/formTypes/digitalMarketingTypes";
import { useAppDispatch } from "@/redux/store";
import { addAlert } from "@/redux/alerts";
import { digitalMarketFormData } from "../shared/formData/digitalMarketing";
import CustomDropdown from "@/components/Forms/CustomDropdown";
import Textarea from "@/components/Forms/Textarea";

function DigitalMarketForm() {
  const dispatch = useAppDispatch();

  // Define formik
  const formik = useFormik<DigitalMarketingValues>({
    initialValues: digitalMarketingInitialValues,
    validationSchema: digitalMarketingFormSchema,
    onSubmit: async (
      values,
      { resetForm }: FormikHelpers<DigitalMarketingValues>,
    ) => {
      try {
        console.log("Form submitted");

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
        {digitalMarketFormData.map((data, dataIdx) => {
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
                <Textarea
                  id={data.name}
                  name={data.name}
                  label={data.label}
                  sublabel={data.sublabel}
                  placeholder={data.placeholder}
                  value={
                    (values[
                      data.name as keyof DigitalMarketingValues
                    ] as string) || ""
                  }
                  error={errors[data.name as keyof DigitalMarketingValues]}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  textAreaStyle="placeholder:!text-grey900"
                />
              )}
            </div>
          );
        })}
      </main>
      <FormFooter name="document" formik={formik} />
    </form>
  );
}

export default DigitalMarketForm;
