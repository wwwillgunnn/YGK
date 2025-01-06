"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Jar from "@/components/assets/Jar";
import Navbar from "@/components/Navbar";
import Button from "@/components/ui/Button";

export default function Hero() {
  const jarRef = useRef(null);
  // TODO: Try to optimise this
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

    // Apply scroll animations if viewport is large enough
    gsap.to(jarRef.current, {
      scale: 1.2,
      markers: false,
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#part1",
          start: "top-=300 bottom",
          end: "center-=50 center",
          scrub: true,
          markers: false,
        },
      })
      .to(jarRef.current, {
        x: "-20vw",
        y: "120vh",
        rotation: 15,
        scale: 1,
      });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#part2",
          start: "top bottom",
          end: "center center",
          scrub: true,
          markers: false,
        },
      })
      .to(jarRef.current, {
        x: "-45vw",
        y: "230vh",
        rotation: 0,
        scale: 1.25,
      });

    // Add event listener to update scroll triggers if the window is resized
    const resizeListener = () => {
      if (!checkViewport()) return;
      // Reinitialize scroll animations if viewport becomes large enough
      gsap.to(jarRef.current, {
        scale: 1.2,
        markers: false,
      });
      // Reinitialize scroll triggers for both timelines
      gsap.timeline({
        scrollTrigger: {
          trigger: "#part1",
          start: "top-=300 bottom",
          end: "center-=50 center",
          scrub: true,
          markers: false,
        },
      }).to(jarRef.current, {
        x: "-20vw",
        y: "120vh",
        rotation: 15,
        scale: 1,
      });

      gsap.timeline({
        scrollTrigger: {
          trigger: "#part2",
          start: "top bottom",
          end: "center center",
          scrub: true,
          markers: false,
        },
      }).to(jarRef.current, {
        x: "-45vw",
        y: "230vh",
        rotation: 0,
        scale: 1.25,
      });
    };

    window.addEventListener("resize", resizeListener);

    // Clean up event listener when component unmounts
    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  return (
    <article className="min-h-screen w-full bg-[radial-gradient(circle,_#6DB86B,_#305230)]" id="top-viewport">
      <header>
        <Navbar />
      </header>

      <section className="flex flex-col lg:flex-row items-center justify-center gap-10 mt-20 mx-20 lg:mt-0">
        <aside className="flex flex-col gap-5 lg:p-20 text-center lg:text-left">
          <h1 className="text-6xl font-bold">
            Fresh Curry Paste <br />
            Made With Love
          </h1>
          <p className="text-lg">
            At Yaa's Garden Kitchen, we grow the freshest produce and <br /> use it to
            create our delicious products. Taste the difference today!
          </p>
          <div className="flex gap-4 items-center justify-center lg:justify-start">
            <Button variant="outline" link="/about">Learn More</Button>
            <Button variant="solid" link="/buy">Buy Now</Button>
          </div>
        </aside>
        <figure className="h-[70vh] lg:h-[100vh] w-[40vw] z-10" ref={jarRef}>
          <Jar />
        </figure>
      </section>
    </article>
  );
}
