import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "@/redux/store";
import WrapperComponent from "../Wrapper";
import { handleProgressUpdate } from "@/helpers/progressHandler";
import { updateProgress } from "@/redux/servicesTracker/tracker";
import moment from "moment";

const BundleBought = () => {
  const dispatch = useAppDispatch();
  const { trackingDetails, orderHistory } = useAppSelector(
    (state) => state.services,
  );
  let transID = window.location.href.split("/").reverse()[0];

  useEffect(() => {
    handleProgressUpdate(dispatch, trackingDetails);
  }, [dispatch, trackingDetails]);

  let order = orderHistory?.find(
    (order) => order.transaction_id === trackingDetails?.transaction_id,
  );
  let dateBought =
    order?.status === "successful"
      ? moment(order.created_at).format("DD MMMM YYYY")
      : "Unknown date";

  // Set SubmitBriefInProgress if dateBought is not "Unknown date"
  const bundleBought = dateBought !== "Unknown date";

  useEffect(() => {
    if (bundleBought) {
      dispatch(updateProgress({ SubmitBriefInProgress: true }));
    } else {
      dispatch(updateProgress({ SubmitBriefInProgress: false }));
    }
  }, [dispatch]);

  const status = bundleBought ? "completed" : "inactive";

  return (
    <div className="">
      <div className="flex flex-col rounded-md p-2 text-red-400">
        <p>
          {trackingDetails?.transaction_id.toString() === transID.toString() ? <div className="size-3 rounded-full bg-green-500"></div>  :  <div className="size-3 rounded-full bg-red-500"></div> }
          {/* {trackingDetails?.transaction_id.toString() !== transID.toString() &&
            " (Pending Order has no tracking)"} */}
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
