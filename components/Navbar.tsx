import Link from "next/link";
import { FiHome, FiUser, FiShoppingBag } from "react-icons/fi";
import HamburgerMenu from "@/components/ui/HamburgerMenu";

export default function Navbar() {
  return (
    <nav className="relative flex items-center justify-between w-[80%] mx-auto h-16 px-8 mt-8 outline outline-2 outline-white rounded-full bg-transparent">
      <HamburgerMenu />

      <Link href="/" className="navbar-center cursor-pointer">
        <FiHome size={32} />
      </Link>

      <div className="navbar-end">
        <div className="flex flex-row gap-5">
          <Link href="/account" className="cursor-pointer">
            <FiUser size={32} />
          </Link>
          <Link href="/bag" className="cursor-pointer">
            <FiShoppingBag size={32} />
          </Link>
        </div>
      </div>
    </nav>
  );
}
