import {
  BrandDesignSVG,
  GraphicDesignsSVG,
  DigitalMarketingSVG,
  AllInOneBundleSVG,
  ContentWritingSVG,
} from "@/public/icons";

export const getBackgroundClass = (title: string) => {
  switch (title) {
    case "Brand Design":
      return "bg-error-50";
    case "Graphic Design":
      return "bg-warning-50";
    case "Digital Marketing":
      return "bg-success-50";
    case "Content Writing":
      return "bg-brown-50";
    case "All-In-One Bundle":
      return "bg-primary50";
    default:
      return "";
  }
};

export const getImage = (title: string) => {
  switch (title) {
    case "Brand Design":
      return (
        <BrandDesignSVG className="-ml-16 -mt-16 object-left-bottom sm:-ml-10 sm:-mt-20" />
      );
    case "Graphic Design":
      return <GraphicDesignsSVG className="object-left-bottom" />;
    case "Digital Marketing":
      return <DigitalMarketingSVG className="-ml-2 -mt-8" />;
    case "Content Writing":
      return <ContentWritingSVG className="-mt-12 sm:-mt-10" />;
    case "All-In-One Bundle":
      return <AllInOneBundleSVG className="-ml-8 -mt-8 sm:-ml-2" />;
    default:
      return "";
  }
};
