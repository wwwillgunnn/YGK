'use client'

import React, { useState } from "react";

export default function Counter() {
    const [quantity, setQuantity] = useState(1); // State for the product quantity
    
  return (
    <div className="flex items-center overflow-hidden">
        <button
        onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
        className="px-3 py-2 bg-gray-200 hover:bg-gray-300 text-black"
        >
            -
        </button>
        
        <span className="px-4 py-2 text-lg">{quantity}</span>

        <button
        onClick={() => setQuantity(quantity + 1)}
        className="px-3 py-2 bg-gray-200 hover:bg-gray-300 text-black"
        >
            +
        </button>
    </div>
  )
}

