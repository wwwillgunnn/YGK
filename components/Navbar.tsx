"use client"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@/constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
// TODO: Just fix the whole thing ...
  return (
    <nav className="relative flex items-center justify-between w-[80%] mx-auto h-16 px-8 mt-8 outline outline-2 outline-white rounded-full bg-transparent">
      {/* Hamburger Menu for mobile */}
      <div className="dropdown">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </div>
        {isOpen && (
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/discover">Discover More</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        )}
      </div>

      <Link href="/" className="navbar-center">
        <Image src="/vercel.svg" alt="logo" width={48} height={48} />
      </Link>

      <div className="navbar-end">
        <div className="flex flex-row gap-5">
          <Link href="/">
            <Image src="/account.svg" alt="bag" width={48} height={48} />
          </Link>
          <Link href="/">
            <Image src="/shopping-bag.svg" alt="account" width={48} height={48} />
          </Link>
        </div>
      </div>
    </nav>
  );
}
