"use client";
import React from "react";
import Image from "next/image";

const BrandsCarousel = () => {
  const logos = [
    "/images/brands/logoipsum-411.svg",
    "/images/brands/logoipsum-419.svg",
    "/images/brands/logoipsum-372.svg",

    "/images/brands/logoipsum-401.svg",
    "/images/brands/logoipsum-372.svg",

    "/images/brands/logoipsum-388.svg",
    "/images/brands/logoipsum-368.svg",
    "/images/brands/logoipsum-372.svg",
    "/images/brands/logoipsum-387.svg",
    "/images/brands/logoipsum-419.svg",
    "/images/brands/logoipsum-401.svg",

    "/images/brands/logoipsum-388.svg",
  ];

  const displayLogos = [...logos, ...logos];
  return (
    // <div className="marquee-container bg-primary-500 z-999">
    //   <div className="marquee-content inline-flex animate-scroll">

    <div className="w-full flex items-center justify-center  gap-8 flex-wrap overflow-hidden">
      {displayLogos.map((logo, index) => (
        <div key={index} className={`flex items-center justify-center p-4 `}>
          <Image
            src={logo}
            alt={`Partner ${index}`}
            width={80}
            height={80}
            className="object-cover w-[40px] md:w-[80px]  h-full grayscale  hover:grayscale-0 transition-all duration-300"
          />
        </div>
      ))}
      {/* </div> */}
    </div>
  );
};

export default BrandsCarousel;
