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
          "/products/sourdough-2.jpg",
          "/products/sourdough-3.jpg",
        ],
      },
      "Pumpkin Bread": {
        model: <Jar />,
        images: [
          "/products/pumpkin-bread-1.jpg",
          "/products/pumpkin-bread-2.jpg",
          "/products/pumpkin-bread-3.jpg",
        ],
      },
      "Bread Roll": {
        model: <Jar />,
        images: [
          "/products/bread-roll.jpg",
          "/products/bread-roll2.jpg",
          "/products/bread-roll3.jpg",
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
    <main className="min-h-screen px-8 bg-[radial-gradient(circle,_#6DB86B,_#305230)]">
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
                        "text-left font-bold tracking-tight transition",
                        "focus:outline-none focus:ring-2 focus:ring-white/40 rounded-md",
                        "px-3 py-2 lg:px-0 lg:py-0",
                        isActive
                          ? "text-white"
                          : "text-white/90 hover:text-white",
                      ].join(" ")}
                      style={{
                        WebkitTextStroke: isActive ? "0" : "1px white",
                        color: isActive ? "white" : "transparent",
                      }}
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
            <Carousel className="w-full sm:w-[80vw] lg:w-[30vw] max-w-2xl lg:max-w-md text-black">
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
    </main>
  );
}
