"use client";
import React, { useState, useEffect } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import Slide1 from "./Slide1";
import Slide2 from "./Slide2";
import Slide3 from "./Slide3";
import Slide4 from "./Slide4";
import Slide5 from "./Slide5";
import Link from "next/link";

const OpportunityCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    { component: Slide1, title: "Economic Outlook" },
    { component: Slide2, title: "Food Supply" },
    { component: Slide3, title: "Investment Opportunities" },
    { component: Slide4, title: "Strategic Vision" },
    { component: Slide5, title: "Cultural Species" },
  ];

  const totalSlides = slides.length;

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 8000); // Change slide every 8 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false); // Stop auto-play when manually navigating
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setIsAutoPlaying(false);
    scrollToTop();
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setIsAutoPlaying(false);

    scrollToTop();
  };

  const scrollToTop = () => {
    // Only scroll on mobile devices
    if (window.innerWidth < 768) {
      const section = document.getElementById("opportunities");
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <section
      className="relative w-full h-auto lg:h-[90vh] bg-white/90 py-8 my-8 md:my-20 "
      id="opportunities"
    >
      <h2 className="text-4xl md:text-5xl text-center font-bold mb-6 text-black relative">
        Economic Opportunities
        {/* <div className="absolute -bottom-2 left-0 right-0 h-3 bg-linear-to-r from-transparent via-white to-transparent"></div> */}
      </h2>
      {/* Slide Container */}
      <div className="relative w-full h-full overflow-hidden">
        {/* Slide Content */}
        <div className="w-full h-full">
          <CurrentSlideComponent />
        </div>

        {/* Navigation Arrows - Desktop */}
        <div className="hidden md:block">
          <button
            onClick={goToPrevious}
            className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg cursor-pointer transition-all hover:scale-110 z-10"
            aria-label="Previous slide"
          >
            <IoChevronBack className="w-6 h-6 text-primary" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg cursor-pointer transition-all hover:scale-110 z-10"
            aria-label="Next slide"
          >
            <IoChevronForward className="w-6 h-6 text-primary" />
          </button>
        </div>

        {/* Mobile Navigation - Bottom */}
        <div className="md:hidden absolute bottom-3 left-3 right-3 flex justify-between  gap-4 z-10">
          <button
            onClick={goToPrevious}
            className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg"
            aria-label="Previous slide"
          >
            <IoChevronBack className="w-5 h-5 text-primary" />
          </button>
          <button
            onClick={goToNext}
            className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg"
            aria-label="Next slide"
          >
            <IoChevronForward className="w-5 h-5 text-primary" />
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-3 md:bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide
                  ? "w-12 bg-primary"
                  : "w-2 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Slide Counter - Desktop Only */}
        <div className="hidden md:block absolute top-6 right-6 lg:top-8 lg:right-8 bg-white/90 px-4 py-2 rounded-full text-sm font-semibold text-primary">
          {currentSlide + 1} / {totalSlides}
        </div>

        {/* Auto-play Toggle */}
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="hidden md:block absolute top-6 left-6 lg:top-8 lg:left-8 bg-white/90 px-4 py-2 rounded-full text-xs font-medium text-gray-600 hover:bg-white transition-colors"
        >
          {isAutoPlaying ? "⏸ Pause" : "▶ Play"}
        </button>
      </div>

      {/* Slide Titles - Mobile */}
    </section>
  );
};

export default OpportunityCarousel;
