import ProductPreview from "./ProductPreview";

export default function OtherProducts() {
  return (
    <div className="min-h-[70vh] mt-20">
        <div className="text-center pb-20">
            <h1 className="text-3xl md:text-4xl lg:text-7xl font-bold">Other Products</h1>
            <p className="text-lg pt-4">Enjoy our fantastic curry paste with other things on the side</p>
        </div>

        <div className="flex flex-row gap-10">
            <ProductPreview
                name="Chilli Paste"
                weight="50ml"
                price="$20"
            />
            <ProductPreview
                name="Sour Dough"
                weight="100g"
                price="$20"
            />
            <ProductPreview
                name="Pumpkin Bread"
                weight="100g"
                price="$20"
            />
            <ProductPreview
                name="Jollof Rice"
                weight="1kg"
                price="$40"
            />
        </div>
    </div>
  )
}
