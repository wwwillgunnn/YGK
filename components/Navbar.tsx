import Link from "next/link";
import Image from "next/image";
import { MdAccountCircle, MdShoppingCart } from "react-icons/md";

export default function Navbar() {
  return (
    <nav className="w-full relative flex items-center justify-between mx-auto px-8 pt-8 z-20">
      {/* Logo */}
      <Link href="/">
        <Image src="/orchid.png" alt="YGK Logo" height={40} width={40} />
      </Link>

      {/* Nav Links */}
      <ul className="flex flex-row gap-5">
        <li>
          {" "}
          <Link
            href="/"
            className="font-semibold hover:text-[#422323] transition-transform hover:-translate-y-1"
          >
            Home
          </Link>
        </li>
        <li>
          {" "}
          <Link
            href="/products"
            className="font-semibold hover:text-[#422323] transition-transform hover:-translate-y-1"
          >
            Products
          </Link>
        </li>
        <li>
          {" "}
          <Link
            href="/about"
            className="font-semibold hover:text-[#422323] transition-transform hover:-translate-y-1"
          >
            About
          </Link>
        </li>
        <li>
          {" "}
          <Link
            href="/gallery"
            className="font-semibold hover:text-[#422323] transition-transform hover:-translate-y-1"
          >
            Gallery
          </Link>
        </li>
      </ul>

      {/* Shop links */}
      <div className="flex flex-row gap-5">
        <Link href="/account" className="cursor-pointer">
          <MdAccountCircle size={32} className="hover:text-[#422323]" />
        </Link>
        <Link href="/bag" className="cursor-pointer">
          <MdShoppingCart size={32} className="hover:text-[#422323]" />
        </Link>
      </div>
    </nav>
  );
}
