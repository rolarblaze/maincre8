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
import { convertToString } from "@/redux/myServices/formConfig";
import { submitBrief, submitBriefEndpoints } from "@/redux/brief/features";
import ErrorDisplay from "../shared/ErrorDisplay";

function DashboardRecommendForm() {
  const isFormLoading = useSelector(
    (state: RootState) => state.brief["businessBrief"].isLoading,
  );
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
        const payload = {
          interested_services: convertToString(values.serviceKinds),
          primary_goal: convertToString(values.serviceGoal),
          estimated_budget: convertToString(values.monthlyBudget),
          timeline: convertToString(values.anticipationDuration),
          business_type: convertToString(values.businessType),
          additional_info: convertToString(values.additionalInfo),
          phone_number: convertToString(values.contactPhoneNumber),
          email: convertToString(values.contactEmail),
          uploaded_brief: convertToString(values.document),
        };

        await dispatch(
          submitBrief({
            formName: "businessBrief",
            endpoint: submitBriefEndpoints.businessBrief,
            payload,
          }),
        );
        dispatch(
          addAlert({
            id: "",
            headText: "Success",
            subText: "Your Business brief has been submitted",
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
            subText: "Error submitting brief, please try again later",
            type: "error",
          }),
        );
      }
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className="noScrollbar w-full">
      <RecommendFormInputs formik={formik} isBusinessBrief={true} />
      <footer className="absolute inset-x-0 -bottom-2 rounded-b-2xl bg-white px-8 py-6">
        <Button
          label="Checkout"
          type="submit"
          classNames="active:scale-[0.98]"
          isFileUploading={isFileUploading}
          isLoading={isFormLoading}
        />
        {isFileUploading && <ErrorDisplay message="File still uploading..." />}
      </footer>
    </form>
  );
}

export default DashboardRecommendForm;
