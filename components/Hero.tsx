"use client";

import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import Jar from "@/components/assets/Jar";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Hero() {
  const jarRef = useRef(null);
  const orchidOne = useRef<HTMLDivElement | null>(null);
  const orchidTwo = useRef<HTMLDivElement | null>(null);

  // TODO: Work on all screen sizes
  useLayoutEffect(() => {
    // Check if viewport is large enough
    const checkViewport = () => {
      if (window.innerWidth <= 1024) {
        // Disable scroll animations if viewport is not large enough
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // Kill all scroll triggers
        return false; // Don't proceed with animations
      }
      return true;
    };

    if (!checkViewport()) return; // Exit if viewport is small

    gsap.registerPlugin(ScrollTrigger);

    gsap.to(jarRef.current, {
      scale: 1.2,
      markers: false,
    });

    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: "#part1",
        start: "top-=100 bottom",
        end: "center-=50 center",
        scrub: true,
        markers: false,
        scroller: document.body,
      },
    });

    // Position in the middle of the feature section
    tl1.to(jarRef.current, {
      x: "-22vw",
      y: "120vh",
      rotation: 15,
      scale: 1,
    });

    tl1.to(
      orchidOne.current,
      {
        rotation: 90,
        ease: "none",
        transformOrigin: "50% 50%",
      },
      0,
    );

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#part2",
        start: "top bottom",
        end: "center center",
        scrub: true,
        markers: false,
        scroller: document.body,
      },
    });

    // position around other 3D objects
    tl2.to(jarRef.current, {
      x: "-22vw",
      y: "230vh",
      rotation: 0,
      scale: 1,
    });

    tl2.to(
      orchidTwo.current,
      {
        rotation: -90,
        ease: "none",
        transformOrigin: "50% 50%",
      },
      0,
    );
  }, []);

  return (
    <article className="min-h-[80vh] w-full" id="top-viewport">
      <Navbar />

      <section className="flex flex-col items-center justify-center mt-20 mx-10 -translate-y-20 translate-x-20 md:gap-10 lg:flex-row lg:mx-20 lg:mt-0">
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
              className="h-16 border-[#422323] bg-transparent border-2 hover:bg-[#422323] text-[#422323] hover:text-white"
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
          className="w-full h-[50vh] z-10 -translate-x-20 md:h-[70vh] lg:w-[40vw] lg:h-[100vh]"
          ref={jarRef}
        >
          <Jar />
        </figure>
      </section>

      {/* Orchid icon */}
      <div
        className="absolute top-[80%] -left-[400px] 10 opacity-10"
        ref={orchidOne}
      >
        <Image
          src="/brown-orchid-logo.svg"
          alt="YGK Logo"
          height={1000}
          width={1000}
        />
      </div>

      <div
        className="absolute translate-y-[1400px] -right-[400px] 10 opacity-10"
        ref={orchidTwo}
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
