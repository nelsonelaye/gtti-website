import React from "react";
import Image from "next/image";
import { IoTrendingUpOutline } from "react-icons/io5";

const Slide4 = () => {
  const impactCards = [
    {
      image: "/images/coins.jpg",
      tag: "IMPACT",
      icon: IoTrendingUpOutline,
      title: "$74B - $94B Valuation",
      description:
        "Scaling the economic output through industrialization and modernized supply chains to reach full potential by 2030.",
    },
    {
      image: "/images/livestock.png",
      tag: "FOOD SECURITY",
      title: "Domestic Supply Scaling",
      description:
        "Aggressive scaling of domestic milk and meat production to significantly reduce import dependency.",
    },
    {
      image: "/images/field.jpg",
      tag: "STABILITY",
      title: "740 Model Feedlots",
      description:
        "Implementing advanced grazing models to modernize production and resolve land-use conflicts.",
    },
  ];

  return (
    <div className="w-full h-full p-6 md:p-12 lg:p-16">
      <div className="max-w-7xl mx-auto h-full flex flex-col justify-between">
        {/* Header Section */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-8">
          {/* Left Content */}
          <div>
            <p className="text-xs md:text-sm text-gray-500 uppercase tracking-wider mb-6">
              STRATEGIC VISION
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="text-primary">Goal 2030:</span>
              <br />
              <span className="text-primary">$94 Billion</span>
            </h1>
            <p className="text-base md:text-lg text-gray-700 mb-8 leading-relaxed">
              The National Livestock Growth Acceleration Strategy (NLGAS) aims
              to transition Nigeria&apos;s livestock sector from $32B to $94B
              through strategic investments and policy reform.
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
          <div className="space-y-4">
            {impactCards.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="grid md:grid-cols-5 gap-4">
                  {/* Image */}
                  <div className="relative h-48 md:h-full md:col-span-2">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover object-bottom"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 md:col-span-3 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs text-gray-500 uppercase tracking-wider">
                        {card.tag}
                      </span>
                      {card.icon && (
                        <card.icon className="w-4 h-4 text-primary" />
                      )}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-primary mb-3">
                      {card.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
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

export default Slide4;
