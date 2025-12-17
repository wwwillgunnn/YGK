"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type FadeInStaggerProps = {
  children: React.ReactNode;
  duration?: number; // Optional: duration of the animation
  delay?: number; // Optional: delay between staggered animations
  className?: string;
};

export default function FadeInStagger({
  children,
  duration = 1,
  delay = 0.2,
  className,
}: FadeInStaggerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin

    const elements = containerRef.current?.children;

    if (elements) {
      // Create a ScrollTrigger to animate the fade-in effect
      gsap.fromTo(
        elements,
        { opacity: 0, y: 50 }, // Initial state: faded out, moved down
        {
          opacity: 1,
          y: 0,
          duration,
          stagger: delay, // Time between each element's animation
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current, // The element that triggers the animation
            start: "top bottom", // Animation starts when the top of the element reaches the bottom of the viewport
            end: "top top", // Ends when the top of the element reaches the top of the viewport
            scrub: true, // Optional: links the animation to the scroll position
            markers: false, // Set to true to debug the ScrollTrigger position
          },
        }
      );
    }

    // Cleanup on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [duration, delay]);

  return (
    <div
      ref={containerRef}
      className="flex flex-col justify-center items-center lg:flex-row gap-5 lg:gap-20"
    >
      {children}
    </div>
  );
}
