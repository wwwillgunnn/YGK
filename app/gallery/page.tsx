import Card from "@/components/Card";
import Navbar from "@/components/Navbar";

export default function gallery() {
  return (
    <main className="min-h-screen m-auto px-20 bg-[radial-gradient(circle,_#6DB86B,_#305230)]">
      <Navbar />
      <section className="max-w-7xl flex flex-col lg:flex-row items-center justify-center gap-20 py-10 my-20 mx-10">
        <Card
          name="Fruit"
          link="gallery/fruit"
          images={[
            "/fruits/blueberries2.JPG",
            "/fruits/strawberries.JPG",
            "/fruits/lemon-zoom.JPG",
            "/fruits/starwberry-stand.JPG",
          ]}
        />
        <Card
          name="Flowers"
          link="gallery/flowers"
          images={[
            "/flowers/pink-flower.JPG",
            "/flowers/many-flowers.JPG",
            "/flowers/pink-white-roses.JPG",
            "/flowers/sunflower.JPG",
          ]}
        />
        <Card
          name="Vegetables"
          link="gallery/vegetables"
          images={[
            "/vegetables/basket-of-veggies.JPG",
            "/vegetables/wall-of-green.JPG",
            "/vegetables/hella-chilli.JPG",
            "/vegetables/cauliflower.JPG",
          ]}
        />
      </section>
    </main>
  );
}
