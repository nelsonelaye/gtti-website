import Link from "next/link";
import React from "react";
import { FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-(--color-primary) text-white py-12 px-5 md:px-8 border-t border-neutral/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-between items-start gap-8">
          {/* Name */}
          <div className="flex-1 min-w-[200px]">
            <h2 className="text-3xl font-bold font-asap text-white!">GTTI</h2>
          </div>

          {/* Contact Info */}
          <div className="flex-1 min-w-[200px]">
            <div className="space-y-2 text-sm">
              <p>
                <a href="tel:+2348137969988">+234 8137969988,</a>
                <br />
                <a href="tel:+2348033628532">+234 8033628532</a>
              </p>
              <p>
                <a
                  href="mailto:support@gtti.com.ng"
                  className="underline hover:text-secondary transition-colors"
                >
                  support@gtti.com.ng
                </a>
              </p>
              <p>
                2, Fadeyi Street, off Obafemi Awolowo Way,
                <br />
                Ikeja, Lagos,
                <br />
                Nigeria, West Africa
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
        <div className="mt-8 pt-8 border-t border-neutral/30 text-center text-[11px] md:text-sm">
          <p>
            © {new Date().getFullYear()} GTTI. Crafted with ❤️ by{" "}
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
