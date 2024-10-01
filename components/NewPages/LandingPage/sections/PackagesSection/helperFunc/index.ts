export const getTabClass = (title: string) => {
  switch (title) {
    case "Brand Design":
      return "border-error-50 hover:bg-error-50";
    case "Graphic Designs":
      return "border-warning-50 hover:bg-warning-50";
    case "Digital Marketing":
      return "border-success-50 hover:bg-success-50";
    case "Content Writing":
      return "border-brown-50 hover:bg-brown-50";
    case "All-In-One Bundle":
      return "border-primary50 hover:bg-primary50";
    default:
      return "";
  }
};

export const getBackgroundClass = (title: string) => {
  switch (title) {
    case "Brand Design":
      return "bg-error-50 group-hover:bg-white";
    case "Graphic Designs":
      return "bg-warning-50 group-hover:bg-white";
    case "Digital Marketing":
      return "bg-success-50 group-hover:bg-white";
    case "Content Writing":
      return "bg-brown-50 group-hover:bg-white";
    case "All-In-One Bundle":
      return "bg-primary50 group-hover:bg-white";
    default:
      return "";
  }
};

export const getUnderClass = (title: string) => {
  switch (title) {
    case "Brand Design":
      return "text-error-300";
    case "Graphic Designs":
      return "text-warning-400";
    case "Digital Marketing":
      return "text-success-300";
    case "Content Writing":
      return "text-brown-300";
    case "All-In-One Bundle":
      return "text-primary300";
    default:
      return "";
  }
};

export const getArrowClass = (title: string) => {
  switch (title) {
    case "Brand Design":
      return "#F2BCBA";
    case "Graphic Designs":
      return "#FBE2B7";
    case "Digital Marketing":
      return "#B5E3C4";
    case "Content Writing":
      return "#F0E6E6";
    case "All-In-One Bundle":
      return "#B6D4F7";
    default:
      return "";
  }
};
