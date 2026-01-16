"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import ProductCard from "./components/ProductCard"

export default function Home() {
  const [cart, setCart] = useState<string[]>([])

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

      <div className="grid grid-cols-3 gap-4">
        <ProductCard name="Shoes" price={50} image="/shoes.jpg" onAdd={addToCart} />
        <ProductCard name="Jacket" price={120} image="/jacket.jpg" onAdd={addToCart} />
        <ProductCard name="T-Shirt" price={25} image="/tshirt.jpg" onAdd={addToCart} />
        <ProductCard name="Jeans" price={80} image="/jeans.jpg" onAdd={addToCart} />
        <ProductCard name="Hat" price={20} image="/hat.jpg" onAdd={addToCart} />
        <ProductCard name="Backpack" price={60} image="/backpack.jpg" onAdd={addToCart} />
        <ProductCard name="Sunglasses" price={35} image="/sunglasses.jpg" onAdd={addToCart} />
        <ProductCard name="Watch" price={150} image="/watch.jpg" onAdd={addToCart} />
        <ProductCard name="Sneakers" price={95} image="/sneakers.jpg" onAdd={addToCart} />
      </div>
    </main>
  )
}
