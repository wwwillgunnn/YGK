import Card from "@/components/Card";

export default function gallery() {
  return (
    <div className="flex flex-wrap flex-col lg:flex-row gap-20 px-10 lg:px-20 pb-10">
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
