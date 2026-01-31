"use client";
import React from "react";
import Image from "next/image";

const BrandsCarousel = () => {
  const logos = [
    "/images/brands/credlanche.png",
    "/images/brands/naccima.jpeg",
    "/images/brands/nafdac.png",
  ];

  const displayLogos = [...logos];
  return (
    // <div className="marquee-container bg-primary-500 z-999">
    //   <div className="marquee-content inline-flex animate-scroll">

    <div className="w-full flex items-center justify-center  gap-8 flex-wrap overflow-hidden">
      {logos.map((logo, index) => (
        <div key={index} className={`flex items-center justify-center `}>
          <Image
            src={logo}
            alt={`Partner ${index}`}
            width={index === 0 ? 130 : 80}
            height={index === 0 ? 130 : 80}
            className="object-contain  h-full  transition-all duration-300"
          />
        </div>
      ))}
      {/* </div> */}
    </div>
  );
};

export default BrandsCarousel;
