"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Jar from "@/components/assets/Jar";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

export default function Hero() {
  const jarRef = useRef(null);
  const orchidRef = useRef<HTMLDivElement | null>(null);
  const orchidRef2 = useRef<HTMLDivElement | null>(null);

  // TODO: Try to optimize this
  // TODO: get animations to work on screen sizes of 1279 and above
  useEffect(() => {
    // Function to check if viewport is large enough
    const checkViewport = () => {
      if (window.innerWidth <= 1024) {
        // Disable scroll animations if viewport is not large enough
        ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // Kill all scroll triggers
        return false; // Don't proceed with animations
      }
      return true;
    };

    // Register the ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    if (!checkViewport()) return; // Exit if viewport is small

    // Initial scale on jar
    gsap.to(jarRef.current, {
      scale: 1.2,
      markers: false,
    });

    const tl1 = gsap
      .timeline({
        scrollTrigger: {
          trigger: "#part1",
          start: "top-=100 bottom",
          end: "center-=50 center",
          scrub: true,
          markers: false,
          scroller: document.body
        },
      })
      tl1.to(jarRef.current, {
        x: "-20vw",
        y: "120vh",
        rotation: 15,
        scale: 1,
      });

      tl1.to(
        orchidRef.current,
        {
          rotation: 90,
          ease: "none",
          transformOrigin: "50% 50%",
        },
        0 // align with the same start of tl1
      );

    const tl2 = gsap
      .timeline({
        scrollTrigger: {
          trigger: "#part2",
          start: "top bottom",
          end: "center center",
          scrub: true,
          markers: false,
          scroller: document.body
        },
      })
      tl2.to(jarRef.current, {
        x: "-20vw",
        y: "220vh",
        rotation: 0,
        scale: 1,
      });

      tl2.to(
        orchidRef2.current,
        {
          rotation: -90,
          ease: "none",
          transformOrigin: "50% 50%",
        },
        0
      );

  }, []);

  return (
    <article className="min-h-[80vh] w-full" id="top-viewport">
      <header>
        <Navbar />
      </header>

      <section className="flex flex-col lg:flex-row items-center justify-center gap-10 mt-20 mx-10 lg:mx-20 lg:mt-0">
        <aside className="flex flex-col gap-6 lg:p-10 text-center lg:text-left -translate-y-10">
          <h1 className="text-3xl md:text-4xl lg:text-7xl font-bold">
            <span style={{ color: "#422323" }}>Fresh</span> Curry Paste <br />
            Made With <span style={{ color: "#422323" }}>Love</span>
          </h1>
          <p className="text-base lg:text-lg md:w-[50ch] lg:w-[45ch]">
            At Yaa's Garden Kitchen, we grow the freshest produce and use it to
            create our delicious products. Taste the difference today!
          </p>
          <div className="flex gap-4 items-center justify-center lg:justify-start">
            <Button variant="outline" size="lg" className="h-16 border-[#422323] bg-transparent border-2 hover:bg-[#422323] text-[#422323] hover:text-white">
              Learn More
            </Button>
            <Button variant="default" size="lg" className="h-16 bg-[#422323] hover:bg-[#311818]">
              Buy Now
            </Button>
          </div>
        </aside>

        <figure className="h-[70vh] lg:h-[100vh] w-full lg:w-[40vw] z-10" ref={jarRef}>
          <Jar />
        </figure>

      </section>

      {/* Orchid icon */}
      <div className="absolute top-[80%] -left-[400px] 10 opacity-10" ref={orchidRef}>
        <Image 
          src="/orchid.png"
          alt="YGK Logo"
          height={1000}
          width={1000}
        />
      </div>

      <div className="absolute translate-y-[1400px] -right-[400px] 10 opacity-10" ref={orchidRef2}>
      <Image 
        src="/orchid.png"
        alt="YGK Logo"
        height={1000}
        width={1000}
      />
    </div>
    </article>
  );
}
