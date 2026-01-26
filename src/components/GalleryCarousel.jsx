"use client";
import React from "react";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { getAllImagesUrls } from "@/lib/cloudinary";
import { optimizeCloudinaryUrl } from "@/lib/helper";

const GalleryCarousel = ({ reverse }) => {
  const contents = [
    "/images/conference-2.jpg",
    "/images/conference.jpg",
    "/images/exhibition.jpg",
    "/images/conference.jpg",
    "/images/conference-2.jpg",
    "/images/exhibition.jpg",
  ];

  const { data: galleryData, error: cloudinaryError } = useQuery({
    queryKey: ["gallery"],
    queryFn: () => getAllImagesUrls("GTTI/speakers and guests"),
  });

  const displayContents = [...contents, ...contents];
  return (
    <div className="marquee-container bg-primary-500 z-400">
      <div
        className={`marquee-content inline-flex gap-4 ${
          reverse ? "marquee-reverse" : ""
        }`}
      >
        {galleryData?.resources.map((src, index) => (
          <div
            key={index}
            className="relative min-w-[250px] w-4/5 h-[200] md:min-w-[400px] md:h-[314] overflow-hidden rounded-lg bg-neutral"
          >
            <Image
              src={optimizeCloudinaryUrl(src?.url, {
                width: 1000,
                quality: 90,
                format: "auto",
              })}
              alt="Gallery image"
              width={400}
              height={314}
              className="object-cover h-full"
              loading="lazy"
              // sizes="(max-width: 768px) 100vw, 400px"
              quality={100}
              unoptimized
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryCarousel;
