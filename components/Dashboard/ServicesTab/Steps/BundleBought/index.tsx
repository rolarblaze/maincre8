import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "@/redux/store";
import WrapperComponent from "../Wrapper";
import { handleProgressUpdate } from "@/helpers/progressHandler";
import { updateProgress } from "@/redux/servicesTracker/tracker";
import moment from "moment";

const BundleBought = () => {
  const dispatch = useAppDispatch();
  const { trackingDetails, orderHistory } = useAppSelector((state) => state.services);


  useEffect(() => {
    handleProgressUpdate(dispatch, trackingDetails);
  }, [dispatch, trackingDetails]);

  let order = orderHistory?.find(order => order.transaction_id === trackingDetails?.transaction_id)
  let dateBought = order?.status === "successful" ? moment(order.created_at).format("DD MMMM YYYY") : "Unknown date"

  // Set SubmitBriefInProgress if dateBought is not "Unknown date"
  const isSubmitBriefCompleted = dateBought !== "Unknown date";

  useEffect(() => {
    if (isSubmitBriefCompleted) {
      dispatch(updateProgress({ SubmitBriefInProgress: true }));
    } else {
      dispatch(updateProgress({ SubmitBriefInProgress: false }));
    }
  }, [dispatch, isSubmitBriefCompleted]);

  const status = isSubmitBriefCompleted ? "completed" : "inactive";

  return (
    <div className="">
      <div className="flex flex-col rounded-md text-red-400 p-2">
        <p>
          Tracking Number: {JSON.stringify(trackingDetails?.transaction_id)}
        </p>
      </div>

      <WrapperComponent
        status={status}
        title="Bundle bought"
        description={""}
        buttonLabel=""
        buttonClassNames=""
        showButton={false}
        showDate={true}
        dateBought={dateBought}
      />
    </div>
  );
};

export default BundleBought;
