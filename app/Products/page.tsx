"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";

// Dynamically import the Jar component with SSR disabled
import Jar from "@/components/assets/Jar";
import ChilliJar from "@/components/assets/ChilliJar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(
    "Curry Paste"
  );

  const handleProductClick = (product: string) => {
    setSelectedProduct(product);
  };

  return (
    <main className="min-h-screen m-auto px-20 bg-[radial-gradient(circle,_#6DB86B,_#305230)]">
      <Navbar />
      <section className="flex flex-col lg:flex-row items-center justify-center gap-20 lg:gap-[120px] pb-10 my-20">
        {/* Left Side Menu */}
        <figcaption className="flex flex-col gap-5">
          {/* Text list of products with click events */}
          {[
            "Curry Paste",
            "Chilli Paste",
            "Sour Dough",
            "Pumpkin Bread",
            "Bread Roll",
            "Jollof Rice",
          ].map((product) => (
            <div key={product}>
              <h1
                className={`text-6xl font-bold mb-2 cursor-pointer ${
                  selectedProduct === product
                    ? "text-white"
                    : "text-transparent hover:text-white"
                }`}
                style={{
                  WebkitTextStroke:
                    selectedProduct === product ? "0" : "1px white", // Remove stroke when selected
                }}
                onClick={() => handleProductClick(product)}
              >
                {product}
              </h1>
              <hr />
            </div>
          ))}
        </figcaption>

        {/* Dynamic rendering of images based on selected product */}
        <figure className="relative">
          {selectedProduct === "Curry Paste" && (
            <Carousel className="max-w-[30vw] h-[70vh] text-black">
              <CarouselContent>
                <CarouselItem>
                  <figure className="h-[70vh]">
                    <Jar />
                  </figure>
                </CarouselItem>
                <CarouselItem>
                  <div className="bg-gray-700 w-[80vw] lg:w-[30vw] h-[70vh] border border-gray-700 rounded-md z-10"></div>
                </CarouselItem>
                <CarouselItem>
                  <div className="bg-gray-600 w-[80vw] lg:w-[30vw] h-[70vh] border border-gray-700 rounded-md z-10"></div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          )}
          {selectedProduct === "Chilli Paste" && (
            <Carousel className="max-w-[30vw] h-[70vh] text-black">
              <CarouselContent>
                <CarouselItem>
                  <figure className="h-[70vh]">
                    <ChilliJar />
                  </figure>
                </CarouselItem>
                <CarouselItem>
                  <div className="bg-gray-700 w-[80vw] lg:w-[30vw] h-[70vh] border border-gray-700 rounded-md z-10"></div>
                </CarouselItem>
                <CarouselItem>
                  <div className="bg-gray-600 w-[80vw] lg:w-[30vw] h-[70vh] border border-gray-700 rounded-md z-10"></div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          )}
          {selectedProduct === "Sour Dough" && (
            <Carousel className="max-w-[30vw] h-[70vh] text-black">
              <CarouselContent>
                <CarouselItem>
                  <figure className="h-[70vh]">
                    <Jar />
                  </figure>
                </CarouselItem>
                <CarouselItem>
                  <div className="bg-gray-700 w-[80vw] lg:w-[30vw] h-[70vh] border border-gray-700 rounded-md z-10"></div>
                </CarouselItem>
                <CarouselItem>
                  <div className="bg-gray-600 w-[80vw] lg:w-[30vw] h-[70vh] border border-gray-700 rounded-md z-10"></div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          )}
          {selectedProduct === "Pumpkin Bread" && (
            <Carousel className="max-w-[30vw] h-[70vh] text-black">
              <CarouselContent>
                <CarouselItem>
                  <figure className="h-[70vh]">
                    <Jar />
                  </figure>
                </CarouselItem>
                <CarouselItem>
                  <div className="bg-gray-700 w-[80vw] lg:w-[30vw] h-[70vh] border border-gray-700 rounded-md z-10"></div>
                </CarouselItem>
                <CarouselItem>
                  <div className="bg-gray-600 w-[80vw] lg:w-[30vw] h-[70vh] border border-gray-700 rounded-md z-10"></div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          )}
          {selectedProduct === "Bread Roll" && (
            <Carousel className="max-w-[30vw] h-[70vh] text-black">
              <CarouselContent>
                <CarouselItem>
                  <figure className="h-[70vh]">
                    <Jar />
                  </figure>
                </CarouselItem>
                <CarouselItem>
                  <div className="bg-gray-700 w-[80vw] lg:w-[30vw] h-[70vh] border border-gray-700 rounded-md z-10"></div>
                </CarouselItem>
                <CarouselItem>
                  <div className="bg-gray-600 w-[80vw] lg:w-[30vw] h-[70vh] border border-gray-700 rounded-md z-10"></div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          )}
          {selectedProduct === "Jollof Rice" && (
            <Carousel className="max-w-[30vw] h-[70vh] text-black">
              <CarouselContent>
                <CarouselItem>
                  <figure className="h-[70vh]">
                    <Jar />
                  </figure>
                </CarouselItem>
                <CarouselItem>
                  <div className="bg-gray-700 w-[80vw] lg:w-[30vw] h-[70vh] border border-gray-700 rounded-md z-10"></div>
                </CarouselItem>
                <CarouselItem>
                  <div className="bg-gray-600 w-[80vw] lg:w-[30vw] h-[70vh] border border-gray-700 rounded-md z-10"></div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          )}
        </figure>
      </section>
    </main>
  );
}
