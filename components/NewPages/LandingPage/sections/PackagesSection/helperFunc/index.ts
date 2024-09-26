export const getBorderClass = (title: string) => {
  switch (title) {
    case "Brand Design":
      return "border-error-50";
    case "Graphic Designs":
      return "border-warning-50";
    case "Digital Marketing":
      return "border-success-50";
    case "Content Creation":
      return "border-brown-50";
    case "All-In-One Bundle":
      return "border-primary50";
    default:
      return "";
  }
};

export const getBackgroundClass = (title: string) => {
  switch (title) {
    case "Brand Design":
      return "bg-error-50";
    case "Graphic Designs":
      return "bg-warning-50";
    case "Digital Marketing":
      return "bg-success-50";
    case "Content Creation":
      return "bg-brown-50";
    case "All-In-One Bundle":
      return "bg-primary50";
    default:
      return "";
  }
};
