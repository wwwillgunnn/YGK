"use client";

import Link from "next/link";
import React, { useState } from "react";

type CardProps ={
    name: string;
    link: string;

}
export default function Card({ name, link }: CardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="p-16">
        <Link href={link}>
            <div className="relative cursor-pointer">
                {/* Main div */}
                <div
                    className="bg-gray-300 w-[15vw] h-[55vh] border border-gray-700 rounded-md relative z-10"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                </div>

                {/* Additional divs that slide out */}
                <div
                    className={`bg-gray-400 w-[15vw] h-[55vh] border border-gray-700 rounded-md absolute top-0 left-0 transform transition-transform duration-300 ${
                    isHovered ? "translate-x-[3.5rem] -translate-y-2 rotate-[10deg]" : "translate-x-0 translate-y-0 rotate-0"
                    } z-0`}
                ></div>
                <div
                    className={`bg-gray-500 w-[15vw] h-[55vh] border border-gray-700 rounded-md absolute top-0 left-0 transform transition-transform duration-300 ${
                    isHovered ? "-translate-x-[3.5rem] -translate-y-2 -rotate-[10deg]" : "translate-x-0 translate-y-0 rotate-0"
                    } z-0`}
                ></div>
                <div
                    className={`bg-gray-600 w-[15vw] h-[55vh] border border-gray-700 rounded-md absolute top-0 left-0 transform transition-transform duration-300 ${
                    isHovered ? "-translate-x-5 -translate-y-10 -rotate-[5deg]" : "translate-x-0 translate-y-0 rotate-0"
                    } z-0`}
                ></div>

                <p className="mt-2 text-center text-xl font-bold">{name}</p>
            </div>
        </Link>
    </div>
  );
}
