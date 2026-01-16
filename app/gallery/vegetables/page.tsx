"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const vegetables = [
  // Tomatoes
  { src: "/vegetables/baby-tomato.JPEG", alt: "Baby tomatoes" },
  { src: "/vegetables/a-few-tomatoes.JPG", alt: "A few tomatoes" },
  { src: "/vegetables/box-of-tomatoes.JPG", alt: "Box of tomatoes" },
  { src: "/vegetables/bunch-of-tomatoes.JPG", alt: "Bunch of tomatoes" },
  {
    src: "/vegetables/long-tomatoes-basket.JPG",
    alt: "Long tomatoes in a basket",
  },
  { src: "/vegetables/many-many-tomatoes.JPG", alt: "Lots of tomatoes" },
  { src: "/vegetables/mini-tomaotes-basket.JPG", alt: "Mini tomatoes basket" },
  { src: "/vegetables/minitomatoesJPG.JPG", alt: "Mini tomatoes" },
  {
    src: "/vegetables/gorwing-tomatoes.JPG",
    alt: "Growing tomatoes on the vine",
  },
  { src: "/vegetables/green-tomatoes.JPG", alt: "Green tomatoes" },
  {
    src: "/vegetables/green-tomatoes-hey.JPG",
    alt: "Green tomatoes on the plant",
  },
  {
    src: "/vegetables/green-tomatoes-stake.JPG",
    alt: "Green tomatoes on a stake",
  },
  { src: "/vegetables/green-tomato-zoom.JPG", alt: "Green tomato close-up" },
  { src: "/vegetables/heavy-tomato.JPG", alt: "Heavy tomato" },
  { src: "/vegetables/tomato-basket.JPG", alt: "Tomato basket" },
  { src: "/vegetables/tomato-stack.JPG", alt: "Stack of tomatoes" },
  {
    src: "/vegetables/tomato-gradient.JPG",
    alt: "Tomatoes with a gradient of ripeness",
  },
  { src: "/vegetables/tomato-zoom.JPG", alt: "Tomato close-up" },
  { src: "/vegetables/tomato.JPG", alt: "Tomato" },
  { src: "/vegetables/jit1-jit2.JPG", alt: "Tomato like chilli" },
  { src: "/vegetables/lots-of-something.JPG", alt: "Lots of something" },

  // Chillies and capsicum
  { src: "/vegetables/big-red-jit.JPEG", alt: "Big red chilli" },
  { src: "/vegetables/hella-chilli.JPG", alt: "Lots of chillies" },
  { src: "/vegetables/green-chillis.JPG", alt: "Green chillies" },
  { src: "/vegetables/chilli.JPG", alt: "Chilli" },
  { src: "/vegetables/chilli-basket.JPG", alt: "Basket of chillies" },
  { src: "/vegetables/chilli-i-think.JPG", alt: "Chilli (close-up)" },
  { src: "/vegetables/chillies-i-think.JPG", alt: "Chillies" },
  { src: "/vegetables/dried-chilli.JPG", alt: "Dried chillies" },
  { src: "/vegetables/capcicun.JPG", alt: "Capsicum" },
  { src: "/vegetables/red-capcicun-4.JPG", alt: "Red capsicum" },

  // Beans
  { src: "/vegetables/beans.JPG", alt: "Fresh beans" },
  { src: "/vegetables/bean-basket.JPG", alt: "Basket of beans" },
  { src: "/vegetables/bunch-of-beans.JPG", alt: "Bunch of beans" },
  { src: "/vegetables/bean-plant.JPG", alt: "Bean plant" },
  { src: "/vegetables/bean-plant-fence.JPG", alt: "Bean plant on a fence" },

  // Greens and leafy things
  { src: "/vegetables/lettuce.JPG", alt: "Lettuce" },
  { src: "/vegetables/wall-of-green.JPG", alt: "Wall of green leaves" },
  { src: "/vegetables/big-green.JPG", alt: "Big green vegetables" },
  {
    src: "/vegetables/big-green-and-greeeeen.JPG",
    alt: "Big green and extra green",
  },
  { src: "/vegetables/greeeeeeen.JPG", alt: "Green produce" },
  { src: "/vegetables/green-jittleyangs.JPG", alt: "Green vegetables (long)" },
  { src: "/vegetables/green-thingy-zoom.JPG", alt: "Green leaves close-up" },
  { src: "/vegetables/more-green-thingy.JPG", alt: "More green produce" },
  { src: "/vegetables/green-stuff.JPG", alt: "Fresh green produce" },
  { src: "/vegetables/green-stuff-basket.JPG", alt: "Basket of green produce" },
  { src: "/vegetables/growing-red-stuff.JPG", alt: "Growing red produce" },
  { src: "/vegetables/red-thingy-zoom.JPG", alt: "Red produce close-up" },
  { src: "/vegetables/headshot-veggie.JPG", alt: "Veggie close-up" },
  { src: "/vegetables/a-plant-i-dont-know.JPG", alt: "Garden plant (unknown)" },

  // Cabbage and cauliflower
  { src: "/vegetables/cabbages.JPG", alt: "Cabbages" },
  { src: "/vegetables/cabbage-maybe.JPG", alt: "Cabbage" },
  { src: "/vegetables/cabbage-maybe-zoom.JPG", alt: "Cabbage close-up" },
  { src: "/vegetables/cauliflower.JPG", alt: "Cauliflower" },

  // Onions
  { src: "/vegetables/onions.JPG", alt: "Onions" },
  { src: "/vegetables/many-onions.JPG", alt: "Many onions" },
  { src: "/vegetables/onion-basket.JPG", alt: "Onions in a basket" },
  { src: "/vegetables/onions-hanged.JPG", alt: "Hanging onions" },
  { src: "/vegetables/onion-wheelbarrow.JPG", alt: "Onion collection" },

  // Potatoes and roots
  { src: "/vegetables/potatoes.JPG", alt: "Potatoes" },
  { src: "/vegetables/many-potatoes.JPG", alt: "Many potatoes" },
  { src: "/vegetables/sweet-potato.JPG", alt: "Sweet potato" },
  { src: "/vegetables/purple-potatoes.JPG", alt: "Purple potatoes" },
  { src: "/vegetables/cut-purple-potato.JPG", alt: "Cut purple potato" },

  // Ginger and turmeric
  { src: "/vegetables/giner.JPG", alt: "Ginger" },
  { src: "/vegetables/ginger.JPEG", alt: "Ginger roots" },
  { src: "/vegetables/ginger-zoom.JPG", alt: "Ginger close-up" },
  { src: "/vegetables/big-ginger.JPG", alt: "Big ginger" },
  { src: "/vegetables/tumeric.JPG", alt: "Lots of turmeric" },

  // Pumpkins
  { src: "/vegetables/pumpkin.JPG", alt: "Pumpkin" },
  { src: "/vegetables/pumpkin-zoom.JPG", alt: "Pumpkin close-up" },
  { src: "/vegetables/pumpkin-solo.JPG", alt: "Single pumpkin" },
  { src: "/vegetables/many-pumpkins.JPG", alt: "Many pumpkins" },
  { src: "/vegetables/willspumpkins.JPEG", alt: "Pumpkins" },

  // Baskets and mixed shots
  { src: "/vegetables/baby-veggies.JPG", alt: "Baby vegetables" },
  {
    src: "/vegetables/basket-of-veggies.JPG",
    alt: "Basket of fresh vegetables",
  },
  {
    src: "/vegetables/beautiful-basket.JPG",
    alt: "Beautiful basket of vegetables",
  },
  {
    src: "/vegetables/beautiful-basket2.JPG",
    alt: "Beautiful basket of vegetables (second shot)",
  },
  { src: "/vegetables/veggies.JPG", alt: "Fresh vegetables" },

  // Misc
  { src: "/vegetables/2-little-jits.JPG", alt: "Two little veggies" },
  { src: "/vegetables/jit.JPG", alt: "Garden produce (jit)" },
  { src: "/vegetables/cali.JPG", alt: "Garden produce (cali)" },
  { src: "/vegetables/maybe.JPG", alt: "Garden produce (maybe)" },
  { src: "/vegetables/maybeee.JPG", alt: "Garden produce (maybeee)" },
];

