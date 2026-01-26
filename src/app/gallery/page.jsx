"use client";
import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Button from "@/components/UI/Button";
import { useQuery } from "@tanstack/react-query";
import { getAllImagesUrls } from "@/lib/cloudinary";
import { IoClose, IoChevronBack, IoChevronForward } from "react-icons/io5";
import { optimizeCloudinaryUrl } from "@/lib/helper";
import CtaSection from "@/components/CtaSection";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = [
    { id: "all", name: "All Photos" },
    { id: "exhibitions", name: "Exhibitions" },
    { id: "training", name: "Training Programs" },
    { id: "livestock", name: "Livestock" },
    { id: "aquaculture", name: "Aquaculture" },
    { id: "events", name: "Events" },
  ];

  const { data: galleryData, isLoading } = useQuery({
    queryKey: ["gallery"],
    queryFn: () => getAllImagesUrls("GTTI/speakers and guests"),
  });

  // Modal functions
  const openModal = (index) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
    // document.body.style.overflow = "hidden"; // Prevent background scroll
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImageIndex(null);
    // document.body.style.overflow = "unset";
  };

  const goToPrevious = () => {
    if (selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };

  const goToNext = () => {
    if (
      galleryData?.resources &&
      selectedImageIndex < galleryData.resources.length - 1
    ) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isModalOpen) return;

      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen, selectedImageIndex, galleryData?.resources?.length]);

  const currentImage = useMemo(() => {
    return isModalOpen && galleryData?.resources?.[selectedImageIndex];
  }, [selectedImageIndex]);

  // Add this: Preload adjacent images
  useEffect(() => {
    if (!isModalOpen || !galleryData?.resources) return;

    const preloadImage = (index) => {
      if (index >= 0 && index < galleryData.resources.length) {
        const img = new window.Image();
        img.src = optimizeCloudinaryUrl(galleryData.resources[index].url, {
          width: 1200,
          quality: "auto",
          format: "auto",
        });
      }
    };

    // Preload next and previous images
    preloadImage(selectedImageIndex + 1);
    preloadImage(selectedImageIndex - 1);
  }, [selectedImageIndex, isModalOpen, galleryData]);

  return (
    <main className="min-h-screen bg-white ">
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] md:h-[60vh] bg-primary px-5 pt-[70px]">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="http://res.cloudinary.com/drjunh0fs/image/upload/w_1200,f_auto,q_auto/v1769172594/IMG_5420_nel6gh.jpg"
            alt="Exhibition"
            className="object-cover object-top w-full h-full"
          />

          <div className="absolute inset-0 bg-primary-light/80"></div>
        </div>
        <div className="relative z-10 w-full h-full flex items-center justify-center text-center">
          <div className="w-full max-w-4xl">
            <h1 className="text-4xl md:text-7xl font-bold mb-4 text-white!">
              Gallery
            </h1>
            <p className="md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Explore moments from our exhibitions, programs, and community
              impact across Africa
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="w-full px-5 py-12 bg-white border-b border-gray-200 hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  selectedCategory === category.id
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {isLoading && (
        <div className="flex items-center justify-center min-h-[80vh]">
          <div className="flex flex-col items-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mb-4"></div>
            <p className="text-lg text-gray-600">Loading gallery...</p>
          </div>
        </div>
      )}

      {/* Gallery Grid Section */}
      <section className="w-full px-5 py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-[200px] grid-flow-dense">
            {galleryData?.resources?.map((image, index) => {
              const colSpan =
                index % 7 === 0 ? "md:col-span-2" : "md:col-span-1";
              const rowSpan =
                index % 3 === 0 || index % 7 === 0
                  ? "md:row-span-2"
                  : "md:row-span-1";

              return (
                <div
                  key={index}
                  onClick={() => openModal(index)}
                  className={`relative overflow-hidden rounded-lg group bg-neutral cursor-pointer ${colSpan} ${rowSpan}`}
                >
                  <img
                    src={optimizeCloudinaryUrl(image?.url, {
                      width: 1000,
                      quality: 90,
                      format: "auto",
                    })}
                    alt={image?.asset_id}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-primary/80 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-start p-6"></div>
                </div>
              );
            })}
          </div>

          {galleryData?.resources?.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600">No images found</p>
            </div>
          )}
        </div>
      </section>

      {/* Image Preview Modal */}
      {isModalOpen && currentImage && (
        <div
          className="fixed inset-0 z-700 bg-black/90 flex items-center justify-center"
          onClick={closeModal}
        >
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-5 right-5 cursor-pointer text-white hover:text-gray-300 transition-colors z-50"
          >
            <IoClose size={40} />
          </button>

          {/* Previous Button */}
          {selectedImageIndex > 0 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-4 cursor-pointer text-white hover:text-gray-300 transition-colors z-50"
            >
              <IoChevronBack size={32} />
            </button>
          )}

          {/* Next Button */}
          {selectedImageIndex < galleryData.resources.length - 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-4 cursor-pointer text-white hover:text-gray-300 transition-colors z-50"
            >
              <IoChevronForward size={32} />
            </button>
          )}

          {/* Image Container */}
          <div
            className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={optimizeCloudinaryUrl(currentImage.url, {
                width: 1200,
                quality: "auto",
                format: "auto",
              })}
              alt={currentImage.asset_id}
              width={800}
              height={600}
              className="max-w-full max-h-full object-contain"
              // quality={100}
              unoptimized
            />
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-lg">
            {selectedImageIndex + 1} / {galleryData.resources.length}
          </div>
        </div>
      )}
      <CtaSection />
    </main>
  );
};

export default Gallery;
