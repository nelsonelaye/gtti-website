import React from "react";
import Button from "./UI/Button";

const CtaSection = () => {
  return (
    <section className="w-full mx-auto px-5 py-20 md:py-28 bg-primary">
      <div className="mx-auto px-2 md:px-5 flex flex-col gap-4">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white!">
            Connect. Invest. Transform.
          </h2>
          <h3 className="text-lg md:text-4xl font-bold mb-8 text-white!">
            International Livestock & Aquaculture Summit 2026
          </h3>
          <p className="md:text-lg mb-8 max-w-2xl mx-auto text-white!">
            Experience a world-class gathering of industry leaders and
            innovators. Gain exclusive market insights, explore cutting-edge
            exhibitions, and bridge the gap between traditional farming and
            future-forward investment
          </p>
          <div className="flex justify-center items-center">
            <Button
              text="Register for Event"
              variant="primary"
              className="md:px-12 md:py-5 text-sm font-semibold tracking-wider mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
