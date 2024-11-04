import assetLibrary from "@/library";

export const getBackgroundClass = (title: string) => {
  switch (title) {
    case "Brand Design Packages":
      return "bg-error-50";
    case "Graphic Design Packages":
      return "bg-warning-50";
    case "Digital Marketing Packages":
      return "bg-success-50";
    case "Content Writing Packages":
      return "bg-brown-50";
    case "All-In-One Bundle":
      return "bg-primary50";
    default:
      return "";
  }
};

export const getImage = (title: string) => {
  switch (title) {
    case "Brand Design Packages":
      return assetLibrary.brandDesignPack;
    case "Graphic Design Packages":
      return assetLibrary.graphicDesignPack;
    case "Digital Marketing Packages":
      return assetLibrary.digitalMarketingPack;
    case "Content Writing Packages":
      return assetLibrary.contentWritingPack;
    case "All-In-One Bundle":
      return assetLibrary.allInOneBundle;
    default:
      return "";
  }
};
