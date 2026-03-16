import { Product } from "@/data/products";

type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

export function addToCart(product: Product, quantity: number) {
  const cart: CartItem[] = JSON.parse(localStorage.getItem("cart") || "[]");

  const existing = cart.find((item) => item.id === product.id);

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
