export type MiscProduct = {
  title: string;
  description?: string;
  image: string;
  tag?: string;
};

export const miscProducts: MiscProduct[] = [
  {
    title: "Pecans",
    description:
      "An amazing snack on their own, or a great addition to your cooking.",
    image: "/products/misc-1.JPG",
    tag: "Small batch",
  },
  {
    title: "Brownies",
    description: "Rich, chocolatey, and perfect for sharing (or not).",
    image: "/products/misc-2.JPG",
    tag: "Small batch",
  },
  {
    title: "Sponge Cake",
    description:
      "Light, fluffy, and a perfect canvas for your favourite toppings.",
    image: "/products/misc-3.JPG",
    tag: "Gift",
  },
  {
    title: "Market Special",
    description: "Limited items that change from time to time.",
    image: "/products/misc-4.JPG",
    tag: "Limited",
  },
];
