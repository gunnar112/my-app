import Image from "next/image"

type ProductProps = {
  name: string
  price: number
  image: string
  onAdd: (name: string) => void
}

export default function ProductCard({
  name,
  price,
  image,
  onAdd,
}: ProductProps) {
  return (
    <div className="border p-4 rounded">
      <Image
        src={image}
        alt={name}
        width={200}
        height={200}
        className="mb-2 rounded"
      />

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
