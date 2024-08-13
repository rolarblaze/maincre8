import { formatDate } from "@/helpers/formatDate";
import WrapperComponent from "../Wrapper";
import { useAppSelector } from "@/redux/store";

const BundleBought = () => {
  const { trackingDetails } = useAppSelector((state) => state.services);

  // Assuming trackingDetails contains a dateBought field
  const dateBought = trackingDetails
    ? formatDate(trackingDetails.meeting_start_time)
    : "Unknown date";

  return (
    <WrapperComponent
      iconFillColor="#1574E5"
      title="Bundle bought"
      description={""}
      buttonLabel=""
      buttonClassNames=""
      containerClassNames="border border-grey100 text-black"
      showButton={false}
      showDate={true}
      dateBought={dateBought}
    />
  );
};

export default BundleBought;
