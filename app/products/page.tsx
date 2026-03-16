"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import { products } from "@/data/products";
import { addToCart } from "@/lib/cart";
import MiscProducts from "@/components/MiscProducts";
import ProductCarousel from "@/components/ProductCarousel";
import ProductMenu from "@/components/ProductMenu";

export default function Products() {
  const [selectedProductId, setSelectedProductId] = useState("curry-paste");
  const [quantity, setQuantity] = useState(1);

  const activeProduct = products.find(
    (product) => product.id === selectedProductId,
  )!;

  return (
    <main className="min-h-screen flex flex-col bg-[radial-gradient(circle,_#6DB86B,_#305230)]">
      <Navbar />

      <section className="flex-1 flex items-center justify-center mx-auto w-full max-w-6xl flex-col lg:flex-row lg:items-start gap-10 lg:gap-24 px-4 sm:px-6 lg:px-10 py-10 lg:py-16">
        <ProductMenu
          products={products}
          selectedProductId={selectedProductId}
          setSelectedProductId={setSelectedProductId}
          quantity={quantity}
          setQuantity={setQuantity}
          addToCart={addToCart}
        />

        <ProductCarousel product={activeProduct} />
      </section>

      <MiscProducts />
    </main>
  );
}
