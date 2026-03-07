"use client";

import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import React from "react";
import { useEffect, useState } from "react";
import { Trash2 } from "lucide-react";

type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

export default function Cart() {
  const [cart, setCart] = useState<CartItem[]>([]);
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  }, []);

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  function removeItem(name: string) {
    const updatedCart = cart.filter((item) => item.name !== name);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }

  return (
    <main className="min-h-screen bg-[radial-gradient(circle,_#6DB86B,_#305230)] text-white">
      <Navbar />

      <section className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        {/* <div className="mb-10">
          <h1 className="text-3xl font-semibold text-gray-900">Checkout</h1>
          <p className="text-gray-500 mt-2">Complete your purchase below</p>
        </div> */}

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* LEFT SIDE - Forms */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Information */}
            <Card className="p-8 rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-8 w-8 rounded-full bg-white/20 text-white backdrop-blur-md border border-white/30 flex items-center justify-center text-sm font-medium">
                  1
                </div>
                <h2 className="text-lg font-semibold text-white">
                  Contact Information
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input label="First Name" placeholder="John" />
                <Input label="Last Name" placeholder="Doe" />
              </div>

              <Input label="Email" placeholder="john@example.com" />
              <Input label="Phone Number" placeholder="+1 (555) 123-4567" />
            </Card>

            {/* Shipping Address */}
            <Card className="p-8 rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-8 w-8 rounded-full bg-white/20 text-white backdrop-blur-md border border-white/30 flex items-center justify-center text-sm font-medium">
                  2
                </div>
                <h2 className="text-lg font-semibold text-white">
                  Shipping Address
                </h2>
              </div>

              <Input label="Street Address" placeholder="123 Main Street" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input label="City" placeholder="New York" />
                <Input label="State" placeholder="NY" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input label="ZIP Code" placeholder="10001" />
                <Input label="Country" placeholder="United States" />
              </div>
            </Card>

            {/* Payment Method */}
            <Card className="p-8 rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-8 w-8 rounded-full bg-white/20 text-white backdrop-blur-md border border-white/30 flex items-center justify-center text-sm font-medium">
                  3
                </div>
                <h2 className="text-lg font-semibold text-white">
                  Payment Method
                </h2>
              </div>

              <div className="space-y-4">
                <div className="border border-white/20 bg-white/5 rounded-2xl p-4 backdrop-blur-md flex items-center gap-3">
                  <input type="radio" name="payment" defaultChecked />
                  <span>Credit / Debit Card</span>
                </div>

                <div className="border border-white/20 bg-white/5 rounded-2xl p-4 backdrop-blur-md flex items-center gap-3">
                  <input type="radio" name="payment" />
                  <span>PayPal</span>
                </div>

                <Input label="Card Number" placeholder="1234 5678 9012 3456" />

                <div className="grid grid-cols-2 gap-4">
                  <Input label="Expiry Date" placeholder="MM/YY" />
                  <Input label="CVV" placeholder="123" />
                </div>

                <Input label="Name on Card" placeholder="John Doe" />

                <div className="flex items-center gap-2 mt-4">
                  <input type="checkbox" defaultChecked />
                  <span className="text-sm text-white/70">
                    Billing address same as shipping address
                  </span>
                </div>
              </div>
            </Card>
          </div>

          {/* RIGHT SIDE - Order Summary */}
          {/* TODO: Change this to local storage data */}
          <div className="lg:col-span-1">
            <Card className="p-8 rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.2)] sticky top-10">
              <h2 className="text-lg font-semibold mb-6 text-white">
                Order Summary
              </h2>

              {cart.length === 0 ? (
                <div className="text-center py-10 text-white/70">
                  <p className="text-lg font-medium">Your cart is empty</p>
                  <p className="text-sm mt-2">
                    Add some items before checking out.
                  </p>
                </div>
              ) : (
                <div className="space-y-6 text-sm">
                  {cart.map((item) => (
                    <OrderRow
                      key={item.name}
                      name={`${item.name} x${item.quantity}`}
                      price={`$${(item.price * item.quantity).toFixed(2)}`}
                      onRemove={() => removeItem(item.name)}
                    />
                  ))}

                  <div className="border-t pt-6 space-y-2 text-white/70">
                    <SummaryRow
                      label="Subtotal"
                      value={`$${subtotal.toFixed(2)}`}
                    />
                    <SummaryRow label="Shipping" value="$0.00" />
                    <SummaryRow label="Tax" value="$0.00" />
                  </div>

                  <div className="border-t pt-6 flex justify-between font-semibold text-base text-white">
                    <span>Total</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>

                  <button className="w-full bg-[#422323] text-white py-3 rounded-xl mt-6 hover:opacity-90 transition">
                    Complete Order
                  </button>
                </div>
              )}
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}

function Input({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <div className="mt-4">
      <label className="block text-sm font-medium text-white/80 mb-2">
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        className="
          w-full 
          rounded-2xl 
          border border-white/20 
          bg-white/5 
          px-4 py-3 
          text-white 
          placeholder-white/40
          backdrop-blur-md
          focus:outline-none 
          focus:ring-2 
          focus:ring-white/40 
          transition
        "
      />
    </div>
  );
}

function OrderRow({
  name,
  price,
  onRemove,
}: {
  name: string;
  price: string;
  onRemove: () => void;
}) {
  return (
    <div className="flex justify-between items-center text-white/80">
      <span>{name}</span>

      <div className="flex items-center gap-3">
        <span>{price}</span>

        <button onClick={onRemove}>
          <Trash2 size={16} />
        </button>
      </div>
    </div>
  );
}
function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between text-white/70">
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
}
