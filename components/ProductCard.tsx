type ProductProps = {
  name: string
  price: number
  onAdd: (name: string) => void
}

export default function ProductCard({ name, price, onAdd }: ProductProps) {
  return (
    <div className="border p-4 rounded">
      <h2 className="font-bold">{name}</h2>
      <p>${price}</p>

      <button
        onClick={() => onAdd(name)}
        className="bg-black text-white px-3 py-1 mt-2"
      >
        Add to cart
      </button>
    </div>
  )
}
