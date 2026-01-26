import Image from "next/image";
import React from "react";
import Button from "./UI/Button";

const ExhibitSection = () => {
  return (
    <section className="w-full bg-primary text-white py-16">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row  gap-12 px-5">
        <div className="w-full lg:w-1/2 max-h-[500px] overflow-hidden relative rounded-lg ">
          <Image
            src="/images/exhibition.jpg"
            alt="Exhibitor booth"
            width={800}
            height={640}
            className="rounded-lg object-cover shadow-lg w-full! hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute -bottom-4 -left-4 w-32 h-32 md:w-48 md:h-48 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-20 z-10"></div>
          <div className="absolute -top-4 -right-4 w-32 h-32 md:w-48 md:h-48 bg-gray-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 z-10"></div>
        </div>
        <div className="w-full lg:w-1/2 text-left">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white!">
            Apply to Exhibit at the Summit
          </h2>
          <p className="md:text-lg text-gray-300 mb-8">
            Position your brand at the epicenter of the 2026 International
            Investment Summit and Exhibition. As GTTI’s flagship event, this
            platform offers unparalleled access to commercial farmers,
            government stakeholders, and institutional investors ready to scale
            the livestock value chain. Whether you specialize in aquaculture
            technology or dairy logistics, showcase your innovations to the
            decision-makers transforming African agriculture.
          </p>
          <Button
            text="APPLY TO EXHIBIT"
            variant="primary"
            className="md:px-12! md:py-5!"
          />
        </div>
      </div>
    </section>
  );
};

export default ExhibitSection;
