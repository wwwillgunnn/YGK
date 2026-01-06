"use client";

import { useMemo, useState } from "react";
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
    } satisfies Record<
      ProductKey,
      { model: React.ReactNode; images: string[] }
    >;
  }, []);

  const active = products[selectedProduct];

  return (
    <main className="min-h-screen m-auto px-6 lg:px-20 bg-[radial-gradient(circle,_#6DB86B,_#305230)]">
      <Navbar />

      <section className="flex flex-col lg:flex-row items-center justify-center gap-14 lg:gap-[120px] pb-10 my-20">
        {/* Left Side Menu */}
        <figcaption className="flex flex-col gap-5">
          {productList.map((product) => (
            <div key={product}>
              <h1
                className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-2 cursor-pointer ${
                  selectedProduct === product
                    ? "text-white"
                    : "text-transparent hover:text-white"
                }`}
                style={{
                  WebkitTextStroke:
                    selectedProduct === product ? "0" : "1px white",
                }}
                onClick={() => setSelectedProduct(product)}
              >
                {product}
              </h1>
              <hr />
            </div>
          ))}
        </figcaption>

        {/* One carousel that swaps content based on selection */}
        <figure className="relative">
          <Carousel className="w-[80vw] lg:w-[30vw] h-[70vh] text-black">
            <CarouselContent>
              {/* Slide 1: 3D asset */}
              <CarouselItem>
                <div className="relative w-full h-[70vh]">{active.model}</div>
              </CarouselItem>

              {/* Slides 2+: unique images per product */}
              {active.images.map((src, idx) => (
                <CarouselItem key={`${selectedProduct}-${src}-${idx}`}>
                  <div className="relative w-full h-[70vh] overflow-hidden rounded-md border border-white/20">
                    <Image
                      src={src}
                      alt={`${selectedProduct} image ${idx + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 80vw, 30vw"
                      priority={selectedProduct === "Curry Paste" && idx === 0}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </figure>
      </section>
    </main>
  );
}
