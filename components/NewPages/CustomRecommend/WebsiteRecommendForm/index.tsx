"use client";
import Button from "@/components/Button";
import React from "react";
import { addAlert } from "@/redux/alerts";
import { RootState, useAppDispatch } from "@/redux/store";
import { FormikHelpers, useFormik } from "formik";
import { RecommendFormValues } from "../shared/type";
import { RECOMMEND_INITIAL_VALUES } from "../shared/constants";
import { recommendFormSchema } from "../shared/schema";
import RecommendFormInputs from "../shared/RecommendFormInputs";
import { convertToString } from "@/redux/myServices/formConfig";
import { submitBrief, submitBriefEndpoints } from "@/redux/brief/features";
import { useSelector } from "react-redux";
import ErrorDisplay from "../shared/ErrorDisplay";

function WebsiteRecommendForm() {
  const isFormLoading = useSelector(
    (state: RootState) => state.brief["personalizedBrief"].isLoading,
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
          monthly_budget: convertToString(values.monthlyBudget),
          campaign_duration: convertToString(values.anticipationDuration),
          business_type: convertToString(values.businessType),
          additional_info: convertToString(values.additionalInfo),
          phone_number: convertToString(values.contactPhoneNumber),
          email: convertToString(values.contactEmail),
          uploaded_brief: convertToString(values.document),
        };

        await dispatch(
          submitBrief({
            formName: "personalizedBrief",
            endpoint: submitBriefEndpoints.personalizedBrief,
            payload,
          }),
        );
        dispatch(
          addAlert({
            id: "",
            headText: "Success",
            subText: "Your Personalized brief has been submitted",
            type: "success",
          }),
        );

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
    <section className="full-width flex justify-center bg-grey50 px-5 pb-[6.3rem] pt-10">
      <form
        onSubmit={formik.handleSubmit}
        className="w-full max-w-[43rem] space-y-8 rounded-[10px] bg-white px-4 py-8 md:px-[3.4rem]"
      >
        <h3 className="mb-2 text-center">Get a Personalised Recommendation</h3>
        <RecommendFormInputs formik={formik} />
        <Button
          type="submit"
          label="Submit"
          classNames="active:scale-[0.98]"
          isFileUploading={isFileUploading}
          isLoading={isFormLoading}
        />
        {isFileUploading && <ErrorDisplay message="Doc still uploading..." />}
      </form>
    </section>
  );
}

export default WebsiteRecommendForm;
