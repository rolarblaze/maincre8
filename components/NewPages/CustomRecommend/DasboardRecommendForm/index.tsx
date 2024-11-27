import React from "react";
import RecommendFormInputs from "../shared/RecommendFormInputs";
import { addAlert } from "@/redux/alerts";
import { RootState, useAppDispatch } from "@/redux/store";
import { RecommendFormValues } from "../shared/type";
import { RECOMMEND_INITIAL_VALUES } from "../shared/constants";
import { recommendFormSchema } from "../shared/schema";
import { FormikHelpers, useFormik } from "formik";
import Button from "@/components/Button";
import { useSelector } from "react-redux";

function DashboardRecommendForm() {
  const isFileUploading = useSelector((state: RootState) => {
    const uploadedFiles = state.fileUpload;

    return Object.values(uploadedFiles).some((file) => file.isLoading);
  });

  const dispatch = useAppDispatch();

  const formik = useFormik<RecommendFormValues>({
    initialValues: RECOMMEND_INITIAL_VALUES,
    validationSchema: recommendFormSchema,
    onSubmit: async (
      values,
      { resetForm }: FormikHelpers<RecommendFormValues>,
    ) => {
      try {
        console.log("Form submitted");
        console.log(values, "formmmmmmmmmmmmmm");

        // resetForm();
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
  return (
    <form onSubmit={formik.handleSubmit} className="noScrollbar w-full">
      <RecommendFormInputs formik={formik} />
      <footer className="absolute inset-x-0 -bottom-2 rounded-b-2xl bg-white px-8 py-6">
        <Button
          label="Checkout"
          type="submit"
          classNames="active:scale-[0.98]"
          isFileUploading={isFileUploading}
        />
      </footer>
    </form>
  );
}

export default DashboardRecommendForm;
