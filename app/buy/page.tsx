import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Counter from "@/components/ui/Counter";

export default function buy() {
  return (
    <main className="pb-20">
      <Navbar />

      <section className="flex flex-col lg:flex-row items-center justify-center gap-20 my-20 mx-20">
        {/* TODO THIS SHOULD BE A carousel OF REAL PHOTOS OF THE PRODUCT */}
        {/* maybe implement aspect ratio sizing here? */}
        <figure className="bg-gray-300 w-[60vw] lg:w-[35vw] h-[60vh] lg:h-[70vh]">
          {/* Insert images */}
        </figure>

        <figcaption className="mr-20">
          <h1 className="text-6xl font-bold">Curry Paste</h1>
          <p className="text-base max-w-[70ch]">
            Transform your meals with our rich and aromatic curry paste, crafted
            to bring authentic flavors to your kitchen. Made with a perfect
            blend of fresh ingredients, including fragrant lemongrass, zesty
            lime leaves, fiery chili, aromatic garlic, ginger, and a medley of
            spices, this curry paste delivers a balance of bold and savory
            notes. <br />
            <br />
            Expect a robust flavor profile that combines a hint of sweetness, a
            touch of heat, and an umami depth that elevates any dish. Whether
            you&apos;re making a creamy coconut curry, a spicy stir-fry, or
            marinating your favorite proteins, this curry paste is your go-to
            for an unforgettable culinary experience. <br />
            <br />
            Available Sizes:
            <br />
            - Small Jar (200g) – Perfect for trying out new recipes or serving
            3-4 meals. $7.99 <br />
            - Family Jar (500g) – Ideal for curry enthusiasts and meal preppers,
            serving up to 10 meals. $15.99 <br />
            <br />
            Bring the essence of authentic cuisine to your table and savor the
            delicious difference!
          </p>
          <div className="flex gap-4">
            {/* should be able to toggle on these buttons to influence the price */}
            <Button variant="outline">Small</Button>
            <Button variant="outline">Large</Button>
          </div>
          <div className="flex gap-4">
            <Counter />
            <Button>Buy Now</Button>
          </div>
          <p className="text-sm mt-5">*10% off for purchases over $100</p>
        </figcaption>
      </section>
    </main>
  );
}
