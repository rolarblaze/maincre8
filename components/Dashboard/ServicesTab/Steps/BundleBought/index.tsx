import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "@/redux/store";
import WrapperComponent from "../Wrapper";
import { handleProgressUpdate } from "@/helpers/progressHandler";
import { updateProgress } from "@/redux/servicesTracker/tracker";
import moment from "moment";

const BundleBought = () => {
  const dispatch = useAppDispatch();
  const { trackingDetails } = useAppSelector((state) => state.services);

  useEffect(() => {
    handleProgressUpdate(dispatch, trackingDetails);
  }, [dispatch, trackingDetails]);

  const dateBought = trackingDetails
    ? moment(trackingDetails.transaction.created_at).format("DD MMMM YYYY")
    : "Unknown date";

  // Set SubmitBriefInProgress if dateBought is not "Unknown date"
  const isSubmitBriefCompleted = dateBought !== "Unknown date";

  useEffect(() => {
    if (isSubmitBriefCompleted) {
      dispatch(updateProgress({ SubmitBriefInProgress: true }));
    }
  }, [dispatch, isSubmitBriefCompleted]);

  const status = isSubmitBriefCompleted ? "completed" : "inactive";

  return (
    <div className="">
      <div className="flex flex-col rounded-md bg-red-300 p-2">
        <p>
          Tracking ID responsible for this UI:{" "}
          {JSON.stringify(trackingDetails?.transaction_id)}
        </p>
        <p>It should correlate with the number on the URL</p>
        <p>Look in console for more details</p>
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
