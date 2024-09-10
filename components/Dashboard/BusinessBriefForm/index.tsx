"use client";
import { Field, FormikHelpers, useFormik } from "formik";
import {
  Button,
  CheckBoxField,
  DropdownSelect,
  InputField,
  PhoneNumberInput,
  UploadFile,
} from "@/components";
import {
  budgetProjectionOptions,
  companySizeOptions,
  customerPersonaOptions,
  digitalSolutionOptions,
  genderOptions,
  INITIAL_VALUES,
  typeOfIndustryOptions,
  updateOptions,
  USEFUL_DIGITAL_SERVICES,
} from "./constants";
import { validationSchema } from "./schema";
import { addAlert } from "@/redux/alerts";
import { useState } from "react";
import { useAppDispatch } from "@/redux/store";
import {
  uploadRelevantDocument,
  submitRecommendationBrief,
} from "@/redux/order/features";

const BusinessBriefForm = () => {
  const dispatch = useAppDispatch();
  const [phone, setPhone] = useState<string>();
  const [uploadedDocumentLink, setUploadedDocumentLink] = useState<
    string | null
  >(null);

  const formik = useFormik<FormValues>({
    initialValues: INITIAL_VALUES,

    onSubmit: async (values, { resetForm }: FormikHelpers<FormValues>) => {
      try {
        const finalValues = {
          company_name: values.companyName,
          type_of_industry: values.industry,
          company_size: values.companySize,
          website_url: values.websiteURL,
          contact_person_name: values.contactPersonName,
          contact_email: values.contactEmail,
          contact_phone_number: phone || "",
          current_specific_business_challenges: values.challenges,
          previously_implemented_digital_solutions: values.digitalSolution,
          solution_and_outcome_description: values.solutionOutcomes,
          target_audience: values.audience,
          target_audience_age_group: values.ageGroup,
          target_audience_gender: values.gender || undefined,
          target_audience_location: values.location,
          target_audience_interest: values.interestBehaviours,
          existing_audience_persona_available:
            values.customerPersonas === "Yes",
          existing_audience_persona_description: values.personaDescribe,
          budget_projection_range: values.budget || values.budgetProjection,
          preferred_solutions: values.usefulDigitalServices.join(", "),
          main_competitors: values.mainCompetitor,
          competitor_website_links: values.mainCompetitorWebsite,
          competitor_like_and_dislike: values.dislikeDigitalPrescence,
          additional_context: values.additionalInformation,
          relevant_document_link:
            uploadedDocumentLink || values.relevant_document_link,
          news_letter_subscription: values.receiveUpdates === "Yes",
        };

        await dispatch(submitRecommendationBrief(finalValues));

        dispatch(
          addAlert({
            id: "",
            headText: "Success",
            subText: "Brief submitted successfully",
            type: "success",
          })
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
          })
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

  const handlePhoneChange = (value: string) => {
    setPhone(value);
    setFieldValue("contactPhoneNumber", value); // Ensure the form field is updated
  };

  const handleFileUpload = async (file: File | null) => {
    if (file && file.size > 5000000) {
      setFieldValue("document", null);
      formik.setFieldError("document", "Max file size exceeded.");
      return;
    }

    try {
      if (file) {
        const formData = new FormData();
        formData.append("file", file);
        const response = await dispatch(
          uploadRelevantDocument(formData)
        ).unwrap();
        const file_link = response.file_link;

        setUploadedDocumentLink(file_link); // Store the file link for later use
        setFieldValue("document", file.name); // Store the file name as a string
        formik.setFieldError("document", ""); // Clear any existing file errors
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      formik.setFieldError("document", "File upload failed.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 w-full max-w-[50rem]">
      {/* BUSINESS INFORMATION */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-grey900 leading-6">
          Business Information
        </h3>
        <div className="space-y-6 rounded-bl-lg">
          {/* COMPANY NAME */}
          <InputField
            type="text"
            name="companyName"
            label="Company Name"
            placeholder="Enter Company Name"
            classNames="bg-white"
            value={values.companyName}
            error={touched.companyName && errors.companyName}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          {/* TYPE OF INDUSTRY */}
          <DropdownSelect
            id="industry"
            name="industry"
            label="Type of Industry"
            placeholder="Select type"
            options={typeOfIndustryOptions}
            value={values.industry}
            onChange={handleChange}
          />

          {/* COMPANY SIZE */}
          <DropdownSelect
            id="companySize"
            name="companySize"
            label="Company Size"
            placeholder="Number of employees"
            options={companySizeOptions}
            value={values.companySize}
            onChange={handleChange}
          />

          {/* WEBSITE URL */}
          <InputField
            type="url"
            label="Website URL"
            name="websiteURL"
            placeholder="Enter website link"
            classNames="bg-white"
            value={values.websiteURL}
            error={touched.websiteURL && errors.websiteURL}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          {/* CONTACT PERSON NAME */}
          <InputField
            type="text"
            name="contactPersonName"
            label="Contact Person Name"
            placeholder="Contact Person's Name"
            classNames="bg-white"
            value={values.contactPersonName}
            error={touched.contactPersonName && errors.contactPersonName}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          {/* CONTACT EMAIL */}
          <InputField
            type="email"
            name="contactEmail"
            label="Contact Email"
            placeholder="Enter Contact Email"
            classNames="bg-white"
            value={values.contactEmail}
            error={touched.contactEmail && errors.contactEmail}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          {/* CONTACT PHONE NUMBER */}
          <div>
            <PhoneNumberInput
              value={phone as string}
              onChange={handlePhoneChange}
              label="Contact Phone number"
            />
          </div>
        </div>
      </div>

      {/* BUSINESS CHALLENGES */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-grey900 leading-6">
          Business Challenges
        </h3>

        <div className="space-y-6">
          {/* BUSINESS CHALLENGES */}
          <InputField
            type="text"
            name="challenges"
            label="What specific business challenges are you currently facing?"
            placeholder="Enter business challenges"
            classNames="bg-white"
            tooltipText="e.g., low brand awareness, poor customer engagement, declining sales, ineffective online presence"
            value={values.challenges}
            error={touched.challenges && errors.challenges}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          {/* DIGITAL SOLUTION */}
          <DropdownSelect
            id="digitalSolution"
            name="digitalSolution"
            label="Have you previously implemented any digital solutions?"
            placeholder="Select Type"
            options={digitalSolutionOptions}
            value={values.digitalSolution}
            onChange={handleChange}
          />

          {/* SOLUTION OUTCOMES */}
          <InputField
            type="text"
            name="solutionOutcomes"
            label="If yes, please describe the solutions and their outcomes."
            placeholder="Enter brief objectives"
            classNames="bg-white"
            value={values.solutionOutcomes}
            error={touched.solutionOutcomes && errors.solutionOutcomes}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
      </div>

      {/* TARGET AUDIENCE */}
      <div className="space-y-6">
        <legend className="text-lg font-semibold text-grey900 leading-6">
          Target Audience
        </legend>

        <div className="space-y-6">
          {/* TARGET AUDIENCE */}
          <InputField
            type="text"
            name="audience"
            label="Who is your target audience?"
            placeholder="Describe your target audience?"
            classNames="bg-white"
            value={values.audience}
            error={touched.audience && errors.audience}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          {/* AGE GROUP */}
          <InputField
            type="text"
            name="ageGroup"
            label="Age group"
            placeholder="Enter target audience age group"
            classNames="bg-white"
            value={values.ageGroup}
            error={touched.ageGroup && errors.ageGroup}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          {/* GENDER */}
          <DropdownSelect
            id="gender"
            name="gender"
            label="Gender"
            placeholder="Select Gender"
            options={genderOptions}
            value={values.gender || undefined}
            onChange={handleChange}
            // onBlur={handleBlur}
          />

          {/* LOCATION */}
          <InputField
            type="text"
            name="location"
            label="Location"
            placeholder="Location of target audience?"
            classNames="bg-white"
            value={values.location}
            error={touched.location && errors.location}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          {/* INTEREST & BEHAVIOUR */}
          <InputField
            type="text"
            name="interestBehaviours"
            label="Interests and behaviours"
            placeholder="Interests and behaviours of target audience?"
            classNames="bg-white"
            value={values.interestBehaviours}
            error={touched.interestBehaviours && errors.interestBehaviours}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          {/* CUSTOMER PERSONA */}
          <DropdownSelect
            id="customerPersonas"
            name="customerPersonas"
            label="Do you have existing customer personas?"
            placeholder="Yes/No"
            options={customerPersonaOptions}
            value={values.customerPersonas || undefined}
            onChange={handleChange}
          />

          {/* YES/NO | CUSTOMER PERSONA */}
          <InputField
            type="text"
            name="personaDescribe"
            label="If yes, please describe them."
            placeholder="Enter customer personas description"
            classNames="bg-white"
            value={values.personaDescribe}
            error={touched.personaDescribe && errors.personaDescribe}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
      </div>

      {/* DESIRED OUTCOMES */}
      <div className="space-y-6">
        <legend className="text-lg font-semibold text-grey900 leading-6">
          Desired Outcomes
        </legend>

        <div className="space-y-6">
          <InputField
            type="text"
            name="desiredOutcomes"
            label="What are the desired outcomes of this project?"
            placeholder="State desired outcomes"
            classNames="bg-white"
            tooltipText="e.g., increase in website traffic, higher conversion rates, improved customer satisfaction, better brand recognition"
            value={values.desiredOutcomes}
            error={touched.desiredOutcomes && errors.desiredOutcomes}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
      </div>

      {/* BUDGET */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-grey900 leading-6">Budget</h3>

        <div className="space-y-6">
          {/* <InputField
            type="text"
            name="budgetProjection"
            label="What is your budget projection for this solution?"
            placeholder="Budget"
            classNames="bg-white"
            tooltipText="Please provide a range"
            value={values.budgetProjection}
            error={touched.budgetProjection && errors.budgetProjection}
            onChange={handleChange}
            onBlur={handleBlur}
          /> */}
          <div>
            <DropdownSelect
              id="budget"
              name="budget"
              label="What is your budget projection for this solution?" //..................................
              placeholder="Choose Range"
              options={budgetProjectionOptions}
              value={values.budget || undefined}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      {/* PREFERRED SOLUTIONS */}
      <div className="space-y-6">
        <legend className="text-lg font-semibold text-grey900 leading-6">
          Preferred Solutions
        </legend>

        <div className="space-y-6">
          <label htmlFor="usefulDigitalSolutions" className="font-medium">
            Which of the following digital services do you think might be
            useful? (Select all that apply)
          </label>

          {USEFUL_DIGITAL_SERVICES.map((item) => (
            <CheckBoxField
              key={item.key}
              name="usefulDigitalServices"
              label={item.value}
              value={item.value}
              onChange={handleChange}
            />
          ))}
        </div>
      </div>

      {/* COMPETITOR ANALYSIS */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-grey900 leading-6">
          Competitor Analysis
        </h3>

        <div className="space-y-6">
          {/* MAIN COMPETITORS */}
          <InputField
            type="text"
            name="mainCompetitor"
            label="Who are your main competitors?"
            placeholder="List competitors"
            classNames="bg-white"
            value={values.mainCompetitor}
            error={touched.mainCompetitor && errors.mainCompetitor}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          {/* MAIN COMPETITORS WEBSITE LINK */}
          <InputField
            type="url"
            name="mainCompetitorWebsite"
            label="Please list and provide website links if available"
            placeholder="List competitor website links"
            classNames="bg-white"
            value={values.mainCompetitorWebsite}
            error={
              touched.mainCompetitorWebsite && errors.mainCompetitorWebsite
            }
            onChange={handleChange}
            onBlur={handleBlur}
          />

          {/* DISLIKE DIGITAL PRESCENCE */}
          <InputField
            type="text"
            name="dislikeDigitalPrescence"
            label="What do you like or dislike about their digital presence?"
            placeholder="Competitor info"
            classNames="bg-white"
            value={values.dislikeDigitalPrescence}
            error={
              touched.dislikeDigitalPrescence && errors.dislikeDigitalPrescence
            }
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
      </div>

      {/* ADDITIONAL INFROMATION */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-grey900 leading-6">
          Additional Information
        </h3>

        <div className="space-y-6">
          {/* ADDITIONAL INFORMATION */}
          <InputField
            type="text"
            name="additionalInformation"
            label="Please provide any additional information or context that will help us understand your needs better."
            placeholder="Enter brief objectives"
            classNames="bg-white"
            value={values.additionalInformation}
            error={
              touched.additionalInformation && errors.additionalInformation
            }
            onChange={handleChange}
            onBlur={handleBlur}
          />

          {/* ATTACH FILE */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-grey900 leading-6">
              Attach any relevant documents or files (e.g., existing marketing
              plans, analytics reports, design briefs).
            </label>

            <UploadFile
              //@ts-ignore
              fileName={values.document || null}
              errors={errors.document || ""}
              setFieldValue={(field: string, value: File | null) =>
                handleFileUpload(value)
              }
            />
          </div>
        </div>
      </div>

      {/* CONSENT */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-grey900 leading-6">
          Consent
        </h3>

        <div className="space-y-6">
          {/* CONSENT */}
          <DropdownSelect
            id="industry"
            name="industry"
            label="Would you like to receive updates and newsletters from us?"
            placeholder="Yes/No"
            options={updateOptions}
            value={values.receiveUpdates || undefined}
            onChange={handleChange}
          />
        </div>
      </div>

      <Button
        type="submit"
        label="Submit a brief"
        isLoading={isSubmitting}
        classNames="w-fit text-sm px-4 py-2 active:scale-[0.98] rounded-bl-2xl"
      />
    </form>
  );
};

export default BusinessBriefForm;
