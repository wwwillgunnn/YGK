"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Ingredients() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    ScrollTrigger.matchMedia({
      // For larger screens (desktop)
      "(min-width: 1280px)": () => {
        gsap.timeline({
          scrollTrigger: {
            trigger: "#part2",
            start: "30% bottom",
            end: "80% bottom",
            scrub: true,
            markers: false,
          },
        })
          .fromTo(
            "#part2",
            {
              x: "100%", // Start off-screen to the right
              width: "100%", // Initially full width
            },
            {
              x: "50%", // Move to the left to take half the screen
              width: "50%", // Shrink width to 50%
              ease: "power3.out",
              duration: 2,
            }
          )
          .fromTo(
            ".ingredient",
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              stagger: 0.2,
              ease: "power3.out",
            },
            "-=0.5"
          );
      },

      // For smaller screens (phones/tablets)
      "(max-width: 1279px)": () => {
        gsap.timeline({
          scrollTrigger: {
            trigger: "#part2",
            start: "30% bottom",
            end: "80% bottom",
            scrub: true,
            markers: false,
          },
        })
          .fromTo(
            "#part2",
            {
              x: "100%", // Start off-screen to the right
              width: "100%", // Initially full width
            },
            {
              x: "0%", // Stay full width
              width: "100%", // Maintain full width
              ease: "power3.out",
              duration: 2,
            }
          )
          .fromTo(
            ".ingredient",
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              stagger: 0.2,
              ease: "power3.out",
            },
            "-=0.5"
          );
      },
    });

    // Cleanup on component unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <aside
      className="pt-20 h-[100vh] flex flex-col gap-10 bg-[#6DB86B] bar"
      id="part2"
    >
      <div className="ml-10">
        <ul className="gap-5">
          <li className="ingredient text-3xl lg:text-5xl m-5">Ingredient</li>
          <li className="ingredient text-3xl lg:text-5xl m-5">Ingredient</li>
          <li className="ingredient text-3xl lg:text-5xl m-5">Ingredient</li>
          <li className="ingredient text-3xl lg:text-5xl m-5">Ingredient</li>
          <li className="ingredient text-3xl lg:text-5xl m-5">Ingredient</li>
          <li className="ingredient text-3xl lg:text-5xl m-5">Ingredient</li>
        </ul>
        <div className="mt-20 mx-5">
          <i>
            Experience the rich flavors and superior nutritional value of our
            curry paste made from fresh, locally-grown produce. Our commitment
            to using only the freshest ingredients ensures that every spoonful
            of our curry paste is bursting with vibrant taste and wholesome
            goodness.
          </i>
        </div>
      </div>
    </aside>
  );
}
