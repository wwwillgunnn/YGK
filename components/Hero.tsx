"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Jar from "@/components/Jar";
import Navbar from "@/components/Navbar";
import Button from "@/components/Button";

export default function Hero() {
  const jarRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // ? Make jar ideally spin 
    gsap.to(jarRef.current, {
      scale: 1.2,
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#part1",
          start: "top bottom",
          end: "center center",
          scrub: true,
        },
      })
      .to(jarRef.current, {
        x: "-18vw",
        y: "120vh",
        rotation: 15,
        scale: 1,
      });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#part2",
          start: "20% bottom",
          end: "40% center",
          scrub: true,
        },
      })
      .to(jarRef.current, {
        x: "-40vw",
        y: "205vh",
        rotation: 0,
        scale: 1.5,
      });
  }, []);

  return (
    <article
      className="min-h-screen w-[100vw] bg-[radial-gradient(circle,_#6DB86B,_#305230)]"
      id="top-viewport"
    >
      <header>
        <Navbar />
      </header>

      <section className="flex flex-row items-center justify-center gap-20">
        <aside className="flex flex-col gap-5">
          <h1 className="text-lg lg:text-7xl text-bold">
            Fresh Curry Paste <br />
            Made With Love
          </h1>
          <p className="text-base w-[60ch]">
            At Yaa's Garden Kitchen, we grow the freshest produce and use it to
            create our delicious products. Taste the difference today!
          </p>
          <div className="flex flex-row gap-4">
            <Button variant="outline">Learn More</Button>
            <Button variant="solid">Buy Now</Button>
          </div>
        </aside>
        <figure className="h-[100vh] w-[40vw]" ref={jarRef}>
          <Jar />
        </figure>
      </section>
    </article>
  );
}