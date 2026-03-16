import { Product } from "@/data/products";

export function addToCart(product: Product, quantity: number) {
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");

  const existing = cart.find((item: any) => item.id === product.id);

  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity,
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
}
