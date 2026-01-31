import React from "react";
import Image from "next/image";
import { IoSnowOutline, IoWaterOutline, IoFishOutline } from "react-icons/io5";
import { PiTractorFill } from "react-icons/pi";
// import { GiTractor } from "react-icons/gi";

const Slide3 = () => {
  const opportunities = [
    {
      icon: IoSnowOutline,
      title: "Cold Chain Logistics",
      description:
        "Reducing post-harvest loss in livestock through integrated cooling solutions.",
      metric: "35% EFFICIENCY GAP",
      arrow: true,
    },
    {
      icon: PiTractorFill,
      title: "Feed Production",
      description:
        "Sourcing sustainable animal nutrition and local grain processing hubs.",
      metric: "HIGH DEMAND AREA",
      arrow: true,
    },
    {
      icon: IoWaterOutline,
      title: "Dairy Substitution",
      description:
        "Enhancing local milk processing plants and collection networks.",
      metric: "$1.5B MARKET GAP",
      arrow: true,
    },
    {
      icon: IoFishOutline,
      title: "Aquaculture Tech",
      description:
        "Smart farming for aquatic resources using IoT and sustainable feed.",
      metric: "DIGITAL FRONTIER",
      arrow: true,
    },
  ];

  return (
    <div className="w-full h-full  p-6 md:p-12 lg:p-16">
      <div className="max-w-7xl mx-auto h-full flex flex-col justify-between">
        {/* Header Section */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-8">
          {/* Left Content */}
          <div>
            {/* <p className="text-xs md:text-sm text-gray-400 uppercase tracking-wider mb-4 bg-gray-100 inline-block px-4 py-2 rounded-full">
              INVESTMENT STRATEGY
            </p> */}

            <p className="text-xs md:text-sm text-gray-500 uppercase tracking-wider mb-4">
              {/* ● SECTION 02 —  */}
              INVESTMENT STRATEGY
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-primary">Foundational</span>
              <br />
              <span className="text-secondary">Opportunities</span>
            </h1>

            {/* Hero Image */}
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-6">
              <Image
                src="/images/landscape.jpg"
                alt="Nigeria landscape"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-primary/90 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <p className="text-white text-base md:text-lg leading-relaxed">
                  Nigeria&apos;s vast biological resource base presents a
                  massive frontier for strategic investment across the value
                  chain.
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-base md:text-lg text-gray-700 mb-8 leading-relaxed">
              The current landscape addresses critical infrastructure gaps while
              increasing domestic production capacity. We are bridging the $10B
              annual investment deficit through targeted high-growth sectors.
            </p>

            {/* CTA Buttons */}
            <div className="hidden flex-col sm:flex-row gap-4">
              <button className="bg-primary text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
                Explore Investment Portal
                <span>→</span>
              </button>
              <button className="bg-white text-primary border-2 border-gray-200 px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:border-primary transition-colors">
                Download Prospectus
              </button>
            </div>
          </div>

          {/* Right Content - Opportunities Grid */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              High-Value Investment Areas
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {opportunities.map((opp, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors"
                >
                  <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                    <opp.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-primary mb-3">
                    {opp.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 mb-4 leading-relaxed">
                    {opp.description}
                  </p>
                  <div className="flex items-center gap-2 text-secondary font-semibold text-sm uppercase">
                    {opp.metric}
                    {opp.arrow && <span>↗</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="hidden items-center justify-between mt-6 pt-4 border-t border-gray-200 ">
          <div className="flex gap-1">
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={`h-1 w-8 rounded-full ${
                  i === 2 ? "bg-primary" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide3;
