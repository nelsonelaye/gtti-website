import React from "react";
import Button from "./UI/Button";

const Newsletter = () => {
  return (
    <section className="w-full px-5 py-16 md:py-20 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
          Stay in the Loop
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Get the latest updates on events, programs, and impact stories.
        </p>

        <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-6 py-4 rounded-full border border-gray-300 focus:outline-none focus:border-primary"
          />
          <Button
            text="Subscribe"
            variant="primary"
            className="md:px-8 md:py-4"
          />
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
