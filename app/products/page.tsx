"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Jar from "@/components/assets/Jar";
import ChilliJar from "@/components/assets/ChilliJar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

// TODO: add idle spin animation to 3D models
// TODO: add all images
type Product = {
  id: string;
  name: string;
  model: ReactNode;
  price: number;
  stock: number;
  description: string;
  images: string[];
};

const products: Product[] = [
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

type MiscProduct = {
  title: string;
  description?: string;
  image: string;
  tag?: string;
};

const miscProducts: MiscProduct[] = [
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

type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

export default function Products() {
  const [selectedProductId, setSelectedProductId] = useState("curry-paste");
  const [addedProductId, setAddedProductId] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);

  const chipRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const activeProduct = products.find((p) => p.id === selectedProductId)!;

  useEffect(() => {
    const el = chipRefs.current[selectedProductId];
    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [selectedProductId]);

  useEffect(() => {
    setQuantity(1);
  }, [selectedProductId]);

  const addToCart = (product: Product, quantity: number) => {
    const existingCart: CartItem[] = JSON.parse(
      localStorage.getItem("cart") || "[]",
    );

    const existingItem = existingCart.find((item) => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      existingCart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity,
      });
    }

    localStorage.setItem("cart", JSON.stringify(existingCart));
  };
  return (
    <main className="min-h-screen flex flex-col bg-[radial-gradient(circle,_#6DB86B,_#305230)]">
      <Navbar />

      <section className="flex-1 flex items-center justify-center">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-10 py-10 lg:py-16">
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-10 lg:gap-24">
            {/* Product Menu */}
            <div className="w-full lg:w-[340px] xl:w-96">
              {/* Mobile: horizontally scrolling chips */}
              <div className="lg:hidden">
                <div className="flex gap-2 overflow-x-auto py-2 px-1 snap-x snap-mandatory scroll-px-10 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                  {products.map((product) => {
                    const isActive = selectedProductId === product.id;

                    return (
                      <button
                        key={product.id}
                        ref={(el) => {
                          chipRefs.current[product.id] = el;
                        }}
                        type="button"
                        onClick={() => setSelectedProductId(product.id)}
                        className={[
                          "snap-center whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition",
                          "border",
                          "focus:outline-none focus:ring-2 focus:ring-white/40",
                          isActive
                            ? "bg-white text-black border-white"
                            : "bg-transparent text-white border-white/60 hover:border-white",
                        ].join(" ")}
                      >
                        {product.name}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Desktop: vertical list */}
              <div className="hidden lg:flex lg:flex-col lg:gap-5 transition-all duration-300 ease-in-out">
                {products.map((product) => {
                  const isActive = selectedProductId === product.id;

                  return (
                    <div key={product.id} className="w-auto lg:w-full">
                      <button
                        type="button"
                        onClick={() => setSelectedProductId(product.id)}
                        className={[
                          "group relative w-full text-left font-bold tracking-tight transition",
                          "focus:outline-none focus:ring-2 focus:ring-transparent rounded-xl",
                          "px-3 py-2 lg:px-0 lg:py-0",
                          isActive
                            ? "text-white"
                            : "text-white/70 hover:text-white",
                        ].join(" ")}
                      >
                        <span className="block text-5xl leading-tight">
                          {product.name}
                        </span>
                      </button>

                      {isActive && (
                        <div className="mt-6 text-white max-w-md">
                          <p className="mt-2 text-white/80">
                            {product.description}
                          </p>

                          <div className="mt-4 flex items-center justify-between">
                            <span className="text-2xl font-semibold">
                              ${product.price.toFixed(2)}
                            </span>
                            <span className="text-sm text-white/70">
                              {product.stock} in stock
                            </span>
                          </div>

                          {/* Quantity Selector */}
                          <div className="mt-4 flex items-center gap-4">
                            <Button
                              onClick={() =>
                                setQuantity((q) => Math.max(1, q - 1))
                              }
                              className="px-3 py-1 bg-white/10 rounded-md hover:bg-white/20"
                            >
                              -
                            </Button>

                            <span className="text-lg font-semibold">
                              {quantity}
                            </span>

                            <Button
                              onClick={() =>
                                setQuantity((q) =>
                                  Math.min(product.stock, q + 1),
                                )
                              }
                              className="px-3 py-1 bg-white/10 rounded-md hover:bg-white/20"
                            >
                              +
                            </Button>
                          </div>

                          {/* Add to Cart */}
                          <Button
                            className="mt-6 w-full rounded-xl bg-white text-black font-semibold py-3 hover:bg-white/90 transition"
                            onClick={() => {
                              addToCart(product, quantity);
                              setAddedProductId(product.id);

                              setTimeout(() => {
                                setAddedProductId(null);
                              }, 2000);
                            }}
                          >
                            {addedProductId === product.id
                              ? "Added to cart!"
                              : `Add ${quantity} to Cart`}
                          </Button>
                        </div>
                      )}

                      <hr className="mt-3 border-white/50" />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Carousel */}
            <div className="w-full lg:w-auto flex flex-col justify-center">
              <Carousel
                key={selectedProductId}
                className="w-full sm:w-[80vw] lg:w-[30vw] max-w-2xl lg:max-w-md text-black"
              >
                <CarouselContent>
                  <CarouselItem>
                    <div className="relative w-full h-[48vh] sm:h-[58vh] lg:h-[70vh] min-h-[340px] overflow-hidden rounded-md border border-white/20">
                      {activeProduct.model}
                    </div>
                  </CarouselItem>

                  {activeProduct.images.map((src, idx) => (
                    <CarouselItem key={`${selectedProductId}-${src}-${idx}`}>
                      <div className="relative w-full h-[48vh] sm:h-[58vh] lg:h-[70vh] min-h-[340px] overflow-hidden rounded-md border border-white/20">
                        <Image
                          src={src}
                          alt={`${activeProduct.name} image ${idx + 1}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 30vw"
                          priority={
                            selectedProductId === "Curry Paste" && idx === 0
                          }
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      {/* Misc products section */}
      <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-10 py-16">
        <div className="mb-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Other goodies
          </h2>
          <p className="mt-2 text-white/80 max-w-2xl mx-auto">
            A few extra bits that come and go. Seasonal, small-batch, and always
            worth a look.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {miscProducts.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur overflow-hidden"
            >
              <div className="relative aspect-[4/3] bg-white/10">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              <div className="p-4">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-semibold text-white">{item.title}</h3>
                  {item.tag ? (
                    <span className="shrink-0 rounded-full bg-white/10 border border-white/15 px-2 py-0.5 text-xs text-white/90">
                      {item.tag}
                    </span>
                  ) : null}
                </div>

                {item.description ? (
                  <p className="mt-2 text-sm text-white/75">
                    {item.description}
                  </p>
                ) : null}

                {/* TODO: Send to the bottom of the hero? */}
                {/* <button
                  type="button"
                  className="mt-4 w-full rounded-xl bg-white text-black font-semibold py-2 hover:bg-white/90 transition"
                >
                  Enquire
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
