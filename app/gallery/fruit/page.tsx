import Image from "next/image";
import Navbar from "@/components/Navbar";

const fruits = [
  { src: "/fruits/blueberries2.JPG", alt: "Fresh blueberries" },
  { src: "/fruits/strawberries.JPG", alt: "Fresh strawberries" },
  { src: "/fruits/strawstand.JPG", alt: "Strawberry stand" },
];

export default function FruitGalleryPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(to_bottom,_#6DB86B_0%,_#569255_50%,_#305230_95%,_#422323_100%)] text-white">
      <Navbar />

      <section className="max-w-7xl mx-auto px-6 py-16">
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-bold mb-4">Fruit Gallery</h1>
          <p className="text-neutral-200 max-w-2xl mx-auto">
            Sweet, fresh, and simple. A little collection of seasonal fruit and
            the places you find it.
          </p>
        </header>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {fruits.map((fruit, index) => (
            <div
              key={`${fruit.src}-${index}`}
              className="relative aspect-square overflow-hidden rounded-2xl bg-neutral-800"
            >
              <Image
                src={fruit.src}
                alt={fruit.alt}
                fill
                className="object-cover transition-transform duration-500 hover:scale-110"
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                priority={index < 3}
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
