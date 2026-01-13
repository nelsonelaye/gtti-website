"use client";
import React from "react";
import Image from "next/image";

const GalleryCarousel = ({ reverse }) => {
  const contents = [
    "/images/conference-2.jpg",
    "/images/conference.jpg",
    "/images/exhibition.jpg",
    "/images/conference.jpg",
    "/images/conference-2.jpg",
    "/images/exhibition.jpg",
  ];

  const displayContents = [...contents, ...contents];
  return (
    <div className="marquee-container bg-primary-500 z-400">
      <div
        className={`marquee-content inline-flex gap-4 ${
          reverse ? "marquee-reverse" : ""
        }`}
      >
        {displayContents.map((src, index) => (
          <div
            key={index}
            className="relative min-w-[400px] h-[314] overflow-hidden rounded-lg"
          >
            <Image
              src={src}
              alt="VR headset user"
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryCarousel;
