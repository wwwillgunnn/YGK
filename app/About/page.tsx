import Navbar from "@/components/Navbar";

export default function about_us() {
  return (
    <main className="min-h-screen m-auto px-20 bg-[radial-gradient(circle,_#6DB86B,_#305230)]">
      <Navbar />
      <section className="flex flex-col lg:flex-row items-center justify-center gap-20 py-20 mx-10">
        {/* This image should probablly be an aspect ratio */}
        <figure>
          {/* TODO Put logo here */}
          <div className="bg-gray-300 w-[60vw] lg:w-[30vw] h-[70vh] border border-gray-700 rounded-md"></div>
        </figure>

        <figcaption>
          <h1 className="text-4xl lg:text-6xl font-bold text-center">
            About Us
          </h1>
          <br />
          <p className="mx-5 lg:mx-0 text-base lg:text-lg lg:max-w-[60ch] ">
            Welcome to Yaa&apos;s Garden Kitchen, where every jar of curry paste
            and freshly baked delight tells the story of our home garden. We
            believe in the power of fresh, homegrown ingredients to create
            flavors that nourish the soul and celebrate nature&apos;s bounty.{" "}
            <br />
            <br />
            Our journey began with a simple passion for growing our own herbs,
            spices, and vegetables. What started as a backyard hobby soon
            blossomed into a love for sharing the rich, vibrant flavors of our
            homemade curry pastes and baked goods with others. <br />
            <br />
            Each product we craft is a labor of love, made with ingredients
            handpicked from our garden at the peak of freshness. From the zest
            of our homegrown chilies to the aromatic notes of our hand-harvested
            herbs, every bite brings the taste of tradition, sustainability, and
            care. <br />
            <br />
            We&apos;re not just about food; we&apos;re about connecting people
            to the joy of homemade goodness. <br />
            <br />
            Thank you for letting us bring a piece of our garden to your table.
            🌿✨
          </p>
        </figcaption>
      </section>
    </main>
  );
}
