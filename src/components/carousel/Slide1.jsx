import React from "react";
import {
  IoTrendingUp,
  IoBusinessOutline,
  IoStatsChartOutline,
} from "react-icons/io5";
import { RiBankLine } from "react-icons/ri";
import { FaMoneyBills } from "react-icons/fa6";

const Slide1 = () => {
  const stats = [
    {
      icon: FaMoneyBills,
      value: "$285B",
      label: "GDP",
      change: "+3.4% YoY",
      positive: true,
    },
    {
      icon: RiBankLine,
      value: "$2.25T",
      label: "Market Cap",
      change: "+4.2% YoY",
      positive: true,
    },
    {
      icon: IoTrendingUp,
      value: "3.9%",
      label: "Growth",
      change: "Projected",
      positive: true,
    },
  ];

  return (
    <div className="w-full h-full p-6 md:p-12 lg:p-16">
      <div className="max-w-7xl mx-auto h-full flex flex-col ">
        {/* Header */}
        <div>
          <p className="text-xs md:text-sm text-gray-500 uppercase tracking-wider mb-4">
            → MACRO ECONOMIC OUTLOOK
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-primary mb-6 md:mb-8 leading-tight">
            Nigeria: Africa&apos;s
            <br />
            Economic Giant
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-700 max-w-xl mb-8 md:mb-12 leading-relaxed">
            Nigeria is a middle-income economy with a population of over 223.5
            million, positioning it as a major player in Africa&apos;s
            development and a primary hub for agricultural investment and
            sustainable growth.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mt-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <stat.icon className="w-6 h-6 text-primary" />
                <span className="text-xs text-gray-400">0{index + 1}</span>
              </div>
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-gray-600 mb-2">
                {stat.label}
              </div>
              <div
                className={`text-xs ${
                  stat.positive ? "text-green-600" : "text-gray-500"
                } flex items-center gap-1`}
              >
                {stat.positive && "↑"} {stat.change}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className=" items-center justify-between mt-8 pt-6 border-t border-gray-200 hidden">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-primary">
              SECTION 1 OF 5
            </span>
            <div className="flex gap-1">
              {[0, 1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className={`h-1 w-8 rounded-full ${
                    i === 0 ? "bg-primary" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
          <p className="text-xs text-gray-500 hidden md:block">
            Explore the economic landscape of Nigeria
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slide1;
