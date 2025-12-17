import Link from "next/link";
import ProductPreview from "./ProductPreview";
import { Button } from "./ui/Button";

export default function OtherProducts() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-20">
      <header className="text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-6xl">
          Other Products
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-white/80 md:text-lg">
          Enjoy our fantastic curry paste with other things on the side
        </p>
      </header>

      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <ProductPreview name="Chilli Paste" weight="50ml" price="$20" />
        <ProductPreview name="Sour Dough" weight="100g" price="$20" />
        <ProductPreview name="Jollof Rice" weight="1kg" price="$40" />
      </div>

      <div className="mt-12 flex justify-center">
        <Link href="/products">
          <Button>See All Products</Button>
        </Link>
      </div>
    </section>
  );
}
