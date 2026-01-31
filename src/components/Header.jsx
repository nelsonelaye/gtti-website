"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { FiX } from "react-icons/fi";
import Button from "@/components/UI/Button";
import { MdMenu } from "react-icons/md";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/exhibition", label: "Exhibit" },
    { href: "/gallery", label: "Gallery" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  // Menu sections matching original links
  const menuSections = [
    {
      label: "HOME",
      href: "/",
      hasSubmenu: false,
    },
    {
      label: "EXHIBIT",
      href: "/exhibition",
      hasSubmenu: false,
    },
    {
      label: "GALLERY",
      href: "/gallery",
      hasSubmenu: false,
    },
    {
      label: "ABOUT",
      href: "/about",
      hasSubmenu: false,
    },
    {
      label: "CONTACT",
      href: "/contact",
      hasSubmenu: false,
    },
  ];

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

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleMenuClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } ${isScrolled ? "bg-white backdrop-blur-md" : "bg-transparent"}`}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-4 flex items-center justify-between border-b-secondary/50 ">
          <div className="flex items-center gap-6 md:gap-8">
            <Link href="/" className={!isScrolled ? "md:mx-auto" : "mr-auto"}>
              <div
                className={`font-bold text-sm md:text-lg tracking-widest transition-all duration-300 ${
                  isScrolled ? "text-primary" : "text-white"
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
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`hover:opacity-70 transition ${
                    pathname === link.href ? "text-secondary" : ""
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right: Navigation (hidden on scroll) and Icons */}
          <div className="flex items-center gap-6 md:gap-8 ml-auto">
            <div className={`flex items-center gap-4 ${"text-black"}`}>
              <Button
                className={`hidden md:block ${isScrolled && ""} `}
                text="register to attend"
                variant="primary"
              />

              <Link
                target="_blank"
                href="https://docs.google.com/forms/d/e/1FAIpQLSeGjzAtjCYds2_JZKf9hQ_avtplaBMMxdQIS73xnAyEBupWKw/viewform"
              >
                <Button
                  className={`hidden md:block ${
                    isScrolled &&
                    "text-primary! border-primary! hover:bg-secondary! hover:border-secondary!"
                  } `}
                  text="Apply to Exhibit"
                />
              </Link>

              <button
                className={`md:hidden text-white underline text-lg md:text-xl ${
                  isScrolled && "text-primary!"
                } `}
                onClick={() => setIsOpen(!isOpen)}
              >
                <MdMenu size="32px" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-primary text-white z-50 md:hidden overflow-y-auto">
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 text-white hover:opacity-70 transition"
            aria-label="Close menu"
          >
            <FiX size={32} />
          </button>

          {/* Menu Content */}
          <div className="flex flex-col min-h-screen px-6 py-16">
            {/* Navigation Sections */}
            <nav className="flex-1 space-y-1">
              {menuSections.map((section) => (
                <div key={section.label} className="border-b border-white/20">
                  <Link
                    href={section.href}
                    onClick={handleMenuClick}
                    className={`block py-6 text-3xl md:text-4xl font-light tracking-wide hover:opacity-70 transition ${
                      pathname === section.href ? "text-secondary" : ""
                    }`}
                  >
                    {section.label}
                  </Link>
                </div>
              ))}
            </nav>

            {/* Action Buttons */}
            <div className="space-y-4 pt-8 pb-8">
              <Button
                className="w-full"
                text="register to attend"
                onClick={handleMenuClick}
                variant="primary"
              />

              <Link
                target="_blank"
                href="https://docs.google.com/forms/d/e/1FAIpQLSeGjzAtjCYds2_JZKf9hQ_avtplaBMMxdQIS73xnAyEBupWKw/viewform"
              >
                <Button
                  className="w-full"
                  text="Apply to Exhibit"
                  onClick={handleMenuClick}
                />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
