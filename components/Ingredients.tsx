"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Ingredients() {
  // TODO: green background should slide in and take up half the width of the screen
  gsap.registerPlugin(ScrollTrigger);

  gsap
  .timeline({
    scrollTrigger: {
      trigger: "#part2",
      start: "top bottom",
      end: "center center",
      scrub: true,
      markers: true,
    },
  })
  .to('.bar', {
    width: 40,
    duration: 0.2,
    ease: "none"
  });

  return (
    <aside className="pt-20 ml-[50vw] h-[80vh] w-[50vw] flex flex-col gap-10 bg-[#6DB86B] bar" id="part2">
        <ul>
            <li className="lg:text-5xl">Ingredient</li>
            <li className="lg:text-5xl">Ingredient</li>
            <li className="lg:text-5xl">Ingredient</li>
            <li className="lg:text-5xl">Ingredient</li>
            <li className="lg:text-5xl">Ingredient</li>
            <li className="lg:text-5xl">Ingredient</li>
        </ul>
        <i className="w-[65ch]">Experience the rich flavors and superior nutritional value of our curry 
            paste made from fresh, locally-grown produce. Our commitment to 
            using only the freshest ingredients ensures that every spoonful of our curry paste is bursting with vibrant taste and wholesome 
            goodness.
        </i>
    </aside>
  )
}
