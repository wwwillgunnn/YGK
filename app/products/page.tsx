"use client";

import { useEffect, useMemo, useRef, useState } from "react";
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

type ProductKey =
  | "Curry Paste"
  | "Chilli Paste"
  | "Sour Dough"
  | "Pumpkin Bread"
  | "Bread Roll"
  | "Jollof Rice";

const productList: ProductKey[] = [
  "Curry Paste",
  "Chilli Paste",
  "Sour Dough",
  "Pumpkin Bread",
  "Bread Roll",
  "Jollof Rice",
];

type MiscProduct = {
  title: string;
  description?: string;
  image: string;
  tag?: string;
};

const miscProducts: MiscProduct[] = [
  {
    title: "Seasonal Garden Mix",
    description: "A rotating mix of whatever is looking best this week.",
    image: "/products/misc-1.jpg",
    tag: "Seasonal",
  },
  {
    title: "Homemade Snacks",
    description: "Small batch snacks made fresh.",
    image: "/products/misc-2.jpg",
    tag: "Small batch",
  },
  {
    title: "Gift Bundle",
    description: "A simple bundle for sharing with friends or family.",
    image: "/products/misc-3.jpg",
    tag: "Gift",
  },
  {
    title: "Market Special",
    description: "Limited items that change from time to time.",
    image: "/products/misc-4.jpg",
    tag: "Limited",
  },
];

export default function Products() {
  const [selectedProduct, setSelectedProduct] =
    useState<ProductKey>("Curry Paste");

  const chipRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  useEffect(() => {
    const el = chipRefs.current[selectedProduct];
    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [selectedProduct]);

  const products = useMemo(() => {
    return {
      "Curry Paste": {
        model: <Jar />,
        images: [
          "/products/curry-1.jpg",
          "/products/curry-2.jpg",
          "/products/curry-3.jpg",
        ],
      },
      "Chilli Paste": {
        model: <ChilliJar />,
        images: [
          "/products/chilli-1.jpg",
          "/products/chilli-2.jpg",
          "/products/chilli-3.jpg",
        ],
      },
      "Sour Dough": {
        model: <Jar />,
        images: [
          "/products/sourdough.jpg",
          "/products/sourdough2.jpg",
          "/products/sourdough4.jpg",
        ],
      },
      "Pumpkin Bread": {
        model: <Jar />,
        images: [
          "/products/pumpkin-bread.jpg",
          "/products/pumpkin-bread-3.jpg",
        ],
      },
      "Bread Roll": {
        model: <Jar />,
        images: [
          "/products/bread-roll.jpg",
          "/products/bread-roll2.jpg",
          "/products/bread-roll3.jpg",
          "/products/bread-roll4.jpg",
        ],
      },
      "Jollof Rice": {
        model: <Jar />,
        images: [
          "/products/jollof-1.jpg",
          "/products/jollof-2.jpg",
          "/products/jollof-3.jpg",
        ],
      },
    } satisfies Record<ProductKey, { model: ReactNode; images: string[] }>;
  }, []);

  const active = products[selectedProduct];

  return (
    <main className="min-h-screen px-20 bg-[radial-gradient(circle,_#6DB86B,_#305230)]">
      <Navbar />

      <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-10 py-10 lg:py-16">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-10 lg:gap-24">
          {/* Product Menu */}
          <div className="w-full lg:w-[340px]">
            {/* Mobile: horizontally scrolling chips */}
            <div className="lg:hidden">
              <div className="flex gap-2 overflow-x-auto py-2 px-1 snap-x snap-mandatory scroll-px-10 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                {productList.map((product) => {
                  const isActive = selectedProduct === product;

                  return (
                    <button
                      key={product}
                      ref={(el) => {
                        chipRefs.current[product] = el;
                      }}
                      type="button"
                      onClick={() => setSelectedProduct(product)}
                      className={[
                        "snap-center whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition",
                        "border",
                        "focus:outline-none focus:ring-2 focus:ring-white/40",
                        isActive
                          ? "bg-white text-black border-white"
                          : "bg-transparent text-white border-white/60 hover:border-white",
                      ].join(" ")}
                    >
                      {product}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Desktop: vertical list */}
            <div className="hidden lg:flex lg:flex-col lg:gap-5">
              {productList.map((product) => {
                const isActive = selectedProduct === product;

                return (
                  <div key={product} className="w-auto lg:w-full">
                    <button
                      type="button"
                      onClick={() => setSelectedProduct(product)}
                      className={[
                        "group relative w-full text-left font-bold tracking-tight transition",
                        "focus:outline-none focus:ring-2 focus:ring-white/40 rounded-xl",
                        "px-3 py-2 lg:px-0 lg:py-0",
                        isActive
                          ? "text-white"
                          : "text-white/70 hover:text-white",
                      ].join(" ")}
                    >
                      <span className="block text-5xl leading-tight">
                        {product}
                      </span>
                    </button>

                    <hr className="mt-3 border-white/50" />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Carousel */}
          <div className="w-full lg:w-auto flex justify-center">
            <Carousel
              key={selectedProduct}
              className="w-full sm:w-[80vw] lg:w-[30vw] max-w-2xl lg:max-w-md text-black"
            >
              <CarouselContent>
                <CarouselItem>
                  <div className="relative w-full h-[48vh] sm:h-[58vh] lg:h-[70vh] min-h-[340px] overflow-hidden rounded-md border border-white/20">
                    {active.model}
                  </div>
                </CarouselItem>

                {active.images.map((src, idx) => (
                  <CarouselItem key={`${selectedProduct}-${src}-${idx}`}>
                    <div className="relative w-full h-[48vh] sm:h-[58vh] lg:h-[70vh] min-h-[340px] overflow-hidden rounded-md border border-white/20">
                      <Image
                        src={src}
                        alt={`${selectedProduct} image ${idx + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 30vw"
                        priority={
                          selectedProduct === "Curry Paste" && idx === 0
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
      </section>

      {/* Misc products section */}
      <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-10 py-16">
        <header className="mb-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Other goodies
          </h2>
          <p className="mt-2 text-white/80 max-w-2xl mx-auto">
            A few extra bits that come and go. Seasonal, small-batch, and always
            worth a look.
          </p>
        </header>

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

                <button
                  type="button"
                  className="mt-4 w-full rounded-xl bg-white text-black font-semibold py-2 hover:bg-white/90 transition"
                >
                  Enquire
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
