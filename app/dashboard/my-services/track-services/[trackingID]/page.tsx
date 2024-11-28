"use client";

import MyPackage from "@/components/Dashboard/ServicesTab/MyPackage";

const TrackService = () => {
  return (
    <div>
      <MyPackage />
    </div>
  );
};

export default TrackService;


// interested_services: convertToString(values.serviceKinds),
//           primary_goal: convertToString(values.serviceGoal),
//           monthly_budget: convertToString(values.monthlyBudget),
//           campaign_duration: convertToString(values.anticipationDuration),
//           business_type: convertToString(values.businessType),
//           additional_info: convertToString(values.additionalInfo),
//           phone_number: convertToString(values.contactPhoneNumber),
//           email: convertToString(values.contactEmail),
//           uploaded_brief: convertToString(values.document),