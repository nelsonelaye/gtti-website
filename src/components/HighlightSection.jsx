import React from "react";
import GalleryCarousel from "./GalleryCarousel";
import Link from "next/link";
import Button from "./UI/Button";

const HighlightSection = () => {
  return (
    <section className="w-full overflow-hidden py-16  text-white">
      <div className="mx-auto px-5 flex flex-col gap-4">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 text-primary">
            Highlights
          </h2>
          {/* <p className="text-xl text-gray-600">Who will you meet?</p> */}
        </div>
        <GalleryCarousel />
        <GalleryCarousel reverse={true} />
        {/* </div> */}

        <div className="mx-auto pt-5">
          <Link href="/gallery">
            <Button
              text="View highlights"
              variant="primary"
              className="md:px-12! md:py-5!"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HighlightSection;
