import { useAppSelector } from "@/redux/store";
import WrapperComponent from "../Wrapper";

const ZohoProjectOnboarding = () => {
  const { trackingProgress } = useAppSelector((state) => state.tracker);
  const status = trackingProgress.ZohoProjectOnboardingInProgress
    ? "inprogress"
    : "inactive";

  console.log(status);

  return (
    <WrapperComponent
      status={status}
      title="Zoho Project Onboarding"
      description="Your project will be set up in Zoho within 24 hours after the onboarding call"
      buttonLabel="In progress"
      buttonClassNames=""
      showButton={true}
      showDate={false}
      dateBought=""
    />
  );
};

export default ZohoProjectOnboarding;
