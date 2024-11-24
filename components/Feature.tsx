// TODO: add icons for each thing
// TODO: have everything fade in from bottom to top

export default function Feature() {
  return (
    <article className="flex flex-col gap-20 items-center justify-center text-center" id="part1">
      <section className="flex flex-col gap-2 w-[65ch]">
        <h1 className="lg:text-5xl">Delicious Curry Paste Made With Freshly Grown Produce</h1>
        <p className="lg:text-xl">At Yaa's Garden, we take pride in growing our own fresh produce and using it to create handmade curry paste. Our small local business is dedicated to providing you with the highest quality ingredients and flavours.</p>
      </section>
      {/* Benefits */}
      <section className="pt-10 flex flex-row gap-[500px]">
        <aside className="flex flex-col gap-[240px] w-[30ch]">
          <figure className="flex flex-col gap-5">
            {/* <img src="" alt="" /> */}
            <figcaption>
              <p className="font-bold">Freshly Grown Produce</p>
              <p>We grow our own produce, ensuring the freshest ingredients for our curry paste.</p>
            </figcaption>
          </figure>

          <figure className="flex flex-col gap-5">
            {/* <img src="" alt="" /> */}
            <figcaption>
              <p className="font-bold">Handmade Curry Paste</p>
              <p>Our curry paste is made with care and expertise, resulting in rich and authentic flavors.</p>
            </figcaption>
          </figure>
        </aside>
      
        <aside className="flex flex-col gap-[240px] w-[30ch]">
          <figure className="flex flex-col gap-5">
            {/* <img src="" alt="" /> */}
            <figcaption>
              <p className="font-bold">Small Local Business</p>
              <p>Support a local business and enjoy the taste of homemade curry paste.</p>
            </figcaption>
          </figure>

          <figure className="flex flex-col gap-5">
            {/* <img src="" alt="" /> */}
            <figcaption>
              <p className="font-bold">Exquisite Taste</p>
              <p>Experience the difference of using fresh ingredients in your cooking.</p>
            </figcaption>
          </figure>
        </aside>
      </section>

    </article>
  )
}
