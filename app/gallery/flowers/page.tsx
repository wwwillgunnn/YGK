import Image from "next/image";
import Navbar from "@/components/Navbar";

// Replace these with your own images
const flowers = [
  { src: "/flowers/flower1.jpg", alt: "Pink flower" },
  { src: "/flowers/flower2.jpg", alt: "Yellow flower" },
  { src: "/flowers/flower3.jpg", alt: "Purple flower" },
  { src: "/flowers/flower4.jpg", alt: "White flower" },
  { src: "/flowers/flower5.jpg", alt: "Red flower" },
  { src: "/flowers/flower6.jpg", alt: "Orange flower" },
  { src: "/flowers/flower3.jpg", alt: "Purple flower" },
  { src: "/flowers/flower4.jpg", alt: "White flower" },
  { src: "/flowers/flower5.jpg", alt: "Red flower" },
  { src: "/flowers/flower6.jpg", alt: "Orange flower" },
];

export default function FlowerGalleryPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(to_bottom,_#6DB86B_0%,_#569255_50%,_#305230_95%,_#422323_100%)] text-white">
      <Navbar />

      <section className="max-w-7xl mx-auto px-6 py-16">
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-bold mb-4">Flower Gallery</h1>
          <p className="text-neutral-400 max-w-xl mx-auto">
            A wall of flowers — captured moments of colour, texture, and light.
          </p>
        </header>

        {/* Photo wall */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {flowers.map((flower, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden rounded-2xl bg-neutral-800"
            >
              <Image
                src={flower.src}
                alt={flower.alt}
                fill
                className="object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
