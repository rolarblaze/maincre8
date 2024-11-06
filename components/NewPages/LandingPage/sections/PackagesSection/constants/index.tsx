
import {
  BrandDesignSVG,
  GraphicDesignsSVG,
  DigitalMarketingSVG,
  AllInOneBundleSVG,
  ContentWritingSVG,
} from "@/public/icons";
import { RootState, useAppSelector } from "@/redux/store";


export const packages = [
  {
    title: "Ultimate Marketing",
    icon: <BrandDesignSVG />,
    under: "Move beyond just a logo",
  },
  {
    title: "Brand Identity Development",
    icon: <GraphicDesignsSVG className="size-full" />,
    under: "Transform Your Visuals",
  },
  {
    title: "Graphic Design",
    icon: <DigitalMarketingSVG className="size-full" />,
    under: "Boost Your Reach",
  },
  {
    title: "Digital Marketing",
    icon: <ContentWritingSVG className="size-full" />,
    under: "Craft Your Message",
  },
  {
    title: "Content Creation",
    icon: <AllInOneBundleSVG />,
    under: "Maximize Your Growth",
  },
];
