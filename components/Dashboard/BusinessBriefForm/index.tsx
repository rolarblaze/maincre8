"use client";
import { Field, FormikHelpers, useFormik } from "formik";
import {
  Button,
  CheckBoxField,
  DropdownSelect,
  InputField,
} from "@/components";
import {
  INITIAL_VALUES,
  optionHolder,
  USEFUL_DIGITAL_SERVICES,
} from "./constants";
import { validationSchema } from "./schema";

const BusinessBriefForm = () => {
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: INITIAL_VALUES,
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }: FormikHelpers<FormValues>) => {
      formSubmit(values, resetForm);
    },
  });

  const formSubmit = async (values: FormValues, resetForm: () => void) => {
    console.log(values);
    // resetForm();
  };

  console.log(values);

  return (
    <form onSubmit={handleSubmit} className="space-y-8 w-full max-w-[50rem]">
      {/* BUSINESS INFORMATION */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-grey900 leading-6">
          Business Informaion
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
            options={optionHolder}
            value={values.industry}
            onChange={handleChange}
          />

          {/* COMPANY SIZE */}
          <DropdownSelect
            id="companySize"
            name="companySize"
            label="Company Size"
            placeholder="Number of employees"
            options={optionHolder}
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
          <InputField
            type="text"
            name="contactPhoneNumber"
            label="Contact Phone Number"
            placeholder="Contact Person's Name"
            classNames="bg-white"
            value={values.contactPhoneNumber}
            error={touched.contactPhoneNumber && errors.contactPhoneNumber}
            onChange={handleChange}
            onBlur={handleBlur}
          />
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
            options={optionHolder}
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
          {/* BUSINESS CHALLENGES */}
          <InputField
            type="text"
            name="audience"
            label="Who is your target audience?"
            placeholder="Describe your target audience?"
            classNames="bg-white"
            value={values.audience}
            error={touched.solutionOutcomes && errors.solutionOutcomes}
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
            options={optionHolder}
            value={values.gender || undefined}
            onChange={handleChange}
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
            options={optionHolder}
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
          Target Audience
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
          <InputField
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
          />
        </div>
      </div>

      {/* PREFERRED SOLUTIONS */}
      <div className="space-y-6">
        <legend className="text-lg font-semibold text-grey900 leading-6">
          Preferred Solutions
        </legend>

        <div className="space-y-6">
          <label htmlFor="usefulDigitalSolutions">
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
          <div>ATTACH FILE</div>
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
            options={optionHolder}
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
