import Card from "@/components/Card";

export default function gallery() {
  return (
    <div className="flex flex-wrap flex-col gap-5 px-10 pb-10 lg:gap-20 lg:flex-row lg:px-20">
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
    </div>
  );
}
