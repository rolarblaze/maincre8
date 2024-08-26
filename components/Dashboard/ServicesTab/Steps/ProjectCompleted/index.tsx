import { useAppSelector } from "@/redux/store";
import WrapperComponent from "../Wrapper";

const ProjectCompleted = () => {
  const { trackingDetails } = useAppSelector((state) => state.services);

  return (
    <WrapperComponent
      status={
        trackingDetails?.project_completed_status !== true
          ? "inactive"
          : "completed"
      }
      title="Project Completed:"
      description="Your project will be fully completed 48 hours after the offboarding call"
      showButton={false}
      buttonLabel="Join onboarding call"
      buttonClassNames=""
      completedState={<span className="text-primary500">Completed</span>}
    />
  );
};

export default ProjectCompleted;
