import React from "react";
import Image from "next/image";
import { IoTrendingUpOutline } from "react-icons/io5";

const Slide5 = () => {
  const species = [
    {
      image: "/images/ticus.jpg",
      title: "Ticus",
    },
    {
      image: "/images/goat-closeup.jpg",
      title: "Goat",
    },
    {
      image: "/images/pigs.jpg",
      title: "Pigs",
    },
    {
      image: "/images/hens.jpeg",
      title: "Chicken",
    },
    {
      image: "/images/sp.jpg",
      title: "SP",
    },
    {
      image: "/images/snails.jpg",
      title: "Snails",
    },
  ];

  return (
    <div className="w-full h-full p-6 md:p-12 lg:p-16">
      <div className="max-w-7xl mx-auto h-full flex flex-col justify-between">
        {/* Header Section */}
        <div className="grid lg:grid-cols-2 gap-4 md:gap-8 lg:gap-12 mb-8">
          {/* Left Content */}
          <div>
            <p className="text-xs md:text-sm text-gray-500 uppercase tracking-wider mb-6">
              Species
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="text-primary">Culturable Fish Species</span>
              <br />
              {/* <span className="text-primary">$94 Billion</span> */}
            </h1>
            <p className="text-base md:text-lg text-gray-700 mb-8 leading-relaxed">
              Nigeria&apos;s aquatic ecosystem presents a staggering $1 Billion
              fish import gap. This deficit represents a massive opportunity for
              investors and local entrepreneurs to bridge the supply chain
              through industrial-scale local production. <br />
              By leveraging Nigeria&apos;s diverse freshwater and marine
              resources, the aquaculture sector is poised to become a primary
              driver of non-oil economic growth and food security. Investment
              Guide
            </p>

            {/* Navigation Buttons */}
            <div className="hidden gap-4">
              <button className="bg-primary text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Next: Strategy Pillars
              </button>
              <button className="bg-white text-primary border-2 border-gray-200 px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:border-primary transition-colors">
                Previous
              </button>
            </div>
          </div>

          {/* Right Content - Impact Cards */}
          <div className="flex gap-4 flex-wrap justify-center">
            {species.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-full w-[100px] h-[100px] md:w-[180px] md:h-[180px] overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative w-full h-full rounded-full">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="hidden items-center justify-between mt-6 pt-4 border-t border-gray-200">
          <div className="flex gap-1">
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={`h-1 w-8 rounded-full ${
                  i === 3 ? "bg-primary" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide5;
