import Image from "next/image";
import Navbar from "@/components/Navbar";

const fruits = [
  // Blueberries
  { src: "/fruits/bluebbowl.JPG", alt: "Blueberries in a bowl" },
  { src: "/fruits/blueberry-bowl.JPG", alt: "Blueberry bowl" },
  { src: "/fruits/blueberry-basket.JPG", alt: "Blueberry basket" },
  { src: "/fruits/blueberries-super-zoomed.JPG", alt: "Blueberry close-up" },
  { src: "/fruits/blueberries2.JPG", alt: "Fresh blueberries close-up" },
  { src: "/fruits/blueberry-plant.JPG", alt: "Blueberry plant" },
  { src: "/fruits/blueberry-plant-zoom.JPG", alt: "Blueberry plant close-up" },
  { src: "/fruits/blueberry-tree.JPG", alt: "Blueberry tree" },

  // Lemons
  { src: "/fruits/lemons.JPG", alt: "Fresh lemons" },
  { src: "/fruits/lemon-zoom.JPG", alt: "Lemon close-up" },

  // Strawberries
  { src: "/fruits/strawberries.JPG", alt: "Fresh strawberries" },
  { src: "/fruits/strawstand.JPG", alt: "Strawberry stand" },
  { src: "/fruits/starwberry-stand.JPG", alt: "Strawberry stand" },
  { src: "/fruits/starberry-stand-zoom.JPG", alt: "Strawberry stand close-up" },
  { src: "/fruits/strawberries-super-zoomed.JPG", alt: "Strawberry plant" },
];

export default function FruitGalleryPage() {
  return (
    <main
      className="min-h-screen px-20
    bg-[linear-gradient(to_bottom,_#6DB86B_0%,_#569255_50%,_#305230_95%,_#422323_100%)] text-white"
    >
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
                priority={index < 6}
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
