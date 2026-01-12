"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import ProductCard from "./components/ProductCard"

export default function Home() {
  const [cart, setCart] = useState<string[]>([])

  // Sækja cart úr localStorage þegar component mountar
  useEffect(() => {
    const saved = localStorage.getItem("cart")
    if (saved) setCart(JSON.parse(saved))
  }, [])

  const addToCart = (product: string) => {
    const updated = [...cart, product]
    setCart(updated)
    localStorage.setItem("cart", JSON.stringify(updated))
  }

  return (
    <main className="p-6">
      <nav className="mb-4">
        <Link href="/cart" className="underline">
          Go to Cart ({cart.length})
        </Link>
      </nav>

      <h1 className="text-2xl font-bold mb-4">My Shop</h1>

      <div className="grid grid-cols-2 gap-4">
        <ProductCard name="Shoes" price={50} onAdd={addToCart} />
        <ProductCard name="Jacket" price={120} onAdd={addToCart} />
      </div>
    </main>
  )
}
