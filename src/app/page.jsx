"use client";
import Image from "next/image";
import Header from "@/components/Header";
import SpeakerCard from "@/components/SpeakerCard";
import Button from "@/components/UI/Button";
import { FaPlay, FaArrowRight } from "react-icons/fa6";
import BrandsCarousel from "@/components/BrandsCarousel";
import GalleryCarousel from "@/components/GalleryCarousel";
import YoutubeFrame from "@/components/YoutubeFrame";
import { useState } from "react";
import Link from "next/link";
import HighlightSection from "@/components/HighlightSection";
import CtaSection from "@/components/CtaSection";
import ExhibitSection from "@/components/ExhibitSection";

export default function Home() {
  const [showYoutubeFrame, setShowYoutubeFrame] = useState(false);
  return (
    <main className="min-h-screen">
      {/* <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start"></main> */}
      <section className="relative w-full h-[90vh] md:h-screen overflow-hidden bg-primary-light px-5 pt-[70px]">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/cows-hero.jpg"
            alt="Conference room"
            fill
            className="object-cover"
            priority
          />

          <div className="absolute inset-0 bg-primary-light/80"></div>
        </div>

        {/* Gradient Overlay */}
        {/* <div className="absolute inset-0 "></div> */}

        {/* Content */}
        <div className="relative z-10 flex h-full items-center justify-center flex-col">
          <div className="text-center text-white mb-4 md:mb-20">
            <div className="mb-8">
              <p className="text-sm max-md:font-medium md:text-xl font-light tracking-wider mb-4">
                OCTOBER 20TH - 22ND 2026
              </p>
              <h1 className="text-3xl md:text-7xl font-bold mb-4 max-w-5xl text-white!">
                3RD International Livestock and Agriculture Investment Summit &
                Exhibition 2026
              </h1>
              <p className="text-sm max-md:font-medium  md:text-2xl font-light">
                NICON LUXRY HOTEL, TAFAWA BALEWA WAY, FCT, ABUJA
              </p>
            </div>
          </div>

          <div className="flex justify-center max-md:flex-wrap w-full  gap-4">
            <Button
              text="register to attend"
              variant="primary"
              className="md:px-12! md:py-5! max-md:w-full"
            />
            <Button
              text="Apply to Exhibit"
              variant="secondary"
              className="md:px-12! md:py-5! max-md:w-full"
            />
          </div>
        </div>
      </section>
      <section className="w-full px-5 md:max-w-[70%] mx-auto py-20 max-md:pt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:col-span-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About the <br /> Summit
            </h2>
          </div>
          <div className="md:col-span-1">
            <p className="md:text-lg mb-4">
              The Annual Professional Conference is an exciting gathering of
              industry experts, thought leaders, and professionals from across
              the country. This year&apos;s event will feature a wide range of
              sessions and workshops designed to help attendees stay ahead of
              the curve and achieve their professional goals.
            </p>
            <p className="md:text-lg">
              This year&apos;s conference will be held at the{" "}
              <span className="font-bold">
                San Diego Convention Center in San Diego, California.
              </span>{" "}
              With easy access to transportation, nearby hotels, and a wide
              range of dining and entertainment options, SDCC is the perfect
              place to host our premier conference.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8  md:min-h-[600px]">
          <div className="md:col-span-1 flex flex-col gap-4">
            <div className="relative w-full h-64 md:h-full rounded-lg overflow-hidden">
              <Image
                src="/images/conference.jpg"
                alt="Conference Audience"
                fill
                className="rounded-lg object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative w-full h-64 md:h-full overflow-hidden rounded-lg">
              <Image
                src="/images/goat.jpg"
                alt="Panel Discussion"
                fill
                className="rounded-lg object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
          <div className="md:col-span-1 relative w-full h-auto min-h-[536px] md:h-full rounded-lg overflow-hidden">
            <Image
              src="/images/landscape.jpg"
              alt="Conference Hall"
              fill
              className="rounded-lg object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      <section className="w-full relative">
        <div className="relative w-full h-96 md:h-screen">
          <img
            src="https://res.cloudinary.com/drjunh0fs/image/upload/v1769172658/IMG_5388_wfaabm.jpg"
            alt="conference speaker"
            className="object-cover w-full h-full object-top"
          />

          <div className="absolute inset-0 flex items-center justify-center z-10">
            <button className="w-16 h-16 md:w-32 md:h-32 bg-secondary rounded-full flex items-center justify-center transition-all duration-700 hover:scale-120 shadow-lg cursor-pointer">
              <FaPlay
                color="black"
                size="32px"
                onClick={() => setShowYoutubeFrame(true)}
                className="cursor-pointer"
              />
            </button>
          </div>
          <div className="absolute inset-0 bg-primary-light/60"></div>
        </div>

        {showYoutubeFrame && (
          <YoutubeFrame onClose={() => setShowYoutubeFrame(false)} />
        )}
      </section>

      <section className="w-full px-5 py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-black relative inline-block">
              Speakers
              <div className="absolute -bottom-2 left-0 right-0 h-3 bg-linear-to-r from-transparent via-white to-transparent"></div>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SpeakerCard
              name="Deepankar Rustagi"
              title="Founder & CEO, Omniretail Technologies"
              imageSrc="/images/speaker-1.jpg"
            />
            <SpeakerCard
              name="Kola Aina"
              title="Founding Partner, Ventures Platform Fund"
              imageSrc="/images/speaker-2.jpg"
            />
            <SpeakerCard
              name="Emeka Emetarom"
              title="Founder & CEO, Qore"
              imageSrc="/images/speaker-3.jpg"
            />
            <SpeakerCard
              name="Kola Aina"
              title="Founding Partner, Ventures Platform Fund"
              imageSrc="/images/speaker-2.jpg"
            />
            <SpeakerCard
              name="Emeka Emetarom"
              title="Founder & CEO, Qore"
              imageSrc="/images/speaker-3.jpg"
            />
            <SpeakerCard
              name="Uka Eje"
              title="CEO, Thrive Agric"
              imageSrc="/images/speaker-1.jpg"
            />
          </div>
        </div>
      </section>

      <ExhibitSection />

      <section className="w-full py-16 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 relative inline-block">
              Sponsors
              <div className="absolute -bottom-2 left-0 right-0 h-3 bg-linear-to-r from-transparent via-gray-300 to-transparent"></div>
            </h2>
          </div>

          {/* <div className="flex items-center justify-center gap-8"> */}
          <BrandsCarousel />
          {/* </div> */}
        </div>
      </section>

      <HighlightSection />

      <CtaSection />
    </main>
  );
}
