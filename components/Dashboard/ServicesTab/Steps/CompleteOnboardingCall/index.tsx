import WrapperComponent from "../Wrapper";

const CompleteOnboardingCall = () => {
  return (
    <WrapperComponent
      iconFillColor="#D0D5DD"
      iconUnchecked={true}
      title="Complete the Onboarding Call"
      description="Finalize project specifics and meet your team during the onboarding call"
      buttonLabel="Join onboarding call"
      buttonClassNames="text-white bg-grey300 w-fit !text-xs px-3"
    />
  );
};

export default CompleteOnboardingCall;
