import Image from "next/image";
import Navbar from "@/components/Navbar";

const flowers = [
  // Bonus visitor
  { src: "/flowers/birdie.JPG", alt: "Little bird in the garden" },

  // Orchids
  { src: "/flowers/amazing-orchid.JPG", alt: "Orchid bloom close-up" },
  { src: "/flowers/orchids-inside.JPG", alt: "Orchids inside the house" },
  { src: "/flowers/orcids-pink-white.JPG", alt: "Pink and white orchids" },
  { src: "/flowers/pink-orchid.JPG", alt: "Pink orchid" },
  { src: "/flowers/pink-orchid-zoom.JPG", alt: "Pink orchid close-up" },
  { src: "/flowers/white-orchid-mini.JPG", alt: "Small white orchid" },
  { src: "/flowers/yellow-orchid.JPEG", alt: "Yellow orchid" },

  // Roses
  { src: "/flowers/rose.JPG", alt: "Rose" },
  { src: "/flowers/whiteroses.JPG", alt: "White roses" },
  { src: "/flowers/pink-rose.JPG", alt: "Pink rose" },
  { src: "/flowers/pink-roses-zoom.JPG", alt: "Pink roses close-up" },
  { src: "/flowers/pink-white-roses.JPG", alt: "Pink and white roses" },
  { src: "/flowers/yellow-rose.JPG", alt: "Yellow rose" },
  { src: "/flowers/yellow-roses.JPG", alt: "Yellow roses" },

  // Single flowers and close-ups
  { src: "/flowers/pink-flower.JPG", alt: "Pink flower" },
  { src: "/flowers/pink-flower-zoom.JPG", alt: "Pink flower close-up" },
  { src: "/flowers/pink-flower-small.JPG", alt: "Small pink flower" },
  { src: "/flowers/purple-flower.JPG", alt: "Purple flower" },
  { src: "/flowers/white-purple-flower.JPG", alt: "White and purple flower" },
  { src: "/flowers/white-flower.JPG", alt: "White flower" },
  { src: "/flowers/red-flower.JPG", alt: "Red flower" },
  { src: "/flowers/red-flower-small.JPG", alt: "Small red flower" },
  { src: "/flowers/yellow-flower.JPG", alt: "Yellow flower" },
  { src: "/flowers/yellow-flower-zoom.JPG", alt: "Yellow flower close-up" },
  { src: "/flowers/sunflower.JPG", alt: "Sunflower" },
  { src: "/flowers/reallycool-flower.JPG", alt: "Flower close-up" },
  { src: "/flowers/random-flower.JPG", alt: "Flower close-up" },

  // Bunches and scenes
  { src: "/flowers/many-flowers.JPG", alt: "Many flowers together" },
  { src: "/flowers/pinknwhiteflowers.JPG", alt: "Pink and white flowers" },
  { src: "/flowers/pnwr.JPG", alt: "Pink and white roses" },
  { src: "/flowers/summerpwr.JPG", alt: "Summer flowers" },
  { src: "/flowers/small-flower-pot.JPG", alt: "Small flower pot" },
];

export default function FlowerGalleryPage() {
  return (
    <main
      className="min-h-screen px-20
    bg-[linear-gradient(to_bottom,_#6DB86B_0%,_#569255_50%,_#305230_95%,_#422323_100%)] text-white"
    >
      <Navbar />

      <section className="max-w-7xl mx-auto px-6 md:px-20 py-16">
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
