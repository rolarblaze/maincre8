import { useAppDispatch } from "@/redux/store";
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

function AllInOneBundleForm() {
  const dispatch = useAppDispatch();

  // Define formik
  const formik = useFormik<AllInOneValues>({
    initialValues: allInOneInitialValues,
    validationSchema: allInOneFormSchema,
    onSubmit: async (values, { resetForm }: FormikHelpers<AllInOneValues>) => {
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

  // HANLDE FILE UPLOAD
  async function handleFileUpload(file: File | null) {
    console.log("File gotten:", file);
  }

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
                  placeholder={data.placeholder}
                  value={
                    (values[data.name as keyof AllInOneValues] as string) || ""
                  }
                  error={errors[data.name as keyof AllInOneValues]}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  textAreaStyle="placeholder:!text-grey900"
                />
              )}
            </div>
          );
        })}
      </main>
      {/* <FormFooter /> */}
    </form>
  );
}

export default AllInOneBundleForm;
