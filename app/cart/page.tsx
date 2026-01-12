"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function CartPage() {
  const [cart, setCart] = useState<string[]>([])

  // Sækja cart úr localStorage
  useEffect(() => {
    const saved = localStorage.getItem("cart")
    if (saved) setCart(JSON.parse(saved))
  }, [])

  const clearCart = () => {
    localStorage.removeItem("cart")
    setCart([])
  }

  return (
    <main className="p-6">
      <nav className="mb-4">
        <Link href="/" className="underline">
          ← Back to Shop
        </Link>
      </nav>

      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="mb-4">
            {cart.map((item, index) => (
              <li key={index} className="border-b py-2">
                {item}
              </li>
            ))}
          </ul>
          <button
            onClick={clearCart}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Clear Cart
          </button>
        </>
      )}
    </main>
  )
}
