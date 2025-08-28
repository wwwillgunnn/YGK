import Image from "next/image";
import Jar from "./assets/Jar";

interface ProductProps {
    name: string;
    weight: string;
    price: string;
}

export default function ProductPreview({name, weight, price}: ProductProps) {
  return (
    <div className="min-h-[560px] min-w-[400px] border-2 border-white rounded-3xl">
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
