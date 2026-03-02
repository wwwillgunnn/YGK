import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";

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
    <section className="w-full px-6">
      <header className="mb-12 text-center">
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4">
          Flower Gallery
        </h1>
        <p className="text-xs md:text-sm lg:text-lg text-neutral-200">
          A little wall of colour from the garden. Flowers, light, and a bonus
          visitor.
        </p>
      </header>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {flowers.map((flower, index) => (
          <Dialog key={`${flower.src}-${index}`}>
            {/* Thumbnail */}
            <DialogTrigger asChild>
              <button className="relative aspect-square overflow-hidden rounded-2xl focus:outline-none focus:ring-2 focus:ring-white/60">
                <Image
                  src={flower.src}
                  alt={flower.alt}
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
                  src={flower.src}
                  alt={flower.alt}
                  width={900}
                  height={1200}
                  className="h-auto w-auto max-h-[90vh] max-w-[95vw] object-contain rounded-2xl"
                  priority
                />

                {/* Floating Title */}
                <div className="absolute top-4 left-4">
                  <div className="bg-black/50 backdrop-blur-lg px-5 py-2 rounded-2xl shadow-lg">
                    <DialogTitle className="text-sm md:text-base font-medium text-white">
                      {flower.alt}
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
