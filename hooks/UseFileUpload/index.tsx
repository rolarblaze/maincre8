import { addAlert } from "@/redux/alerts";
import { uploadDocument } from "@/redux/myServices/features";
import { AppDispatch, RootState, useAppSelector } from "@/redux/store";
import { FormikProps } from "formik";
import { useDispatch } from "react-redux";

const useFileUpload = () => {
  const dispatch = useDispatch<AppDispatch>();

   // Select the loading state from Redux
  //  const isLoading = useAppSelector((state: RootState) =>
  //   Object.values(state.forms).some((form) => form.isLoading)
  // );

 
  const handleFileUpload = async (
    file: File | null,
    endpoint: string,
    fieldName: string,
    formik: FormikProps<any>,
  ) => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    const actionResult = await dispatch(uploadDocument({ formData, endpoint }));

    if (uploadDocument.fulfilled.match(actionResult)) {
      const fileLink = actionResult.payload?.file_link; 

      formik?.setFieldValue(fieldName, fileLink);

      dispatch(
        addAlert({
          id: "",
          headText: "Success",
          subText: actionResult.payload.detail,
          type: "success",
        }),
      );
    } else if (uploadDocument.rejected.match(actionResult)) {
      const errorMessage =
        actionResult.error?.message ||
        "Failed to upload Brief. Please try again.";
      console.error("Error uploading file:", errorMessage);

      dispatch(
        addAlert({
          id: "",
          headText: "Error",
          subText: errorMessage,
          type: "error",
        }),
      );
    }
  };

  return { handleFileUpload };
};

export default useFileUpload;
