import Image from "next/image";

interface ProductProps {
  name: string;
  weight: string;
  price: string;
}

export default function ProductPreview({ name, weight, price }: ProductProps) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-white/15 bg-white/5 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-white/25 hover:bg-white/10">
      <div className="flex items-center justify-center p-8">
        <div className="relative h-44 w-44">
          <Image
            src="/orchid.png"
            alt={`${name} product image`}
            fill
            className="object-contain transition group-hover:scale-105"
            sizes="176px"
            priority={false}
          />
        </div>
      </div>

      <div className="border-t border-white/10 p-6 text-center">
        <p className="text-xl font-semibold tracking-tight">{name}</p>
        <p className="mt-1 text-sm text-white/70">{weight}</p>

        <div className="mt-5 flex items-center justify-center gap-3">
          <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium">
            {price}
          </span>
        </div>
      </div>
    </article>
  );
}
