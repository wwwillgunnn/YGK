"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { FaLeaf, FaHandHoldingHeart, FaStore, FaUtensils } from "react-icons/fa"; // Example of icon import
import Benefit from "@/components/Benefit";

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

  const columnStyles = "flex flex-col gap-10 lg:gap-[240px] w-[30ch]";

  return (
    <article
      className="flex flex-col gap-20 items-center justify-center text-center mx-10"
      id="part1"
      ref={sectionRef}
    >
      {/* TODO Change section to fade in stagger */}
      <section className="flex flex-col gap-2 max-w-[65ch]">
        <h1 className="text-xl md:text-2xl lg:text-5xl font-bold">
          Delicious Curry Paste Made With Freshly Grown Produce
        </h1>
        <p className="text-base lg:text-xl">
          At Yaa's Garden, we take pride in growing our own fresh produce and using it to create handmade curry paste. 
          Our small local business is dedicated to providing you with the highest quality ingredients and flavours.
        </p>
      </section>

      {/* Benefits Section */}
      <section className="pt-0 lg:pt-5 flex flex-col lg:flex-row gap-10 lg:gap-[500px]">
        {/* First Column with Benefits */}
        <aside className={columnStyles}>
          <Benefit 
            title="Freshly Grown Produce" 
            description="We grow our own produce, ensuring the freshest ingredients for our curry paste." 
            Icon={FaLeaf} 
          />

          <Benefit 
            title="Handmade Curry Paste" 
            description="Our curry paste is made with care and expertise, resulting in rich and authentic flavors." 
            Icon={FaHandHoldingHeart} 
          />
        </aside>

        {/* Second Column with Benefits */}
        <aside className={columnStyles}>
        <Benefit 
            title="Small Local Business" 
            description="Support a local business and enjoy the taste of homemade curry paste." 
            Icon={FaStore} 
          />

        <Benefit 
            title="Exquisite Taste" 
            description="Experience the difference of using fresh ingredients in your cooking." 
            Icon={FaUtensils} 
          />
        </aside>
      </section>
    </article>
  );
}
