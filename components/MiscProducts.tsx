import { miscProducts } from "@/data/misProducts";
import Image from "next/image";

export default function MiscProducts() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-10 py-16">
      <div className="mb-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold">Other goodies</h2>
        <p className="mt-2 text-white/80 max-w-2xl mx-auto">
          We also do custom orders, so if you have something in mind, just ask!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {miscProducts.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur overflow-hidden"
          >
            <div className="relative aspect-[4/3] bg-white/10">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>

            <div className="p-4">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-semibold">{item.title}</h3>
                {item.tag ? (
                  <span className="shrink-0 rounded-full bg-white/10 border border-white/15 px-2 py-0.5 text-xs text-white/90">
                    {item.tag}
                  </span>
                ) : null}
              </div>

              {item.description ? (
                <p className="mt-2 text-sm text-white/75">{item.description}</p>
              ) : null}

              {/* TODO: Send to contact page? */}
              {/* <button
                  type="button"
                  className="mt-4 w-full rounded-xl bg-white text-black font-semibold py-2 hover:bg-white/90 transition"
                >
                  Enquire
                </button> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
