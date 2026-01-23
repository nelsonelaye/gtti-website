"use client";
import React from "react";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { getAllImagesUrls } from "@/lib/cloudinary";

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
            className="relative min-w-[400px] h-[314] overflow-hidden rounded-lg"
          >
            <img
              src={src?.url}
              alt="VR headset user"
              fill
              className="object-cover w-fit h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryCarousel;
