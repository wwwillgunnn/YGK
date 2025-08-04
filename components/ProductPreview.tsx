import Image from "next/image";
import Jar from "./assets/Jar";

interface ProductProps {
    name: string;
    weight: string;
    price: string;
}

export default function ProductPreview({name, weight, price}: ProductProps) {
  return (
    <div className="min-h-96 max-w-80 border-2 border-white rounded-3xl transition-transform duration-300 hover:scale-110">
      {/* <figure className="h-80 w-96 z-10">
        <Jar />
      </figure> */}
      <Image 
        src="/orchid.png"
        alt="YGK Logo"
        height={200}
        width={200}
      />
      <hr />
      <div className="text-center">
        <p>{name}</p>
        <p>{weight}</p>
        <p>{price}</p>
      </div>
    </div>
  )
}
