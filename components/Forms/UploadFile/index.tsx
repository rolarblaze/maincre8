import { AttachIcon } from "@/public/icons";

interface IUploadFile {
  fileName: string | null; 
  errors: string | undefined;
  setFieldValue: (field: string, value: File | null) => void;
}

const UploadFile: React.FC<IUploadFile> = ({ fileName, setFieldValue, errors }) => {
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

        <div className="space-y-1">
          <span className="text-grey500 block">PDF or DOC (max. 5mb)</span>
          {fileName && <span className="text-sm text-green-600">Uploaded file: {fileName}</span>}
        </div>
      </div>

      {errors && <div id="error">{errors}</div>}
    </div>
  );
};

export default UploadFile;
