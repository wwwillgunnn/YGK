import Image from "next/image";
import Navbar from "@/components/Navbar";

const flowers = [
  { src: "/flowers/birdie.JPG", alt: "Little bird in the garden" },
  { src: "/flowers/pink-flower.JPG", alt: "Pink flower" },
  { src: "/flowers/pink-orchid.JPG", alt: "Pink orchid" },
  { src: "/flowers/purple-flower.JPG", alt: "Purple flower" },
  { src: "/flowers/random-flower.JPG", alt: "Flower close-up" },
  { src: "/flowers/red-flower.JPG", alt: "Red flower" },
  { src: "/flowers/sunflower.JPG", alt: "Sunflower" },
  { src: "/flowers/white-flower.JPG", alt: "White flower" },
  { src: "/flowers/yellow-flower.JPG", alt: "Yellow flower" },
];

export default function FlowerGalleryPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(to_bottom,_#6DB86B_0%,_#569255_50%,_#305230_95%,_#422323_100%)] text-white">
      <Navbar />

      <section className="max-w-7xl mx-auto px-6 py-16">
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-bold mb-4">Flower Gallery</h1>
          <p className="text-neutral-200 max-w-2xl mx-auto">
            A little wall of colour from the garden. Flowers, light, and a bonus
            visitor.
          </p>
        </header>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {flowers.map((flower, index) => (
            <div
              key={`${flower.src}-${index}`}
              className="relative aspect-square overflow-hidden rounded-2xl bg-neutral-800"
            >
              <Image
                src={flower.src}
                alt={flower.alt}
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
