"use client";

import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaLeaf,
  FaHandHoldingHeart,
  FaStore,
  FaUtensils,
} from "react-icons/fa";
import Benefit from "@/components/Benefit";

export default function Feature() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>("[data-animate]");

      // start state
      gsap.set(items, { opacity: 0, y: 24 });

      gsap.to(items, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const columnStyles =
    "flex flex-col gap-10 lg:gap-28 2xl:gap-[240px] w-[30ch]";

  return (
    <article
      className="min-h-[80vh] flex flex-col gap-20 items-center justify-center text-center mx-10 mb-16"
      id="part1"
      ref={sectionRef}
    >
      <section className="flex flex-col gap-2 max-w-screen-lg">
        <h1 data-animate className="text-xl md:text-2xl lg:text-5xl font-bold">
          Delicious Curry Paste Made With <br />
          <span style={{ color: "#422323" }}>Freshly Grown Produce</span>
        </h1>

        <p data-animate className="text-base lg:text-xl">
          At Yaa's Garden, we take pride in growing our own fresh produce and
          using it to create handmade curry paste. Our small local business is
          dedicated to providing you with the highest quality ingredients and
          flavours.
        </p>
      </section>

      <section className="pt-0 lg:pt-5 flex flex-col lg:flex-row gap-10 lg:gap-[500px]">
        <aside className={columnStyles}>
          <div data-animate>
            <Benefit
              title="Freshly Grown Produce"
              description="We grow our own produce, ensuring the freshest ingredients for our curry paste."
              Icon={FaLeaf}
            />
          </div>

          <div data-animate>
            <Benefit
              title="Handmade Curry Paste"
              description="Our curry paste is made with care and expertise, resulting in rich and authentic flavors."
              Icon={FaHandHoldingHeart}
            />
          </div>
        </aside>

        <aside className={columnStyles}>
          <div data-animate>
            <Benefit
              title="Small Local Business"
              description="Support a local business and enjoy the taste of homemade curry paste."
              Icon={FaStore}
            />
          </div>

          <div data-animate>
            <Benefit
              title="Exquisite Taste"
              description="Experience the difference of using fresh ingredients in your cooking."
              Icon={FaUtensils}
            />
          </div>
        </aside>
      </section>
    </article>
  );
}
