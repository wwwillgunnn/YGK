"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

type CardProps = {
  name: string;
  link: string;
  images: [string, string, string, string];
};

export default function Card({ name, link, images }: CardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="p-6 lg:p-8">
      <Link href={link}>
        <div className="relative cursor-pointer">
          {/* Main div */}
          <div
            className="bg-gray-300 w-[82vw] sm:w-[62vw] md:w-[38vw] lg:w-[22vw] xl:w-[20vw] aspect-[3/4] border border-gray-700 rounded-md relative z-10 overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Image
              src={images[0]}
              alt={`${name} image 1`}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 82vw, (max-width: 768px) 62vw, (max-width: 1024px) 38vw, (max-width: 1280px) 22vw, 20vw"
            />
          </div>

          {/* Additional divs that slide out */}
          <div
            className={`bg-gray-400 w-[82vw] sm:w-[62vw] md:w-[38vw] lg:w-[22vw] xl:w-[20vw] aspect-[3/4] border border-gray-700 rounded-md absolute top-0 left-0 transform transition-transform duration-300 ${
              isHovered
                ? "translate-x-[4.25rem] -translate-y-2 rotate-[10deg]"
                : "translate-x-0 translate-y-0 rotate-0"
            } z-0 overflow-hidden`}
          >
            <Image
              src={images[1]}
              alt={`${name} image 2`}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 82vw, (max-width: 768px) 62vw, (max-width: 1024px) 38vw, (max-width: 1280px) 22vw, 20vw"
            />
          </div>

          <div
            className={`bg-gray-500 w-[82vw] sm:w-[62vw] md:w-[38vw] lg:w-[22vw] xl:w-[20vw] aspect-[3/4] border border-gray-700 rounded-md absolute top-0 left-0 transform transition-transform duration-300 ${
              isHovered
                ? "-translate-x-[4.25rem] -translate-y-2 -rotate-[10deg]"
                : "translate-x-0 translate-y-0 rotate-0"
            } z-0 overflow-hidden`}
          >
            <Image
              src={images[2]}
              alt={`${name} image 3`}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 82vw, (max-width: 768px) 62vw, (max-width: 1024px) 38vw, (max-width: 1280px) 22vw, 20vw"
            />
          </div>

          <div
            className={`bg-gray-600 w-[82vw] sm:w-[62vw] md:w-[38vw] lg:w-[22vw] xl:w-[20vw] aspect-[3/4] border border-gray-700 rounded-md absolute top-0 left-0 transform transition-transform duration-300 ${
              isHovered
                ? "-translate-x-6 -translate-y-10 -rotate-[5deg]"
                : "translate-x-0 translate-y-0 rotate-0"
            } z-0 overflow-hidden`}
          >
            <Image
              src={images[3]}
              alt={`${name} image 4`}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 82vw, (max-width: 768px) 62vw, (max-width: 1024px) 38vw, (max-width: 1280px) 22vw, 20vw"
            />
          </div>

          <p className="mt-3 text-center text-2xl font-bold">{name}</p>
        </div>
      </Link>
    </div>
  );
}