export default function VegetableGalleryPage() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<{ src: string; alt: string } | null>(
    null
  );

  const onPick = (veg: { src: string; alt: string }) => {
    setSelected(veg);
    setOpen(true);
  };

  return (
    <main
      className="min-h-screen px-20
    bg-[linear-gradient(to_bottom,_#6DB86B_0%,_#569255_50%,_#305230_95%,_#422323_100%)] text-white"
    >
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
            <button
              key={`${veg.src}-${index}`}
              type="button"
              onClick={() => onPick(veg)}
              className="relative aspect-square overflow-hidden rounded-2xl bg-neutral-800 text-left focus:outline-none focus:ring-2 focus:ring-white/60"
              aria-label={`Open ${veg.alt}`}
            >
              <Image
                src={veg.src}
                alt={veg.alt}
                fill
                className="object-cover transition-transform duration-500 hover:scale-110"
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                priority={index < 8}
              />
            </button>
          ))}
        </div>
      </section>

      <Dialog
        open={open}
        onOpenChange={(v) => {
          setOpen(v);
          if (!v) setSelected(null);
        }}
      >
        <DialogContent className="max-w-5xl border-white/10 bg-neutral-950 text-white">
          <DialogHeader>
            <DialogTitle className="text-base sm:text-lg">
              {selected?.alt ?? "Photo"}
            </DialogTitle>
          </DialogHeader>

          <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] overflow-hidden rounded-xl bg-black/40">
            {selected ? (
              <Image
                src={selected.src}
                alt={selected.alt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 95vw, 1000px"
                priority
              />
            ) : null}
          </div>
        </DialogContent>
      </Dialog>
    </main>
  );
}
