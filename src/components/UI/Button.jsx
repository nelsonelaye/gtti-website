import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const Button = ({ text, className, variant }) => {
  return (
    <button
      className={`text-xs md:text-sm flex items-center justify-center gap-2 px-4 md:px-6 py-4 md:py-3 text-primary uppercase font-asap font-semibold rounded border border-neutral hover:bg-primary hover:text-white hover:border-primary cursor-pointer transition-all duration-700  ${
        variant === "primary"
          ? "bg-secondary border-secondary"
          : "bg-transparent text-white"
      } ${className}`}
    >
      {text}

      {/* <GoArrowUpRight size="24px" /> */}
    </button>
  );
};

export default Button;
