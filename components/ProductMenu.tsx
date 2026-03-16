"use client";

import { useEffect, useRef } from "react";
import { Product } from "@/data/products";
import ProductDetails from "./ProductDetails";

type Props = {
  products: Product[];
  selectedProductId: string;
  setSelectedProductId: (id: string) => void;
  quantity: number;
  setQuantity: (n: number) => void;
  addToCart: (product: Product, quantity: number) => void;
};

export default function ProductMenu({
  products,
  selectedProductId,
  setSelectedProductId,
  quantity,
  setQuantity,
  addToCart,
}: Props) {
  const chipRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  // automatically scroll the selected product chip into view
  useEffect(() => {
    chipRefs.current[selectedProductId]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [selectedProductId]);

  return (
    <div className="w-full lg:w-[340px] xl:w-96">

      {/* Mobile chips */}
      <div className="lg:hidden">
        <div className="flex gap-2 overflow-x-auto py-2 px-1 snap-x snap-mandatory scroll-px-10 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {products.map((product) => {
            const isActive = selectedProductId === product.id;

            return (
              <button
                key={product.id}
                ref={(el) => { chipRefs.current[product.id] = el; }}
                onClick={() => setSelectedProductId(product.id)}
                className={`snap-center whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition border focus:outline-none focus:ring-2 focus:ring-white/40 ${
                  isActive
                    ? "bg-white text-black border-white"
                    : "bg-transparent text-white border-white/60 hover:border-white"
                }`}
              >
                {product.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Desktop list */}
      <div className="hidden lg:flex flex-col gap-5 transition-all duration-300 ease-in-out">
        {products.map((product) => {
          const isActive = selectedProductId === product.id;

          return (
            <div key={product.id} className="w-auto lg:w-full">
              <button
                onClick={() => setSelectedProductId(product.id)}
                className={`group relative w-full text-left font-bold tracking-tight transition focus:outline-none focus:ring-2 focus:ring-transparent rounded-xl px-3 py-2 lg:px-0 lg:py-0 ${
                  isActive ? "text-white" : "text-white/70 hover:text-white"
                }`}
              >
                <span className="block text-5xl leading-tight">
                  {product.name}
                </span>
              </button>

              {isActive && (
                <ProductDetails
                  product={product}
                  quantity={quantity}
                  setQuantity={setQuantity}
                  addToCart={addToCart}
                />
              )}

              <hr className="mt-3 border-white/50" />
            </div>
          );
        })}
      </div>
    </div>
  );
}