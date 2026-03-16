"use client";

import { useState } from "react";
import { Product } from "@/data/products";
import { Button } from "@/components/ui/button";

type Props = {
  product: Product;
  quantity: number;
  setQuantity: (n: number) => void;
  addToCart: (product: Product, quantity: number) => void;
};

export default function ProductDetails({
  product,
  quantity,
  setQuantity,
  addToCart,
}: Props) {
  const [addedProductId, setAddedProductId] = useState<string | null>(null);

  return (
    <div className="mt-6 text-white max-w-md">
      <p className="mt-2 text-white/80">{product.description}</p>

      <div className="mt-4 flex items-center justify-between">
        <span className="text-2xl font-semibold">
          ${product.price.toFixed(2)}
        </span>

        <span className="text-sm text-white/70">{product.stock} in stock</span>
      </div>

      {/* Quantity Selector */}
      <div className="mt-4 flex items-center gap-4">
        <Button
          onClick={() => setQuantity(Math.max(1, quantity - 1))}
          className="px-3 py-1 bg-white/10 rounded-md hover:bg-white/20"
        >
          -
        </Button>

        <span className="text-lg font-semibold">{quantity}</span>

        <Button
          onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
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
  );
}
