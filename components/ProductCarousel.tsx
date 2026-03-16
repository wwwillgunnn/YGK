import { Product } from "@/data/products";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Image from "next/image";

type Props = {
  product: Product;
};

export default function ProductCarousel({ product }: Props) {
  return (
    <Carousel className="w-full max-w-md bg-white/5 rounded-lg lg:w-[30vw]">
      <CarouselContent>
        <CarouselItem>
          <div className="relative h-[70vh]">{product.model}</div>
        </CarouselItem>

        {product.images.map((src, index) => (
          <CarouselItem key={index}>
            <div className="relative h-[70vh]">
              <Image
                src={src}
                alt={`${product.name} ${index}`}
                fill
                className="object-cover"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="text-black" />
      <CarouselNext className="text-black" />
    </Carousel>
  );
}
