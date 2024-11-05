import { useAppDispatch } from "@/redux/store";
import React from "react";
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

function BrandDesignForm() {
  const dispatch = useAppDispatch();

  // Define formik
  const formik = useFormik<BrandDesignValues>({
    initialValues: brandDesignInitialValues,
    validationSchema: brandDesignFormSchema,
    onSubmit: async (
      values,
      { resetForm }: FormikHelpers<BrandDesignValues>,
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

  // HANLDE FILE UPLOAD
  async function handleFileUpload(file: File | null) {
    console.log("File gotten:", file);
  }
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
                    (values[data.name as keyof BrandDesignValues] as string) ||
                    ""
                  }
                  error={errors[data.name as keyof BrandDesignValues]}
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

export default BrandDesignForm;
