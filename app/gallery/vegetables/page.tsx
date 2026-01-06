import Image from "next/image";
import Navbar from "@/components/Navbar";

const vegetables = [
  { src: "/vegetables/baby-tomato.JPEG", alt: "Baby tomatoes" },
  {
    src: "/vegetables/basket-of-veggies.JPG",
    alt: "Basket of fresh vegetables",
  },
  { src: "/vegetables/beans.JPG", alt: "Fresh beans" },
  { src: "/vegetables/big-green.JPG", alt: "Big green vegetables" },
  { src: "/vegetables/bigchilli.JPG", alt: "Large chilli" },
  { src: "/vegetables/cali.JPG", alt: "Garden produce (cali)" },
  { src: "/vegetables/capcicun.JPG", alt: "Capsicum" },
  { src: "/vegetables/cauliflower.JPG", alt: "Cauliflower" },
  { src: "/vegetables/chilli-basket.JPG", alt: "Basket of chillies" },
  { src: "/vegetables/chilli.JPG", alt: "Chilli" },
  { src: "/vegetables/dried-chilli.JPG", alt: "Dried chillies" },
  { src: "/vegetables/giner.JPG", alt: "Ginger" },
  { src: "/vegetables/ginger.JPEG", alt: "Ginger roots" },
  { src: "/vegetables/gingerrr.JPG", alt: "Ginger (close-up)" },
  { src: "/vegetables/green-stuff.JPG", alt: "Fresh green produce" },
  { src: "/vegetables/hella-chilli.JPG", alt: "Lots of chillies" },
  { src: "/vegetables/jit.JPG", alt: "Garden produce (jit)" },
  { src: "/vegetables/maybe.JPG", alt: "Garden produce (maybe)" },
  { src: "/vegetables/maybeee.JPG", alt: "Garden produce (maybeee)" },
  { src: "/vegetables/onions.JPG", alt: "Onions" },
  { src: "/vegetables/potatoes.JPG", alt: "Potatoes" },
  { src: "/vegetables/pumpkin.JPG", alt: "Pumpkin" },
  { src: "/vegetables/sweet-potato.JPG", alt: "Sweet potato" },
  { src: "/vegetables/tomato-stack.JPG", alt: "Stack of tomatoes" },
  { src: "/vegetables/tomato.JPG", alt: "Tomato" },
  { src: "/vegetables/veggies.JPG", alt: "Fresh vegetables" },
];

export default function VegetableGalleryPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(to_bottom,_#6DB86B_0%,_#569255_50%,_#305230_95%,_#422323_100%)] text-white">
      <Navbar />

      <section className="max-w-7xl mx-auto px-6 py-16">
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-bold mb-4">Vegetable Gallery</h1>
          <p className="text-neutral-200 max-w-2xl mx-auto">
            Fresh from the backyard garden. Seasonal, home-grown, and picked at
            peak flavour.
          </p>
        </header>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {vegetables.map((veg, index) => (
            <div
              key={`${veg.src}-${index}`}
              className="relative aspect-square overflow-hidden rounded-2xl bg-neutral-800"
            >
              <Image
                src={veg.src}
                alt={veg.alt}
                fill
                className="object-cover transition-transform duration-500 hover:scale-110"
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                priority={index < 8}
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
