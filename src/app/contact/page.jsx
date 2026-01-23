import Button from "@/components/UI/Button";
import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] bg-primary px-5">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://res.cloudinary.com/drjunh0fs/image/upload/v1769192476/IMG_5439_zgghr2.jpg"
            alt="Exhibition"
            className="object-cover object-top w-full h-full"
            priority
          />

          <div className="absolute inset-0 bg-primary-light/60"></div>
        </div>
        <div className="relative z-10 w-full h-full flex items-center justify-center text-center">
          <div className="w-full max-w-4xl">
            <h1 className="text-4xl md:text-7xl font-bold mb-6 text-white!">
              Contact
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Explore moments from our exhibitions, programs, and community
              impact across Africa
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
