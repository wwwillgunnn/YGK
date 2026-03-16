import Jar from "@/components/assets/Jar";
import ChilliJar from "@/components/assets/ChilliJar";
import { ReactNode } from "react";

export type Product = {
  id: string;
  name: string;
  model: ReactNode;
  price: number;
  stock: number;
  description: string;
  images: string[];
};

export const products: Product[] = [
  {
    id: "curry-paste",
    name: "Curry Paste",
    model: <Jar />,
    price: 12.99,
    stock: 999,
    description: "Rich, aromatic curry paste made in small batches.",
    images: [
      "/products/curry-1.JPG",
      "/products/curry-2.JPG",
      "/products/curry-3.JPG",
    ],
  },
  {
    id: "chilli-paste",
    name: "Chilli Paste",
    model: <ChilliJar />,
    price: 0,
    stock: 999,
    description: "",
    images: [
      "/products/chilli-1.JPG",
      "/products/chilli-2.JPG",
      "/products/chilli-3.JPG",
    ],
  },
  {
    id: "sourdough",
    name: "Sour Dough",
    model: <Jar />,
    price: 0,
    stock: 999,
    description: "",
    images: [
      "/products/sourdough.JPG",
      "/products/sourdough2.JPG",
      "/products/sourdough4.JPG",
    ],
  },
  {
    id: "pumpkin-bread",
    name: "Pumpkin Bread",
    model: <Jar />,
    price: 0,
    stock: 999,
    description: "",
    images: ["/products/pumpkin-bread.JPG", "/products/pumpkin-bread-3.JPG"],
  },
  {
    id: "bread-roll",
    name: "Bread Roll",
    model: <Jar />,
    price: 0,
    stock: 999,
    description: "",
    images: [
      "/products/bread-roll.JPG",
      "/products/bread-roll2.JPG",
      "/products/bread-roll3.JPG",
      "/products/bread-roll4.JPG",
    ],
  },
  {
    id: "jollof-rice",
    name: "Jollof Rice",
    model: <Jar />,
    price: 0,
    stock: 999,
    description: "",
    images: [
      "/products/jollof-1.JPG",
      "/products/jollof-2.JPG",
      "/products/jollof-3.JPG",
    ],
  },
];
