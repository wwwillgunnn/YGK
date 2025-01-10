import Card from "@/components/Card";
import Navbar from "@/components/Navbar";

export default function gallery() {
  return (
    <main>
      <Navbar/>
      <section className="flex flex-col lg:flex-row items-center justify-center gap-20 pb-10 my-20 mx-10">
        <Card name="Fruit" link="gallery/fruit" />
        <Card name="Flowers" link="gallery/flowers" />
        <Card name="Vegetables" link="gallery/vegetables" />
      </section>
    </main>
  )
}
