import Link from "next/link";
import React from "react";
import { FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-(--color-primary) text-white py-12 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-between items-start gap-8">
          {/* Name */}
          <div className="flex-1 min-w-[200px]">
            <h2 className="text-3xl font-bold font-asap">GTTI</h2>
          </div>

          {/* Contact Info */}
          <div className="flex-1 min-w-[200px]">
            <div className="space-y-2 text-sm">
              <p>+234 123-4567 890</p>
              <p>tcampbell@example.com</p>
              <p>
                123 Business Ave, Suite 100
                <br />
                Abuja
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="flex-1 min-w-[200px]">
            <div className="space-y-2 text-sm">
              <a
                href="#"
                className="hover:text-(--color-secondary) transition-colors"
              >
                Privacy Policy
              </a>
              <br />
              <a
                href="#"
                className="hover:text-(--color-secondary) transition-colors"
              >
                Accessibility
              </a>
              <br />
              <a
                href="#"
                className="hover:text-(--color-secondary) transition-colors"
              >
                Statement
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex-1 min-w-[200px]">
            <div className="flex space-x-4">
              <a
                href="#"
                className="hover:text-(--color-secondary) transition-colors"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="#"
                className="hover:text-(--color-secondary) transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="#"
                className="hover:text-(--color-secondary) transition-colors"
              >
                <FaTiktok size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-white/20 text-center text-sm">
          <p>
            © 2035 by GTTI. Crafted with ❤️ by{" "}
            <Link
              href="https://nelsonelaye.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-semibold hover:text-secondary cursor-pointer"
            >
              Nelson Elaye
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
