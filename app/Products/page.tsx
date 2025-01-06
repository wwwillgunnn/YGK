"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import dynamic from "next/dynamic";

// Dynamically import the Jar component with SSR disabled
const Jar = dynamic(() => import("@/components/assets/Jar"), { ssr: false });

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const handleProductClick = (product: string) => {
    setSelectedProduct(product);
  };

  return (
    <main>
      <Navbar />
      <section className="flex flex-col lg:flex-row items-center justify-center gap-20 pb-10 my-20">
        <figcaption className="flex flex-col gap-5 mr-20">
          {/* Text list of products with click events */}
          {["Curry Paste", "Chilli Paste", "Sour Dough", "Pumpkin Bread", "Bread Roll", "Jollof Rice"].map((product) => (
            <div key={product}>
              <h1
                className={`text-6xl font-bold mb-2 cursor-pointer ${
                  selectedProduct === product ? 'text-white' : 'text-transparent hover:text-white'
                }`}
                style={{
                  WebkitTextStroke: selectedProduct === product ? '0' : '1px white', // Remove stroke when selected
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
        <figure className="relative ml-20">
          {selectedProduct === "Curry Paste" && (
            <figure className="w-[30vw] h-[70vh] z-10">
              <Jar />
            </figure>
          )}
          {selectedProduct === "Chilli Paste" && (
            <div className="bg-gray-400 w-[30vw] h-[70vh] border border-gray-700 rounded-md z-10"></div>
          )}
          {selectedProduct === "Sour Dough" && (
            <div className="bg-gray-500 w-[30vw] h-[70vh] border border-gray-700 rounded-md z-10"></div>
          )}
          {selectedProduct === "Pumpkin Bread" && (
            <div className="bg-gray-700 w-[30vw] h-[70vh] border border-gray-700 rounded-md z-10"></div>
          )}
          {selectedProduct === "Bread Roll" && (
            <div className="bg-gray-800 w-[30vw] h-[70vh] border border-gray-700 rounded-md z-10"></div>
          )}
          {selectedProduct === "Jollof Rice" && (
            <div className="bg-gray-900 w-[30vw] h-[70vh] border border-gray-700 rounded-md z-10"></div>
          )}
          {/* Default Image when no product is selected */}
          {!selectedProduct && (
            <figure className="w-[30vw] h-[70vh] z-10">
              <Jar />
            </figure>
          )}
        </figure>
      </section>
    </main>
  );
}
