import { addAlert } from "@/redux/alerts";
import { uploadDocument } from "@/redux/myServices/features";
import { AppDispatch } from "@/redux/store";
import { FormikProps } from "formik";
import { useDispatch } from "react-redux";

const useFileUpload = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleFileUpload = async (
    file: File | null,
    endpoint: string,
    fileId: string,
    fieldName: string,
    formik: FormikProps<any>,
  ) => {
    if (!file) {
      formik.setFieldError("document", "Please attach a document.");
      return;
    } else if (file && file.size > 5000000) {
      formik.setFieldValue("document", null);
      formik.setFieldError("document", "Max file size exceeded.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    const actionResult = await dispatch(
      uploadDocument({ formData, endpoint, fileId }),
    );

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
          id: fileId,
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
