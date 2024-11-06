export const getTabClass = (title: string, names: string[]) => {
  switch (title) {
    case names[0]:
      return "border-primary50 hover:bg-primary50";
    case names[1]:
      return "border-error-50 hover:bg-error-50";
    case names[2]:
      return "border-warning-50 hover:bg-warning-50";
    case names[3]:
      return "border-success-50 hover:bg-success-50";
    case names[4]:
      return "border-brown-50 hover:bg-brown-50";
    default:
      return "";
  }
};

export const getBackgroundClass = (title: string, names: string[]) => {
  switch (title) {
    case names[0]:
      return "bg-primary50 group-hover:bg-white";
    case names[1]:
      return "bg-error-50 ";
    case names[2]:
      return "bg-warning-50 ";
    case names[3]:
      return "bg-success-50 ";
    case names[4]:
      return "bg-brown-50 ";
    default:
      return "";
  }
};

export const getUnderClass = (title: string, names: string[]) => {
  switch (title) {
    case names[0]:
      return "text-primary300";
    case names[1]:
      return "text-error-300";
    case names[2]:
      return "text-warning-400";
    case names[3]:
      return "text-success-300";
    case names[4]:
      return "text-brown-300";
    default:
      return "";
  }
};

export const getArrowClass = (title: string, names: string[]) => {
  switch (title) {
    case names[0]:
      return "#B6D4F7";
    case names[1]:
      return "#F2BCBA";
    case names[2]:
      return "#FBE2B7";
    case names[3]:
      return "#B5E3C4";
    case names[4]:
      return "#F0E6E6";
    default:
      return "";
  }
};

export const getFocusClass = (title: string, names: string[]) => {
  switch (title) {
    case names[0]:
      return "outline-[#62A2EE] focus:bg-primary50";
    case names[1]:
      return "outline-[#E26E6A] focus:bg-error-50";
    case names[2]:
      return "outline-[#F7C164] focus:bg-warning-50";
    case names[3]:
      return "outline-[#5FC381] focus:bg-success-50";
    case names[4]:
      return "outline-[#B7AFAF] focus:bg-brown-50";
    default:
      return "";
  }
};
