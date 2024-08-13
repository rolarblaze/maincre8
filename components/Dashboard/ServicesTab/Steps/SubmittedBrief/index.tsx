import { useAppSelector } from "@/redux/store";
import WrapperComponent from "../Wrapper";
import { formatDate } from "@/helpers/formatDate";

const SubmittedBrief = () => {
  const { trackingDetails } = useAppSelector((state) => state.services);

  const dateSubmitted = formatDate(trackingDetails?.brief_submission_date);
  return (
    <WrapperComponent
      iconFillColor="#D0D5DD"
      iconUnchecked={true}
      title="Submit a Brief"
      description="Kickstart your project by submitting a detailed brief immediately"
      buttonLabel="Upload a brief"
      buttonClassNames="text-white bg-grey300 w-fit !text-xs px-3"
    />
  );
};

export default SubmittedBrief;
