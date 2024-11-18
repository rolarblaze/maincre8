import * as Yup from "yup";

export interface GraphicsDesignValues {
  graphicsType: string[];
  graphicsColorPalette: string;
  graphicsTargetAud: string[];
  graphicsPrimaryMessage: string;
  graphicsTone: string;
  graphicsDeliverable: string[];
  graphicsReferences: string;
  graphicsTimeline: string;
}

export const graphicsDesignInitialValues = {
  graphicsType: [],
  graphicsColorPalette: "",
  graphicsTargetAud: [],
  graphicsPrimaryMessage: "",
  graphicsTone: "",
  graphicsDeliverable: [],
  graphicsReferences: "",
  graphicsTimeline: "",
};

export const graphicsDesignFormSchema = Yup.object().shape({
  // SELECT FIELDS
  graphicsType: Yup.array()
    .of(Yup.string().required())
    .min(1, "At least one graphics type is required")
    .required("Please select a graphics type"),
  graphicsColorPalette: Yup.string().required("Please input a color palette"),
  graphicsTargetAud: Yup.array()
    .of(Yup.string().required())
    .min(1, "At least one target audience option is required")
    .required("Please select a target audience"),
  graphicsPrimaryMessage: Yup.string().required("Please input a content tone"),
  graphicsTone: Yup.string().required("Please select a graphics tone option"),

  graphicsDeliverable: Yup.array()
    .of(Yup.string().required())
    .min(1, "At least one deliverable option is required")
    .required("Please select a deliverable option"),
  graphicsReferences: Yup.string().required("Please input a reference."),
  graphicsTimeline: Yup.string().required("Please select a timeline option"),

  // ATTACH A FILE
  document: Yup.mixed().nullable().optional(),
});
