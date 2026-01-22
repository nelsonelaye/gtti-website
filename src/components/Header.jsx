"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useMemo } from "react";
import { FiShoppingCart, FiSearch, FiMenu } from "react-icons/fi";
import Button from "@/components/UI/Button";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 50);

      setIsScrolled(currentScrollY > 600);

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-500 transition-all duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } ${isScrolled ? "bg-white backdrop-blur-md" : "bg-transparent"}`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-6 md:gap-8">
            <Link href="/" className={!isScrolled ? "md:mx-auto" : "mr-auto"}>
              <div
                className={`font-bold text-lg tracking-widest transition-all duration-300 ${
                  isScrolled ? "text-black" : "text-white"
                } `}
              >
                <div className="border-2 border-current rounded-full px-4 py-2">
                  GTTI
                </div>
              </div>
            </Link>

            <nav
              className={` items-center gap-6 font-medium font-asap hidden md:flex ${
                isScrolled ? "text-black" : "text-white"
              }`}
            >
              <Link href="/" className="hover:opacity-70 transition">
                Home
              </Link>
              <Link href="/exhibition" className="hover:opacity-70 transition">
                Exhibit
              </Link>
              <Link href="/gallery" className="hover:opacity-70 transition">
                Gallery
              </Link>
              <Link href="/about" className="hover:opacity-70 transition">
                About
              </Link>
              <Link href="/contact" className="hover:opacity-70 transition">
                Contact
              </Link>
            </nav>
          </div>

          {/* Right: Navigation (hidden on scroll) and Icons */}
          <div className="flex items-center gap-6 md:gap-8 ml-auto">
            <div className={`flex items-center gap-4 ${"text-black"}`}>
              <Button
                className={`hidden md:block ${isScrolled && "bg-primary!"} `}
                text="register to attend"
              />
              <Button
                className={`hidden md:block ${
                  isScrolled && "text-primary! border-primary!"
                } `}
                text="Apply to Exhibit"
              />

              <button
                className="md:hidden text-white underline text-xl"
                onClick={() => setIsOpen(!isOpen)}
              >
                Menu
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="fixed top-16 left-0 right-0 bg-black text-white p-4 space-y-4 z-40 md:hidden">
          <Link href="/" className="block hover:opacity-70 transition">
            HOME
          </Link>
          <Link
            href="/exhibition"
            className="block hover:opacity-70 transition"
          >
            EXHIBIT
          </Link>
          <Link href="/gallery" className="block hover:opacity-70 transition">
            GALLERY
          </Link>
          <Link href="/about" className="block hover:opacity-70 transition">
            ABOUT
          </Link>
          <Link href="/contact" className="block hover:opacity-70 transition">
            CONTACT
          </Link>
        </nav>
      )}
    </>
  );
};

export default Header;
