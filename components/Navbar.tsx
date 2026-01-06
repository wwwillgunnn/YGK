import Link from "next/link";
import Image from "next/image";
import { MdAccountCircle, MdShoppingCart } from "react-icons/md";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
];

export default function Navbar() {
  return (
    <nav className="w-full relative flex items-center justify-between mx-auto px-20 pt-8 z-20">
      {/* Logo */}
      <Link href="/" className="shrink-0">
        <Image src="/orchid.png" alt="YGK Logo" height={40} width={40} />
      </Link>

      {/* Desktop Nav Links */}
      <ul className="hidden md:flex flex-row gap-5">
        {navLinks.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="font-semibold hover:text-[#422323] transition-transform hover:-translate-y-1"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Right side: desktop icons + mobile burger */}
      <div className="flex items-center gap-2 md:gap-5">
        {/* Desktop shop links */}
        <div className="hidden md:flex flex-row gap-5">
          <Link href="/account" className="cursor-pointer">
            <MdAccountCircle size={32} className="hover:text-[#422323]" />
          </Link>
          <Link href="/bag" className="cursor-pointer">
            <MdShoppingCart size={32} className="hover:text-[#422323]" />
          </Link>
        </div>

        {/* Mobile burger menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Open menu"
                className="hover:text-[#422323]"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="text-black">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2">
                  <Image
                    src="/orchid.png"
                    alt="YGK Logo"
                    height={28}
                    width={28}
                  />
                  Menu
                </SheetTitle>
              </SheetHeader>

              <div className="mt-6 flex flex-col gap-4">
                {/* Nav links */}
                <div className="flex flex-col gap-3">
                  {navLinks.map((l) => (
                    <SheetClose asChild key={l.href}>
                      <Link
                        href={l.href}
                        className="text-lg font-semibold hover:text-[#422323]"
                      >
                        {l.label}
                      </Link>
                    </SheetClose>
                  ))}
                </div>

                <div className="h-px w-full bg-border" />

                {/* Account + Bag links */}
                <div className="flex flex-col gap-3">
                  <SheetClose asChild>
                    <Link
                      href="/account"
                      className="flex items-center gap-3 text-lg font-semibold hover:text-[#422323]"
                    >
                      <MdAccountCircle size={26} />
                      Account
                    </Link>
                  </SheetClose>

                  <SheetClose asChild>
                    <Link
                      href="/bag"
                      className="flex items-center gap-3 text-lg font-semibold hover:text-[#422323]"
                    >
                      <MdShoppingCart size={26} />
                      Bag
                    </Link>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
