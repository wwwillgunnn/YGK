import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";

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
    <section className="w-full px-6">
      <header className="mb-12 text-center">
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4">
          Fruit Gallery
        </h1>
        <p className="text-xs md:text-sm lg:text-lg text-neutral-200">
          Sweet, fresh, and simple. A little collection of seasonal fruit and
          the places you find it.
        </p>
      </header>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {fruits.map((fruit, index) => (
          <Dialog key={`${fruit.src}-${index}`}>
            {/* Thumbnail */}
            <DialogTrigger asChild>
              <button className="relative aspect-square overflow-hidden rounded-2xl focus:outline-none focus:ring-2 focus:ring-white/60">
                <Image
                  src={fruit.src}
                  alt={fruit.alt}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                  priority={index < 8}
                />
              </button>
            </DialogTrigger>

            {/* Modal */}
            <DialogContent className="w-auto max-w-[95vw] p-0 bg-transparent border-none shadow-none">
              <div className="relative">
                <Image
                  src={fruit.src}
                  alt={fruit.alt}
                  width={900}
                  height={1200}
                  className="h-auto w-auto max-h-[90vh] max-w-[95vw] object-contain rounded-2xl"
                  priority
                />

                {/* Floating Title */}
                <div className="absolute top-4 left-4">
                  <div className="bg-black/50 backdrop-blur-lg px-5 py-2 rounded-2xl shadow-lg">
                    <DialogTitle className="text-sm md:text-base font-medium text-white">
                      {fruit.alt}
                    </DialogTitle>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </section>
  );
}
