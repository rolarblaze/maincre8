import { Chart, Palette } from "@/public/icons";

const serviceBundles = {
  digital: [
    {
      icon: <Chart />,
      bundle: "Basic Package",
      price: "$499",
      description:
        "Access to basic copywriting services, for small businesses or startups",
    },
    {
      icon: <Chart />,
      bundle: "Standard Package",
      price: "$799",
      description:
        "Ideal for businesses seeking to take their marketing copies to the next level",
    },
    {
      icon: <Chart />,
      bundle: "Premium Package",
      price: "$999",
      description:
        "Perfect for businesses with need for a full spectrum of copywriting services",
    },
  ],
  creative: [
    {
      icon: <Palette />,
      bundle: "Basic package",
      price: "$20",
      description:
        "Ideal for growing businesses building a stronger online presence",
    },
    {
      icon: <Palette />,
      bundle: "Standard package",
      price: "$100",
      description:
        "For established businesses seeking to dominate their industry’s online space",
    },
    {
      icon: <Palette />,
      bundle: "Premium package",
      price: "$200",
      description: "For most businesses that want to optimize web queries",
    },
  ],
  content: [
    {
      icon: <Palette />,
      bundle: "Basic package",
      price: "$20",
      description:
        "Ideal for growing businesses building a stronger online presence",
    },
    {
      icon: <Palette />,
      bundle: "Standard package",
      price: "$100",
      description:
        "For established businesses seeking to dominate their industry’s online space",
    },
    {
      icon: <Palette />,
      bundle: "Premium package",
      price: "$200",
      description: "For most businesses that want to optimize web queries",
    },
  ],
};

export default serviceBundles;
