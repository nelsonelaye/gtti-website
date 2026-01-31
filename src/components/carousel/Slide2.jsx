import React from "react";
import Image from "next/image";
import { GiChicken, GiGoat, GiSheep, GiCow } from "react-icons/gi";

const Slide2 = () => {
  const livestockStats = [
    {
      icon: GiChicken,
      number: "01",
      value: "425.7M",
      label: "POULTRY POPULATION",
    },
    {
      icon: GiGoat,
      number: "02",
      value: "99.8M",
      label: "GOAT HERD",
    },
    {
      icon: GiSheep,
      number: "03",
      value: "53.0M",
      label: "SHEEP POPULATION",
    },
    {
      icon: GiCow,
      number: "04",
      value: "22.3M",
      label: "CATTLE INVENTORY",
    },
  ];

  return (
    <div className="w-full h-full p-6 md:p-12 lg:p-16">
      <div className="max-w-7xl mx-auto h-full flex flex-col justify-between">
        {/* Header Section */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Content */}
          <div>
            <p className="text-xs md:text-sm text-gray-500 uppercase tracking-wider mb-4">
              {/* ● SECTION 02 —  */}
              FEEDING A NATION
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-primary">Securing Global</span>
              <br />
              {/* <span className="text-primary">Global</span> */}
              {/* <br /> */}
              <span className="text-secondary">Food Supply</span>
              {/* <br /> */}
              {/* <span className="text-secondary">Supply.</span> */}
            </h1>
            <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed">
              By 2050, the demand for animal-source foods in Nigeria is
              projected to increase by over 200%.
            </p>
            <p className="text-base md:text-lg text-gray-700 mb-8 leading-relaxed">
              As population grows, the role of livestock becomes critical not
              just for nutrition, but as a cornerstone of national economic
              stability and rural empowerment.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  2050
                </div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">
                  PROJECTION YEAR
                </div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  +200%
                </div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">
                  DEMAND GROWTH
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Livestock Cards */}
          <div className="grid grid-cols-2 h-fit gap-4">
            {livestockStats.map((stat, index) => (
              <div
                key={index}
                className="bg-primary rounded-2xl p-6 text-white hover:scale-105 transition-transform"
              >
                <div className="flex items-start justify-between mb-8">
                  <stat.icon className="w-8 h-8 text-secondary" />
                  <span className="text-xs text-gray-400">{stat.number}</span>
                </div>
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-3">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm font-semibold uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Economic Hubs Card */}
        <div className="mt-8 relative h-64 md:h-80 rounded-2xl overflow-hidden hidden">
          <Image
            src="/images/economic-hubs.jpg"
            alt="Economic Hubs"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-primary/80 to-transparent"></div>
          <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Economic Hubs
            </h3>
            <p className="text-sm md:text-base text-white/90 max-w-xl">
              Discover how local farmers are transforming the livestock value
              chain across all 36 states.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="hidden items-center justify-between mt-6 pt-4 border-t border-gray-200">
          <div className="flex gap-1">
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={`h-1 w-8 rounded-full ${
                  i === 1 ? "bg-primary" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide2;
