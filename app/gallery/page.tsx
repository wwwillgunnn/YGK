// app/gallery/page.tsx (or wherever this page lives)
import Card from "@/components/Card";
import Navbar from "@/components/Navbar";

export default function gallery() {
  return (
    <main className="min-h-screen m-auto px-20 bg-[radial-gradient(circle,_#6DB86B,_#305230)]">
      <Navbar />
      <section className="flex flex-col lg:flex-row items-center justify-center gap-20 pb-10 my-20 mx-10">
        <Card
          name="Fruit"
          link="gallery/fruit"
          images={[
            "/fruits/blueberries2.JPG",
            "/fruits/strawberries.JPG",
            "/fruits/strawstand.JPG",
            "/fruits/strawberries.JPG",
          ]}
        />
        <Card
          name="Flowers"
          link="gallery/flowers"
          images={[
            "/flowers/pink-flower.JPG",
            "/flowers/purple-flower.JPG",
            "/flowers/white-flower.JPG",
            "/flowers/sunflower.JPG",
          ]}
        />
        <Card
          name="Vegetables"
          link="gallery/vegetables"
          images={[
            "/vegetables/basket-of-veggies.JPG",
            "/vegetables/tomato-stack.JPG",
            "/vegetables/capcicun.JPG",
            "/vegetables/cauliflower.JPG",
          ]}
        />
      </section>
    </main>
  );
}
