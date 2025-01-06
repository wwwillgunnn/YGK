"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { FaLeaf, FaHandHoldingHeart, FaStore, FaUtensils } from "react-icons/fa"; // Example of icon import

export default function Feature() {
  const sectionRef = useRef(null);
// TODO: MAKE ANIMATION ACTUALLY WORK
  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 }, // Start off-screen and invisible
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out" } // Fade in from bottom to top
    );
  }, []);

  return (
    <article
      className="flex flex-col gap-20 items-center justify-center text-center"
      id="part1"
      ref={sectionRef}
    >
      {/* Section with headline and description */}
      <section className="flex flex-col gap-2 w-[65ch]">
        <h1 className="text-2xl lg:text-5xl font-bold">
          Delicious Curry Paste Made With Freshly Grown Produce
        </h1>
        <p className="text-base lg:text-xl">
          At Yaa's Garden, we take pride in growing our own fresh produce and using it to create handmade curry paste. Our small local business is dedicated to providing you with the highest quality ingredients and flavours.
        </p>
      </section>

      {/* Benefits Section */}
      <section className="pt-0 lg:pt-5 flex flex-col lg:flex-row gap-10 lg:gap-[500px]">
        {/* First Column with Benefits */}
        <aside className="flex flex-col gap-10 lg:gap-[240px] w-[30ch]">
          <figure className="flex flex-col gap-5 items-center">
            <FaLeaf className="text-4xl text-white" />
            <figcaption>
              <p className="font-bold">Freshly Grown Produce</p>
              <p>We grow our own produce, ensuring the freshest ingredients for our curry paste.</p>
            </figcaption>
          </figure>

          <figure className="flex flex-col gap-5 items-center">
            <FaHandHoldingHeart className="text-4xl text-white" />
            <figcaption>
              <p className="font-bold">Handmade Curry Paste</p>
              <p>Our curry paste is made with care and expertise, resulting in rich and authentic flavors.</p>
            </figcaption>
          </figure>
        </aside>

        {/* Second Column with Benefits */}
        <aside className="flex flex-col gap-10 lg:gap-[240px] w-[30ch]">
          <figure className="flex flex-col gap-5 items-center">
            <FaStore className="text-4xl text-white" />
            <figcaption>
              <p className="font-bold">Small Local Business</p>
              <p>Support a local business and enjoy the taste of homemade curry paste.</p>
            </figcaption>
          </figure>

          <figure className="flex flex-col gap-5 items-center">
            <FaUtensils className="text-4xl text-white" />
            <figcaption>
              <p className="font-bold">Exquisite Taste</p>
              <p>Experience the difference of using fresh ingredients in your cooking.</p>
            </figcaption>
          </figure>
        </aside>
      </section>
    </article>
  );
}
