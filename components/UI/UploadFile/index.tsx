import { AttachIcon } from "@/public/icons";
import { FormikErrors } from "formik";

interface IUploadFile {
  data: File | null;
  errors: string | undefined; // Adjust to match your form error type
  setFieldValue: (field: string, value: File | null) => void;
}

const UploadFile: React.FC<IUploadFile> = ({ data, setFieldValue, errors }) => {
  return (
    <div>
      <div className="flex justify-normal items-center gap-4">
        <label
          htmlFor="document"
          className="flex items-center gap-1 py-2.5 px-4 w-fit bg-neutral100 text-black border border-ash rounded-lg text-sm cursor-pointer"
        >
          <AttachIcon fillColor="#484848" />
          Attach a file
        </label>

        <input
          type="file"
          name="document"
          id="document"
          hidden
          accept=".pdf, .doc, .docx"
          onChange={(e) => {
            if (e.currentTarget.files) {
              setFieldValue("document", e.currentTarget.files[0]);
            }
          }}
        />

        <span className="text-grey500 block">PDF or DOC (max. 5mb)</span>
      </div>

      {errors && <div id="error">{errors}</div>}
    </div>
  );
};

export default UploadFile;
