"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import Jar from "@/components/assets/Jar";
import Navbar from "@/components/Navbar";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const jarRef = useRef<HTMLDivElement | null>(null);
  const orchidOne = useRef<HTMLDivElement | null>(null);
  const orchidTwo = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        // Initial state
        gsap.set(jarRef.current, { scale: 1.2 });

        const createTimeline = (
          trigger: string,
          jarAnim: gsap.TweenVars,
          orchid: HTMLDivElement | null,
          rotation: number,
        ) => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger,
              start: "top bottom",
              end: "center center",
              scrub: true,
            },
          });

          tl.to(jarRef.current, jarAnim);

          if (orchid) {
            tl.to(
              orchid,
              {
                rotation,
                ease: "none",
                transformOrigin: "50% 50%",
              },
              0,
            );
          }
        };

        createTimeline(
          "#part1",
          {
            x: "-22vw",
            y: "120vh",
            rotation: 15,
            scale: 1,
          },
          orchidOne.current,
          90,
        );

        createTimeline(
          "#part2",
          {
            x: "-22vw",
            y: "230vh",
            rotation: 0,
            scale: 1,
          },
          orchidTwo.current,
          -90,
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <article className="min-h-[80vh] w-full" id="top-viewport">
      <Navbar />

      <section className="flex flex-col gap-10 items-center justify-center mt-20 mx-10 -translate-y-20 lg:flex-row lg:mx-20 lg:mt-0 lg:-translate-y-20 lg:translate-x-20">
        <aside className="flex flex-col gap-8 text-center lg:p-10 lg:text-left">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl md:text-4xl lg:text-6xl 2xl:text-7xl font-bold">
              <span className="text-[#422323]">Fresh</span> Curry Paste <br />
              Made With <span className="text-[#422323]">Love</span>
            </h1>
            <p className="text-sm md:text-base lg:text-lg md:w-[50ch] lg:w-[48ch]">
              At Yaa&apos;s Garden Kitchen, we grow the freshest produce and use
              it to create our delicious products. Taste the difference today!
            </p>
          </div>

          <div className="flex gap-4 items-center justify-center lg:justify-start">
            <Button
              variant="outline"
              size="lg"
              className="h-16 border-[#422323] border-2 bg-transparent hover:bg-[#422323] text-[#422323] hover:text-white"
            >
              Learn More
            </Button>

            <Button
              variant="default"
              size="lg"
              className="h-16 bg-[#422323] hover:bg-[#311818]"
            >
              Buy Now
            </Button>
          </div>
        </aside>

        <figure
          ref={jarRef}
          className="w-full h-[50vh] z-10 md:h-[70vh] lg:w-[40vw] lg:h-screen lg:-translate-x-20"
        >
          <Jar />
        </figure>
      </section>

      <div ref={orchidOne} className="absolute top-[80%] -left-100 opacity-10">
        <Image
          src="/brown-orchid-logo.svg"
          alt="YGK Logo"
          height={1000}
          width={1000}
        />
      </div>

      <div
        ref={orchidTwo}
        className="absolute translate-y-[350%] -right-100 opacity-10"
      >
        <Image
          src="/brown-orchid-logo.svg"
          alt="YGK Logo"
          height={1000}
          width={1000}
        />
      </div>
    </article>
  );
}
